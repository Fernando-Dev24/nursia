import {
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db, isFirebaseConfigured } from './firebase'

export const RANKING_COLLECTION = 'ranking'
export const RANKING_TIMEOUT_MS = 12000
export const RANKING_TOP_SIZE = 50

const ERROR_MESSAGES = {
  'config-missing':
    'Firebase no está configurado: faltan claves VITE_FIREBASE_* en el archivo .env. Revisa la configuración e intenta de nuevo.',
  'invalid-api-key':
    'La clave de API de Firebase no es válida. Revisa el archivo .env.',
  'permission-denied':
    'Firestore no permitió guardar el puntaje (permisos denegados). Revisa las reglas de seguridad de la colección "ranking".',
  unauthenticated: 'No autorizado para guardar el puntaje. Intenta de nuevo.',
  unavailable:
    'No se pudo conectar con Firebase. Verifica tu conexión a internet e intenta de nuevo.',
  'deadline-exceeded':
    'Firebase tardó demasiado en responder. Intenta de nuevo.',
  timeout: 'La operación tardó demasiado y se canceló. Intenta de nuevo.',
  'invalid-argument':
    'Los datos enviados no son válidos. Revisa tu nombre y correo.',
  'failed-precondition':
    'La operación no pudo completarse en este momento. Intenta de nuevo.',
  'resource-exhausted':
    'Se superó el límite de peticiones. Intenta de nuevo en unos minutos.',
  aborted:
    'La operación se interrumpió por un conflicto. Intenta de nuevo.',
  internal: 'Error interno de Firebase. Intenta de nuevo.',
  'not-found':
    'No se encontró el recurso en Firestore. Revisa la colección "ranking".',
}

const GENERIC_ERROR_MESSAGE =
  'Ocurrió un error inesperado al guardar tu puntaje. Intenta de nuevo.'

/** Devuelve el correo en minúsculas y sin espacios: será el ID del documento. */
export function normalizeEmail(email) {
  return String(email ?? '')
    .trim()
    .toLowerCase()
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Valida nombre y correo antes de guardar.
 * Devuelve un objeto tipo { name?: string, email?: string } sin claves si todo
 * está bien.
 */
export function validateIdentity({ name, email }) {
  const errors = {}
  const cleanName = String(name ?? '').trim()
  const cleanEmail = normalizeEmail(email)

  if (!cleanName) {
    errors.name = 'Ingresa tu nombre.'
  } else if (cleanName.length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres.'
  } else if (cleanName.length > 60) {
    errors.name = 'El nombre es demasiado largo (máx. 60).'
  }

  if (!cleanEmail) {
    errors.email = 'Ingresa tu correo.'
  } else if (!EMAIL_RE.test(cleanEmail)) {
    errors.email = 'El correo no tiene un formato válido.'
  } else if (cleanEmail.length > 120) {
    errors.email = 'El correo es demasiado largo.'
  }

  return errors
}

/** Traduce cualquier error de Firestore/red a un mensaje amigable para la UI. */
export function getRankingErrorMessage(error) {
  const code = error?.code
  if (code && ERROR_MESSAGES[code]) return ERROR_MESSAGES[code]
  return GENERIC_ERROR_MESSAGE
}

function withTimeout(promise, ms = RANKING_TIMEOUT_MS) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const error = new Error('La operación excedió el tiempo de espera')
      error.code = 'timeout'
      reject(error)
    }, ms)

    promise.then(
      (value) => {
        clearTimeout(timer)
        resolve(value)
      },
      (error) => {
        clearTimeout(timer)
        reject(error)
      },
    )
  })
}

/**
 * Guarda (o actualiza) el puntaje en la colección "ranking".
 * El ID del documento es el correo normalizado: evita duplicados por diseño.
 *
 * Éxito → resuelve con { status, message, previousScore? }:
 *  - 'created' → primer puntaje de ese correo
 *  - 'updated' → mejoró su puntaje anterior
 *  - 'kept'    → ya tenía un puntaje igual o mayor (se conserva el récord)
 *
 * Error → Lanza excepción con `code` (interpretar con getRankingErrorMessage);
 * si falló la validación, el error también incluye `formErrors`.
 */
export async function saveRanking({ name, email, score, totalQuestions, livesLeft }) {
  const formErrors = validateIdentity({ name, email })
  if (Object.keys(formErrors).length > 0) {
    const error = new Error('Formulario inválido')
    error.code = 'invalid-argument'
    error.formErrors = formErrors
    throw error
  }

  if (!isFirebaseConfigured || !db) {
    const error = new Error('Firebase no está configurado')
    error.code = 'config-missing'
    throw error
  }

  const emailId = normalizeEmail(email)
  const rankingRef = doc(db, RANKING_COLLECTION, emailId)

  let previousScore = null
  let exists = false

  try {
    const snapshot = await withTimeout(getDoc(rankingRef))
    if (snapshot.exists()) {
      exists = true
      const data = snapshot.data()
      previousScore = typeof data?.score === 'number' ? data.score : null
    }
  } catch (error) {
    // Un documento inexistente no es error: significa el primer puntaje.
    if (error?.code !== 'not-found') throw error
  }

  // Nunca degrada un récord: si ya tiene igual o mejor puntaje, se conserva.
  if (exists && previousScore !== null && previousScore >= score) {
    return {
      status: 'kept',
      previousScore,
      message: `Ya tenías un puntaje de ${previousScore} puntos en el ranking, así que se conservó tu récord. En esta partida obtuviste ${score} puntos.`,
    }
  }

  const payload = {
    name: String(name).trim(),
    email: emailId,
    score,
    totalQuestions,
    livesLeft,
    updatedAt: serverTimestamp(),
    // merge: true conserva createdAt si el documento ya existía.
    ...(exists ? {} : { createdAt: serverTimestamp() }),
  }

  await withTimeout(setDoc(rankingRef, payload, { merge: true }))

  if (exists) {
    return {
      status: 'updated',
      previousScore,
      message: `¡Puntaje actualizado! Mejoraste de ${previousScore} a ${score} puntos.`,
    }
  }

  return {
    status: 'created',
    message: `¡Puntaje guardado! Quedaste en el ranking con ${score} puntos.`,
  }
}

/** Convierte Timestamp | Date | number | string a milisegundos (0 si falta). */
function toMillis(value) {
  if (!value) return 0
  if (typeof value.toMillis === 'function') return value.toMillis()
  if (value instanceof Date) return value.getTime()
  const parsed = Date.parse(value)
  return Number.isNaN(parsed) ? 0 : parsed
}

/**
 * Consulta el ranking histórico completo y devuelve:
 *  - top: los primeros RANKING_TOP_SIZE (50) jugadores con mejor score,
 *    desempatados por el timestamp de registro (más antiguo primero);
 *  - total: cantidad total de registros;
 *  - position / player: lugar (1-based) y datos del jugador cuyo correo se
 *    proporcionó, o null si no existe / no se consultó.
 *
 * Orden: score desc → createdAt asc → email asc (estable).
 * Error → Lanza excepción con `code` (interpretar con getRankingErrorMessage).
 */
export async function getRankings({ email } = {}) {
  if (!isFirebaseConfigured || !db) {
    const error = new Error('Firebase no está configurado')
    error.code = 'config-missing'
    throw error
  }

  const snapshot = await withTimeout(getDocs(collection(db, RANKING_COLLECTION)))

  const entries = snapshot.docs.map((docSnap) => {
    const data = docSnap.data() ?? {}
    return {
      email: normalizeEmail(data.email || docSnap.id),
      name: String(data.name ?? '').trim(),
      score: typeof data.score === 'number' ? data.score : 0,
      totalQuestions: data.totalQuestions ?? null,
      livesLeft: data.livesLeft ?? null,
      createdAt: toMillis(data.createdAt),
      updatedAt: toMillis(data.updatedAt),
    }
  })

  entries.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    if (a.createdAt !== b.createdAt) return a.createdAt - b.createdAt
    return a.email.localeCompare(b.email)
  })

  const top = entries.slice(0, RANKING_TOP_SIZE).map((entry, index) => ({
    ...entry,
    position: index + 1,
  }))

  const normalizedEmail = normalizeEmail(email)
  let position = null
  let player = null

  if (normalizedEmail) {
    const index = entries.findIndex((entry) => entry.email === normalizedEmail)
    if (index !== -1) {
      position = index + 1
      player = { ...entries[index], position }
    }
  }

  return {
    top,
    total: entries.length,
    position,
    player,
    email: normalizedEmail || null,
  }
}
