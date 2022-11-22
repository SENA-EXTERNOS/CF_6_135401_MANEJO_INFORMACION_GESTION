<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Documentación y gráficos

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se da inicio indicando que el diseño de la documentación del Sistema de Gestión de la Calidad, debe centrarse en la eficiencia y en la creación de procesos y documentos que sean aplicables a la organización.

    .row.my-3
      p Y entre los propósitos y beneficios de estos documentos, se debe tener en cuenta:

    .row.justify-content-center.my-5
      .col-lg-10
        .row
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            .tarjeta--boton.tarjeta-avatar.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen')

              p.text-center.my-5 Proporcionar un marco claro para las operaciones de la organización.

          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.tarjeta-avatar.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')

              p.text-center.my-5 Proporcionar un marco claro para las operaciones de la organización. Permitir la consistencia de los procesos y una mejor comprensión de la gestión de la calidad del sistema de gestión.

          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            .tarjeta--boton.tarjeta-avatar.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema1/img4.svg', alt='Texto que describa la imagen')

              p.text-center.my-5 Proporcionar evidencia para el logro de objetivos y metas.

    .row.justify-content-center.my-5
      .col-lg-5.my-5(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema1/img5.svg', alt='')
      .col-lg-7
        .row
          p En esa documentación, se encuentran los informes de gestión, en los cuales es posible identificar fallas y oportunidades, y de allí derivar nuevas estrategias para la empresa. Sin embargo, vale la pena mencionar que es importante saber cómo interpretar los datos, para que realmente brinden información importante para el negocio. 
        .row
          .cajon.color-acento-botones.p-4
            p Existen los informes automatizados, los cuales son un gran recurso analítico, además de proporcionar una gran cantidad de datos; por lo tanto, al elegir un software de generación automática de informes, la empresa solo se preocupa por el procesamiento y análisis de datos, no por la recopilación de información, lo cual puede ser una ventaja.

      .row.justify-content-center.my-5
        .col-lg-6
          .tarjeta--1.p-3
            .row
              .col-5.col-lg-1.mt-3(data-aos="fade-up-right")
                figure
                  img(src="@/assets/curso/temas/tema1/img6.svg", alt="alt").img-9-10-11-12-13-tm2
              .col-lg-11
                h5 Margen de contribución
                p Se define como una cantidad que dispone la empresa, a través de ingresos, determinados para cubrir los gastos fijos.
            
          .tarjeta--2.p-3
            .row
              .col-5.col-lg-1.mt-3(data-aos="fade-up-right")
                figure
                  img(src="@/assets/curso/temas/tema1/img7.svg", alt="alt").img-9-10-11-12-13-tm2
              .col-lg-11
                h5 Trazabilidad
                p Es la capacidad de investigar todos los procesos, a partir de la adquisición de materias primas, hasta que llegan a la producción, a su consumo y a la eliminación de productos. 

          .tarjeta--3.p-3
            .row
              .col-5.col-lg-1.mt-3(data-aos="fade-up-right")
                figure
                  img(src="@/assets/curso/temas/tema1/img8.svg", alt="alt").img-9-10-11-12-13-tm2
              .col-lg-11
                h5 Facturación
                p Es el proceso relacionado con la elaboración, registro, envío y  cobro de facturas.

          .tarjeta--2.p-3
            .row
              .col-5.col-lg-1.mt-3(data-aos="fade-up-right")
                figure
                  img(src="@/assets/curso/temas/tema1/img9.svg", alt="alt").img-9-10-11-12-13-tm2
              .col-lg-11
                h5 Suministro
                p Son las materias primas con las que la empresa trabaja para la fabricación de un bien.

          .tarjeta--4.p-3
            .row
              .col-5.col-lg-1.mt-3(data-aos="fade-up-right")
                figure
                  img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt").img-9-10-11-12-13-tm2
              .col-lg-11
                h5 Flujo de efectivo
                p Informa sobre las variaciones y los movimientos de efectivo, en un periodo determinado.

        .col-lg-5.my-5(data-aos="fade-up-left")
          figure
            img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt")          

    .row.my-5
      p Ahora, los registros del sistema son evidencia de las tareas realizadas en el Sistema de Gestión de la Calidad, y son la base para analizar el comportamiento y las mejoras de cada proceso de este sistema.

    .row.justify-content-center.my-5
      .col-lg-5(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema1/img12.svg', alt='')
      .col-lg-7
        p Mientras los documentos están sujetos a cambio, los registros mencionan cómo se ha llevado a cabo la actividad, son parte de la evidencia de las actividades desarrolladas y no permiten cambios.
        p Por otra parte, los datos que se gestionan en la organización, determinan el tipo de registro, y se pueden asociar con algoritmos específicos, diseñados para cumplir con los requisitos de los datos.
        p En una organización, se pueden aplicar varios tipos de registros para la comunicación en los diferentes procesos, y a esto se le llama gestión de registros.

    .row.my-5
      p En la implementación de un sistema de gestión, las empresas deben tener en cuenta los siguientes ítems al trabajar con un software que les ayude con el manejo y gestión de sus datos.


    .row.justify-content-center.my-5
      .col-lg-8(data-aos="fade-down-right")
        TabsA.color-secundario
          .tarjeta.tarjeta--morada.p-4(titulo="Uso")
            p Un sistema de administración de contenido, con frecuencia puede ser accesible para una amplia gama de usuarios dentro de una organización, utilizando el contenido para realizar tareas de trabajo diarias o, por el contrario, no accediendo con tanta frecuencia, porque la empresa no utiliza los registros. Dado que los sistemas de gestión de documentos se utilizan cada vez más, una interfaz de usuario intuitiva es esencial.

          .tarjeta.tarjeta--morada.p-4(titulo="Facilidad de búsqueda")
            p Una parte clave de un sistema de administración de contenido, es la capacidad de los usuarios para crear, importar, acceder e informar sobre el contenido. Por lo tanto, el sistema debe incluir una interfaz de búsqueda fácil de usar.

          .tarjeta.tarjeta--morada.p-4(titulo="Amplia población de solo lectura")
            p Los sistemas de administración de documentos permiten a los autores acceder para crear documentos, ejecutar flujos de trabajo, ver documentos, etc. Por otro lado, para reducir la carga del sistema, es útil que un sistema de administración de documentos también ofrezca acceso de solo lectura, a los usuarios que no necesitan crear o revisar contenido.

          .tarjeta.tarjeta--morada.p-4(titulo="Flujo de trabajo electrónico")
            p Un flujo de trabajo digital es esencial para mantener la eficiencia porque los sistemas de gestión de documentos pueden requerir actualizaciones y reaprobaciones frecuentes, en un momento específico.

      .col-lg-4(data-aos="fade-down-left")
        figure
          img(src='@/assets/curso/temas/tema1/img13.svg', alt='')        

    .row.my-5
      p Normalmente, existen algunos documentos de conservación total, como los libros de los programas, las actas de algunos comités y varios de ellos son permanentes máximo por cinco años; hay algunos temas, sobre todo en las notas, controles temáticos, como acompañamientos que no se crean, sino que se guardan para la gestión general de la organización.

    .row.justify-content-center.mt-5
          ul.vineta-titulos(data-aos="fade-down-right")
            li
              h2.mb-0.h2-vineta Gráficos

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="flip-left")
        .cajon.color-acento-botones.p-4
          p La mente humana recuerda y procesa más rápido, útil y eficazmente las imágenes, gráficos y formas, que las matrices, tablas o textos largos y aburridos. Los gráficos son veraces, visuales, llenos de colores y dinámicos, lo que genera en nuestra mente mayor grado de recordación, mejorando el proceso epistemológico. La sencillez, claridad y precisión, hacen que los informes sean más fluidos, más fáciles de analizar y recepcionar mejor la respuesta ante ellos. En un gráfico se puede condensar mucha información, haciendo que resalten las características y atributos de variables que podrían ser más difíciles de estructurar en una tabla o matriz.
          p Por este motivo, se convierten en unos grandes aliados a la hora de tomar decisiones en los diferentes departamentos de la empresa.

    .row.my-5
      p En las representaciones gráficas se encuentran diferentes clases; las cuales son:

    .row.justify-content-center.my-5
      ImagenInfografica.color-acento-botones(data-aos="fade-down")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img14.svg', alt='')

        .tarjeta.estilo-cajon.p-2(x="6%" y="60%" numero="1")
          h5.mb-2 Gráfico de barras
          p Es la representación tipo cartesiano donde el eje X representa las categorías o atributos de la variable (cualitativa o cuantitativa); en el eje Y se representan las frecuencias (cantidad que presentan estas categorías según los intervalos en que se encuentren), que pueden ser verticales u horizontales, simples o dobles, en dos o tres ejes o dimensiones.

        .tarjeta.estilo-cajon.p-2(x="25%" y="20%" numero="2")
          h5.mb-2 Gráfico circular
          p Es una representación circular de las frecuencias relativas de una variable cualitativa o discreta que permite, de una manera sencilla y rápida, su comparación. El círculo representa la totalidad que se quiere observar y cada porción, llamada sector, representa la proporción de cada categoría de la variable con respecto al total.

        .tarjeta.estilo-cajon.p-2(x="50%" y="7%" numero="3")
          h5.mb-2 Gráfico de dispersión
          p Es una herramienta de control y apoyo para verificar la existencia de una correlación entre dos variables cuantitativas. El eje X representa la variable independiente, mientras que el eje Y representa la variable dependiente. La correlación es positiva si ambas variables van en el mismo sentido, o sea que, si X aumenta o disminuye, Y igualmente aumenta o disminuye; la correlación es negativa o inversa cuando una variable se comporta de forma contraria o a la otra, es decir que, si una variable aumenta, la otra disminuye.

        .tarjeta.estilo-cajon.p-2(x="75%" y="20%" numero="4")
          .h5.mb-2 Gráfico de líneas
          p Es una representación gráfica en un eje cartesiano de la relación que existe entre dos variables, reflejando con claridad los cambios producidos. Se suelen usar para representar la tendencia general de un conjunto de datos que forma una serie temporal.

        .tarjeta.estilo-cajon.p-2(x="94%" y="60%" numero="5")
          .h5.mb-2 Pictograma
          p Es un gráfico que representa mediante figuras o símbolos, las frecuencias de una variable cualitativa o discreta, traslada información de un objeto concreto de forma figurada, sin necesidad de utilizar el lenguaje. Al igual que los gráficos de barras, suelen usarse para comparar magnitudes o ver la evolución, en el tiempo, de una categoría concreta.


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
