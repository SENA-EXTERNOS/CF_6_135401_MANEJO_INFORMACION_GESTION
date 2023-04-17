<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion/img1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde conocerá que la implementación de un sistema de gestión permite el establecimiento de políticas y objetivos de calidad, la identificación de las necesidades y expectativas del cliente, la introducción de métodos eficientes y efectivos y la identificación de procesos, lo que permite a una organización, alcanzar los objetivos de calidad.

    .row.my-5
      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    .row.mt-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/l5wEnW0yBQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
