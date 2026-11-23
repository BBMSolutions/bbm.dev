export const BBM_CONTACT = {
  phoneRaw: "9612405685",
  phoneFormatted: "961 240 5685",
  whatsappNumber: "529612405685",
  email: "gabrielhbs.dev@gmail.com",
  whatsappUrl: (message?: string) => {
    const text =
      message ??
      "Hola equipo BBM, me gustaría recibir información sobre sus soluciones digitales para mi empresa.";
    return `https://wa.me/529612405685?text=${encodeURIComponent(text)}`;
  },
  mailtoUrl: (subject?: string, body?: string) => {
    const s = subject ?? "Consulta sobre soluciones digitales — BBM";
    const b =
      body ??
      "Hola equipo BBM,\n\nMe gustaría agendar una conversación para conocer cómo pueden ayudarnos a optimizar los procesos de nuestra empresa.\n\nSaludos.";
    return `mailto:gabrielhbs.dev@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`;
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/propuestas", label: "Propuestas" },
  { href: "/equipo", label: "Equipo" },
  { href: "/asociados", label: "Asociados" },
] as const;

export const INSTITUTIONAL_CLIENTS = [
  {
    name: "A.C. CIME CHIAPAS",
    category: "Colegio de Ingenieros Mecánicos y Electricistas",
    summary:
      "Asociación civil de ingeniería en Chiapas que cuenta con y utiliza tecnología desarrollada por BBM para respaldar su gestión.",
    badge: "Tecnología BBM activa",
    logo: "/images/logos/cime-chiapas.webp",
    logoAlt: "Logotipo de A.C. CIME Chiapas",
  },
  {
    name: "ORG. Heliomaster",
    category: "Conservación ambiental y protección del medio ambiente",
    summary:
      "Organización orientada a la conservación ambiental y protección del medio ambiente que opera con tecnología desarrollada por BBM.",
    badge: "Tecnología BBM activa",
    logo: "/images/logos/heliomaster.webp",
    logoAlt: "Logotipo de ORG. Heliomaster",
  },
  {
    name: "A.C. DJI Chiapas",
    category: "Tecnología y operación especializada",
    summary:
      "Organización especializada que cuenta con y utiliza plataformas tecnológicas desarrolladas por BBM en su operación.",
    badge: "Tecnología BBM activa",
    logo: "/images/logos/dji-chiapas.webp",
    logoAlt: "Logotipo de DJI Chiapas",
  },
  {
    name: "A.C. AERO INDUSTRIAL CHIAPAS",
    category: "Soluciones con drones — ganadería a protección civil",
    summary:
      "Empresa dedicada a soluciones con drones para distintos contextos, desde ganadería hasta protección civil, respaldada con tecnología desarrollada por BBM.",
    badge: "Tecnología BBM activa",
    logo: "/images/logos/aero-industrial.webp",
    logoAlt: "Logotipo de Aero Industrial Chiapas",
  },
] as const;

export const SUBSCRIPTION_PLATFORMS = [
  {
    id: "bbm-talleres",
    name: "BBM TALLERES",
    tagline: "Gestión integral para talleres mecánicos automotrices en México",
    description:
      "Una herramienta ya desarrollada y lista para operar bajo suscripción que ordena por completo la operación diaria de tu taller: desde la recepción del vehículo hasta la entrega final.",
    highlights: [
      "Control total del proceso interno y asignación de trabajo a cada mecánico o técnico.",
      "Seguimiento paso a paso del flujo de reparaciones, refacciones y tiempos de entrega.",
      "Comunicación clara y directa para mantener informado al cliente sobre el estado de su automóvil.",
      "Historial ordenado de servicios y mayor transparencia en cobros y operación.",
    ],
    imageSrc: "/images/sections/bbm-talleres.webp",
    imageAlt: "Operación diaria con BBM TALLERES en un taller mecánico automotriz",
    media: {
      title: "Operación diaria con BBM TALLERES",
      description:
        "Fotografía real de un jefe de taller o asesor de servicio utilizando una tableta o computadora junto a un vehículo en zona de trabajo ordenada, mostrando control y seguimiento de reparaciones.",
      dimensions: "1400 × 900 px",
      format: "WebP / JPG",
    },
  },
  {
    id: "bbm-consultorios",
    name: "BBM CONSULTORIOS",
    tagline: "Administración clara para consultorios y especialistas de la salud",
    description:
      "Diseñada para consultorios de psicología, odontología, medicina familiar y otras áreas de la salud que buscan orden, puntualidad y respaldo seguro de la información de sus pacientes.",
    highlights: [
      "Organización ágil de citas, agendas y horarios por especialista o consultorio.",
      "Generación ordenada de recetas y documentos clínicos sin trámites repetitivos.",
      "Resguardo estructurado y consulta rápida del historial médico de cada paciente.",
      "Flujo de trabajo limpio desde la recepción hasta el seguimiento posterior a la consulta.",
    ],
    imageSrc: "/images/sections/bbm-consultorios.webp",
    imageAlt: "Gestión clínica con BBM CONSULTORIOS en un consultorio profesional",
    media: {
      title: "Gestión clínica con BBM CONSULTORIOS",
      description:
        "Fotografía profesional de un especialista de la salud en su escritorio consultando la agenda y el historial de un paciente en una computadora portátil en un consultorio luminoso y ordenado.",
      dimensions: "1400 × 900 px",
      format: "WebP / JPG",
    },
  },
] as const;

export interface ProposalCategory {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  lead: string;
  description: string[];
  metrics: { value: string; label: string; detail: string }[];
  beforeItems: string[];
  afterItems: string[];
  capabilities: string[];
  imageSrc: string;
  imageAlt: string;
  media: {
    title: string;
    description: string;
    dimensions: string;
    format: string;
  };
}

export const PROPOSAL_CATEGORIES: ProposalCategory[] = [
  {
    id: "burocraticos",
    index: "01",
    title: "Procesos burocráticos o administrativos",
    shortTitle: "Administrativos",
    lead: "Elimina el papeleo tedioso, blinda el control interno y detén las fugas de dinero.",
    description: [
      "BBM desarrolla herramientas a la medida que eliminan por completo los trámites largos y el papeleo innecesario, simplificando cada proceso interno de tu empresa para que pueda ejecutarse de forma digital desde el escritorio, desde casa o desde cualquier lugar donde se encuentre tu equipo.",
      "Al digitalizar tus procesos se blinda el control de la operación: cada paso queda registrado con claridad, evitando que el personal se pase la responsabilidad cuando ocurre un error y respaldando toda la documentación necesaria para cualquier aclaración. Además, los problemas se detectan de manera sencilla y automática, entregando información clara directamente a la mano del dueño o encargado.",
      "Cuando los procesos involucran flujo de dinero, la digitalización te da la tranquilidad de rastrear peso por peso cómo se mueve cada recurso, evitando los robos hormiga y fortaleciendo la salud financiera del negocio.",
    ],
    metrics: [
      {
        value: "70%",
        label: "Más rápido",
        detail: "Procesos que antes tomaban días completos ahora se resuelven en una fracción del tiempo.",
      },
      {
        value: "214%",
        label: "Mayor fiabilidad",
        detail: "Registro paso a paso y respaldo documental que elimina confusiones y errores recurrentes.",
      },
      {
        value: "192%",
        label: "Aumento en ingresos",
        detail: "Al eliminar tareas repetitivas («la famosa talacha») y liberar el tiempo útil del personal.",
      },
      {
        value: "+37%",
        label: "Protección en flujo de dinero",
        detail: "Incremento potencial en ingresos al cerrar fugas y evitar robos hormiga paso a paso.",
      },
    ],
    beforeItems: [
      "Carpetas físicas, hojas sueltas y aprobaciones que tardan días en completarse.",
      "Confusión sobre quién autorizó o realizó cada paso cuando surge un error.",
      "Horas perdidas en tareas repetitivas y revisión manual de reportes.",
      "Falta de visibilidad real sobre caja, gastos menores y movimientos diarios.",
    ],
    afterItems: [
      "Trámites internos resueltos digitalmente desde oficina, casa o teléfono.",
      "Registro exacto de cada responsable, fecha y documento de respaldo.",
      "Reportes automáticos y fáciles de leer directamente para la dirección.",
      "Control paso a paso del dinero que frena fugas y comportamientos anómalos.",
    ],
    capabilities: [
      "Control de aprobaciones, autorizaciones y expedientes internos",
      "Seguimiento de caja, cobros, pagos y comprobación de gastos",
      "Reportes automáticos listos para toma de decisiones del dueño o director",
      "Bitácoras de actividad por trabajador con respaldo verificable",
    ],
    imageSrc: "/images/sections/control-administrativo.webp",
    imageAlt: "Dirección y control administrativo sin papel con BBM",
    media: {
      title: "Dirección y control administrativo sin papel",
      description:
        "Fotografía editorial de un director o administradora revisando un tablero claro de indicadores y finanzas en un monitor de escritorio limpio, sin pilas de papeles, transmitiendo orden y control.",
      dimensions: "1600 × 1000 px",
      format: "WebP / JPG",
    },
  },
  {
    id: "industriales",
    index: "02",
    title: "Procesos industriales",
    shortTitle: "Industriales",
    lead: "Mayor velocidad operativa, control de planta y visibilidad real de tu producción.",
    description: [
      "BBM impulsa la automatización y digitalización de procesos industriales para lograr mayor rapidez al momento de generar recursos, productos o ingresos. Sustituimos los registros manuales en bitácoras de papel y hojas dispersas por herramientas claras que conectan lo que sucede en piso con la dirección general.",
      "Desde el ingreso de materia prima hasta la salida de producto terminado, cada turno, máquina, orden de trabajo y revisión de calidad queda registrada en tiempo real. Esto reduce tiempos muertos, evita mermas ocultas, previene paros inesperados y permite identificar de inmediato dónde se frena la producción.",
      "El dueño o gerente de planta obtiene control preciso sobre costos reales, rendimiento por turno y cumplimiento de entregas, tomando decisiones con datos exactos y no con suposiciones.",
    ],
    metrics: [
      {
        value: "100%",
        label: "Trazabilidad por lote u orden",
        detail: "Conoce en qué etapa se encuentra cada orden de producción y quién la ejecutó.",
      },
      {
        value: "Tiempo real",
        label: "Control de inventarios y merma",
        detail: "Detecta faltantes de insumos, consumos anómalos y desperdicios antes de que escalen.",
      },
      {
        value: "Preventivo",
        label: "Seguimiento de mantenimiento",
        detail: "Alertas oportunas para maquinaria y equipo, evitando paros costosos no programados.",
      },
      {
        value: "Directo",
        label: "Productividad por turno",
        detail: "Información clara de entregas, tiempos de ciclo y desempeño operativo sin capturas dobles.",
      },
    ],
    beforeItems: [
      "Bitácoras en papel que se transcriben tarde o se pierden entre turnos.",
      "Desconocimiento del costo real de mermas, paros y materiales consumidos.",
      "Fallas en maquinaria detectadas solo cuando la línea ya se detuvo.",
      "Retrasos en entregas por falta de coordinación entre almacén y producción.",
    ],
    afterItems: [
      "Registro inmediato en piso desde tableta o computadora resistente.",
      "Control exacto de entradas, salidas, existencias y aprovechamiento de insumos.",
      "Calendario y alertas claras de mantenimiento preventivo y listas de verificación.",
      "Visibilidad completa del avance de cada pedido desde la oficina o el celular.",
    ],
    capabilities: [
      "Control de órdenes de producción, lotes y entregas",
      "Gestión de almacén, materia prima y detección de mermas",
      "Listas de verificación de calidad y seguridad en piso",
      "Bitácoras de mantenimiento de maquinaria y control de turnos",
    ],
    imageSrc: "/images/sections/supervision-industrial.webp",
    imageAlt: "Supervisión industrial y control en piso con BBM",
    media: {
      title: "Supervisión industrial y control en piso",
      description:
        "Fotografía de un ingeniero o supervisor industrial con casco y chaleco de seguridad revisando avances de producción o inventario en una tableta dentro de una nave industrial moderna e iluminada.",
      dimensions: "1600 × 1000 px",
      format: "WebP / JPG",
    },
  },
  {
    id: "academicos",
    index: "03",
    title: "Procesos académicos",
    shortTitle: "Académicos",
    lead: "Herramientas prácticas para directivos, administrativos y docentes en la gestión escolar.",
    description: [
      "BBM digitaliza los procesos académicos de escuelas, institutos y centros de capacitación, ofreciendo a directivos, personal administrativo y profesorado herramientas sencillas que facilitan la gestión diaria de los alumnos.",
      "Eliminamos las largas jornadas de captura duplicada, listas en papel y expedientes difíciles de ubicar. Toda la vida escolar —inscripciones, asistencia, calificaciones, horarios, pagos de colegiaturas y constancias— convive en un solo lugar ordenado y seguro.",
      "De esta manera, los docentes dedican más tiempo a enseñar, los administrativos mantienen control exacto de pagos y expedientes, y los padres de familia o alumnos reciben información oportuna y transparente.",
    ],
    metrics: [
      {
        value: "Centralizado",
        label: "Expediente escolar completo",
        detail: "Datos de alumnos, documentación e historial académico accesibles en segundos.",
      },
      {
        value: "Ágil",
        label: "Asistencia y calificaciones",
        detail: "Captura rápida por parte del profesorado y generación automática de boletas.",
      },
      {
        value: "Ordenado",
        label: "Control de colegiaturas",
        detail: "Seguimiento claro de pagos, adeudos, recibos y estados de cuenta sin confusiones.",
      },
      {
        value: "Directa",
        label: "Comunicación institucional",
        detail: "Avisos, horarios y reportes oportunos entre escuela, docentes y familias.",
      },
    ],
    beforeItems: [
      "Listas de asistencia y boletas elaboradas a mano o en archivos dispersos.",
      "Filas y confusiones en temporada de inscripciones y entrega de documentos.",
      "Dificultad para rastrear pagos pendientes de colegiaturas o cuotas.",
      "Sobrecarga administrativa para maestros y coordinadores académicos.",
    ],
    afterItems: [
      "Registro digital inmediato de asistencias, evaluaciones y promedios.",
      "Emisión rápida de boletas, constancias y reportes institucionales.",
      "Control transparente de ingresos escolares y recordatorios ordenados.",
      "Panel claro para dirección con matrícula, desempeño y operación al día.",
    ],
    capabilities: [
      "Control de inscripciones, grupos, horarios y expedientes de alumnos",
      "Captura de asistencias, calificaciones y emisión de boletas",
      "Administración de colegiaturas, pagos y constancias",
      "Portal de avisos y seguimiento para docentes y padres de familia",
    ],
    imageSrc: "/images/sections/gestion-escolar.webp",
    imageAlt: "Gestión escolar y coordinación académica digital con BBM",
    media: {
      title: "Gestión escolar y coordinación académica digital",
      description:
        "Fotografía de un coordinador académico o docente revisando listas de alumnos y calificaciones en una computadora portátil dentro de un aula o dirección escolar ordenada y profesional.",
      dimensions: "1600 × 1000 px",
      format: "WebP / JPG",
    },
  },
  {
    id: "servicios",
    index: "04",
    title: "Herramientas de servicios",
    shortTitle: "Servicios y Ventas",
    lead: "Conecta tu negocio con tus clientes y haz crecer tus ventas en toda la región.",
    description: [
      "Hoy gran parte de las decisiones de compra y contratación ocurren a través de internet. BBM desarrolla plataformas y herramientas digitales que crean un puente directo entre quienes ofrecen un servicio y sus clientes, desde asistencia técnica especializada hasta oficios y servicios tradicionales como tapicería, mantenimiento, reparaciones o comercio local.",
      "Construimos desde una página profesional de presentación que respalde la seriedad de tu empresa, hasta catálogos interactivos, sistemas de citas, cotizadores en línea o tiendas completas para vender tus productos y servicios.",
      "No solo obtienes presencia digital: consigues un canal ordenado para captar clientes en toda tu zona, dar seguimiento a cada solicitud, mantener informado al cliente sobre su servicio y convertir prospectos en ventas reales.",
    ],
    metrics: [
      {
        value: "24/7",
        label: "Presencia digital activa",
        detail: "Tu negocio visible y profesional para clientes de toda la zona en cualquier horario.",
      },
      {
        value: "Directo",
        label: "Captación y cotización",
        detail: "Recibe solicitudes claras por WhatsApp, correo o plataforma sin perder prospectos.",
      },
      {
        value: "Transparente",
        label: "Seguimiento de servicios",
        detail: "Tus clientes conocen el avance de su pedido o trabajo, generando confianza y recomendación.",
      },
      {
        value: "Escalable",
        label: "De sitio web a tienda en línea",
        detail: "Crece a tu ritmo: presentación corporativa, agenda de citas o venta directa en línea.",
      },
    ],
    beforeItems: [
      "Depender únicamente del boca a boca o mensajes desordenados sin seguimiento.",
      "Perder clientes que buscan proveedores serios en internet y no encuentran información clara.",
      "Cotizaciones lentas y clientes llamando constantemente para saber cómo va su servicio.",
      "Falta de un catálogo organizado para mostrar trabajos, precios o disponibilidad.",
    ],
    afterItems: [
      "Imagen profesional que inspira confianza desde el primer contacto.",
      "Canal directo para agendar servicios, solicitar cotizaciones o comprar en línea.",
      "Seguimiento ordenado de clientes, pedidos y entregas desde cualquier dispositivo.",
      "Mayor alcance comercial para captar nuevos clientes en toda tu región.",
    ],
    capabilities: [
      "Páginas profesionales de presentación empresarial y catálogos de servicios",
      "Tiendas en línea y plataformas de venta directa",
      "Sistemas de reservas, citas, cotizaciones y seguimiento de pedidos",
      "Integración práctica con WhatsApp y correo para atención rápida al cliente",
    ],
    imageSrc: "/images/sections/conexion-servicios.webp",
    imageAlt: "Conexión digital entre negocio de servicios y clientes con BBM",
    media: {
      title: "Conexión digital entre negocio de servicios y clientes",
      description:
        "Fotografía de un dueño de negocio de servicios o taller artesanal mostrando en una tableta o celular el catálogo y estado de un trabajo terminado a un cliente satisfecho.",
      dimensions: "1600 × 1000 px",
      format: "WebP / JPG",
    },
  },
];

export interface TeamExperienceCompany {
  id: string;
  name: string;
  context: string;
}

export interface TeamMember {
  name: string;
  degree: string;
  role: string;
  specialty: string;
  description: string;
  experienceHighlight?: string;
  experienceCompanies?: TeamExperienceCompany[];
  photoSrc?: string;
  media: {
    title: string;
    description: string;
    dimensions: string;
    format: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ing. Raúl Carpio Mendez",
    degree: "Ingeniero Mecánico Eléctrico",
    role: "Agente de Negocios",
    specialty: "Relación comercial, camiones y maquinaria pesada",
    description:
      "Conecta las necesidades reales de cada empresa con la solución adecuada. Es Ingeniero Mecánico Eléctrico especializado en el manejo y mantenimiento de camiones y maquinaria pesada, lo que le permite entender de primera mano los retos operativos de campo, flotillas e industria.",
    photoSrc: "/images/team/raul-carpio.webp",
    media: {
      title: "Retrato — Ing. Raúl Carpio Mendez",
      description:
        "Retrato profesional de medio cuerpo del Ing. Raúl Carpio Mendez en vestimenta ejecutiva o smart-business, fondo neutro luminoso de oficina, proyectando cercanía y seriedad.",
      dimensions: "800 × 1000 px",
      format: "WebP / JPG",
    },
  },
  {
    name: "Ing. Gabriel Bruno",
    degree: "Ingeniero en Desarrollo de Software",
    role: "Project Manager",
    specialty: "Dirección de proyectos y cumplimiento de entregas",
    description:
      "Coordina cada proyecto de principio a fin, asegurando que los tiempos, objetivos y alcances acordados con el cliente se cumplan con orden, comunicación clara y resultados medibles.",
    photoSrc: "/images/team/gabriel-bruno.webp",
    media: {
      title: "Retrato — Ing. Gabriel Bruno",
      description:
        "Retrato profesional de medio cuerpo del Ing. Gabriel Bruno en entorno corporativo limpio, iluminación natural equilibrada, proyectando liderazgo y organización.",
      dimensions: "800 × 1000 px",
      format: "WebP / JPG",
    },
  },
  {
    name: "Ing. José Melquiades",
    degree: "Ingeniero en Desarrollo de Software",
    role: "Encargado de Lógica de Negocios y Tecnología",
    specialty: "Estructura interna, seguridad y solidez de plataformas",
    description:
      "Diseña el motor interno que hace funcionar cada plataforma con precisión y estabilidad. Se asegura de que las reglas de tu negocio, los datos y los controles internos operen sin fallas y con total resguardo.",
    photoSrc: "/images/team/melquiades.webp",
    media: {
      title: "Retrato — Ing. José Melquiades",
      description:
        "Retrato profesional de medio cuerpo del Ing. José Melquiades en espacio de trabajo moderno y sobrio, transmitiendo rigor técnico y confiabilidad.",
      dimensions: "800 × 1000 px",
      format: "WebP / JPG",
    },
  },
  {
    name: "Ing. Bryan Fermín",
    degree: "Ingeniero en Desarrollo de Software",
    role: "Encargado de Accesibilidad y Simpleza de Funcionamiento",
    specialty: "Diseño digital y eficiencia de procesos",
    description:
      "Convierte procesos complejos en pantallas claras, intuitivas y fáciles de usar para cualquier trabajador. Su prioridad es que el sistema se entienda a la primera y agilice el trabajo diario sin fricciones.",
    media: {
      title: "Retrato — Ing. Bryan Fermín",
      description:
        "Retrato profesional de medio cuerpo del Ing. Bryan Fermín en entorno de estudio o escritorio ordenado, proyectando claridad y enfoque en el detalle.",
      dimensions: "800 × 1000 px",
      format: "WebP / JPG",
    },
  },
  {
    name: "Lic. Karolyna Carpio",
    degree: "Licenciada en Administración de Empresas",
    role: "Coordinadora de Capacitación y Operaciones",
    specialty: "Adopción del equipo, automatización y resultados operativos",
    description:
      "Acompaña a los clientes y a su personal para que dominen sus plataformas desde el primer día. Cuenta con experiencia implementando y operando sistemas automatizados de reclutamiento por WhatsApp para grandes empresas en México, ajustando cada proceso a lo que el negocio realmente necesita y entregando reportes claros de resultados.",
    experienceHighlight: "Experiencia implementando operación automatizada con:",
    experienceCompanies: [
      { id: "bbva", name: "BBVA", context: "Banca en México" },
      { id: "heb", name: "H-E-B", context: "Supermercados" },
      { id: "caffenio", name: "Caffenio", context: "Cadena de cafeterías" },
      { id: "compartamos", name: "Banco Compartamos", context: "Créditos a negocios" },
      { id: "prodensa", name: "Prodensa", context: "Industria y manufactura" },
    ],
    photoSrc: "/images/team/karolyna-carpio.webp",
    media: {
      title: "Retrato — Lic. Karolyna Carpio",
      description:
        "Retrato profesional de medio cuerpo de la Lic. Karolyna Carpio en ambiente ejecutivo iluminado, proyectando confianza, organización y trato profesional.",
      dimensions: "800 × 1000 px",
      format: "WebP / JPG",
    },
  },
  {
    name: "Ing. Diego Zamorano",
    degree: "Ingeniero Industrial",
    role: "Analista de Procesos en Empresas y Tecnología",
    specialty: "Diagnóstico, transformación digital y control de calidad",
    description:
      "Estudia a detalle cómo opera cada empresa para eliminar cuellos de botella antes de construir la solución. Ha liderado la definición de procesos, puesta en marcha y control de calidad de sistemas digitales de gran escala en Estados Unidos, asegurando que cada herramienta cumpla al 100% con lo que pide el negocio.",
    experienceHighlight: "Experiencia en proyectos de transformación digital con:",
    experienceCompanies: [
      { id: "att", name: "AT&T", context: "Atención a clientes (EE. UU.)" },
      { id: "sandiego", name: "Gobierno de San Diego", context: "Servicios Públicos (EE. UU.)" },
      { id: "toyota", name: "Toyota", context: "Calidad de sistemas (EE. UU.)" },
    ],
    photoSrc: "/images/team/diego-zamorano.webp",
    media: {
      title: "Retrato — Ing. Diego Zamorano",
      description:
        "Retrato profesional de medio cuerpo del Ing. Diego Zamorano en entorno empresarial o industrial limpio, proyectando análisis y precisión operativa.",
      dimensions: "800 × 1000 px",
      format: "WebP / JPG",
    },
  },
  {
    name: "Ing. Damián Carpio",
    degree: "Ingeniero en Comunicaciones y Electrónica (ESIME-IPN)",
    role: "Instalador de Hardware, Equipamiento y Seguridad",
    specialty: "Centros de datos, redes certificadas, CCTV y control de acceso",
    description:
      "Egresado de la ESIME-IPN con más de 30 años diseñando y ejecutando proyectos de centros de datos, cableado estructurado, fibra óptica, cámaras de seguridad, control de acceso y detección inteligente de incendios. Cuenta con certificaciones en CCTV, control de acceso, sistemas contra incendio e ISO 9001, integrando el respaldo físico con el control digital de cada empresa.",
    experienceHighlight: "Experiencia en infraestructura y seguridad crítica con:",
    experienceCompanies: [
      { id: "pemex", name: "PEMEX", context: "Plataforma marina Sonda de Campeche" },
      { id: "panasonic", name: "Panasonic", context: "Diseño y jefatura de control de calidad" },
      { id: "judicatura", name: "Judicatura Federal", context: "Detección inteligente de incendios" },
      { id: "crowne", name: "Crowne Plaza", context: "Centro de Datos · 360 nodos" },
      { id: "unicach", name: "UNICACH", context: "Redes certificadas Panduit 20 años y fibra óptica" },
      { id: "unach", name: "UNACH", context: "Biblioteca Maya · Red y CCTV" },
      { id: "salud", name: "Secretaría de Salud", context: "Clínicas y centros de salud en Chiapas" },
    ],
    media: {
      title: "Retrato — Ing. Damián Carpio",
      description:
        "Retrato profesional de medio cuerpo del Ing. Damián Carpio con presentación técnica cuidada en entorno corporativo o de equipamiento, transmitiendo seguridad y dominio práctico.",
      dimensions: "800 × 1000 px",
      format: "WebP / JPG",
    },
  },
];

export const PARTNER_PREVIEW_AREAS = [
  {
    index: "01",
    title: "Grúas telescópicas y maniobras",
    category: "Construcción e infraestructura",
    summary:
      "Respaldo operativo en proyectos de obra, montaje industrial y maniobras especializadas mediante empresas asociadas del sector.",
  },
  {
    index: "02",
    title: "Instalaciones especiales y seguridad",
    category: "Equipamiento físico y control",
    summary:
      "Cámaras de seguridad, instalaciones de red, cerrojos inteligentes y equipamiento complementario para un control integral de tus instalaciones.",
  },
  {
    index: "03",
    title: "Construcción y proyectos técnicos",
    category: "Operación multidisciplinaria",
    summary:
      "Colaboración con especialistas en obra y soluciones industriales para empresas que requieren resolver infraestructura y gestión en un mismo frente.",
  },
  {
    index: "04",
    title: "Marketing digital y posicionamiento",
    category: "Crecimiento comercial",
    summary:
      "Estrategias de visibilidad, difusión comercial y atracción de clientes que potencian las plataformas y sitios desarrollados por BBM.",
  },
] as const;

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Diagnóstico operativo real",
    description:
      "Analizamos cómo trabaja hoy tu empresa, dónde se pierde tiempo, dónde hay reprocesos y qué información necesitas ver como dueño o encargado.",
  },
  {
    step: "02",
    title: "Diseño claro y a la medida",
    description:
      "Estructuramos una herramienta pensada para tu operación específica —disponible en celular, tableta o computadora— sin funciones de relleno ni tecnicismos.",
  },
  {
    step: "03",
    title: "Implementación y capacitación",
    description:
      "Ponemos la plataforma en marcha y capacitamos a tu personal paso a paso para asegurar que todos la utilicen con naturalidad desde la primera semana.",
  },
  {
    step: "04",
    title: "Control continuo y respaldo",
    description:
      "Te acompañamos en el crecimiento de tu empresa para que siempre tengas visibilidad, reportes claros y respaldo técnico confiable.",
  },
] as const;
