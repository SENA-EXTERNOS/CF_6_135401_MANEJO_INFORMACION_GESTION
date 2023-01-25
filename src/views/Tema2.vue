<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La comunicación organizacional

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La comunicación organizacional se refiere al envío y recepción de información entre individuos interrelacionados o que forman parte de alguna forma de organización; se establece en todas las instituciones y hace parte de la cultura corporativa; está documentada y organizada por medio de un plan de comunicaciones y, a partir de ella, se puede dar entre todos los niveles jerárquicos de la empresa, de manera fluida y efectiva. También considera instaurar dinámicas de colaboración, de combinación y de avance conjunto, dirigidas a los objetivos, o sea que sirve para la gestión de la organización y la integración de sus distintos elementos, para crear efecto en la productividad y la calidad.

    .row.my-3
      p Por lo general, pueden existir dos tipos de comunicación organizacional:

    .row.justify-content-center.my-5
      .col-lg-5.mb-5(data-aos="fade-up-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='')        
      .col-lg-7(data-aos="fade-up-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Comunicación formal")
            p La propia empresa establece, genera, o manipula esta información. Se estructura bajo las políticas y metas de la empresa, debe ser controlada y estar sujeta a normas o reglas. Se refiere a la comunicación que se realiza a través de los conductos oficiales en la empresa. Se lleva a cabo entre directivos o empleados del mismo nivel o entre superiores y subordinados, y viceversa. Puede ser oral o escrita, pero toda la relación de esa comunicación se conserva dentro de la institución.
          
          .row(titulo="Comunicación informal")
            p Se utiliza a nivel personal, aunque también se da en el ámbito laboral y dentro del lugar de trabajo; se basa en la naturalidad, más no en la jerarquía, nace de la interacción social entre los miembros y del resultado de los vínculos que se crean dentro de la organización. No maneja reconocimiento oficial y no se respalda con ningún principio de comunicación específico y hace que se disfrute el tiempo que se pasa en la empresa.


    .row.justify-content-center.mt-5
          ul.vineta-titulos(data-aos="fade-down-left")
            li
              h2.mb-0.h2-vineta Comunicación interna y externa

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="flip-down")
        .cajon.color-secundario.p-4
          p.mb-0 La comunicación interna hace mención a toda la información que se genera, manipula o se utiliza dentro de la organización; es considerada como una herramienta gerencial aplicada en los niveles jerárquicos con el propósito de alcanzar todos los objetivos estratégicos, misionales, operativos, culturales y comportamentales de la empresa. 
    p.mb-5 Su desarrollo se da de acuerdo con la aplicación del “Proceso de comunicación organizacional formal”, como se presenta en la siguiente figura:
    .titulo-sexto.color-acento-botones.mb-3
      p.mb-0 <b>Figura 1</b><br><i>Proceso de comunicación organizacional formal</i>

    .row.my-5(data-aos="zoom-in-up")
      figure
        img(src='@/assets/curso/temas/tema2/img3.svg', alt='')

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img4.svg')})`}"
          )
          .bloque-texto-g__texto.p-3
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.color-vineta1
                | Instaurar, perfeccionar o consolidar la imagen corporativa de la organización.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Apoyar el logro de los objetivos, planes o programas y proyectos.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Reducir los conflictos y los malos climas organizacionales. 
              li 
                i.fas.fa-angle-right.color-vineta1
                | Instaurar espacios de libre expresión para que los empleados puedan brindar sus aportes y opiniones.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Mantener una información actualizada y veraz, para los integrantes de la organización.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Promover la buena comunicación entre todos los participantes y niveles de la empresa.
                    
    .row.my-3
      p La comunicación externa se conoce con el nombre de “<b>comunicación comercial</b>” y hace referencia a todo el intercambio o flujo de información que manipula la organización; está destinada para los públicos externos, sea de manera directa o a través de intermediarios, con el objetivo de mantener o mejorar sus relaciones corporativas, proyectar una imagen corporativa favorable y promover los productos o servicios; se refiere a los movimientos que la organización dirige hacia los agentes externos, consumidores y proveedores, inversores o sociedad, con el objetivo de generar, o reforzar las relaciones entre la compañía y los diferentes públicos.

    .row.justify-content-center.mt-5
          ul.vineta-titulos(data-aos="fade-down-left")
            li
              h2.mb-0.h2-vineta Plan estratégico de comunicaciones

    .row.justify-content-center.my-5
      .col-lg-5.mb-5(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema2/img5.svg', alt='')
      .col-lg-7
        .row
          p El plan estratégico de comunicaciones es un instrumento de organización para el desarrollo de las comunicaciones organizacionales en un determinado tiempo; este plan incluye las políticas empresariales y se instaura con respecto a los objetivos estratégicos planteados a corto, mediano y largo plazo y establecidos por la alta gerencia.
        .row
          .cajon.color-acento-botones.p-4
            p Este plan busca estructurar o establecer una organización formal y preparada para las comunicaciones que se producen dentro de ella, bien sean de carácter interno o externo, con el fin de estandarizar los procesos de comunicación y evitar la pérdida de información, recursos y tiempo.
 
    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5.bloque-texto-a-recuadro
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h3.mb-0 El plan de comunicación se debe desarrollar a través de los siguientes pasos:
            .col-lg-8
              .bloque-texto-a__texto.p-4
                ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right.color-vineta2
                    | Análisis del entorno interno y externo.
                  li 
                    i.fas.fa-angle-right.color-vineta2
                    | Determinación de los objetivos de comunicación.

    .row.justify-content-center.my-5
          ul.vineta-titulos(data-aos="fade-down-left")
            li
              h2.mb-0.h2-vineta Análisis del entorno interno y externo

    .row.my-5
      p En este primer paso se debe realizar una compilación de todos los aspectos que incluyen la organización en temas de comunicación; se deben investigar y analizar aspectos como el estado actual de todos los procesos de comunicación dentro de la organización, tanto sus oportunidades, como sus equivocaciones o defectos.
      p Algunos aspectos internos para analizar son:

    .row.justify-content-center.my-5
      .col-11(data-aos="fade-right")
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta-avatar2.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-7
                img(src='@/assets/curso/temas/tema2/img7.svg' alt='AvatarTop')
            p.text-center Plan o manual actual de comunicación.

          .tarjeta.tarjeta-avatar2.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-7
                img(src='@/assets/curso/temas/tema2/img8.svg' alt='AvatarTop')
            p.text-center Medios y canales de comunicación utilizados.

          .tarjeta.tarjeta-avatar2.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-7
                img(src='@/assets/curso/temas/tema2/img9.svg' alt='AvatarTop')
            p.text-center Percepción de efectividad o satisfacción por parte de los trabajadores de la empresa.

          .tarjeta.tarjeta-avatar2.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-7
                img(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop')
            p.text-center Dificultades o barreras de comunicación en la organización.

          .tarjeta.tarjeta-avatar2.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-7
                img(src='@/assets/curso/temas/tema2/img11.svg' alt='AvatarTop')
            p.text-center Clima organizacional.

          .tarjeta.tarjeta-avatar2.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-7
                img(src='@/assets/curso/temas/tema2/img12.svg' alt='AvatarTop')
            p.text-center Tiempos de espera en las respuestas.

          .tarjeta.tarjeta-avatar2.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-7
                img(src='@/assets/curso/temas/tema2/img13.svg' alt='AvatarTop')
            p.text-center Nivel de rotación de la información dentro de la empresa.

    .row.my-5
      p De igual manera, en la parte externa se deben analizar cada uno de los elementos de comunicación que la organización direcciona, identifica y considera de su pertinencia y efectividad, así mismo, de sus necesidades o falencias.

    .row.my-5
      p Algunos aspectos externos para analizar son:

    .row.justify-content-center.my-5
      .col-lg-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img14.svg', alt='')      

      .col-lg-7
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Percepción externa de la organización (positiva o negativa).
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Medios actuales de divulgación.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Niveles de satisfacción del cliente.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Tiempos de respuesta.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Principales necesidades de comunicación con los clientes.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Otras opciones o medios de comunicación posibles para aplicar con los clientes.

    .row.justify-content-center.mt-5
          ul.vineta-titulos(data-aos="fade-down-left")
            li
              h2.mb-0.h2-vineta Determinación de los objetivos de comunicación

    .row.my-5
      p Es necesario enfatizar que los objetivos de comunicación no se deben establecer sin antes revisar y tener en cuenta los objetivos generales plasmados en la planeación estratégica. Por ejemplo, si un objetivo estratégico manifiesta “aumento de las ventas en un 40 %”, se debe establecer, desde el área de comunicaciones, un objetivo que pueda apoyar y permitir el logro de dicho objetivo estratégico.

    .row.justify-content-center.mt-5
      .col-lg-10(data-aos="flip-down")
        .cajon.color-acento-botones.p-4
          p De igual forma, se debe tener presente la información suministrada por el análisis de la situación o diagnóstico de la empresa; en ella se encontrarán las necesidades, las falencias y oportunidades existentes en la organización; a partir de este análisis, se deben establecer objetivos que busquen mitigar estas necesidades y aprovechen las oportunidades y fortalezas identificadas.

    .row.my-5
      p Luego de fijar los objetivos, es necesario clasificarlos según los grupos de interés y, de este modo, saber qué estrategia proyectar para obtener el resultado esperado. 
      p Los grupos de interés son la clasificación de interesados o involucrados en el desarrollo normal de la organización y son necesarios e importantes en el alcance de los objetivos de la empresa.

    .row.justify-content-center.mt-5
          ul.vineta-titulos(data-aos="fade-down-left")
            li
              h2.mb-0.h2-vineta Elección de las estrategias

    .row.justify-content-center.my-5
      .col-lg-5.mb-3(data-aos="fade-down-right")
        figure
          img(src='@/assets/curso/temas/tema2/img15.svg', alt='')  
      
      .col-lg-7
        p La estimación de estrategias debe ir de la mano con dos elementos: primero, debe ser coherente con los objetivos planteados y, segundo, debe estar en sintonía con las estrategias establecidas en el nivel estratégico, es decir, las estrategias de comunicación deben ser una extensión del plan estratégico general. Esta estrategia debe garantizar la cobertura de todos los grupos de interés involucrados en cada objetivo. 

    .row.justify-content-center.mt-5
          ul.vineta-titulos(data-aos="fade-down-left")
            li
              h2.mb-0.h2-vineta Definir planes de acción

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-4(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img16.svg')})`}"
          )
          .bloque-texto-g__texto.p-3
            p De acuerdo con Tur-Viñes, V. y Monserrat-Gauchi, J. (2014), la finalidad de esta etapa es concretar en planes de acción, ejecutables y acotados en el tiempo, las estrategias planteadas con anterioridad. Una estrategia puede concretarse en diferentes planes de acción y, a su vez, un plan de acción puede formar parte de diferentes estrategias y contribuir a la consecución de varios objetivos. Se ha de determinar un plan de comunicación y su concreción en acciones o campañas concretas de publicidad, relaciones públicas, comunicación #[i on-line], #[i marketing] directo, campañas promocionales, publicidad directa, de esponsorización y/o de patrocinio, branded content, etc. Todo ello encaminado a conseguir los objetivos de comunicación previamente definidos. (p. 13).

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="fade-down")
        .cajon.color-secundario.p-4
          p Una vez definidos los objetivos para cada grupo de interés e identificadas las estrategias o acciones que se van a desarrollar en el periodo determinado, se deben identificar sus respectivos responsables, niveles de prioridad, cronograma y recursos necesarios. 



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
