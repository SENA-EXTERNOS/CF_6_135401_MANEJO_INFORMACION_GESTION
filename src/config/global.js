export default {
  global: {
    componenteFormativo: 'Implementación del sistema de gestión',
    descripcionCurso:
      'La implementación de un Sistema de Gestión de la Calidad, brinda elementos y herramientas para mejorar y fortalecer los procesos que contribuyen al cumplimiento de los requisitos de la calidad en una organización; satisface las necesidades de los clientes, aumenta la eficiencia y competitividad de la empresa y está orientado a la mejora continua.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Documentación y gráficos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La comunicación organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Medición de cumplimiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mejora continua y planes de acción',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Documentación y gráficos',
      referencia:
        'Carrera, C. F., Ligña, C. H., Morales, C. P. & Suntaxi, D. O. (2017). <i>Sistemas integrados de gestión.</i>',
      tipo: 'PDF',
      link:
        'http://142.93.18.15:8080/jspui/bitstream/123456789/481/4/Sistemas%20integrados.pdf',
    },
    {
      tema: 'La comunicación organizacional',
      referencia:
        'Caja de herramientas comunitarias. (s.f.). <i>Sección 1. Crear un plan para la comunicación.</i>',
      tipo: 'Página web',
      link:
        'https://ctb.ku.edu/es/tabla-de-contenidos/participacion/promover-interes-en-la-comunidad/plan-de-comunicacion/principal ',
    },
    /*{
      tema: 'Mejora continua y planes de acción',
      referencia:
        'Norma internacional ISO 9001. (2015). <i>Sistemas de gestión de la calidad – Requisitos.</i>',
      tipo: 'PDF',
      link:
        'http://www.itvalledelguadiana.edu.mx/ftp/Normas%20ISO/ISO%209001-2015%20Sistemas%20de%20Gesti%C3%B3n%20de%20la%20Calidad.pdf ',
    },*/
    {
      tema: 'Mejora continua y planes de acción',
      referencia:
        'Academia ISO. (2022). <i>Norma ISO 9001:2015 Herramientas de Mejora Continua Implementación del Plan de Acciones Seguimiento</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ffC9vYOzxDc ',
    },
  ],
  glosario: [
    {
      termino: 'Calidad',
      significado:
        'una organización orientada a la calidad, promueve una cultura que da como resultado comportamientos, actitudes, actividades y procesos para proporcionar valor mediante el cumplimiento de las necesidades y expectativas de los clientes y otras partes interesadas pertinentes',
    },
    {
      termino: 'Comunicación',
      significado:
        'es el proceso por medio del cual se transmite información de un ente a otro. Es el intercambio de sentimientos, opiniones o cualquier otro tipo de información, mediante el habla, escritura u otras señales.',
    },
    {
      termino: 'Comunicación informal',
      significado:
        'esta clase de comunicación se basa en la naturalidad, más no en la jerarquía, nace de la interacción social entre los miembros y del resultado de los vínculos que se crean dentro de la organización.',
    },
    {
      termino: 'Mapa de procesos',
      significado:
        'es un diagrama de valor que representa, a manera de inventario gráfico, los procesos de una organización en forma interrelacionada.',
    },
    {
      termino: 'Mejora continua',
      significado: 'es la actividad recurrente para mejorar el desempeño.',
    },
    {
      termino: 'Requisitos',
      significado:
        'circunstancia o condición necesaria de algo. En ingeniería de sistemas, el término requisito se usa en un sentido análogo como una condición necesaria para el contenido, la forma o la funcionalidad de un producto o servicio.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'percepción del cliente sobre el grado en que se han cumplido las expectativas de los clientes.',
    },
    {
      termino: 'Servicio no conforme',
      significado:
        'privilegio para usar o liberar un producto que no cumple con ciertos requisitos. Generalmente se limita a la entrega de un producto con características no conformes por un tiempo o cantidad acordada, dentro de ciertos límites.',
    },
    {
      termino: 'Sistema de gestión',
      significado:
        'es un conjunto de elementos interconectados o que interactúan en una organización, para establecer políticas y objetivos y los procesos para alcanzarlos.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'conjunto de elementos para el procesamiento y manejo de datos e información, creados, organizados y luego disponibles para su uso, para satisfacer una necesidad o meta de una organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguayo, A. (2018). <i>Aprende a medir el impacto de la comunicación digital de tu ONG.</i>',
      link:
        'https://www.asociaciones.org/boletin/medir-impacto-comunicacion-FGPS.pdf',
    },
    {
      referencia:
        'MH Education. (s.f.). <i>Técnicas básicas de calidad 04.</i>',
      link: 'https://www.mheducation.es/bcv/guide/capitulo/8448156943.pdf',
    },
    {
      referencia:
        'Tur-Viñes, V. y Monserrat-Gauchi, J. (2014).  <i>El plan estratégico de comunicación. Estructura y Funciones. Razón y Palabra</i>, (88). ',
      link:
        'http://www.razonypalabra.org.mx/N/N88/Varia/46_VinesGauchi_V88.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
