<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Medición de cumplimiento

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-secundario.p-4(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.svg')})`}"
          )
          .bloque-texto-g__texto.p-3
            p De acuerdo con Tur-Viñes, V. y Monserrat-Gauchi, J. (2014), la finalidad de esta etapa es concretar en planes de acción, ejecutables y acotados en el tiempo, las estrategias planteadas con anterioridad. Una estrategia puede concretarse en diferentes planes de acción y, a su vez, un plan de acción puede formar parte de diferentes estrategias y contribuir a la consecución de varios objetivos. Se ha de determinar un plan de comunicación y su concreción en acciones o campañas concretas de publicidad, relaciones públicas, comunicación on-line, marketing directo, campañas promocionales, publicidad directa, de esponsorización y/o de patrocinio, branded content, etc. Todo ello encaminado a conseguir los objetivos de comunicación previamente definidos. (p. 13).


    .row.my-5
      p El éxito de una empresa depende de la estructura y desarrollo de sus procesos, los cuales son responsables del producto o servicio que ofrece la empresa. Estos procesos necesitan ser medidos y evaluados para conocer las variables de cada punto crítico a través de datos y resultados. Esto afecta directamente el Sistema de Gestión de la Calidad de la organización y las necesidades del cliente. La norma ISO 9001:2015 especifica que se deben utilizar métodos para monitorear y medir los procesos críticos, es decir, para controlar aspectos que tienen un impacto directo en los requisitos del cliente y los objetivos de la calidad. El propósito de esto es el de demostrar que los procesos están logrando los resultados planificados.

    .row.justify-content-center.mt-5
      .col-lg-10(data-aos="flip-down")
        .cajon.color-secundario.p-4
          p Existen diferentes puntos de vista para definir cuál es la mejor forma de medir la calidad, especialmente cuando se habla de procesos. En organizaciones donde se desarrollan procesos de conversión o fabricación, se suele utilizar un promedio de “defectos por unidades fabricadas”. En las organizaciones dedicadas a la prestación de servicios, la satisfacción del cliente es medida a través de encuestas y puede ser una forma adecuada de medir el Sistema de Gestión de la Calidad, según la norma ISO 9001.

    .row.justify-content-center.my-5
      .col-lg-5(data-aos="fade-up-right")
        figure
          img(src='@/assets/curso/temas/tema3/img2.svg', alt='')  
      
      .col-lg-7
        p Analizar y evaluar los datos recopilados, es fundamental para garantizar que los procesos funcionen correctamente de acuerdo con las necesidades de la organización. El análisis es una parte muy importante del proceso y, si no se realiza, se recopilan datos sin ningún motivo y es un gasto económico para el Sistema de Gestión de la Calidad. Los requisitos de la norma ISO 900:2015 definen el nivel de satisfacción del cliente, como un indicador crítico de desempeño para la organización; por este motivo, la organización debe monitorear, analizar y evaluar.

    .row.my-5
      p Las técnicas de medición aplicadas a la organización, buscan el mejoramiento continuo de la organización, para lograr así la satisfacción del cliente en la entrega inmediata del producto o servicio, a través del sistema de gestión; para lograrlo, se deben aplicar los siguientes pasos:

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="fade-up")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img3.svg', alt='')

          .tarjeta.estilo-cajon.p-2(x="1%" y="1%" numero="1")
            p Se refiere a los que dirigen y controlan una organización en el nivel más alto, y promueven los recursos en la organización. Además de liderazgo, deben demostrar también compromiso con relación al Sistema de Gestión de la Calidad.

          .tarjeta.estilo-cajon.p-2(x="1%" y="99%" numero="2")
            p Son los requerimientos que no se refieren directamente a funciones específicas del sistema, sino a diferentes ítems como la respuesta a tiempo o la capacidad de almacenamiento.

          .tarjeta.estilo-cajon.p-2(x="37%" y="99%" numero="3")
            p Permite la identificación de aquellos productos y servicios de la empresa. Determina los límites y la aplicabilidad del sistema de gestión, para establecer su alcance.

          .tarjeta.estilo-cajon.p-2(x="37%" y="1%" numero="4")
            p El proceso es un conjunto de actividades orientadas para cumplir un objetivo general, y el procedimiento es el modo más específico de realizar las actividades en la organización.

          .tarjeta.estilo-cajon.p-2(x="62%" y="1%" numero="5")
            p Para alcanzar las 3E (eficiencia, efectividad y economía) en una organización, se definen los siguientes pasos en la implementación de procedimientos: estudiar los requisitos, tomar en cuenta los resultados de su evaluación de riesgos, optimizar y alinear sus documentos, estructurar y redactar el documento, conseguir la aprobación del documento. 

          .tarjeta.estilo-cajon.p-2(x="62%" y="99%" numero="6")
            p La capacitación es el proceso educativo de corto plazo, aplicado de manera sistemática y organizada, por medio del cual las personas adquieren conocimientos; la sensibilización es un proceso que tiene como objetivo principal, impactar sobre el comportamiento de una población.

          .tarjeta.estilo-cajon.p-2(x="97%" y="99%" numero="7")
            p Para elegir una casa certificadora, se debe tener en cuenta la verificación de: reputación, especialización, profesionalidad y experiencia, flexibilidad y logística, y auditoría integrada.

          .tarjeta.estilo-cajon.p-2(x="100%" y="2%" numero="8")
            p Es un sistema de control interno basado en un paquete de medidas de control y orientación hacia la calidad. 

    .row.my-5
      p Ahora, en cuanto a los criterios de revisión de hallazgos, se refiere a la información solicitada, a juicio del auditor, que le permite recoger e identificar acontecimientos convenientes que puedan alcanzar en el sistema de gestión de la empresa, a través de una verificación exhaustiva y que se puede explicar en el informe. Lo que se expone en un proceso auditor como el hallazgo de una no conformidad permite oportunidades de mejora en la organización. 

    .row.justify-content-center.mt-5
      .col-lg-8(data-aos="flip-up")
        .cajon.color-secundario.p-4
          p Para dar solución a los hallazgos encontrados en una auditoría interna, con el fin de subsanar debilidades de los procesos en la organización, se debe comunicar la situación del hallazgo encontrado, aplicando el criterio de la auditoría, además, de explicar la situación de por qué sucedió el acontecimiento.

    .row.my-5
      p El criterio implica la concepción de lo que debe ser, con lo que el auditor estima la posición del hecho o situación y determina los cumplimientos o desviaciones; además, es un parámetro razonable frente al cual debe evaluarse la obtención de bienes y servicios y la prevención de riesgos de desviación de recursos, entre otros.



</template>

<script>
export default {
  name: 'Tema3',
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
