// Archivo generado automaticamente.
// 150 preguntas generales de emergencia ("normal") + 150 casos clinics ("clinic").
// Cada pregunta tiene una categoria (tema) y una dificultad: "easy" | "medium" | "hard".

export type Difficulty = "easy" | "medium" | "hard";
export type QuestionType = "normal" | "clinic";

export interface Question {
  id: number;
  type: QuestionType;
  category: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "easy",
    question:
      "¿Cuál es el primer paso al encontrar a una persona inconsciente?",
    options: [
      "Verificar si responde y si respira",
      "Darle agua inmediatamente",
      "Moverla a otro lugar",
      "Llamar a un familiar",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "easy",
    question:
      "¿A qué número se debe llamar en una emergencia médica en El Salvador?",
    options: ["911", "123", "100", "108"],
    correctAnswer: 0,
  },
  {
    id: 3,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "easy",
    question: "¿Qué significa RCP?",
    options: [
      "Reanimación cardiopulmonar",
      "Registro clínico del paciente",
      "Respuesta de cuidado prioritario",
      "Reacción cardiaca prolongada",
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "easy",
    question:
      "¿En qué parte del pecho se colocan las manos para dar compresiones?",
    options: [
      "En el centro del pecho, sobre el esternón",
      "En el lado izquierdo, sobre las costillas",
      "En el abdomen",
      "En la clavícula",
    ],
    correctAnswer: 0,
  },
  {
    id: 5,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "easy",
    question: "¿Qué se debe hacer antes de iniciar RCP a un adulto?",
    options: [
      "Confirmar que no respira o respira de forma anormal",
      "Darle de beber agua",
      "Esperar 10 minutos",
      "Sentarlo en una silla",
    ],
    correctAnswer: 0,
  },
  {
    id: 6,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "medium",
    question:
      "¿Cuál es la profundidad recomendada de las compresiones torácicas en un adulto?",
    options: [
      "Alrededor de 5 a 6 cm",
      "1 cm",
      "10 cm",
      "No importa la profundidad",
    ],
    correctAnswer: 0,
  },
  {
    id: 7,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "medium",
    question:
      "¿Cuál es la frecuencia recomendada de compresiones por minuto en RCP de adultos?",
    options: [
      "100 a 120 por minuto",
      "40 a 50 por minuto",
      "150 a 160 por minuto",
      "20 a 30 por minuto",
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "medium",
    question:
      "¿Cuál es la relación compresión-ventilación recomendada en RCP de un solo reanimador en adultos?",
    options: [
      "30 compresiones por 2 ventilaciones",
      "10 compresiones por 5 ventilaciones",
      "5 compresiones por 1 ventilación",
      "50 compresiones por 10 ventilaciones",
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "medium",
    question: "¿Qué es un DEA?",
    options: [
      "Un desfibrilador externo automático",
      "Un dispositivo de evaluación abdominal",
      "Un equipo de administración de emergencias",
      "Un tipo de suero",
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "medium",
    question:
      "¿Qué se debe hacer si un DEA está disponible cerca de una persona en paro cardiaco?",
    options: [
      "Usarlo lo antes posible siguiendo sus instrucciones de voz",
      "Guardarlo para el personal médico únicamente",
      "Usarlo solo si la persona está consciente",
      "No usarlo nunca sin entrenamiento previo",
    ],
    correctAnswer: 0,
  },
  {
    id: 11,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "hard",
    question:
      "En RCP pediátrico con dos reanimadores, ¿cuál es la relación compresión-ventilación recomendada?",
    options: [
      "15 compresiones por 2 ventilaciones",
      "30 compresiones por 2 ventilaciones",
      "5 compresiones por 1 ventilación",
      "10 compresiones por 5 ventilaciones",
    ],
    correctAnswer: 0,
  },
  {
    id: 12,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "hard",
    question:
      "¿Cuál es la causa más común de que las compresiones torácicas sean inefectivas?",
    options: [
      "No permitir la expansión completa del tórax entre compresiones",
      "Comprimir demasiado rápido",
      "Usar ambas manos",
      "Colocar al paciente boca arriba",
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "hard",
    question:
      "¿Qué ritmo cardiaco es 'desfibrilable' y puede tratarse con un DEA?",
    options: [
      "Fibrilación ventricular",
      "Asistolia",
      "Bradicardia sinusal",
      "Ritmo sinusal normal",
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "hard",
    question:
      "¿Qué se debe hacer si, al usar el DEA, este indica 'no administrar descarga'?",
    options: [
      "Continuar con RCP inmediatamente",
      "Aplicar la descarga de todas formas",
      "Retirar los electrodos y esperar",
      "Trasladar al paciente sin más acciones",
    ],
    correctAnswer: 0,
  },
  {
    id: 15,
    type: "normal",
    category: "RCP y soporte vital basico",
    difficulty: "hard",
    question:
      "¿Cuánto tiempo sin oxígeno puede comenzar a producir daño cerebral irreversible?",
    options: [
      "Aproximadamente 4 a 6 minutos",
      "30 segundos",
      "30 minutos",
      "2 horas",
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "easy",
    question: "¿Cuál es la primera acción ante una hemorragia externa visible?",
    options: [
      "Aplicar presión directa sobre la herida",
      "Aplicar hielo directamente sobre la piel",
      "Dar un analgésico",
      "Lavar la herida con alcohol",
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "easy",
    question:
      "¿Con qué se debe presionar una herida que sangra si no hay gasas disponibles?",
    options: [
      "Con un paño limpio o tela disponible",
      "Con las manos sucias",
      "Con papel higiénico usado",
      "No se debe presionar",
    ],
    correctAnswer: 0,
  },
  {
    id: 18,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "easy",
    question: "¿Qué indica que una hemorragia es arterial?",
    options: [
      "Sangre roja brillante que sale a chorros o pulsante",
      "Sangre oscura que sale lentamente",
      "Sangre que no sale al presionar",
      "Ausencia de sangrado visible",
    ],
    correctAnswer: 0,
  },
  {
    id: 19,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "easy",
    question:
      "¿Qué se debe hacer con una extremidad que sangra mientras se aplica presión?",
    options: [
      "Elevarla por encima del nivel del corazón si es posible",
      "Bajarla lo más posible",
      "Moverla constantemente",
      "Aplicar calor directo",
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "easy",
    question:
      "¿Qué tipo de guantes se recomienda usar al atender una hemorragia?",
    options: [
      "Guantes desechables (barrera de bioseguridad)",
      "No usar guantes nunca",
      "Guantes de cocina",
      "Cualquier tela sobre la mano",
    ],
    correctAnswer: 0,
  },
  {
    id: 21,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "medium",
    question: "¿Cuándo se justifica el uso de un torniquete?",
    options: [
      "Cuando la hemorragia es severa y la presión directa no la controla",
      "En cualquier corte pequeño",
      "Solo en heridas de cabeza",
      "Nunca debe usarse fuera de un hospital",
    ],
    correctAnswer: 0,
  },
  {
    id: 22,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "medium",
    question:
      "Al colocar un torniquete, ¿qué información es importante anotar?",
    options: [
      "La hora exacta en que se colocó",
      "El nombre del paciente en la piel",
      "El tipo de sangre del paciente",
      "El peso del paciente",
    ],
    correctAnswer: 0,
  },
  {
    id: 23,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "medium",
    question:
      "¿Qué signo puede indicar shock hipovolémico por pérdida de sangre?",
    options: [
      "Piel pálida, sudorosa y pulso rápido y débil",
      "Piel enrojecida y pulso lento",
      "Fiebre alta sostenida",
      "Aumento del apetito",
    ],
    correctAnswer: 0,
  },
  {
    id: 24,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "medium",
    question: "¿Qué se debe evitar al tratar una hemorragia nasal (epistaxis)?",
    options: [
      "Inclinar la cabeza hacia atrás",
      "Inclinar la cabeza ligeramente hacia adelante",
      "Presionar las fosas nasales",
      "Mantener a la persona sentada",
    ],
    correctAnswer: 0,
  },
  {
    id: 25,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "medium",
    question:
      "Si la sangre empapa el primer apósito colocado sobre una herida, ¿qué se debe hacer?",
    options: [
      "Colocar otro apósito encima sin retirar el primero",
      "Retirar el apósito y limpiarlo",
      "Dejar de presionar",
      "Cambiar de herida a tratar",
    ],
    correctAnswer: 0,
  },
  {
    id: 26,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "hard",
    question:
      "¿Qué complicación puede generar un torniquete colocado por más de 2 horas sin atención médica?",
    options: [
      "Daño isquémico y necrosis del tejido",
      "Ninguna, se puede dejar indefinidamente",
      "Mejora la circulación local",
      "Baja la presión arterial general",
    ],
    correctAnswer: 0,
  },
  {
    id: 27,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "hard",
    question:
      "¿Cuál es el signo más temprano y sensible de shock hemorrágico en un adulto joven, antes de que baje la presión arterial?",
    options: [
      "Taquicardia (aumento de la frecuencia cardiaca)",
      "Hipotensión marcada",
      "Fiebre",
      "Bradicardia",
    ],
    correctAnswer: 0,
  },
  {
    id: 28,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "hard",
    question:
      "¿Qué se recomienda hacer si un objeto grande está incrustado en una herida sangrante?",
    options: [
      "No retirarlo y estabilizarlo, presionando alrededor",
      "Retirarlo de inmediato",
      "Empujarlo más adentro",
      "Cubrirlo con hielo directo",
    ],
    correctAnswer: 0,
  },
  {
    id: 29,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "hard",
    question:
      "En hemorragias internas sospechadas (ej. tras trauma abdominal), ¿cuál es la conducta inicial correcta?",
    options: [
      "Mantener a la persona en reposo y trasladarla urgentemente",
      "Darle líquidos por vía oral en abundancia",
      "Aplicar masajes en el abdomen",
      "Esperar a que los síntomas desaparezcan",
    ],
    correctAnswer: 0,
  },
  {
    id: 30,
    type: "normal",
    category: "Manejo de hemorragias",
    difficulty: "hard",
    question:
      "¿Por qué se debe rotar o aflojar periódicamente un torniquete según protocolos antiguos, y por qué ya no se recomienda esta práctica?",
    options: [
      "Porque puede causar liberación súbita de toxinas y empeorar el shock",
      "Porque mejora la cicatrización",
      "Porque evita infecciones",
      "Porque reduce el dolor",
    ],
    correctAnswer: 0,
  },
  {
    id: 31,
    type: "normal",
    category: "Quemaduras",
    difficulty: "easy",
    question: "¿Qué se debe hacer primero ante una quemadura leve por calor?",
    options: [
      "Enfriar la zona con agua corriente tibia/fría durante varios minutos",
      "Aplicar hielo directamente",
      "Reventar las ampollas",
      "Aplicar mantequilla o pasta dental",
    ],
    correctAnswer: 0,
  },
  {
    id: 32,
    type: "normal",
    category: "Quemaduras",
    difficulty: "easy",
    question: "¿Qué caracteriza a una quemadura de primer grado?",
    options: [
      "Enrojecimiento y dolor sin ampollas",
      "Ampollas y piel carbonizada",
      "Ausencia total de dolor",
      "Piel de color blanco perlado",
    ],
    correctAnswer: 0,
  },
  {
    id: 33,
    type: "normal",
    category: "Quemaduras",
    difficulty: "easy",
    question: "¿Qué NO se debe aplicar sobre una quemadura?",
    options: [
      "Remediums caseros como pasta dental, mantequilla o aceite",
      "Agua corriente limpia",
      "Un apósito limpio y seco",
      "Gasa no adherente",
    ],
    correctAnswer: 0,
  },
  {
    id: 34,
    type: "normal",
    category: "Quemaduras",
    difficulty: "easy",
    question: "¿Qué se debe hacer con la ropa que está pegada a una quemadura?",
    options: [
      "No retirarla, dejar que personal médico la maneje",
      "Arrancarla rápidamente",
      "Cortarla y jalarla con fuerza",
      "Mojarla con alcohol",
    ],
    correctAnswer: 0,
  },
  {
    id: 35,
    type: "normal",
    category: "Quemaduras",
    difficulty: "easy",
    question:
      "¿Qué tipo de quemadura afecta solo la capa más superficial de la piel?",
    options: [
      "Primer grado",
      "Segundo grado profundo",
      "Tercer grado",
      "Cuarto grado",
    ],
    correctAnswer: 0,
  },
  {
    id: 36,
    type: "normal",
    category: "Quemaduras",
    difficulty: "medium",
    question: "¿Qué caracteriza a una quemadura de segundo grado?",
    options: [
      "Ampollas, dolor intenso y piel enrojecida o húmeda",
      "Piel completamente insensible y carbonizada",
      "Solo enrojecimiento leve sin dolor",
      "Ausencia de cualquier lesión visible",
    ],
    correctAnswer: 0,
  },
  {
    id: 37,
    type: "normal",
    category: "Quemaduras",
    difficulty: "medium",
    question:
      "¿Por qué una quemadura de tercer grado puede doler menos que una de segundo grado?",
    options: [
      "Porque destruye las terminaciones nerviosas de la piel",
      "Porque es más superficial",
      "Porque no afecta tejido",
      "Porque siempre es más pequeña",
    ],
    correctAnswer: 0,
  },
  {
    id: 38,
    type: "normal",
    category: "Quemaduras",
    difficulty: "medium",
    question: "¿Qué se debe hacer con quemaduras químicas en la piel?",
    options: [
      "Retirar la sustancia y lavar abundantemente con agua",
      "Neutralizar con otro químico casero",
      "Cubrir sin lavar",
      "Aplicar hielo directamente",
    ],
    correctAnswer: 0,
  },
  {
    id: 39,
    type: "normal",
    category: "Quemaduras",
    difficulty: "medium",
    question: "¿Cuál es una prioridad al atender una quemadura eléctrica?",
    options: [
      "Verificar que la fuente eléctrica esté desconectada antes de tocar al paciente",
      "Tocar a la persona inmediatamente para ayudarla",
      "Aplicar agua sobre la fuente eléctrica",
      "Ignorar el riesgo eléctrico",
    ],
    correctAnswer: 0,
  },
  {
    id: 40,
    type: "normal",
    category: "Quemaduras",
    difficulty: "medium",
    question:
      "¿Qué zonas quemadas se consideran de mayor riesgo y requieren traslado inmediato?",
    options: [
      "Cara, manos, pies, genitales y articulaciones",
      "Solo los brazos",
      "Solo la espalda",
      "Ninguna zona es más prioritaria que otra",
    ],
    correctAnswer: 0,
  },
  {
    id: 41,
    type: "normal",
    category: "Quemaduras",
    difficulty: "hard",
    question:
      "¿Qué regla se usa comúnmente para estimar el porcentaje de superficie corporal quemada en adultos?",
    options: [
      "La regla de los nueves",
      "La regla de los cincos",
      "La escala de Glasgow",
      "El índice de Ranson",
    ],
    correctAnswer: 0,
  },
  {
    id: 42,
    type: "normal",
    category: "Quemaduras",
    difficulty: "hard",
    question:
      "¿Por qué las quemaduras circunferenciales en una extremidad son especialmente peligrosas?",
    options: [
      "Pueden comprometer la circulación por efecto de torniquete al inflamarse el tejido",
      "Porque siempre son de primer grado",
      "Porque no requieren atención médica",
      "Porque sanan más rápido",
    ],
    correctAnswer: 0,
  },
  {
    id: 43,
    type: "normal",
    category: "Quemaduras",
    difficulty: "hard",
    question:
      "¿Qué riesgo sistémico grave puede presentar un paciente con quemaduras extensas en las primeras horas?",
    options: [
      "Shock hipovolémico por pérdida de líquidos",
      "Hipertensión crónica",
      "Diabetes tipo 1 aguda",
      "Anemia falciforme",
    ],
    correctAnswer: 0,
  },
  {
    id: 44,
    type: "normal",
    category: "Quemaduras",
    difficulty: "hard",
    question:
      "En quemaduras por inhalación de humo, ¿qué signo de alarma sugiere compromiso de la vía aérea?",
    options: [
      "Hollín alrededor de nariz/boca, voz ronca o estridor",
      "Piel fría y pálida",
      "Aumento del apetito",
      "Dolor articular",
    ],
    correctAnswer: 0,
  },
  {
    id: 45,
    type: "normal",
    category: "Quemaduras",
    difficulty: "hard",
    question:
      "¿Cuál es la conducta correcta ante una quemadura de tercer grado extensa antes del traslado?",
    options: [
      "Cubrir con apósito estéril seco, sin romper ampollas ni aplicar cremas",
      "Sumergir la zona en agua helada por tiempo prolongado",
      "Aplicar hielo directamente sobre la piel",
      "Aplicar ungüento con antibiótico de inmediato",
    ],
    correctAnswer: 0,
  },
  {
    id: 46,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "easy",
    question: "¿Qué es una fractura?",
    options: [
      "La rotura total o parcial de un hueso",
      "Una torcedura leve de un músculo",
      "Un tipo de quemadura",
      "Una infección de la piel",
    ],
    correctAnswer: 0,
  },
  {
    id: 47,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "easy",
    question:
      "¿Qué se debe hacer ante la sospecha de una fractura en un brazo?",
    options: [
      "Inmovilizar la zona sin intentar acomodar el hueso",
      "Mover el brazo para ver si duele",
      "Aplicar calor directo",
      "Ignorarlo si no hay sangrado",
    ],
    correctAnswer: 0,
  },
  {
    id: 48,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "easy",
    question: "¿Cuál es un signo común de una fractura?",
    options: [
      "Dolor intenso, hinchazón y deformidad visible",
      "Piel de color normal sin molestias",
      "Aumento del apetito",
      "Fiebre alta",
    ],
    correctAnswer: 0,
  },
  {
    id: 49,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "easy",
    question: "¿Con qué se puede improvisar una férula en una emergencia?",
    options: [
      "Con un objeto rígido y vendas o tela para sujetarlo",
      "Con hielo directamente sobre el hueso",
      "Con agua caliente",
      "No es posible improvisar una férula",
    ],
    correctAnswer: 0,
  },
  {
    id: 50,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "easy",
    question:
      "¿Qué se debe hacer si la fractura es abierta (el hueso sale a través de la piel)?",
    options: [
      "Cubrir la herida sin presionar el hueso y buscar ayuda urgente",
      "Empujar el hueso de vuelta hacia adentro",
      "Lavar el hueso con jabón fuerte",
      "Aplicar vendaje muy apretado sobre el hueso expuesto",
    ],
    correctAnswer: 0,
  },
  {
    id: 51,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "medium",
    question:
      "¿Por qué es importante inmovilizar las articulaciones por encima y por debajo de una fractura?",
    options: [
      "Para evitar el movimiento del hueso afectado y prevenir más daño",
      "Porque así se ve mejor",
      "Para que la persona no sienta la fractura",
      "No es necesario, basta con inmovilizar el hueso",
    ],
    correctAnswer: 0,
  },
  {
    id: 52,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "medium",
    question:
      "¿Qué se debe verificar después de inmovilizar una extremidad con una férula?",
    options: [
      "La circulación, sensibilidad y movimiento de los dedos",
      "El color de la ropa",
      "La temperatura ambiente",
      "El apetito del paciente",
    ],
    correctAnswer: 0,
  },
  {
    id: 53,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "medium",
    question: "¿Qué indica que una férula está demasiado apretada?",
    options: [
      "Dedos fríos, pálidos o con hormigueo",
      "El paciente se siente cómodo",
      "No hay ningún cambio",
      "El pulso se siente más fuerte",
    ],
    correctAnswer: 0,
  },
  {
    id: 54,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "medium",
    question:
      "Ante una posible fractura de columna vertebral, ¿cuál es la conducta más importante?",
    options: [
      "Evitar mover al paciente y esperar personal especializado",
      "Sentarlo inmediatamente",
      "Hacerlo caminar para evaluar el dolor",
      "Girarlo boca abajo",
    ],
    correctAnswer: 0,
  },
  {
    id: 55,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "medium",
    question:
      "¿Qué diferencia hay entre un esguince y una fractura en cuanto al manejo inicial?",
    options: [
      "El manejo inicial (RICE: reposo, hielo, compresión, elevación) es similar, pero la fractura requiere inmovilización rígida y evaluación médica",
      "El esguince siempre requiere cirugía",
      "La fractura no necesita atención médica",
      "No hay ninguna diferencia en el manejo",
    ],
    correctAnswer: 0,
  },
  {
    id: 56,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "hard",
    question:
      "¿Qué es una fractura expuesta y por qué representa mayor riesgo?",
    options: [
      "Es cuando el hueso perfora la piel, con alto riesgo de infección y hemorragia",
      "Es una fractura sin ningún síntoma",
      "Es una fractura que sana sola sin tratamiento",
      "Es sinónimo de esguince leve",
    ],
    correctAnswer: 0,
  },
  {
    id: 57,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "hard",
    question:
      "¿Qué complicación grave puede presentarse tras una fractura de fémur no tratada a tiempo?",
    options: [
      "Embolia grasa o hemorragia interna significativa",
      "Mejora espontánea sin secuelas",
      "Aumento de la estatura",
      "Ninguna complicación relevante",
    ],
    correctAnswer: 0,
  },
  {
    id: 58,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "hard",
    question: "¿Qué es el síndrome compartimental y por qué es una urgencia?",
    options: [
      "Aumento de presión en un compartimento muscular que compromete la circulación y nervios",
      "Un tipo leve de moretón",
      "Una reacción alérgica cutánea",
      "Un tipo de fractura curada",
    ],
    correctAnswer: 0,
  },
  {
    id: 59,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "hard",
    question:
      "En un paciente politraumatizado con múltiples fracturas, ¿cuál es la prioridad antes de inmovilizar las extremidades?",
    options: [
      "Evaluar y estabilizar la vía aérea, respiración y circulación (ABC)",
      "Inmovilizar todas las fracturas antes que cualquier otra cosa",
      "Preguntar el nombre completo del paciente",
      "Retirar toda la ropa del paciente",
    ],
    correctAnswer: 0,
  },
  {
    id: 60,
    type: "normal",
    category: "Fracturas e inmovilizacion",
    difficulty: "hard",
    question:
      "¿Por qué no se debe intentar realinear (acomodar) una fractura en el sitio del accidente sin entrenamiento?",
    options: [
      "Porque puede dañar vasos sanguíneos, nervios o convertir una fractura cerrada en abierta",
      "Porque no duele hacerlo",
      "Porque siempre mejora la circulación",
      "Porque acelera la curación del hueso",
    ],
    correctAnswer: 0,
  },
  {
    id: 61,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "easy",
    question:
      "¿Qué señal indica que una persona se está atragantando gravemente?",
    options: [
      "Se lleva las manos al cuello y no puede hablar ni toser",
      "Habla con voz normal",
      "Tose con fuerza y respira bien",
      "Sonríe y camina tranquilamente",
    ],
    correctAnswer: 0,
  },
  {
    id: 62,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "easy",
    question:
      "¿Qué se debe hacer si una persona puede toser con fuerza mientras se atraganta?",
    options: [
      "Animarla a seguir tosiendo, sin intervenir físicamente aún",
      "Aplicar la maniobra de Heimlich de inmediato",
      "Darle golpes fuertes en la espalda sin razón",
      "Darle agua para que trague mejor",
    ],
    correctAnswer: 0,
  },
  {
    id: 63,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "easy",
    question: "¿En qué consiste básicamente la maniobra de Heimlich?",
    options: [
      "Compresiones abdominales para expulsar el objeto de la vía aérea",
      "Golpes en la cabeza",
      "Estirar los brazos de la persona",
      "Darle de beber líquidos calientes",
    ],
    correctAnswer: 0,
  },
  {
    id: 64,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "easy",
    question:
      "¿Qué se debe hacer primero si sospechas que alguien se atraganta?",
    options: [
      "Preguntarle '¿te estás atragantando?' para confirmar",
      "Empezar a darle golpes sin preguntar",
      "Llamar a la familia antes que a emergencias",
      "Ignorarlo si sigue de pie",
    ],
    correctAnswer: 0,
  },
  {
    id: 65,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "easy",
    question:
      "¿Dónde se colocan las manos al hacer la maniobra de Heimlich en un adulto?",
    options: [
      "Encima del ombligo y debajo del esternón",
      "En el pecho",
      "En la espalda baja",
      "En el cuello",
    ],
    correctAnswer: 0,
  },
  {
    id: 66,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "medium",
    question:
      "¿Qué se debe hacer si la persona atragantada pierde el conocimiento?",
    options: [
      "Bajarla al piso con cuidado e iniciar RCP",
      "Seguir aplicando compresiones abdominales de pie",
      "Dejarla sola y buscar ayuda sin volver",
      "Darle agua a la fuerza",
    ],
    correctAnswer: 0,
  },
  {
    id: 67,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "medium",
    question:
      "En un lactante (menor de 1 año) que se atraganta, ¿qué maniobra se recomienda en lugar del Heimlich abdominal?",
    options: [
      "Golpes en la espalda y compresiones torácicas alternadas",
      "Compresiones abdominales igual que en un adulto",
      "Sacudirlo con fuerza por los pies",
      "Darle agua para que pase el objeto",
    ],
    correctAnswer: 0,
  },
  {
    id: 68,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "medium",
    question:
      "¿Qué se debe hacer si estás solo/a y te atragantas sin poder hablar?",
    options: [
      "Aplicarte compresiones abdominales contra el respaldo de una silla",
      "Esperar sentado sin hacer nada",
      "Acostarte boca abajo",
      "Beber agua rápidamente",
    ],
    correctAnswer: 0,
  },
  {
    id: 69,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "medium",
    question:
      "¿Cuál es un riesgo de dar golpes en la espalda a una persona atragantada estando de pie sin sujetarla?",
    options: [
      "Que pierda el equilibrio y se caiga",
      "Que el objeto se disuelva",
      "Que mejore instantáneamente sin riesgo",
      "No existe ningún riesgo",
    ],
    correctAnswer: 0,
  },
  {
    id: 70,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "medium",
    question:
      "En una persona con obesidad severa o embarazada, ¿dónde se ajustan las compresiones de la maniobra de Heimlich?",
    options: [
      "Más arriba, a nivel del tórax bajo en vez del abdomen",
      "En la espalda alta únicamente",
      "En las piernas",
      "No se debe realizar ninguna maniobra",
    ],
    correctAnswer: 0,
  },
  {
    id: 71,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "hard",
    question:
      "¿Por qué en lactantes se evita la compresión abdominal como en adultos?",
    options: [
      "Por el riesgo de dañar órganos abdominales aún inmaduros e hígado expuesto",
      "Porque los lactantes nunca se atragantan",
      "Porque no tiene ningún riesgo diferente",
      "Porque los lactantes no tienen abdomen",
    ],
    correctAnswer: 0,
  },
  {
    id: 72,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "hard",
    question:
      "Si tras varios ciclos de compresiones el objeto no sale y la persona queda inconsciente, ¿qué se debe verificar antes de cada ventilación en RCP?",
    options: [
      "Revisar la boca en busca del objeto visible antes de ventilar",
      "Ventilar sin revisar nunca la boca",
      "Aplicar más golpes en la espalda solamente",
      "Esperar sin hacer nada más",
    ],
    correctAnswer: 0,
  },
  {
    id: 73,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "hard",
    question:
      "¿Cuál es la diferencia clave en el manejo entre una obstrucción parcial y una obstrucción completa de la vía aérea?",
    options: [
      "En la parcial se favorece la tos espontánea; en la completa se actúa de inmediato con maniobras",
      "Ambas se tratan exactamente igual",
      "En la parcial se debe intervenir antes que en la completa",
      "La obstrucción parcial nunca requiere vigilancia",
    ],
    correctAnswer: 0,
  },
  {
    id: 74,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "hard",
    question:
      "¿Qué complicación rara pero grave puede ocurrir por compresiones abdominales mal aplicadas?",
    options: [
      "Lesión de órganos internos como hígado o bazo",
      "Mejora de la digestión",
      "Aumento de estatura",
      "Ninguna complicación posible",
    ],
    correctAnswer: 0,
  },
  {
    id: 75,
    type: "normal",
    category: "Atragantamiento (maniobra de Heimlich)",
    difficulty: "hard",
    question:
      "En un adulto mayor atragantado con dentadura postiza floja, ¿qué se recomienda hacer respecto a la dentadura antes de actuar?",
    options: [
      "Retirarla si está suelta y puede empeorar la obstrucción",
      "Empujarla más hacia adentro",
      "Ignorarla por completo",
      "Nunca se debe tocar la boca del paciente",
    ],
    correctAnswer: 0,
  },
  {
    id: 76,
    type: "normal",
    category: "Shock",
    difficulty: "easy",
    question: "¿Qué es el shock en términos generales de primeros auxilios?",
    options: [
      "Una falla del cuerpo para llevar suficiente sangre/oxígeno a los órganos",
      "Un susto emocional pasajero",
      "Una reacción alérgica leve en la piel",
      "Un aumento normal del pulso al hacer ejercicio",
    ],
    correctAnswer: 0,
  },
  {
    id: 77,
    type: "normal",
    category: "Shock",
    difficulty: "easy",
    question: "¿Cuál es un signo común de shock?",
    options: [
      "Piel pálida, fría y sudorosa",
      "Piel enrojecida y caliente sin otros síntomas",
      "Aumento del apetito",
      "Mejora repentina del ánimo",
    ],
    correctAnswer: 0,
  },
  {
    id: 78,
    type: "normal",
    category: "Shock",
    difficulty: "easy",
    question:
      "¿Qué posición es útil para una persona en shock sin lesión de columna ni dificultad respiratoria?",
    options: [
      "Acostada con las piernas ligeramente elevadas",
      "De pie caminando",
      "Boca abajo",
      "Sentada con la cabeza entre las piernas",
    ],
    correctAnswer: 0,
  },
  {
    id: 79,
    type: "normal",
    category: "Shock",
    difficulty: "easy",
    question:
      "¿Qué se debe hacer mientras se espera ayuda con una persona en shock?",
    options: [
      "Mantenerla abrigada y tranquila",
      "Darle bebidas alcohólicas para reanimarla",
      "Dejarla sola",
      "Hacerla caminar rápido",
    ],
    correctAnswer: 0,
  },
  {
    id: 80,
    type: "normal",
    category: "Shock",
    difficulty: "easy",
    question:
      "¿El shock puede ser causado por una pérdida importante de sangre?",
    options: [
      "Sí, es una causa común (shock hipovolémico)",
      "No, nunca se relaciona con sangrado",
      "Solo ocurre por miedo",
      "Solo ocurre en personas mayores",
    ],
    correctAnswer: 0,
  },
  {
    id: 81,
    type: "normal",
    category: "Shock",
    difficulty: "medium",
    question:
      "¿Qué tipo de shock puede producirse por una reacción alérgica grave?",
    options: [
      "Shock anafiláctico",
      "Shock cardiogénico",
      "Shock neurogénico",
      "Shock séptico",
    ],
    correctAnswer: 0,
  },
  {
    id: 82,
    type: "normal",
    category: "Shock",
    difficulty: "medium",
    question: "¿Qué causa el shock cardiogénico?",
    options: [
      "La incapacidad del corazón para bombear sangre eficazmente",
      "Una infección generalizada",
      "Una reacción alérgica cutánea",
      "La pérdida de líquidos por sudoración",
    ],
    correctAnswer: 0,
  },
  {
    id: 83,
    type: "normal",
    category: "Shock",
    difficulty: "medium",
    question:
      "¿Por qué no se debe dar de comer o beber a una persona en shock?",
    options: [
      "Porque podría necesitar cirugía y aumenta el riesgo de aspiración/vómito",
      "Porque no tiene ningún riesgo",
      "Porque siempre mejora el shock",
      "Porque el shock nunca afecta la digestión",
    ],
    correctAnswer: 0,
  },
  {
    id: 84,
    type: "normal",
    category: "Shock",
    difficulty: "medium",
    question: "¿Qué es el shock séptico?",
    options: [
      "Shock causado por una infección grave generalizada en el cuerpo",
      "Shock causado únicamente por miedo",
      "Un tipo de alergia leve",
      "Una fractura complicada",
    ],
    correctAnswer: 0,
  },
  {
    id: 85,
    type: "normal",
    category: "Shock",
    difficulty: "medium",
    question:
      "¿Qué parámetro vital suele estar bajo en la mayoría de los tipos de shock?",
    options: [
      "La presión arterial",
      "La temperatura corporal siempre elevada",
      "El apetito",
      "La estatura",
    ],
    correctAnswer: 0,
  },
  {
    id: 86,
    type: "normal",
    category: "Shock",
    difficulty: "hard",
    question:
      "¿Cuál es la diferencia fisiológica principal entre shock hipovolémico y shock distributivo (como el séptico o anafiláctico)?",
    options: [
      "El hipovolémico se debe a pérdida de volumen circulante; el distributivo a vasodilatación excesiva",
      "No existe ninguna diferencia entre ambos",
      "El distributivo siempre es menos grave",
      "El hipovolémico nunca requiere líquidos",
    ],
    correctAnswer: 0,
  },
  {
    id: 87,
    type: "normal",
    category: "Shock",
    difficulty: "hard",
    question:
      "¿Qué mecanismo compensatorio inicial usa el cuerpo ante una pérdida de sangre para mantener la presión arterial?",
    options: [
      "Aumento de la frecuencia cardiaca y vasoconstricción periférica",
      "Disminución de la frecuencia cardiaca",
      "Vasodilatación generalizada inmediata",
      "Aumento de la producción de orina",
    ],
    correctAnswer: 0,
  },
  {
    id: 88,
    type: "normal",
    category: "Shock",
    difficulty: "hard",
    question:
      "¿Por qué el shock neurogénico (por lesión medular) puede presentar piel caliente y enrojecida, a diferencia de otros shocks?",
    options: [
      "Por pérdida del tono vascular simpático que causa vasodilatación",
      "Porque siempre hay fiebre alta",
      "Porque no afecta el sistema nervioso",
      "Porque el corazón bombea más fuerte de lo normal",
    ],
    correctAnswer: 0,
  },
  {
    id: 89,
    type: "normal",
    category: "Shock",
    difficulty: "hard",
    question:
      "En shock anafiláctico, ¿cuál es el tratamiento de elección inmediato si está disponible?",
    options: [
      "Administración de epinefrina (adrenalina) intramuscular",
      "Antiácidos por vía oral",
      "Solo aplicar hielo local",
      "Esperar sin medicación",
    ],
    correctAnswer: 0,
  },
  {
    id: 90,
    type: "normal",
    category: "Shock",
    difficulty: "hard",
    question:
      "¿Qué indica clínicamente que un paciente en shock está entrando en una fase descompensada y crítica?",
    options: [
      "Hipotensión marcada con alteración del estado de consciencia",
      "Ansiedad leve inicial",
      "Piel ligeramente pálida sin otros signos",
      "Aumento leve de la frecuencia respiratoria únicamente",
    ],
    correctAnswer: 0,
  },
  {
    id: 91,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "easy",
    question: "¿Qué es una reacción alérgica?",
    options: [
      "Una respuesta exagerada del sistema inmune ante una sustancia",
      "Una enfermedad contagiosa",
      "Un tipo de fractura",
      "Una quemadura solar leve",
    ],
    correctAnswer: 0,
  },
  {
    id: 92,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "easy",
    question: "¿Cuál es un signo común de una reacción alérgica leve?",
    options: [
      "Picazón, ronchas o enrojecimiento en la piel",
      "Fractura ósea",
      "Pérdida de un diente",
      "Aumento de la estatura",
    ],
    correctAnswer: 0,
  },
  {
    id: 93,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "easy",
    question: "¿Qué es la anafilaxia?",
    options: [
      "Una reacción alérgica grave y potencialmente mortal",
      "Una alergia leve sin riesgo",
      "Un tipo de resfriado común",
      "Una infección de oído",
    ],
    correctAnswer: 0,
  },
  {
    id: 94,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "easy",
    question:
      "¿Qué se debe hacer si alguien tiene una reacción alérgica grave y tiene un autoinyector de epinefrina recetado?",
    options: [
      "Ayudarle a usarlo según las instrucciones y llamar a emergencias",
      "Ignorar el autoinyector",
      "Esperar 1 hora antes de usarlo",
      "Usarlo solo si el médico está presente",
    ],
    correctAnswer: 0,
  },
  {
    id: 95,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "easy",
    question: "¿Qué alimentos son causas comunes de alergias graves?",
    options: [
      "Maní, mariscos, huevo y leche, entre otros",
      "El agua",
      "El arroz blanco siempre",
      "Ningún alimento causa alergias",
    ],
    correctAnswer: 0,
  },
  {
    id: 96,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "medium",
    question:
      "¿Cuáles son signos de alarma que sugieren que una alergia está evolucionando a anafilaxia?",
    options: [
      "Dificultad para respirar, hinchazón de labios/garganta y mareo",
      "Solo un poco de picazón en un brazo",
      "Un estornudo aislado",
      "Enrojecimiento leve sin otros síntomas",
    ],
    correctAnswer: 0,
  },
  {
    id: 97,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "medium",
    question:
      "¿Qué posición se recomienda para una persona con anafilaxia que presenta dificultad respiratoria pero no está en shock?",
    options: [
      "Sentada, en la posición que le permita respirar más cómodamente",
      "Boca abajo",
      "De pie caminando",
      "Con la cabeza más baja que los pies siempre",
    ],
    correctAnswer: 0,
  },
  {
    id: 98,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "medium",
    question:
      "¿Por qué es importante llamar a emergencias incluso después de usar un autoinyector de epinefrina?",
    options: [
      "Porque el efecto puede disminuir y los síntomas reaparecer (reacción bifásica)",
      "Porque el autoinyector nunca funciona",
      "Porque ya no es necesaria ninguna vigilancia",
      "Porque la epinefrina cura la alergia de forma permanente",
    ],
    correctAnswer: 0,
  },
  {
    id: 99,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "medium",
    question:
      "¿En qué parte del cuerpo se aplica típicamente un autoinyector de epinefrina?",
    options: [
      "En la cara externa del muslo",
      "En el brazo interno",
      "En el abdomen",
      "En el cuello",
    ],
    correctAnswer: 0,
  },
  {
    id: 100,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "medium",
    question:
      "¿Qué se debe hacer si los síntomas de anafilaxia no mejoran 5-15 minutos después de la primera dosis de epinefrina y hay una segunda disponible?",
    options: [
      "Administrar una segunda dosis según indicación mientras se espera ayuda",
      "Esperar varias horas sin actuar",
      "Dar solo un antihistamínico oral y nada más",
      "No hacer nada más",
    ],
    correctAnswer: 0,
  },
  {
    id: 101,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "hard",
    question:
      "¿Cuál es el mecanismo inmunológico principal detrás de una reacción anafiláctica?",
    options: [
      "Liberación masiva de histamina y otros mediadores por mastocitos y basófilos mediada por IgE",
      "Una infección viral directa de la piel",
      "Un aumento de glóbulos rojos",
      "Una deficiencia de vitamina C",
    ],
    correctAnswer: 0,
  },
  {
    id: 102,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "hard",
    question:
      "¿Por qué la epinefrina es el tratamiento de elección en anafilaxia y no los antihistamínicos como primera línea?",
    options: [
      "Porque revierte rápidamente la vasodilatación, el broncoespasmo y el edema de vía aérea",
      "Porque los antihistamínicos actúan más rápido",
      "Porque la epinefrina no tiene ningún efecto cardiovascular",
      "Porque los antihistamínicos previenen el shock por completo",
    ],
    correctAnswer: 0,
  },
  {
    id: 103,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "hard",
    question: "¿Qué es una reacción anafiláctica bifásica?",
    options: [
      "El regreso de los síntomas horas después de una mejoría inicial, sin nueva exposición al alérgeno",
      "Una alergia que afecta dos partes del cuerpo a la vez",
      "Una alergia causada por dos alimentos distintos",
      "Un tipo de alergia que nunca mejora",
    ],
    correctAnswer: 0,
  },
  {
    id: 104,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "hard",
    question:
      "¿Qué contraindicación relativa debe considerarse al usar epinefrina en un paciente anafiláctico con antecedente cardiaco grave?",
    options: [
      "Sigue siendo el tratamiento prioritario porque el riesgo de no tratarla es mayor",
      "Nunca debe usarse en ningún paciente con antecedentes cardiacos",
      "Se debe reemplazar siempre por aspirina",
      "Se debe esperar la autorización de un cardiólogo antes de aplicarla",
    ],
    correctAnswer: 0,
  },
  {
    id: 105,
    type: "normal",
    category: "Reacciones alergicas y anafilaxia",
    difficulty: "hard",
    question:
      "¿Por qué el edema laríngeo es el hallazgo más peligroso en una anafilaxia?",
    options: [
      "Porque puede obstruir completamente la vía aérea y causar la muerte por asfixia",
      "Porque solo causa molestia leve",
      "Porque mejora espontáneamente en segundos siempre",
      "Porque no afecta la respiración",
    ],
    correctAnswer: 0,
  },
  {
    id: 106,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "easy",
    question:
      "¿Qué se debe hacer si sospechas que alguien ingirió una sustancia tóxica?",
    options: [
      "Llamar de inmediato a emergencias o al centro de toxicología",
      "Darle de comer inmediatamente",
      "Inducir el vómito siempre sin excepción",
      "Esperar a que los síntomas empeoren",
    ],
    correctAnswer: 0,
  },
  {
    id: 107,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "easy",
    question:
      "¿Qué información es importante dar al pedir ayuda por una intoxicación?",
    options: [
      "Qué sustancia fue, cuánta cantidad y cuándo ocurrió",
      "El color de la ropa de la persona",
      "El clima del día",
      "El nombre de la mascota de la familia",
    ],
    correctAnswer: 0,
  },
  {
    id: 108,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "easy",
    question:
      "¿Qué se debe hacer si un producto de limpieza entra en contacto con la piel?",
    options: [
      "Lavar la zona con abundante agua",
      "Frotar con fuerza sin agua",
      "Aplicar otro químico encima",
      "Cubrir sin lavar",
    ],
    correctAnswer: 0,
  },
  {
    id: 109,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "easy",
    question:
      "¿Dónde se deben guardar los productos tóxicos en una casa para prevenir intoxicaciones?",
    options: [
      "Fuera del alcance de niños, en su envase original",
      "En la cocina junto a los alimentos",
      "En cualquier botella sin etiqueta",
      "No importa dónde se guarden",
    ],
    correctAnswer: 0,
  },
  {
    id: 110,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "easy",
    question: "¿Qué se debe hacer si alguien inhala gas o humo tóxico?",
    options: [
      "Sacarlo al aire libre de inmediato si es seguro hacerlo",
      "Dejarlo en el lugar cerrado",
      "Darle de beber agua antes que nada",
      "Ignorar la situación si respira",
    ],
    correctAnswer: 0,
  },
  {
    id: 111,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "medium",
    question:
      "¿Por qué NO se recomienda inducir el vómito en la mayoría de intoxicaciones actualmente?",
    options: [
      "Porque puede causar más daño, especialmente con sustancias cáusticas o derivados de petróleo",
      "Porque siempre es inofensivo",
      "Porque cura la intoxicación por completo",
      "Porque no cambia nada el resultado",
    ],
    correctAnswer: 0,
  },
  {
    id: 112,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "medium",
    question:
      "¿Qué se debe hacer si una sustancia cáustica (ácido o base fuerte) fue ingerida?",
    options: [
      "No inducir el vómito y buscar atención médica urgente",
      "Inducir el vómito de inmediato",
      "Dar de beber grandes cantidades de leche sin indicación médica",
      "Neutralizar con otro químico casero",
    ],
    correctAnswer: 0,
  },
  {
    id: 113,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "medium",
    question:
      "¿Qué se debe hacer con el envase del producto tóxico ingerido cuando se busca ayuda médica?",
    options: [
      "Llevarlo o tener la información de la etiqueta disponible",
      "Botarlo de inmediato",
      "Esconderlo",
      "No es relevante conservarlo",
    ],
    correctAnswer: 0,
  },
  {
    id: 114,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "medium",
    question: "¿Qué diferencia hay entre una intoxicación aguda y una crónica?",
    options: [
      "La aguda ocurre por una exposición única o de corto plazo; la crónica por exposición repetida en el tiempo",
      "No existe ninguna diferencia",
      "La crónica siempre es menos grave",
      "La aguda solo ocurre en niños",
    ],
    correctAnswer: 0,
  },
  {
    id: 115,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "medium",
    question:
      "¿Qué se debe verificar primero en una persona intoxicada que está inconsciente?",
    options: [
      "Que la vía aérea esté permeable y que respire",
      "Su tipo de sangre",
      "Su edad exacta",
      "El precio del producto ingerido",
    ],
    correctAnswer: 0,
  },
  {
    id: 116,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "hard",
    question:
      "¿Qué es el carbón activado y cuándo puede estar indicado en una intoxicación?",
    options: [
      "Un adsorbente usado en algunos casos tempranos de ingesta tóxica, bajo indicación médica",
      "Un antídoto universal que cura cualquier intoxicación",
      "Un tipo de alimento común",
      "Un medicamento para el dolor de cabeza",
    ],
    correctAnswer: 0,
  },
  {
    id: 117,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "hard",
    question:
      "¿Por qué la intoxicación por monóxido de carbono es especialmente peligrosa y difícil de detectar?",
    options: [
      "Porque es un gas incoloro e inodoro que se une a la hemoglobina con mayor afinidad que el oxígeno",
      "Porque tiene un olor muy fuerte y fácil de notar",
      "Porque solo afecta a los niños",
      "Porque no produce ningún síntoma",
    ],
    correctAnswer: 0,
  },
  {
    id: 118,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "hard",
    question:
      "¿Cuál es el antídoto específico para la intoxicación por paracetamol (acetaminofén) en dosis tóxicas?",
    options: ["N-acetilcisteína", "Naloxona", "Atropina", "Flumazenilo"],
    correctAnswer: 0,
  },
  {
    id: 119,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "hard",
    question: "¿Qué antídoto se utiliza en una sobredosis de opioides?",
    options: [
      "Naloxona",
      "N-acetilcisteína",
      "Vitamina K",
      "Bicarbonato de sodio",
    ],
    correctAnswer: 0,
  },
  {
    id: 120,
    type: "normal",
    category: "Intoxicaciones y envenenamiento",
    difficulty: "hard",
    question:
      "¿Por qué en una intoxicación por organofosforados (algunos insecticidas) es clave la atropina como parte del tratamiento?",
    options: [
      "Porque contrarresta el exceso de actividad colinérgica que estos compuestos generan",
      "Porque neutraliza directamente el veneno en el estómago",
      "Porque solo trata el dolor asociado",
      "Porque previene alergias cutáneas",
    ],
    correctAnswer: 0,
  },
  {
    id: 121,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "easy",
    question: "¿Qué es un golpe de calor?",
    options: [
      "Una elevación peligrosa de la temperatura corporal por exposición al calor",
      "Una quemadura solar leve",
      "Un tipo de alergia",
      "Una fractura por calor",
    ],
    correctAnswer: 0,
  },
  {
    id: 122,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "easy",
    question: "¿Qué se debe hacer con una persona que sufre un golpe de calor?",
    options: [
      "Llevarla a un lugar fresco y enfriarla activamente",
      "Abrigarla más",
      "Darle café caliente",
      "Dejarla al sol",
    ],
    correctAnswer: 0,
  },
  {
    id: 123,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "easy",
    question: "¿Qué es la hipotermia?",
    options: [
      "Una disminución peligrosa de la temperatura corporal",
      "Un aumento de la temperatura corporal",
      "Una alergia al frío",
      "Un tipo de quemadura",
    ],
    correctAnswer: 0,
  },
  {
    id: 124,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "easy",
    question: "¿Qué se debe hacer con una persona con hipotermia leve?",
    options: [
      "Llevarla a un lugar cálido y abrigarla con mantas secas",
      "Sumergirla en agua muy caliente de inmediato",
      "Darle bebidas alcohólicas para calentarla",
      "Dejarla en el frío",
    ],
    correctAnswer: 0,
  },
  {
    id: 125,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "easy",
    question: "¿Qué bebida se debe evitar dar a una persona con hipotermia?",
    options: [
      "Bebidas alcohólicas o con cafeína",
      "Agua tibia si está consciente",
      "Nada en particular, cualquier bebida sirve",
      "Bebidas isotónicas",
    ],
    correctAnswer: 0,
  },
  {
    id: 126,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "medium",
    question:
      "¿Cuál es la diferencia entre agotamiento por calor y golpe de calor?",
    options: [
      "El golpe de calor es más grave e incluye alteración del estado mental; el agotamiento no",
      "Son exactamente lo mismo",
      "El agotamiento por calor es más grave",
      "El golpe de calor nunca afecta la temperatura corporal",
    ],
    correctAnswer: 0,
  },
  {
    id: 127,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "medium",
    question:
      "¿Qué signo distingue a un golpe de calor de otras emergencias por calor?",
    options: [
      "Piel caliente y seca (o muy caliente) con confusión o pérdida de consciencia",
      "Sudoración profusa con temperatura normal",
      "Piel fría y pálida únicamente",
      "Ausencia total de síntomas",
    ],
    correctAnswer: 0,
  },
  {
    id: 128,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "medium",
    question:
      "¿Qué método es prioritario para enfriar a una persona con golpe de calor mientras llega ayuda?",
    options: [
      "Aplicar agua fresca en la piel y abanicar, o sumergir en agua fría si es posible",
      "Cubrirla con muchas mantas",
      "Darle solo líquidos calientes",
      "Esperar sin intervenir",
    ],
    correctAnswer: 0,
  },
  {
    id: 129,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "medium",
    question:
      "¿Qué es la congelación (frostbite) y cómo se manifiesta inicialmente?",
    options: [
      "Daño localizado en la piel y tejidos por frío extremo, con piel pálida y entumecida",
      "Un tipo de quemadura solar",
      "Una reacción alérgica al frío",
      "Un aumento de la temperatura corporal",
    ],
    correctAnswer: 0,
  },
  {
    id: 130,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "medium",
    question: "¿Qué se debe evitar al recalentar una zona con congelación?",
    options: [
      "Frotar la zona o usar calor directo muy intenso (como fuego)",
      "Recalentarla con agua tibia controlada",
      "Cubrirla con ropa seca",
      "Buscar atención médica",
    ],
    correctAnswer: 0,
  },
  {
    id: 131,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "hard",
    question:
      "¿Por qué el golpe de calor puede llevar a falla multiorgánica si no se trata rápido?",
    options: [
      "Porque la hipertermia extrema desnaturaliza proteínas y daña células en múltiples órganos",
      "Porque solo afecta la piel de forma superficial",
      "Porque el cuerpo se enfría naturalmente sin intervención",
      "Porque no tiene relación con la temperatura corporal",
    ],
    correctAnswer: 0,
  },
  {
    id: 132,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "hard",
    question:
      "En hipotermia severa, ¿por qué se debe manipular al paciente con mucho cuidado y evitar movimientos bruscos?",
    options: [
      "Porque puede desencadenar arritmias cardiacas graves, incluida fibrilación ventricular",
      "Porque puede hacer que sienta más frío",
      "Porque no tiene ningún riesgo cardiaco asociado",
      "Porque acelera la recuperación",
    ],
    correctAnswer: 0,
  },
  {
    id: 133,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "hard",
    question:
      "¿Qué es el 'afterdrop' en el manejo de hipotermia y por qué es relevante?",
    options: [
      "La caída adicional de la temperatura central al recalentar, por retorno de sangre fría periférica",
      "Un tipo de golpe de calor",
      "Una mejora súbita de la temperatura corporal",
      "Un síntoma exclusivo de quemaduras",
    ],
    correctAnswer: 0,
  },
  {
    id: 134,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "hard",
    question:
      "¿Por qué en congelación severa no se debe recalentar la zona si existe riesgo de que vuelva a congelarse antes de llegar a atención definitiva?",
    options: [
      "Porque el ciclo de congelación-descongelación repetido causa más daño tisular",
      "Porque no afecta en nada el pronóstico",
      "Porque siempre es mejor recalentar sin importar el riesgo",
      "Porque acelera la curación sin riesgos",
    ],
    correctAnswer: 0,
  },
  {
    id: 135,
    type: "normal",
    category: "Emergencias ambientales (calor y frio)",
    difficulty: "hard",
    question:
      "¿Qué alteración electrolítica y de ritmo cardiaco es de particular preocupación en pacientes con hipotermia moderada a severa?",
    options: [
      "Arritmias como fibrilación auricular o ventricular por inestabilidad eléctrica cardiaca",
      "Aumento sostenido y seguro de la frecuencia cardiaca",
      "Ninguna alteración cardiaca relevante",
      "Mejora espontánea de cualquier arritmia previa",
    ],
    correctAnswer: 0,
  },
  {
    id: 136,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "easy",
    question: "¿Qué se debe hacer si alguien tiene una convulsión?",
    options: [
      "Proteger su cabeza y retirar objetos peligrosos alrededor",
      "Sujetarlo con fuerza para detener los movimientos",
      "Meterle algo en la boca",
      "Darle agua durante la convulsión",
    ],
    correctAnswer: 0,
  },
  {
    id: 137,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "easy",
    question:
      "¿Se debe introducir algún objeto en la boca de una persona convulsionando?",
    options: [
      "No, nunca se debe hacer eso",
      "Sí, siempre una cuchara",
      "Sí, cualquier objeto blando",
      "Solo si la persona lo pide",
    ],
    correctAnswer: 0,
  },
  {
    id: 138,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "easy",
    question:
      "¿Qué posición se recomienda después de que terminen los movimientos de una convulsión?",
    options: [
      "Posición lateral de seguridad",
      "Boca arriba con la cabeza elevada",
      "Sentado en una silla",
      "De pie",
    ],
    correctAnswer: 0,
  },
  {
    id: 139,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "easy",
    question:
      "¿Qué se debe hacer con los objetos alrededor de una persona que convulsiona?",
    options: [
      "Alejarlos para evitar que se lastime",
      "Acercarlos más",
      "No importa su ubicación",
      "Colocarlos sobre la persona",
    ],
    correctAnswer: 0,
  },
  {
    id: 140,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "easy",
    question:
      "¿Es normal que después de una convulsión la persona esté confundida o somnolienta?",
    options: [
      "Sí, es común en el período posterior (postictal)",
      "No, nunca ocurre confusión después",
      "Solo ocurre en niños",
      "Indica que la persona está fingiendo",
    ],
    correctAnswer: 0,
  },
  {
    id: 141,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "medium",
    question:
      "¿Cuándo se considera una emergencia médica urgente una convulsión?",
    options: [
      "Cuando dura más de 5 minutos o se repite sin recuperar consciencia entre episodios",
      "Nunca es una emergencia",
      "Solo si dura menos de 10 segundos",
      "Solo si ocurre en la calle",
    ],
    correctAnswer: 0,
  },
  {
    id: 142,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "medium",
    question:
      "¿Qué se debe hacer si una persona convulsiona y está cerca de una fuente de agua o fuego?",
    options: [
      "Alejarla con cuidado del peligro si es posible sin sujetarla con fuerza",
      "Dejarla exactamente donde está siempre",
      "Empujarla lejos con fuerza excesiva",
      "Rociarla con agua para 'despertarla'",
    ],
    correctAnswer: 0,
  },
  {
    id: 143,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "medium",
    question:
      "¿Qué información es útil observar y reportar durante una convulsión para el personal médico?",
    options: [
      "Duración, tipo de movimientos y si hubo pérdida de consciencia",
      "El color de la ropa que lleva puesta",
      "El horario en que comió por última vez",
      "Su comida favorita",
    ],
    correctAnswer: 0,
  },
  {
    id: 144,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "medium",
    question: "¿Qué es el estado epiléptico (status epilepticus)?",
    options: [
      "Convulsiones continuas o repetidas sin recuperación de consciencia por más de 5 minutos",
      "Una convulsión única y breve sin consecuencias",
      "Un tipo de dolor de cabeza",
      "Un episodio de desmayo simple",
    ],
    correctAnswer: 0,
  },
  {
    id: 145,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "medium",
    question:
      "Tras una convulsión, ¿por qué se coloca a la persona en posición lateral de seguridad?",
    options: [
      "Para mantener la vía aérea despejada y evitar aspiración de secreciones o vómito",
      "Para que se sienta más cómoda solamente",
      "Para que despierte más rápido",
      "No tiene ninguna razón médica",
    ],
    correctAnswer: 0,
  },
  {
    id: 146,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "hard",
    question:
      "¿Por qué el estado epiléptico prolongado puede causar daño cerebral permanente?",
    options: [
      "Por la demanda metabólica excesiva y falta de oxigenación adecuada en el tejido cerebral",
      "Porque el cerebro se regenera automáticamente sin daño",
      "Porque no afecta el metabolismo cerebral",
      "Porque solo afecta temporalmente la memoria a corto plazo",
    ],
    correctAnswer: 0,
  },
  {
    id: 147,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "hard",
    question:
      "¿Qué diferencia hay entre una convulsión tónico-clónica generalizada y una convulsión focal (parcial)?",
    options: [
      "La generalizada afecta ambos hemisferios cerebrales desde el inicio; la focal se origina en un área específica",
      "No existe ninguna diferencia clínica",
      "La focal siempre causa pérdida de consciencia total",
      "La generalizada nunca provoca movimientos musculares",
    ],
    correctAnswer: 0,
  },
  {
    id: 148,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "hard",
    question:
      "¿Qué causa metabólica común y fácilmente corregible puede provocar convulsiones y debe descartarse rápido en un paciente diabético?",
    options: [
      "Hipoglucemia severa",
      "Exceso de vitamina C",
      "Aumento del apetito",
      "Deficiencia leve de hierro",
    ],
    correctAnswer: 0,
  },
  {
    id: 149,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "hard",
    question:
      "¿Por qué es importante cronometrar la duración exacta de una convulsión en vez de solo estimarla?",
    options: [
      "Porque define si se trata de una emergencia (más de 5 min) que requiere intervención farmacológica urgente",
      "Porque no tiene ninguna relevancia clínica",
      "Porque solo importa para fines estadísticos",
      "Porque cambia el color de la piel del paciente",
    ],
    correctAnswer: 0,
  },
  {
    id: 150,
    type: "normal",
    category: "Convulsiones y alteraciones neurologicas",
    difficulty: "hard",
    question:
      "En un paciente con antecedente de epilepsia que convulsiona de forma típica y se recupera en menos de 5 minutos, ¿cuál es la conducta más adecuada?",
    options: [
      "Protegerlo durante el episodio, colocarlo en posición de seguridad y vigilar su recuperación",
      "Trasladarlo a emergencias en absolutamente todos los casos sin excepción",
      "Administrarle medicación anticonvulsiva sin ser personal capacitado",
      "Ignorar el episodio por completo",
    ],
    correctAnswer: 0,
  },
  {
    id: 151,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "easy",
    question:
      "Un joven cae de su bicicleta y presenta un raspón sangrante en la rodilla, consciente y sin otros síntomas. ¿Cuál es el primer paso?",
    options: [
      "Limpiar la herida y aplicar presión si sangra, luego cubrir",
      "Trasladarlo de inmediato en ambulancia sin evaluar nada más",
      "Darle un analgésico fuerte sin evaluar la herida",
      "Ignorar la herida porque es pequeña",
    ],
    correctAnswer: 0,
  },
  {
    id: 152,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "easy",
    question:
      "Un paciente sufre una caída y se queja de dolor en el tobillo, con hinchazón leve pero puede apoyar el pie. ¿Qué se recomienda inicialmente?",
    options: [
      "Reposo, hielo, compresión y elevación (RICE), y evaluación posterior",
      "Hacerlo caminar con fuerza para 'probar' el tobillo",
      "Aplicar calor directo de inmediato",
      "No hacer nada y esperar varios días",
    ],
    correctAnswer: 0,
  },
  {
    id: 153,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "easy",
    question:
      "Una persona se golpea la cabeza levemente contra una puerta, está consciente, orientada y sin vómito. ¿Qué conducta es adecuada?",
    options: [
      "Observarla por si aparecen signos de alarma como vómito o confusión",
      "Dejarla dormir profundamente sin vigilancia por 24 horas",
      "Trasladarla en camilla obligatoriamente sin evaluar",
      "No darle ninguna importancia al golpe",
    ],
    correctAnswer: 0,
  },
  {
    id: 154,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "easy",
    question:
      "Un trabajador se corta el dedo con una herramienta, con sangrado moderado pero controlable. ¿Cuál es la conducta inicial correcta?",
    options: [
      "Presionar la herida con un paño limpio y elevar la mano",
      "Sumergir el dedo en agua muy caliente",
      "Ignorar el sangrado y seguir trabajando",
      "Envolver el dedo con cinta adhesiva industrial directamente sobre la herida",
    ],
    correctAnswer: 0,
  },
  {
    id: 155,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "easy",
    question:
      "Un niño se golpea el brazo jugando y llora de dolor, sin deformidad visible ni imposibilidad de moverlo. ¿Qué se recomienda?",
    options: [
      "Aplicar hielo, observar y consultar si el dolor persiste o empeora",
      "Inmovilizarlo con una tabla rígida de inmediato sin evaluar más",
      "Ignorarlo porque los niños siempre lloran",
      "Darle un masaje fuerte en la zona",
    ],
    correctAnswer: 0,
  },
  {
    id: 156,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "medium",
    question:
      "Un motociclista es encontrado tras un accidente, consciente, quejándose de dolor intenso en el abdomen y con el vientre distendido. ¿Cuál es la sospecha principal?",
    options: [
      "Posible hemorragia interna abdominal",
      "Una simple indigestión",
      "Una alergia alimentaria",
      "Un calambre muscular leve",
    ],
    correctAnswer: 0,
  },
  {
    id: 157,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "medium",
    question:
      "Un paciente tras una caída de altura presenta dolor de espalda y hormigueo en las piernas. ¿Cuál es la conducta más apropiada?",
    options: [
      "Inmovilizar la columna y evitar cualquier movimiento innecesario",
      "Sentarlo de inmediato para que se sienta mejor",
      "Hacerlo caminar para evaluar si puede",
      "Darle un masaje en la espalda",
    ],
    correctAnswer: 0,
  },
  {
    id: 158,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "medium",
    question:
      "Un paciente politraumatizado tiene una deformidad evidente en el muslo con dolor intenso, consciente y hablando. ¿Qué se prioriza antes de inmovilizar la pierna?",
    options: [
      "Confirmar que la vía aérea, respiración y circulación estén estables (ABC)",
      "Inmovilizar la pierna sin evaluar nada más primero",
      "Preguntar únicamente su nombre y edad",
      "Darle de comer para que se sienta mejor",
    ],
    correctAnswer: 0,
  },
  {
    id: 159,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "medium",
    question:
      "Una persona sufre un accidente de tránsito y presenta un objeto metálico incrustado en el muslo, sangrando alrededor. ¿Qué se debe hacer?",
    options: [
      "No retirar el objeto, estabilizarlo y controlar el sangrado alrededor",
      "Retirar el objeto de inmediato",
      "Empujar el objeto más profundo",
      "Ignorar el objeto y solo vendar",
    ],
    correctAnswer: 0,
  },
  {
    id: 160,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "medium",
    question:
      "Un paciente tras trauma torácico presenta dificultad para respirar y una herida que produce un sonido de succión al inhalar. ¿Qué se sospecha?",
    options: [
      "Un neumotórax abierto (herida torácica succionante)",
      "Una simple contusión sin gravedad",
      "Una fractura de dedo",
      "Una alergia respiratoria",
    ],
    correctAnswer: 0,
  },
  {
    id: 161,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "hard",
    question:
      "Un paciente politraumatizado tras accidente vehicular presenta presión arterial baja, frecuencia cardiaca elevada y abdomen rígido y doloroso, sin sangrado externo visible. ¿Cuál es la sospecha principal?",
    options: [
      "Shock hipovolémico por hemorragia interna abdominal",
      "Una simple contusión muscular",
      "Una reacción alérgica alimentaria",
      "Un episodio de ansiedad",
    ],
    correctAnswer: 0,
  },
  {
    id: 162,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "hard",
    question:
      "Un paciente con trauma craneoencefálico presenta inicialmente buen estado, pero horas después desarrolla cefalea intensa, vómito y disminución progresiva del nivel de consciencia. ¿Qué se debe sospechar?",
    options: [
      "Un hematoma intracraneal en expansión (posible intervalo lúcido)",
      "Una simple migraña sin relación al trauma",
      "Una intoxicación alimentaria",
      "Un cuadro de ansiedad postraumática",
    ],
    correctAnswer: 0,
  },
  {
    id: 163,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "hard",
    question:
      "Un paciente con trauma torácico presenta distensión de las venas del cuello, hipotensión y ruidos cardiacos apagados. ¿Qué complicación grave se debe sospechar?",
    options: [
      "Taponamiento cardiaco",
      "Una fractura de clavícula simple",
      "Una alergia cutánea",
      "Un esguince cervical leve",
    ],
    correctAnswer: 0,
  },
  {
    id: 164,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "hard",
    question:
      "En un paciente politraumatizado con sospecha de fractura pélvica inestable e hipotensión, ¿cuál es una medida inicial recomendada además de la reanimación con líquidos?",
    options: [
      "Estabilización de la pelvis (por ejemplo con una faja pélvica) para reducir el sangrado",
      "Movilizar activamente la pelvis para evaluar el rango de movimiento",
      "Aplicar hielo directo sobre la pelvis únicamente",
      "Sentar al paciente erguido de inmediato",
    ],
    correctAnswer: 0,
  },
  {
    id: 165,
    type: "clinic",
    category: "Trauma y politraumatismo",
    difficulty: "hard",
    question:
      "Un paciente tras trauma torácico presenta tráquea desviada, ausencia de ruidos respiratorios de un lado y distensión de venas del cuello, con deterioro respiratorio progresivo. ¿Qué se sospecha?",
    options: [
      "Neumotórax a tensión",
      "Un simple derrame pleural crónico",
      "Una neumonía viral leve",
      "Una fractura costal aislada sin complicaciones",
    ],
    correctAnswer: 0,
  },
  {
    id: 166,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "easy",
    question:
      "Un hombre de 55 años refiere dolor opresivo en el pecho que se irradia al brazo izquierdo, con sudoración. ¿Qué se debe hacer primero?",
    options: [
      "Llamar a emergencias de inmediato",
      "Darle de comer algo dulce",
      "Decirle que respire hondo y que se le pasará",
      "Hacerlo caminar para 'activar' la circulación",
    ],
    correctAnswer: 0,
  },
  {
    id: 167,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "easy",
    question:
      "Una persona refiere palpitaciones y mareo leve, consciente, sin dolor de pecho. ¿Qué conducta es razonable inicialmente?",
    options: [
      "Sentarla, tranquilizarla y observar mientras se busca evaluación médica",
      "Ignorar los síntomas por completo",
      "Hacerla correr para 'normalizar' el pulso",
      "Darle café en abundancia",
    ],
    correctAnswer: 0,
  },
  {
    id: 168,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "easy",
    question:
      "Un paciente con antecedente de hipertensión presenta dolor de pecho leve tras esfuerzo físico, que mejora al reposar. ¿Qué se recomienda?",
    options: [
      "Buscar evaluación médica, ya que puede tratarse de angina",
      "Ignorarlo porque mejoró solo",
      "Aumentar el esfuerzo físico para confirmar el diagnóstico",
      "Automedicarse con analgésicos fuertes sin evaluación",
    ],
    correctAnswer: 0,
  },
  {
    id: 169,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "easy",
    question:
      "Una persona se desmaya brevemente pero recupera la consciencia rápido y se siente bien después. ¿Qué conducta es apropiada?",
    options: [
      "Buscar evaluación médica para descartar causas cardiacas u otras",
      "No darle importancia si ya se siente bien",
      "Hacerla hacer ejercicio intenso de inmediato",
      "Ignorar el episodio por completo",
    ],
    correctAnswer: 0,
  },
  {
    id: 170,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "easy",
    question:
      "Un paciente refiere que su corazón 'late muy rápido de repente' sin dolor de pecho ni dificultad respiratoria. ¿Qué se recomienda?",
    options: [
      "Mantener la calma, sentarlo y buscar evaluación médica",
      "Ignorarlo si no hay dolor de pecho",
      "Hacerlo correr para 'gastar energía'",
      "Darle una bebida con cafeína",
    ],
    correctAnswer: 0,
  },
  {
    id: 171,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "medium",
    question:
      "Un paciente diabético de 60 años presenta náuseas, sudoración y fatiga intensa, sin dolor de pecho evidente. ¿Qué se debe sospechar?",
    options: [
      "Un posible infarto silente (sin dolor torácico típico)",
      "Una simple indigestión sin más implicaciones",
      "Un resfriado común",
      "Un cuadro de ansiedad sin relación cardiaca",
    ],
    correctAnswer: 0,
  },
  {
    id: 172,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "medium",
    question:
      "Un paciente con antecedente de arritmia presenta pulso muy irregular, mareo y debilidad, pero está consciente y hablando. ¿Qué se debe priorizar?",
    options: [
      "Mantenerlo en reposo, monitorear y trasladarlo para evaluación urgente",
      "Hacerlo caminar para 'estabilizar' el ritmo",
      "Ignorarlo si puede hablar con normalidad",
      "Darle un estimulante para el corazón sin indicación médica",
    ],
    correctAnswer: 0,
  },
  {
    id: 173,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "medium",
    question:
      "Un paciente presenta dolor torácico que empeora al respirar profundo y se alivia al inclinarse hacia adelante. ¿Qué se debe considerar además de un problema cardiaco?",
    options: [
      "Una posible pericarditis (inflamación del saco que rodea el corazón)",
      "Que definitivamente es solo un dolor muscular sin más evaluación",
      "Que se trata siempre de un infarto clásico",
      "Que no requiere ninguna evaluación médica",
    ],
    correctAnswer: 0,
  },
  {
    id: 174,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "medium",
    question:
      "Un paciente hipertenso no controlado presenta cefalea intensa, visión borrosa y presión arterial muy elevada. ¿Qué se debe sospechar?",
    options: [
      "Una posible crisis hipertensiva/emergencia hipertensiva",
      "Una simple migraña sin relación con la presión arterial",
      "Una alergia ocular",
      "Un resfriado común",
    ],
    correctAnswer: 0,
  },
  {
    id: 175,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "medium",
    question:
      "Un paciente presenta desmayo (síncope) durante el ejercicio físico intenso, con antecedente familiar de muerte súbita. ¿Qué se debe sospechar como causa a descartar?",
    options: [
      "Una posible cardiopatía estructural o arritmia grave subyacente",
      "Simplemente deshidratación sin más estudio necesario",
      "Solo cansancio muscular sin relevancia cardiaca",
      "Un resfriado mal curado",
    ],
    correctAnswer: 0,
  },
  {
    id: 176,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "hard",
    question:
      "Un paciente con infarto agudo presenta de forma súbita hipotensión severa, distensión yugular y pulmones limpios (sin congestión). ¿Qué complicación se debe sospechar?",
    options: [
      "Infarto de ventrículo derecho",
      "Un simple episodio de ansiedad",
      "Una neumonía adquirida en la comunidad",
      "Una reacción alérgica a un medicamento",
    ],
    correctAnswer: 0,
  },
  {
    id: 177,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "hard",
    question:
      "Un paciente tras varios días de infarto presenta nuevamente dolor torácico intenso, hipotensión y un nuevo soplo cardiaco audible. ¿Qué complicación mecánica se debe sospechar?",
    options: [
      "Ruptura del músculo papilar o del tabique interventricular",
      "Una simple recuperación normal post-infarto",
      "Un resfriado común",
      "Una alergia cutánea",
    ],
    correctAnswer: 0,
  },
  {
    id: 178,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "hard",
    question:
      "Un paciente con arritmia conocida presenta pulso extremadamente rápido, presión arterial muy baja y alteración del estado de consciencia. ¿Cuál es la conducta más urgente?",
    options: [
      "Preparar cardioversión eléctrica urgente según protocolo avanzado",
      "Simplemente observar sin intervenir",
      "Darle solo un analgésico oral",
      "Esperar 24 horas antes de cualquier intervención",
    ],
    correctAnswer: 0,
  },
  {
    id: 179,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "hard",
    question:
      "Un paciente presenta dolor torácico intenso, irradiado a la espalda, de inicio súbito tipo 'desgarro', con diferencia de presión arterial entre ambos brazos. ¿Qué se debe sospechar principalmente?",
    options: [
      "Disección aórtica aguda",
      "Un simple espasmo muscular de espalda",
      "Una gastritis aguda",
      "Un ataque de pánico sin más relevancia",
    ],
    correctAnswer: 0,
  },
  {
    id: 180,
    type: "clinic",
    category: "Emergencias cardiovasculares",
    difficulty: "hard",
    question:
      "En un paciente con sospecha de infarto agudo del miocardio, ¿por qué es fundamental determinar el tiempo exacto de inicio de los síntomas?",
    options: [
      "Porque define la ventana terapéutica para reperfusión (trombolisis o angioplastia) y el pronóstico",
      "Porque no influye en ninguna decisión de tratamiento",
      "Solo tiene valor estadístico sin relevancia clínica",
      "Porque determina el color del vendaje a usar",
    ],
    correctAnswer: 0,
  },
  {
    id: 181,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "easy",
    question:
      "Un paciente asmático presenta silbidos al respirar (sibilancias) leves tras exponerse al polvo, pero puede hablar con normalidad. ¿Qué se recomienda inicialmente?",
    options: [
      "Ayudarlo a usar su inhalador de rescate y observar",
      "Hacerlo correr para 'abrir' los pulmones",
      "Ignorar los síntomas por ser leves",
      "Darle una bebida fría de inmediato",
    ],
    correctAnswer: 0,
  },
  {
    id: 182,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "easy",
    question:
      "Una persona con resfriado común presenta congestión nasal y tos leve, sin fiebre alta ni dificultad respiratoria. ¿Qué conducta es apropiada?",
    options: [
      "Manejo sintomático en casa y observación",
      "Trasladar de inmediato a emergencias",
      "Aplicar oxígeno suplementario en casa sin indicación",
      "Ignorar cualquier posible empeoramiento",
    ],
    correctAnswer: 0,
  },
  {
    id: 183,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "easy",
    question:
      "Un niño con tos leve y sin dificultad para respirar juega con normalidad y come bien. ¿Qué se recomienda?",
    options: [
      "Observación en casa y consulta si aparecen signos de alarma",
      "Trasladarlo de urgencia sin evaluar más",
      "Darle un jarabe para la tos de un adulto en dosis completa",
      "Restringirle todos los líquidos",
    ],
    correctAnswer: 0,
  },
  {
    id: 184,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "easy",
    question:
      "Un paciente con gripe presenta estornudos y leve dolor de garganta, sin fiebre ni dificultad respiratoria. ¿Cuál es la conducta adecuada?",
    options: [
      "Reposo, hidratación y manejo sintomático en casa",
      "Trasladarlo de inmediato a un hospital",
      "Darle antibióticos sin indicación médica",
      "Ignorar completamente los síntomas sin ningún cuidado",
    ],
    correctAnswer: 0,
  },
  {
    id: 185,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "easy",
    question:
      "Una persona presenta hipo persistente leve sin otros síntomas asociados. ¿Qué conducta es razonable?",
    options: [
      "Observar, ya que suele ser benigno y autolimitado",
      "Trasladarla de emergencia de inmediato",
      "Aplicar oxígeno suplementario sin necesidad",
      "Asumir que es un signo de infarto sin más evaluación",
    ],
    correctAnswer: 0,
  },
  {
    id: 186,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "medium",
    question:
      "Un paciente asmático presenta dificultad para hablar frases completas, uso de músculos accesorios para respirar y ansiedad marcada. ¿Qué gravedad sugiere este cuadro?",
    options: [
      "Una crisis asmática grave que requiere atención de emergencia inmediata",
      "Una crisis leve que se resuelve sola sin intervención",
      "Un simple resfriado sin importancia",
      "Una reacción alérgica cutánea sin compromiso respiratorio",
    ],
    correctAnswer: 0,
  },
  {
    id: 187,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "medium",
    question:
      "Un paciente con antecedente de EPOC presenta empeoramiento de la dificultad respiratoria, esputo más espeso y de color amarillo-verdoso. ¿Qué se debe sospechar?",
    options: [
      "Una posible exacerbación de EPOC, probablemente asociada a infección",
      "Una simple alergia estacional",
      "Un episodio de ansiedad sin relación pulmonar",
      "Una fractura costal previa sin relación",
    ],
    correctAnswer: 0,
  },
  {
    id: 188,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "medium",
    question:
      "Un paciente presenta dificultad respiratoria súbita tras estar en reposo prolongado (por ejemplo, un vuelo largo), con dolor torácico y pierna hinchada. ¿Qué se debe sospechar?",
    options: [
      "Una posible embolia pulmonar por trombosis venosa profunda",
      "Un simple calambre muscular en la pierna",
      "Una alergia respiratoria estacional",
      "Un resfriado común",
    ],
    correctAnswer: 0,
  },
  {
    id: 189,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "medium",
    question:
      "Un niño con antecedente de crup presenta tos 'perruna' y estridor al inspirar durante la noche. ¿Qué conducta inicial es apropiada?",
    options: [
      "Mantener la calma, sentarlo en posición cómoda y buscar evaluación médica",
      "Acostarlo boca abajo inmediatamente",
      "Ignorar el estridor si el niño no llora",
      "Darle de comer inmediatamente algo sólido",
    ],
    correctAnswer: 0,
  },
  {
    id: 190,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "medium",
    question:
      "Un paciente presenta dificultad respiratoria progresiva tras la picadura de un insecto, junto con hinchazón facial. ¿Qué se debe sospechar?",
    options: [
      "Una posible reacción anafiláctica en curso",
      "Un simple resfriado coincidente",
      "Una fractura no relacionada",
      "Un episodio de ansiedad sin relación con la picadura",
    ],
    correctAnswer: 0,
  },
  {
    id: 191,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "hard",
    question:
      "Un paciente con crisis asmática grave presenta disminución súbita de las sibilancias, agotamiento y disminución del nivel de consciencia. ¿Cómo se interpreta este cambio?",
    options: [
      "Como un signo de deterioro extremo (tórax silente), indicando falla respiratoria inminente",
      "Como una señal clara de mejoría clínica",
      "Como un hallazgo sin relevancia clínica",
      "Como un efecto esperado y benigno del tratamiento",
    ],
    correctAnswer: 0,
  },
  {
    id: 192,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "hard",
    question:
      "Un paciente con EPOC en insuficiencia respiratoria recibe oxígeno suplementario a alto flujo y presenta somnolencia progresiva. ¿Qué mecanismo se debe considerar?",
    options: [
      "Posible narcosis por CO2 al suprimir el estímulo respiratorio hipóxico",
      "Una mejoría normal esperada sin ningún riesgo",
      "Una reacción alérgica al oxígeno",
      "Un signo de que se debe aumentar aún más el flujo de oxígeno sin control",
    ],
    correctAnswer: 0,
  },
  {
    id: 193,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "hard",
    question:
      "Un paciente presenta disnea súbita, dolor torácico pleurítico y taquicardia; se sospecha embolia pulmonar. ¿Qué hallazgo en signos vitales apoyaría mayor gravedad?",
    options: [
      "Hipotensión con signos de shock obstructivo",
      "Presión arterial y frecuencia cardiaca completamente normales",
      "Aumento leve y aislado del apetito",
      "Disminución de la frecuencia respiratoria por debajo de lo normal sin otros signos",
    ],
    correctAnswer: 0,
  },
  {
    id: 194,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "hard",
    question:
      "En un paciente con neumotórax a tensión progresivo, ¿qué explica el colapso circulatorio asociado?",
    options: [
      "El aumento de presión intratorácica que comprime las grandes venas y reduce el retorno venoso al corazón",
      "Una simple reacción alérgica generalizada",
      "Una infección viral aguda sin relación mecánica",
      "Un aumento del gasto cardiaco sin ninguna afectación",
    ],
    correctAnswer: 0,
  },
  {
    id: 195,
    type: "clinic",
    category: "Emergencias respiratorias",
    difficulty: "hard",
    question:
      "Un paciente con insuficiencia respiratoria aguda presenta hipoxemia refractaria a oxígeno suplementario a pesar de buen esfuerzo respiratorio. ¿Qué mecanismo fisiopatológico explica mejor este hallazgo?",
    options: [
      "Un cortocircuito (shunt) intrapulmonar donde zonas del pulmón no se ventilan pero sí se perfunden",
      "Una simple ansiedad sin base fisiológica",
      "Un exceso de oxígeno en sangre",
      "Una alergia cutánea generalizada",
    ],
    correctAnswer: 0,
  },
  {
    id: 196,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "easy",
    question:
      "Un adulto mayor presenta de repente dificultad para hablar y debilidad en un lado del cuerpo. ¿Qué se debe hacer?",
    options: [
      "Llamar a emergencias de inmediato y anotar la hora de inicio de los síntomas",
      "Esperar a que se le pase solo en casa",
      "Darle café para que 'se active'",
      "Hacerlo caminar para ver si mejora",
    ],
    correctAnswer: 0,
  },
  {
    id: 197,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "easy",
    question:
      "¿Qué significa la sigla FAST usada para reconocer un posible ACV?",
    options: [
      "Cara caída, debilidad en brazo, dificultad al hablar, tiempo de actuar",
      "Fiebre, dolor Abdominal, Sudoración, Taquicardia",
      "Fractura, Alergia, Shock, Trauma",
      "Frío, Ansiedad, Sed, Temblor",
    ],
    correctAnswer: 0,
  },
  {
    id: 198,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "easy",
    question:
      "Una persona presenta de repente un lado de la cara caído al sonreír. ¿Qué se debe sospechar?",
    options: [
      "Un posible accidente cerebrovascular",
      "Una simple alergia facial",
      "Un calambre muscular sin importancia",
      "Un resfriado común",
    ],
    correctAnswer: 0,
  },
  {
    id: 199,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "easy",
    question:
      "¿Qué se debe anotar y comunicar a emergencias cuando se sospecha un ACV?",
    options: [
      "La hora exacta en que empezaron los síntomas",
      "El color de ropa que lleva el paciente",
      "El plato favorito del paciente",
      "El clima del día",
    ],
    correctAnswer: 0,
  },
  {
    id: 200,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "easy",
    question:
      "Ante la sospecha de un ACV, ¿se debe dar de comer o beber algo a la persona mientras se espera ayuda?",
    options: [
      "No, por riesgo de que no pueda tragar bien (disfagia) y se ahogue",
      "Sí, cualquier alimento sólido",
      "Sí, especialmente bebidas alcohólicas",
      "No importa, se le puede dar cualquier cosa",
    ],
    correctAnswer: 0,
  },
  {
    id: 201,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "medium",
    question:
      "Un paciente presenta debilidad súbita en un brazo que se resuelve completamente en 20 minutos sin dejar secuelas. ¿Qué se debe sospechar y por qué buscar atención médica de todas formas?",
    options: [
      "Un posible accidente isquémico transitorio (AIT), que es una señal de alerta de riesgo de ACV futuro",
      "Que no tiene ninguna importancia porque los síntomas desaparecieron",
      "Que fue solo un calambre muscular sin relación neurológica",
      "Que definitivamente no requiere ninguna evaluación médica",
    ],
    correctAnswer: 0,
  },
  {
    id: 202,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "medium",
    question:
      "Un paciente con sospecha de ACV isquémico llega al hospital y se pregunta hace cuánto empezaron los síntomas. ¿Por qué es tan importante este dato?",
    options: [
      "Porque determina si es candidato a tratamiento trombolítico dentro de una ventana de tiempo limitada",
      "Porque no influye en ninguna decisión médica",
      "Solo tiene valor para las estadísticas del hospital",
      "Porque determina el color de la pulsera de identificación",
    ],
    correctAnswer: 0,
  },
  {
    id: 203,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "medium",
    question:
      "Un paciente presenta cefalea súbita e intensa ('la peor de su vida'), rigidez de cuello y vómito. ¿Qué se debe sospechar?",
    options: [
      "Una posible hemorragia subaracnoidea",
      "Una simple migraña sin mayor gravedad",
      "Un resfriado con dolor de cabeza asociado",
      "Una alergia alimentaria",
    ],
    correctAnswer: 0,
  },
  {
    id: 204,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "medium",
    question:
      "¿Por qué es importante distinguir entre un ACV isquémico y uno hemorrágico antes de decidir el tratamiento?",
    options: [
      "Porque los tratamientos son muy diferentes y algunos (como trombolisis) están contraindicados en el hemorrágico",
      "Porque el tratamiento es exactamente igual en ambos casos",
      "Porque no existe diferencia clínica relevante entre ambos",
      "Porque solo afecta el pronóstico estético del paciente",
    ],
    correctAnswer: 0,
  },
  {
    id: 205,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "medium",
    question:
      "Un paciente diabético presenta síntomas neurológicos similares a un ACV (confusión, debilidad). ¿Qué causa reversible y común se debe descartar primero?",
    options: [
      "Hipoglucemia",
      "Una alergia estacional",
      "Un resfriado común",
      "Una fractura de cráneo",
    ],
    correctAnswer: 0,
  },
  {
    id: 206,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "hard",
    question:
      "En un ACV isquémico, ¿por qué el concepto de 'tiempo es cerebro' resume la urgencia del manejo?",
    options: [
      "Porque cada minuto sin flujo sanguíneo adecuado destruye millones de neuronas, reduciendo el beneficio de la reperfusión",
      "Porque no existe relación entre el tiempo y el daño neuronal",
      "Porque el cerebro se regenera espontáneamente sin importar el tiempo transcurrido",
      "Porque solo afecta la velocidad del habla, sin relación con otras funciones",
    ],
    correctAnswer: 0,
  },
  {
    id: 207,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "hard",
    question:
      "Un paciente con ACV isquémico candidato a trombolisis tiene antecedente de cirugía mayor reciente. ¿Por qué esto es relevante para la decisión terapéutica?",
    options: [
      "Porque aumenta el riesgo de sangrado grave con el tratamiento trombolítico, pudiendo contraindicarlo",
      "Porque no tiene ninguna relación con el tratamiento",
      "Porque acelera la recuperación neurológica de forma segura",
      "Porque mejora la eficacia del medicamento sin ningún riesgo",
    ],
    correctAnswer: 0,
  },
  {
    id: 208,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "hard",
    question:
      "¿Qué diferencia clínica podría orientar hacia un ACV de circulación posterior (vertebrobasilar) en vez de uno de circulación anterior?",
    options: [
      "Presencia de vértigo intenso, ataxia, alteraciones visuales o de pares craneales, además de la debilidad",
      "La ausencia total de cualquier síntoma neurológico",
      "Un dolor exclusivamente en las piernas sin síntomas neurológicos",
      "Un episodio de fiebre alta sin otros signos",
    ],
    correctAnswer: 0,
  },
  {
    id: 209,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "hard",
    question:
      "¿Por qué se debe controlar cuidadosamente la presión arterial en un paciente con ACV hemorrágico agudo, evitando tanto la hipotensión como la hipertensión extrema?",
    options: [
      "Porque la hipertensión extrema puede aumentar el sangrado, mientras la hipotensión puede reducir la perfusión cerebral",
      "Porque la presión arterial no influye en absoluto en el pronóstico",
      "Porque siempre se debe bajar la presión lo más posible sin ningún límite",
      "Porque siempre se debe elevar la presión arterial lo máximo posible",
    ],
    correctAnswer: 0,
  },
  {
    id: 210,
    type: "clinic",
    category: "Accidente cerebrovascular (ACV)",
    difficulty: "hard",
    question:
      "En la escala de Cincinnati para ACV (prueba prehospitalaria), ¿qué tres hallazgos se evalúan principalmente?",
    options: [
      "Asimetría facial, deriva del brazo al mantenerlo extendido, y alteración del habla",
      "Frecuencia cardiaca, temperatura corporal y color de piel",
      "Reflejos rotulianos, fuerza de agarre y visión periférica",
      "Apetito, sed y patrón de sueño",
    ],
    correctAnswer: 0,
  },
  {
    id: 211,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "easy",
    question:
      "Un paciente diabético conocido presenta temblor, sudoración fría y confusión leve. ¿Qué se debe sospechar primero?",
    options: [
      "Una hipoglucemia (bajo nivel de azúcar en sangre)",
      "Una simple alergia alimentaria",
      "Un resfriado común",
      "Una fractura no diagnosticada",
    ],
    correctAnswer: 0,
  },
  {
    id: 212,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "easy",
    question:
      "Si un paciente diabético consciente presenta síntomas de hipoglucemia y puede tragar con seguridad, ¿qué se recomienda darle?",
    options: [
      "Algo con azúcar de rápida absorción, como jugo o una tableta de glucosa",
      "Insulina adicional de inmediato",
      "Agua sola sin ningún azúcar",
      "Nada, mejor esperar a que mejore solo",
    ],
    correctAnswer: 0,
  },
  {
    id: 213,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "easy",
    question:
      "¿Qué se debe evitar dar por vía oral a una persona con hipoglucemia si está inconsciente?",
    options: [
      "Cualquier alimento o líquido por boca, por riesgo de aspiración",
      "Únicamente agua tibia",
      "Únicamente jugo de naranja",
      "No hay ninguna restricción en este caso",
    ],
    correctAnswer: 0,
  },
  {
    id: 214,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "easy",
    question:
      "Un paciente diabético refiere mucha sed, orina con frecuencia y se siente muy cansado en los últimos días. ¿Qué se debe sospechar?",
    options: [
      "Un posible nivel de azúcar en sangre elevado (hiperglucemia)",
      "Una simple gripe sin relación con la diabetes",
      "Una alergia estacional",
      "Un resfriado leve",
    ],
    correctAnswer: 0,
  },
  {
    id: 215,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "easy",
    question:
      "¿Por qué es importante identificar rápidamente si un paciente diabético tiene el azúcar muy bajo?",
    options: [
      "Porque puede llevar a pérdida de consciencia y convulsiones si no se corrige a tiempo",
      "Porque no representa ningún riesgo real",
      "Porque siempre se resuelve solo sin intervención",
      "Porque solo afecta el apetito, sin otros riesgos",
    ],
    correctAnswer: 0,
  },
  {
    id: 216,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "medium",
    question:
      "Un paciente diabético presenta confusión, sudoración profusa y comportamiento agresivo inusual. Está consciente pero no puede tragar de forma segura. ¿Qué conducta es apropiada?",
    options: [
      "No dar nada por vía oral y buscar ayuda médica urgente para tratamiento por otra vía",
      "Forzarlo a tragar un dulce de todas formas",
      "Ignorar el comportamiento porque 'ya se le pasará'",
      "Darle insulina adicional sin certeza del diagnóstico",
    ],
    correctAnswer: 0,
  },
  {
    id: 217,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "medium",
    question:
      "Un paciente con diabetes tipo 1 presenta respiración rápida y profunda, aliento con olor afrutado y deshidratación. ¿Qué se debe sospechar?",
    options: [
      "Una posible cetoacidosis diabética",
      "Una simple hipoglucemia leve",
      "Un resfriado con congestión nasal",
      "Una alergia respiratoria",
    ],
    correctAnswer: 0,
  },
  {
    id: 218,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "medium",
    question:
      "¿Por qué ante la duda de si un paciente diabético tiene el azúcar alto o bajo, y no se puede medir la glucosa, se prefiere en general tratar como hipoglucemia (dar azúcar) si está consciente y puede tragar con seguridad?",
    options: [
      "Porque el daño de no tratar una hipoglucemia real es más rápido y grave que dar un poco de azúcar de más a alguien hiperglucémico",
      "Porque el azúcar siempre cura la hiperglucemia también",
      "Porque no hay ninguna diferencia entre ambas condiciones",
      "Porque la hiperglucemia nunca es peligrosa",
    ],
    correctAnswer: 0,
  },
  {
    id: 219,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "medium",
    question:
      "Un paciente diabético mayor presenta confusión progresiva, deshidratación severa y niveles de glucosa extremadamente altos, sin el olor afrutado característico de la cetoacidosis. ¿Qué cuadro se debe sospechar?",
    options: [
      "Un posible estado hiperosmolar hiperglucémico",
      "Una simple hipoglucemia leve",
      "Una alergia alimentaria aguda",
      "Un resfriado con fiebre",
    ],
    correctAnswer: 0,
  },
  {
    id: 220,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "medium",
    question:
      "¿Qué se debe verificar en un paciente diabético que presenta convulsiones de causa no clara, además de la vía aérea?",
    options: [
      "El nivel de glucosa en sangre lo antes posible",
      "El color de sus zapatos",
      "Su historial de vacunación",
      "Su tipo de sangre exacto",
    ],
    correctAnswer: 0,
  },
  {
    id: 221,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "hard",
    question:
      "¿Por qué la cetoacidosis diabética puede presentarse con dolor abdominal intenso que simula un abdomen quirúrgico agudo?",
    options: [
      "Por irritación peritoneal secundaria a la acidosis metabólica y alteraciones electrolíticas",
      "Porque siempre indica una apendicitis asociada",
      "Porque no tiene relación fisiológica alguna con la diabetes",
      "Porque es un efecto directo y exclusivo de la insulina",
    ],
    correctAnswer: 0,
  },
  {
    id: 222,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "hard",
    question:
      "En el manejo inicial de una cetoacidosis diabética grave, ¿por qué la reposición de líquidos suele preceder a la administración de insulina?",
    options: [
      "Porque corrige la deshidratación severa y mejora la perfusión antes de iniciar la corrección metabólica con insulina",
      "Porque la insulina nunca es necesaria en este cuadro",
      "Porque los líquidos curan la cetoacidosis sin necesidad de insulina",
      "Porque el orden de administración no tiene ninguna relevancia clínica",
    ],
    correctAnswer: 0,
  },
  {
    id: 223,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "hard",
    question:
      "¿Por qué se debe monitorizar cuidadosamente el potasio sérico durante el tratamiento de la cetoacidosis diabética con insulina?",
    options: [
      "Porque la insulina desplaza potasio hacia el interior de las células, pudiendo causar hipopotasemia peligrosa",
      "Porque la insulina siempre aumenta el potasio sérico sin ningún riesgo",
      "Porque el potasio no tiene relación con el tratamiento de la diabetes",
      "Porque solo se debe vigilar el sodio, nunca el potasio",
    ],
    correctAnswer: 0,
  },
  {
    id: 224,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "hard",
    question:
      "¿Cuál es la diferencia fisiopatológica principal entre la cetoacidosis diabética y el estado hiperosmolar hiperglucémico?",
    options: [
      "En la cetoacidosis hay déficit absoluto de insulina con producción de cetonas; en el estado hiperosmolar suele haber algo de insulina residual que previene la cetosis significativa",
      "Son exactamente la misma condición con distinto nombre",
      "El estado hiperosmolar siempre ocurre en diabetes tipo 1 exclusivamente",
      "La cetoacidosis nunca se asocia a deshidratación",
    ],
    correctAnswer: 0,
  },
  {
    id: 225,
    type: "clinic",
    category: "Emergencias metabolicas (diabetes)",
    difficulty: "hard",
    question:
      "Un paciente diabético con hipoglucemia recurrente a pesar de tratamiento adecuado con glucosa oral podría beneficiarse de glucagón intramuscular en el ámbito prehospitalario. ¿En qué situación está indicado principalmente el glucagón?",
    options: [
      "Cuando el paciente está inconsciente o no puede tragar de forma segura",
      "Cuando el paciente tiene hiperglucemia confirmada",
      "Únicamente como sustituto habitual de la insulina diaria",
      "Solo en pacientes sin ningún antecedente de diabetes",
    ],
    correctAnswer: 0,
  },
  {
    id: 226,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "easy",
    question:
      "Una mujer embarazada de 8 meses presenta contracciones regulares cada pocos minutos. ¿Qué se debe sospechar?",
    options: [
      "Que probablemente está en trabajo de parto",
      "Que definitivamente es una falsa alarma sin importancia",
      "Que se trata de una indigestión",
      "Que no requiere ninguna atención médica",
    ],
    correctAnswer: 0,
  },
  {
    id: 227,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "easy",
    question:
      "¿Qué información es importante preguntar a una embarazada con contracciones para orientar la urgencia?",
    options: [
      "Cada cuánto tiempo ocurren las contracciones y desde cuándo",
      "Su color favorito",
      "El nombre del padre del bebé",
      "Su comida favorita durante el embarazo",
    ],
    correctAnswer: 0,
  },
  {
    id: 228,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "easy",
    question:
      "Una embarazada presenta sangrado vaginal leve sin dolor durante el tercer trimestre. ¿Qué conducta es adecuada?",
    options: [
      "Buscar evaluación médica cuanto antes, ya que cualquier sangrado en el embarazo debe evaluarse",
      "Ignorarlo si es una cantidad pequeña",
      "Esperar varios días para ver si se detiene solo",
      "Automedicarse sin consultar a un profesional",
    ],
    correctAnswer: 0,
  },
  {
    id: 229,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "easy",
    question:
      "Una mujer embarazada refiere que 'rompió fuente' (salida de líquido claro por la vagina). ¿Qué se debe hacer?",
    options: [
      "Buscar atención médica pronto, ya que puede indicar inicio de trabajo de parto",
      "Ignorarlo por completo sin ninguna acción",
      "Esperar varios días antes de consultar",
      "Asumir que no tiene relación con el embarazo",
    ],
    correctAnswer: 0,
  },
  {
    id: 230,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "easy",
    question:
      "¿Por qué es importante tener cuidado especial al mover o trasladar a una mujer embarazada tras una caída, aunque se sienta bien?",
    options: [
      "Porque puede haber riesgo para ella y el bebé aunque no haya síntomas evidentes de inmediato",
      "Porque no representa ningún riesgo adicional durante el embarazo",
      "Porque el embarazo no cambia en nada el manejo de un trauma",
      "Porque solo importa el bienestar de la madre, nunca el del bebé",
    ],
    correctAnswer: 0,
  },
  {
    id: 231,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "medium",
    question:
      "Una embarazada de tercer trimestre presenta presión arterial muy elevada, hinchazón en manos/cara y dolor de cabeza intenso. ¿Qué se debe sospechar?",
    options: [
      "Una posible preeclampsia",
      "Una simple retención de líquidos sin importancia",
      "Una alergia alimentaria",
      "Un resfriado con congestión",
    ],
    correctAnswer: 0,
  },
  {
    id: 232,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "medium",
    question:
      "Una mujer embarazada con preeclampsia conocida presenta convulsiones. ¿Cómo se denomina este cuadro y qué gravedad implica?",
    options: [
      "Eclampsia, una emergencia obstétrica grave",
      "Una simple crisis de ansiedad sin mayor riesgo",
      "Un episodio normal del embarazo sin gravedad",
      "Una migraña común sin relación con el embarazo",
    ],
    correctAnswer: 0,
  },
  {
    id: 233,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "medium",
    question:
      "Una embarazada presenta sangrado vaginal abundante con dolor abdominal intenso y súbito en el tercer trimestre. ¿Qué se debe sospechar?",
    options: [
      "Un posible desprendimiento de placenta",
      "Una simple menstruación adelantada, lo cual es imposible en el embarazo pero se descarta igualmente por sangrado anómalo",
      "Una infección urinaria leve sin más relevancia",
      "Un cólico digestivo simple",
    ],
    correctAnswer: 0,
  },
  {
    id: 234,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "medium",
    question:
      "Durante un parto de emergencia fuera de un centro médico, si el bebé nace, ¿qué es prioritario hacer con el recién nacido de inmediato?",
    options: [
      "Secarlo, mantenerlo abrigado y estimular su respiración y llanto",
      "Bañarlo con agua fría de inmediato",
      "Dejarlo sin ninguna manipulación hasta que llegue ayuda",
      "Separarlo inmediatamente de la madre sin ninguna razón médica",
    ],
    correctAnswer: 0,
  },
  {
    id: 235,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "medium",
    question:
      "Una mujer en trabajo de parto activo refiere sensación de pujo intenso y se observa que la cabeza del bebé ya es visible. ¿Qué se debe hacer?",
    options: [
      "Prepararse para asistir el parto en el lugar, ya que no da tiempo de trasladarse",
      "Insistir en el traslado inmediato aunque el parto sea inminente",
      "Pedirle que aguante y cruce las piernas hasta llegar al hospital",
      "Ignorar la situación hasta que lleguen los paramédicos",
    ],
    correctAnswer: 0,
  },
  {
    id: 236,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "hard",
    question:
      "¿Por qué la eclampsia representa una emergencia neurológica y no solo obstétrica?",
    options: [
      "Porque involucra convulsiones por afectación cerebral secundaria a la hipertensión severa y disfunción endotelial",
      "Porque solo afecta al útero sin ninguna repercusión sistémica",
      "Porque nunca se asocia a alteraciones de la presión arterial",
      "Porque es exactamente igual a una convulsión epiléptica sin relación con el embarazo",
    ],
    correctAnswer: 0,
  },
  {
    id: 237,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "hard",
    question:
      "En un desprendimiento de placenta severo, ¿por qué el sangrado visible externamente puede no reflejar la verdadera magnitud de la pérdida sanguínea?",
    options: [
      "Porque puede haber sangrado retroplacentario oculto (hemorragia interna) no visible externamente",
      "Porque el sangrado siempre es proporcional exactamente a lo que se observa externamente",
      "Porque el desprendimiento de placenta nunca causa sangrado interno",
      "Porque la placenta no tiene ningún aporte sanguíneo relevante",
    ],
    correctAnswer: 0,
  },
  {
    id: 238,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "hard",
    question:
      "¿Qué es el sulfato de magnesio y por qué se utiliza en el manejo de la preeclampsia grave/eclampsia?",
    options: [
      "Un medicamento usado para prevenir o tratar las convulsiones asociadas a estas condiciones",
      "Un simple suplemento nutricional sin efecto en las convulsiones",
      "Un medicamento usado exclusivamente para el dolor de parto",
      "Un anestésico general para el parto",
    ],
    correctAnswer: 0,
  },
  {
    id: 239,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "hard",
    question:
      "En un prolapso de cordón umbilical durante el parto, ¿por qué se considera una emergencia obstétrica crítica?",
    options: [
      "Porque la compresión del cordón puede interrumpir el flujo de oxígeno al feto",
      "Porque no tiene ningún impacto en el bienestar fetal",
      "Porque solo afecta la comodidad materna sin riesgo fetal",
      "Porque acelera de forma segura el parto sin ningún riesgo",
    ],
    correctAnswer: 0,
  },
  {
    id: 240,
    type: "clinic",
    category: "Emergencias obstetricas",
    difficulty: "hard",
    question:
      "¿Por qué, tras el nacimiento de un bebé en un parto de emergencia, se debe prestar atención tanto al recién nacido como a la posible hemorragia posparto materna?",
    options: [
      "Porque el útero debe contraerse adecuadamente tras el parto para prevenir una hemorragia posparto significativa",
      "Porque el sangrado posparto nunca representa un riesgo real",
      "Porque una vez nace el bebé no hay ningún riesgo adicional para la madre",
      "Porque el útero no tiene ninguna función después del parto",
    ],
    correctAnswer: 0,
  },
  {
    id: 241,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "easy",
    question:
      "Un lactante presenta fiebre leve, está alerta, juega y se alimenta con normalidad. ¿Qué conducta es apropiada?",
    options: [
      "Control de la fiebre en casa y observación",
      "Trasladarlo de emergencia de inmediato sin evaluar más",
      "Aplicar hielo directo sobre la piel",
      "Ignorar por completo la fiebre sin ningún cuidado",
    ],
    correctAnswer: 0,
  },
  {
    id: 242,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "easy",
    question:
      "Un niño pequeño se traga accidentalmente un objeto pequeño y no presenta dificultad para respirar ni tos. ¿Qué se recomienda?",
    options: [
      "Observarlo y buscar evaluación médica según el tipo de objeto",
      "Ignorarlo completamente sin ninguna consulta",
      "Inducir el vómito de inmediato en todos los casos",
      "Darle de comer alimentos sólidos grandes de inmediato",
    ],
    correctAnswer: 0,
  },
  {
    id: 243,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "easy",
    question:
      "Un bebé llora de forma inconsolable tras una caída leve desde poca altura, sin pérdida de consciencia ni vómito. ¿Qué se recomienda?",
    options: [
      "Observación cuidadosa por signos de alarma en las horas siguientes",
      "Ignorar el llanto por completo",
      "Darle un golpe suave para 'distraerlo'",
      "Hacerlo dormir profundamente sin ninguna vigilancia",
    ],
    correctAnswer: 0,
  },
  {
    id: 244,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "easy",
    question:
      "Un niño con diarrea leve sigue jugando, bebe líquidos con normalidad y no tiene signos de deshidratación. ¿Qué se recomienda?",
    options: [
      "Mantener buena hidratación oral y observar en casa",
      "Restringir todos los líquidos",
      "Trasladarlo de inmediato a emergencias sin evaluar más signos",
      "Darle medicamentos antidiarreicos de adultos sin indicación",
    ],
    correctAnswer: 0,
  },
  {
    id: 245,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "easy",
    question:
      "Un niño con fiebre presenta una convulsión breve que termina en menos de un minuto y luego recupera consciencia. ¿Qué se sospecha comúnmente en este contexto?",
    options: [
      "Una convulsión febril simple",
      "Una intoxicación alimentaria grave",
      "Una fractura craneal",
      "Una alergia alimentaria severa",
    ],
    correctAnswer: 0,
  },
  {
    id: 246,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "medium",
    question:
      "Un lactante presenta fiebre alta, letargo marcado, dificultad para despertar y rechazo del alimento. ¿Qué se debe sospechar?",
    options: [
      "Una posible infección grave (como sepsis) que requiere evaluación urgente",
      "Un simple resfriado sin gravedad",
      "Un cólico digestivo pasajero sin importancia",
      "Un episodio de cansancio normal por sueño insuficiente",
    ],
    correctAnswer: 0,
  },
  {
    id: 247,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "medium",
    question:
      "Un niño con diarrea presenta ojos hundidos, boca seca, llanto sin lágrimas y disminución de la orina. ¿Qué se debe sospechar?",
    options: [
      "Deshidratación moderada a severa",
      "Una simple sed pasajera sin importancia clínica",
      "Un cuadro alérgico leve",
      "Un resfriado común sin relación con la diarrea",
    ],
    correctAnswer: 0,
  },
  {
    id: 248,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "medium",
    question:
      "Un niño con crup presenta estridor en reposo (no solo al llorar) y tiraje costal visible. ¿Qué gravedad sugiere esto?",
    options: [
      "Un cuadro moderado a severo que requiere evaluación médica urgente",
      "Un cuadro leve sin necesidad de evaluación",
      "Que el niño está completamente sano",
      "Que se trata solo de ansiedad del niño",
    ],
    correctAnswer: 0,
  },
  {
    id: 249,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "medium",
    question:
      "Un niño pequeño ingiere accidentalmente varias pastillas de un medicamento de un adulto en casa. Está asintomático por ahora. ¿Qué se debe hacer?",
    options: [
      "Contactar a un centro de toxicología o emergencias de inmediato, aunque esté asintomático",
      "Esperar a que aparezcan síntomas antes de hacer algo",
      "Darle de comer para 'diluir' el medicamento",
      "Ignorarlo si el niño se ve bien en ese momento",
    ],
    correctAnswer: 0,
  },
  {
    id: 250,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "medium",
    question:
      "Un bebé de 3 meses presenta episodios breves donde deja de respirar por unos segundos y se pone pálido o morado, luego se recupera solo. ¿Qué se debe hacer?",
    options: [
      "Buscar evaluación médica urgente para investigar la causa",
      "Ignorarlo si se recupera rápido cada vez",
      "Asumir que es completamente normal sin evaluación",
      "Solo anotarlo para mencionarlo en el próximo control de rutina en meses",
    ],
    correctAnswer: 0,
  },
  {
    id: 251,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "hard",
    question:
      "¿Por qué los niños pueden mantener signos vitales aparentemente normales hasta fases muy avanzadas de shock, a diferencia de los adultos?",
    options: [
      "Porque tienen una gran capacidad de compensación fisiológica (vasoconstricción y taquicardia) antes de que caiga la presión arterial",
      "Porque los niños nunca desarrollan shock",
      "Porque su presión arterial siempre es más alta que la de un adulto",
      "Porque no tienen mecanismos de compensación cardiovascular",
    ],
    correctAnswer: 0,
  },
  {
    id: 252,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "hard",
    question:
      "En la reanimación pediátrica, ¿por qué la causa más común de paro cardiorrespiratorio en niños suele ser de origen respiratorio y no cardiaco primario, a diferencia de los adultos?",
    options: [
      "Porque las patologías respiratorias (como obstrucción de vía aérea o hipoxia) son más frecuentes como causa inicial en la infancia",
      "Porque los niños tienen más enfermedad coronaria que los adultos",
      "Porque el corazón pediátrico es estructuralmente igual de propenso a arritmias que el de un adulto mayor",
      "Porque no existen causas respiratorias de paro en pediatría",
    ],
    correctAnswer: 0,
  },
  {
    id: 253,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "hard",
    question:
      "Un lactante con bronquiolitis presenta aleteo nasal, retracciones intercostales marcadas y frecuencia respiratoria muy elevada. ¿Qué indica este cuadro clínico?",
    options: [
      "Dificultad respiratoria significativa que requiere evaluación y manejo urgente",
      "Un patrón respiratorio normal para la edad",
      "Que el niño está mejorando de su enfermedad",
      "Un signo de que solo necesita más abrigo",
    ],
    correctAnswer: 0,
  },
  {
    id: 254,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "hard",
    question:
      "¿Por qué el maltrato infantil debe considerarse en el diagnóstico diferencial ante ciertos patrones de lesión, como fracturas en diferentes etapas de curación o hematomas en zonas atípicas?",
    options: [
      "Porque estos patrones son poco compatibles con mecanismos accidentales típicos y sugieren posible abuso",
      "Porque estas lesiones siempre son accidentales sin excepción",
      "Porque no es responsabilidad del personal de salud considerar esta posibilidad",
      "Porque los niños se lesionan siempre de forma idéntica sin importar la causa",
    ],
    correctAnswer: 0,
  },
  {
    id: 255,
    type: "clinic",
    category: "Emergencias pediatricas",
    difficulty: "hard",
    question:
      "En la valoración pediátrica con el 'triángulo de evaluación pediátrica', ¿qué tres componentes se evalúan rápidamente a simple vista antes de tocar al paciente?",
    options: [
      "Apariencia general, trabajo respiratorio y circulación de la piel",
      "Peso, talla y temperatura corporal exacta",
      "Grupo sanguíneo, alergias y vacunas",
      "Nombre, edad y dirección de residencia",
    ],
    correctAnswer: 0,
  },
  {
    id: 256,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "easy",
    question:
      "Un adulto ingiere accidentalmente una cantidad pequeña de un producto de limpieza doméstico y está consciente sin dificultad para respirar. ¿Qué se debe hacer primero?",
    options: [
      "Llamar a un centro de toxicología o emergencias para orientación específica",
      "Inducir el vómito de inmediato sin consultar",
      "Darle de beber grandes cantidades de leche sin indicación",
      "Ignorarlo si no presenta síntomas inmediatos",
    ],
    correctAnswer: 0,
  },
  {
    id: 257,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "easy",
    question:
      "Una persona presenta mareo y dolor de cabeza tras estar en una habitación cerrada con un calentador de gas encendido. ¿Qué se debe sospechar?",
    options: [
      "Una posible intoxicación por monóxido de carbono",
      "Una simple deshidratación",
      "Un resfriado común",
      "Una alergia alimentaria",
    ],
    correctAnswer: 0,
  },
  {
    id: 258,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "easy",
    question:
      "Un trabajador presenta irritación en los ojos y dificultad respiratoria tras inhalar vapores de un producto químico en su trabajo. ¿Qué se debe hacer primero?",
    options: [
      "Alejarlo de la fuente de exposición hacia un lugar con aire fresco",
      "Dejarlo en el mismo lugar mientras se resuelve el problema",
      "Darle de comer inmediatamente",
      "Ignorar los síntomas si parecen leves",
    ],
    correctAnswer: 0,
  },
  {
    id: 259,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "easy",
    question:
      "Una persona ingiere accidentalmente una cantidad de medicamento mayor a la indicada. Está consciente y sin síntomas graves aún. ¿Qué se recomienda?",
    options: [
      "Contactar a un centro de toxicología o servicios de emergencia para orientación",
      "Esperar a que aparezcan síntomas graves antes de actuar",
      "Inducir el vómito sin ninguna orientación profesional",
      "Ignorarlo porque 'seguramente no pasa nada'",
    ],
    correctAnswer: 0,
  },
  {
    id: 260,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "easy",
    question:
      "¿Qué se debe hacer si una sustancia tóxica entra en contacto con los ojos?",
    options: [
      "Lavar el ojo con abundante agua limpia durante varios minutos",
      "Frotar el ojo con fuerza",
      "Aplicar una gota de otro químico para 'neutralizar'",
      "No hacer nada si no duele de inmediato",
    ],
    correctAnswer: 0,
  },
  {
    id: 261,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "medium",
    question:
      "Un paciente con intoxicación por monóxido de carbono presenta cefalea, confusión y coloración de piel rojo cereza. ¿Cuál es el tratamiento inicial prioritario?",
    options: [
      "Retirarlo de la fuente y administrar oxígeno al 100% lo antes posible",
      "Darle café para 'despertarlo'",
      "Aplicar hielo en la frente únicamente",
      "Ignorar los síntomas si camina por sí mismo",
    ],
    correctAnswer: 0,
  },
  {
    id: 262,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "medium",
    question:
      "Una persona con intento de intoxicación intencional por múltiples pastillas está consciente pero somnolienta. ¿Qué conducta es prioritaria además del traslado urgente?",
    options: [
      "Vigilar de cerca la vía aérea y el nivel de consciencia por riesgo de deterioro",
      "Dejarla sola para que 'descanse'",
      "Darle café para mantenerla despierta en vez de buscar ayuda médica",
      "Ignorar el riesgo si aún puede hablar",
    ],
    correctAnswer: 0,
  },
  {
    id: 263,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "medium",
    question:
      "Un niño ingiere accidentalmente un producto derivado del petróleo (como gasolina o keroseno). ¿Por qué NO se recomienda inducir el vómito en este caso?",
    options: [
      "Por el alto riesgo de aspiración a los pulmones y neumonitis química",
      "Porque estos productos no son tóxicos",
      "Porque el vómito siempre es seguro en cualquier intoxicación",
      "Porque no tiene ninguna relación con el sistema respiratorio",
    ],
    correctAnswer: 0,
  },
  {
    id: 264,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "medium",
    question:
      "Un paciente presenta pupilas muy pequeñas (mióticas), respiración muy lenta y disminución del nivel de consciencia tras posible uso de sustancias. ¿Qué intoxicación se debe sospechar principalmente?",
    options: [
      "Una posible sobredosis de opioides",
      "Una intoxicación por alcohol exclusivamente",
      "Una alergia alimentaria",
      "Una intoxicación por cafeína",
    ],
    correctAnswer: 0,
  },
  {
    id: 265,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "medium",
    question:
      "Un paciente presenta agitación extrema, pupilas dilatadas, taquicardia y temperatura corporal elevada tras posible uso de estimulantes. ¿Qué se debe priorizar en su manejo inicial?",
    options: [
      "Mantener un ambiente tranquilo, monitorizar signos vitales y buscar atención médica urgente",
      "Administrar estimulantes adicionales para 'contrarrestar'",
      "Ignorar los signos vitales si el paciente está despierto",
      "Restringirlo físicamente sin ninguna evaluación médica",
    ],
    correctAnswer: 0,
  },
  {
    id: 266,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "hard",
    question:
      "¿Por qué la intoxicación por paracetamol puede ser engañosamente silenciosa en las primeras 24 horas, a pesar del daño hepático que se está desarrollando?",
    options: [
      "Porque los síntomas iniciales pueden ser leves o inespecíficos (náuseas, malestar) mientras el daño hepático progresa silenciosamente",
      "Porque el paracetamol nunca causa daño hepático real",
      "Porque los síntomas siempre aparecen de inmediato y son evidentes",
      "Porque el hígado se regenera instantáneamente sin ningún daño",
    ],
    correctAnswer: 0,
  },
  {
    id: 267,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "hard",
    question:
      "En una intoxicación por organofosforados, ¿qué conjunto de síntomas colinérgicos (a veces recordado con la nemotecnia SLUDGE) se puede observar?",
    options: [
      "Salivación, lagrimeo, micción, diarrea, molestias gastrointestinales y emesis excesivos",
      "Estreñimiento, sequedad de boca y visión normal",
      "Aumento aislado del apetito sin otros síntomas",
      "Solamente picazón cutánea sin síntomas sistémicos",
    ],
    correctAnswer: 0,
  },
  {
    id: 268,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "hard",
    question:
      "¿Por qué la naloxona puede requerir dosis repetidas en una sobredosis de ciertos opioides de acción prolongada?",
    options: [
      "Porque su duración de acción puede ser más corta que la del opioide, permitiendo que reaparezca la depresión respiratoria",
      "Porque la naloxona nunca revierte completamente ningún opioide",
      "Porque una sola dosis siempre es suficiente sin excepción",
      "Porque la naloxona empeora los efectos del opioide",
    ],
    correctAnswer: 0,
  },
  {
    id: 269,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "hard",
    question:
      "¿Por qué el carbón activado pierde gran parte de su utilidad si se administra varias horas después de la ingesta de la mayoría de tóxicos?",
    options: [
      "Porque su eficacia depende de administrarse tempranamente, antes de que el tóxico se absorba en el tracto gastrointestinal",
      "Porque el carbón activado mejora su efecto cuanto más tiempo pase",
      "Porque el carbón activado no tiene relación con la absorción intestinal",
      "Porque debe administrarse siempre 24 horas después de la ingesta",
    ],
    correctAnswer: 0,
  },
  {
    id: 270,
    type: "clinic",
    category: "Intoxicaciones agudas",
    difficulty: "hard",
    question:
      "En una intoxicación grave por betabloqueantes o calcioantagonistas con bradicardia e hipotensión refractaria, ¿qué tratamiento específico se puede considerar en el ámbito hospitalario avanzado?",
    options: [
      "Terapia con altas dosis de insulina y glucosa (terapia hiperinsulinémica-euglucémica)",
      "Solo observación sin ninguna intervención específica",
      "Administración de más betabloqueantes para 'compensar'",
      "Restricción total de líquidos intravenosos sin otra medida",
    ],
    correctAnswer: 0,
  },
  {
    id: 271,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "easy",
    question:
      "Un niño se quema la mano con agua caliente y presenta enrojecimiento y dolor, sin ampollas. ¿Qué se recomienda?",
    options: [
      "Enfriar con agua tibia/fría corriente y cubrir con un apósito limpio",
      "Aplicar hielo directamente sobre la piel",
      "Reventar cualquier ampolla que aparezca después",
      "Aplicar aceite de cocina sobre la quemadura",
    ],
    correctAnswer: 0,
  },
  {
    id: 272,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "easy",
    question:
      "Una persona sufre una quemadura solar leve en la espalda tras estar mucho tiempo al sol, con piel enrojecida y algo de dolor. ¿Qué se recomienda?",
    options: [
      "Enfriar la piel, hidratar y evitar más exposición solar",
      "Aplicar hielo directo sobre la piel quemada",
      "Exponerse nuevamente al sol para 'curtir' la piel",
      "Ignorar por completo la quemadura",
    ],
    correctAnswer: 0,
  },
  {
    id: 273,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "easy",
    question:
      "Un adulto se quema al tocar una plancha caliente, con una pequeña zona enrojecida y dolorosa en el dedo. ¿Qué conducta inicial es correcta?",
    options: [
      "Enfriar con agua corriente durante varios minutos y cubrir",
      "Aplicar pasta dental sobre la zona",
      "Reventar cualquier ampolla de inmediato",
      "Ignorar la quemadura si es pequeña",
    ],
    correctAnswer: 0,
  },
  {
    id: 274,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "easy",
    question:
      "Una persona presenta una quemadura leve por fricción tras un raspón en el suelo, sin ampollas grandes. ¿Qué se recomienda?",
    options: [
      "Limpiar la zona y cubrir con un apósito limpio y no adherente",
      "Aplicar alcohol directamente sobre la herida",
      "Frotar la zona con fuerza para 'limpiarla mejor'",
      "Ignorar la lesión por completo",
    ],
    correctAnswer: 0,
  },
  {
    id: 275,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "easy",
    question:
      "Un niño se quema levemente el dedo con la llama de una vela. ¿Qué acción es apropiada?",
    options: [
      "Enfriar con agua corriente fresca por varios minutos",
      "Aplicar hielo directo sobre el dedo",
      "Frotar el dedo contra tela áspera",
      "Aplicar mantequilla sobre la quemadura",
    ],
    correctAnswer: 0,
  },
  {
    id: 276,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "medium",
    question:
      "Un adulto sufre una quemadura extensa en el pecho y ambos brazos tras un accidente doméstico, con ampollas grandes y dolor intenso. ¿Qué se debe priorizar además del manejo local de la quemadura?",
    options: [
      "Evaluar la vía aérea y el estado general, ya que la extensión sugiere riesgo de complicaciones sistémicas",
      "Solo aplicar crema y dejarlo en casa sin más evaluación",
      "Ignorar el resto del cuerpo y enfocarse solo en la piel",
      "Aplicar hielo directo de forma prolongada sobre toda la zona",
    ],
    correctAnswer: 0,
  },
  {
    id: 277,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "medium",
    question:
      "Una persona sufre una quemadura en un incendio dentro de un espacio cerrado y presenta tos, voz ronca y hollín alrededor de la nariz. ¿Qué se debe sospechar?",
    options: [
      "Posible lesión por inhalación que compromete la vía aérea",
      "Que no hay ningún riesgo adicional más allá de la piel",
      "Una simple irritación de garganta sin relevancia",
      "Una alergia estacional coincidente",
    ],
    correctAnswer: 0,
  },
  {
    id: 278,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "medium",
    question:
      "Un paciente presenta una quemadura circunferencial en un brazo que empieza a hincharse progresivamente, con dedos fríos y pálidos. ¿Qué se debe sospechar?",
    options: [
      "Compromiso circulatorio por efecto de torniquete debido a la hinchazón",
      "Que la circulación mejora con la hinchazón",
      "Que no hay ningún riesgo vascular en este caso",
      "Una simple reacción alérgica sin relación con la quemadura",
    ],
    correctAnswer: 0,
  },
  {
    id: 279,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "medium",
    question:
      "Un trabajador sufre una quemadura eléctrica al tocar un cable con corriente, con un punto de entrada visible en la mano y otro de salida en el pie. ¿Qué se debe sospechar además de las lesiones cutáneas visibles?",
    options: [
      "Posible daño interno a lo largo del trayecto de la corriente, incluyendo el corazón",
      "Que solo hay daño superficial en los puntos visibles",
      "Que no requiere ninguna evaluación médica adicional",
      "Que el daño es exclusivamente estético",
    ],
    correctAnswer: 0,
  },
  {
    id: 280,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "medium",
    question:
      "Una quemadura de segundo grado cubre gran parte de un muslo en un adulto joven. ¿Qué manejo inicial es apropiado antes de trasladar al paciente?",
    options: [
      "Cubrir con un apósito limpio y seco, sin romper las ampollas, y controlar el dolor",
      "Aplicar hielo directo y prolongado sobre toda la zona",
      "Reventar las ampollas para 'liberar presión'",
      "Aplicar ungüentos caseros no estériles sobre la herida",
    ],
    correctAnswer: 0,
  },
  {
    id: 281,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "hard",
    question:
      "¿Por qué las quemaduras extensas (por ejemplo, más del 20% de superficie corporal) requieren reanimación con líquidos intravenosos calculada según fórmulas específicas?",
    options: [
      "Porque la pérdida masiva de líquidos por la piel dañada puede llevar a shock hipovolémico si no se repone adecuadamente",
      "Porque los líquidos intravenosos no tienen ninguna relación con las quemaduras",
      "Porque las quemaduras nunca causan pérdida significativa de líquidos",
      "Porque solo se usan líquidos para el dolor, no para el volumen circulante",
    ],
    correctAnswer: 0,
  },
  {
    id: 282,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "hard",
    question:
      "En quemaduras por inhalación con compromiso progresivo de la vía aérea (edema de laringe), ¿por qué se prioriza la evaluación temprana para posible manejo avanzado de la vía aérea?",
    options: [
      "Porque el edema puede progresar rápidamente y obstruir completamente la vía aérea en pocas horas",
      "Porque el edema de vía aérea nunca progresa en quemaduras",
      "Porque las quemaduras nunca afectan la vía respiratoria",
      "Porque siempre mejora espontáneamente sin ninguna intervención",
    ],
    correctAnswer: 0,
  },
  {
    id: 283,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "hard",
    question:
      "¿Por qué una escarotomía (incisión quirúrgica en la escara) puede ser necesaria en quemaduras circunferenciales profundas de una extremidad?",
    options: [
      "Para liberar la presión que compromete la circulación y prevenir isquemia del tejido",
      "Para mejorar la estética de la cicatriz únicamente",
      "Porque no tiene ninguna función médica real",
      "Para aumentar la presión en la extremidad de forma intencional",
    ],
    correctAnswer: 0,
  },
  {
    id: 284,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "hard",
    question:
      "En una quemadura eléctrica de alto voltaje, ¿por qué se debe realizar un monitoreo cardiaco (ECG) incluso si el paciente se ve estable?",
    options: [
      "Porque la corriente eléctrica puede causar arritmias cardiacas, a veces de aparición diferida",
      "Porque las quemaduras eléctricas nunca afectan el corazón",
      "Porque el ECG solo sirve para evaluar la piel quemada",
      "Porque no existe ningún riesgo cardiaco en quemaduras eléctricas",
    ],
    correctAnswer: 0,
  },
  {
    id: 285,
    type: "clinic",
    category: "Quemaduras graves",
    difficulty: "hard",
    question:
      "¿Por qué el manejo del dolor en un gran quemado debe balancearse cuidadosamente con la vigilancia hemodinámica y respiratoria?",
    options: [
      "Porque algunos analgésicos pueden causar depresión respiratoria o hipotensión en un paciente ya comprometido por la quemadura",
      "Porque el dolor en grandes quemados no requiere ningún manejo",
      "Porque los analgésicos siempre son completamente seguros sin ningún monitoreo",
      "Porque el dolor no tiene relación con el estado hemodinámico del paciente",
    ],
    correctAnswer: 0,
  },
  {
    id: 286,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "easy",
    question:
      "Un paciente presenta piel pálida, fría y sudorosa, además de sentirse débil y mareado tras una herida sangrante. ¿Qué se debe sospechar?",
    options: [
      "Un posible shock por pérdida de sangre",
      "Que está simplemente cansado sin ninguna relación con la herida",
      "Una alergia cutánea leve",
      "Un resfriado común",
    ],
    correctAnswer: 0,
  },
  {
    id: 287,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "easy",
    question:
      "Ante la sospecha de shock, ¿qué posición corporal ayuda mientras se espera ayuda médica, si no hay lesión de columna?",
    options: [
      "Acostado con las piernas ligeramente elevadas",
      "De pie caminando activamente",
      "Sentado con la cabeza muy baja entre las piernas de forma forzada",
      "Boca abajo completamente",
    ],
    correctAnswer: 0,
  },
  {
    id: 288,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "easy",
    question:
      "Un paciente con una infección de piel presenta fiebre alta y se ve muy decaído. ¿Qué se debe hacer?",
    options: [
      "Buscar evaluación médica pronto, ya que una infección puede complicarse",
      "Ignorar la fiebre si el paciente sigue hablando",
      "Aplicar hielo directo sobre toda la piel infectada sin evaluación",
      "Esperar varios días antes de considerar consultar",
    ],
    correctAnswer: 0,
  },
  {
    id: 289,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "easy",
    question:
      "¿Qué se debe evitar dar a una persona que muestra signos de shock mientras se espera ayuda?",
    options: [
      "Alimentos o líquidos por boca",
      "Una manta para mantenerla abrigada",
      "Palabras de tranquilidad",
      "Compañía mientras llega la ayuda",
    ],
    correctAnswer: 0,
  },
  {
    id: 290,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "easy",
    question:
      "Un paciente con una reacción alérgica grave presenta hinchazón facial y dificultad para respirar. ¿Qué tipo de shock se debe sospechar?",
    options: [
      "Shock anafiláctico",
      "Shock por deshidratación exclusivamente",
      "Un simple mareo sin relación con shock",
      "Un episodio de ansiedad sin relevancia médica",
    ],
    correctAnswer: 0,
  },
  {
    id: 291,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "medium",
    question:
      "Un paciente con una infección urinaria conocida presenta fiebre alta, confusión y presión arterial baja. ¿Qué se debe sospechar?",
    options: [
      "Una posible sepsis con progresión a shock séptico",
      "Una simple molestia urinaria sin mayor relevancia",
      "Una alergia alimentaria",
      "Un resfriado común",
    ],
    correctAnswer: 0,
  },
  {
    id: 292,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "medium",
    question:
      "¿Por qué la confusión o alteración del estado mental en un paciente con sospecha de infección grave es un signo de alarma importante?",
    options: [
      "Porque puede indicar mala perfusión cerebral asociada a sepsis o shock",
      "Porque la confusión nunca se relaciona con infecciones",
      "Porque siempre indica que el paciente está simplemente cansado",
      "Porque no tiene ninguna relevancia clínica en este contexto",
    ],
    correctAnswer: 0,
  },
  {
    id: 293,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "medium",
    question:
      "Un paciente politraumatizado presenta taquicardia marcada, pero su presión arterial aún se mantiene dentro de rango 'normal'. ¿Cómo se interpreta esto?",
    options: [
      "Puede tratarse de shock compensado, donde el cuerpo aún mantiene la presión pese a la pérdida de volumen",
      "Que definitivamente no hay ningún riesgo de shock",
      "Que la taquicardia no tiene relación con una posible hemorragia",
      "Que la presión arterial normal descarta cualquier posibilidad de shock",
    ],
    correctAnswer: 0,
  },
  {
    id: 294,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "medium",
    question:
      "¿Qué parámetro simple, además de la presión arterial, ayuda a evaluar la perfusión periférica en un paciente con sospecha de shock?",
    options: [
      "El tiempo de llenado capilar (al presionar la piel y ver cuánto tarda en recuperar su color)",
      "El color de la ropa del paciente",
      "El tono de voz al hablar únicamente",
      "La preferencia alimentaria del paciente",
    ],
    correctAnswer: 0,
  },
  {
    id: 295,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "medium",
    question:
      "Un paciente con quemaduras extensas desarrolla, días después, fiebre, confusión e hipotensión. ¿Qué complicación se debe sospechar en este contexto?",
    options: [
      "Una posible sepsis originada en la herida por quemadura",
      "Que la quemadura ya no representa ningún riesgo tras los primeros días",
      "Una simple reacción al dolor sin relación infecciosa",
      "Un episodio de ansiedad sin relación con la quemadura",
    ],
    correctAnswer: 0,
  },
  {
    id: 296,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "hard",
    question:
      "¿Por qué el lactato sérico elevado es un marcador útil de gravedad en un paciente con sospecha de shock séptico?",
    options: [
      "Porque refleja hipoperfusión tisular y metabolismo anaeróbico, indicando compromiso circulatorio significativo",
      "Porque el lactato siempre está elevado en personas sanas sin ninguna relación con el shock",
      "Porque no tiene ninguna relación con la perfusión de los tejidos",
      "Porque solo se relaciona con el ejercicio físico intenso, sin valor clínico en sepsis",
    ],
    correctAnswer: 0,
  },
  {
    id: 297,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "hard",
    question:
      "En el shock séptico, ¿por qué puede coexistir vasodilatación periférica (piel caliente) en las fases iniciales, a diferencia del shock hipovolémico?",
    options: [
      "Porque los mediadores inflamatorios liberados durante la sepsis producen vasodilatación generalizada",
      "Porque el shock séptico nunca afecta el tono vascular",
      "Porque siempre hay vasoconstricción idéntica a la del shock hipovolémico",
      "Porque la sepsis no tiene relación con el sistema circulatorio",
    ],
    correctAnswer: 0,
  },
  {
    id: 298,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "hard",
    question:
      "¿Por qué la administración temprana de líquidos intravenosos y antibióticos dentro de la primera hora es crítica en el manejo del shock séptico?",
    options: [
      "Porque cada hora de retraso se asocia con aumento significativo de la mortalidad",
      "Porque los antibióticos no tienen ningún impacto en el pronóstico de la sepsis",
      "Porque los líquidos intravenosos están siempre contraindicados en sepsis",
      "Porque el tiempo de administración no influye en el resultado clínico",
    ],
    correctAnswer: 0,
  },
  {
    id: 299,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "hard",
    question:
      "¿Qué diferencia fisiopatológica distingue al shock obstructivo (por ejemplo, por taponamiento cardiaco o neumotórax a tensión) de otros tipos de shock?",
    options: [
      "Se debe a una obstrucción mecánica del flujo sanguíneo, no a pérdida de volumen ni falla de bomba ni vasodilatación primaria",
      "Es exactamente igual al shock hipovolémico en su mecanismo",
      "Nunca afecta el gasto cardiaco",
      "Se debe siempre a una infección subyacente",
    ],
    correctAnswer: 0,
  },
  {
    id: 300,
    type: "clinic",
    category: "Shock y sepsis",
    difficulty: "hard",
    question:
      "En un paciente con shock de causa poco clara, ¿por qué la evaluación estructurada de los cuatro tipos principales de shock (hipovolémico, cardiogénico, distributivo y obstructivo) ayuda a guiar el tratamiento correcto?",
    options: [
      "Porque cada tipo requiere un manejo dirigido distinto (líquidos, soporte cardiaco, vasopresores o resolución de la obstrucción) y tratar el tipo equivocado puede empeorar al paciente",
      "Porque todos los tipos de shock se tratan exactamente de la misma forma sin ninguna diferencia",
      "Porque el tipo de shock nunca influye en las decisiones terapéuticas",
      "Porque solo existe un único tipo de shock en la práctica clínica",
    ],
    correctAnswer: 0,
  },
];

export default QUESTIONS;

export const QUIZ_SIZE = 10;
export const NORMAL_COUNT = 5;
export const CLINIC_COUNT = 5;
export const QUESTIONS_BY_DIFFICULTY: Record<Difficulty, number> = {
  easy: 2,
  medium: 2,
  hard: 1,
};

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function pickRandom(items: Question[], count: number): Question[] {
  return shuffle(items).slice(0, count);
}

function pickByTypeAndDifficulty(
  type: QuestionType,
  difficulty: Difficulty,
): Question[] {
  return QUESTIONS.filter((q) => q.type === type && q.difficulty === difficulty);
}

export function buildQuiz(): Question[] {
  const normal: Question[] = [
    ...pickByTypeAndDifficulty("normal", "easy"),
    ...pickByTypeAndDifficulty("normal", "medium"),
    ...pickByTypeAndDifficulty("normal", "hard"),
  ];
  const clinic: Question[] = [
    ...pickByTypeAndDifficulty("clinic", "easy"),
    ...pickByTypeAndDifficulty("clinic", "medium"),
    ...pickByTypeAndDifficulty("clinic", "hard"),
  ];

  const normalSelected: Question[] = [];
  for (const difficulty of ["easy", "medium", "hard"] as Difficulty[]) {
    normalSelected.push(
      ...pickRandom(
        normal.filter((q) => q.difficulty === difficulty),
        QUESTIONS_BY_DIFFICULTY[difficulty],
      ),
    );
  }
  const clinicSelected: Question[] = [];
  for (const difficulty of ["easy", "medium", "hard"] as Difficulty[]) {
    clinicSelected.push(
      ...pickRandom(
        clinic.filter((q) => q.difficulty === difficulty),
        QUESTIONS_BY_DIFFICULTY[difficulty],
      ),
    );
  }

  return shuffle([...normalSelected, ...clinicSelected]);
}
