<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Mejora continua y planes de acción

    .row.justify-content-center.my-5
      .col-lg-5.mb-3(data-aos="fade-down-right")
        figure
          img(src='@/assets/curso/temas/tema4/img1.svg', alt='')  
      
      .col-lg-7
        p Toda organización debe tener en cuenta los resultados del análisis y la verificación o evaluación y las salidas de la revisión por la dirección, para determinar si hay necesidades u oportunidades que deben considerarse como parte de la mejora continua.
        p La empresa debe determinar y elegir las oportunidades de mejora y ejecutar cualquier acción necesaria para cumplir los requisitos del cliente y aumentar su satisfacción.

    .row.my-5
      p Acciones que se deben incluir:

    .row.justify-content-center.my-5
      .col-10
        .row
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            .tarjeta--boton.tarjeta-avatar3.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema4/img2.svg', alt='Texto que describa la imagen')

              p.text-center.my-3 Mejorar los productos y servicios para dar cumplimiento a los requisitos de la norma y considerar las necesidades y expectativas futuras.

          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.tarjeta-avatar3.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema4/img3.svg', alt='Texto que describa la imagen')

              p.text-center.my-3 Corregir, prevenir o reducir los efectos no deseados.

          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            .tarjeta--boton.tarjeta-avatar3.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/tema4/img4.svg', alt='Texto que describa la imagen')

              p.text-center.my-3 Mejorar el desempeño y eficacia del sistema de gestión.

    .row.my-5
      p En la mejora continua del sistema de gestión, se identifican 7 pasos.
      p A continuación, se dan a conocer cada uno de ellos: 

    .row.justify-content-center.my-5
      .col-lg-7
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center
            .col-8.col-md-2
              figure
                img(src='@/assets/curso/temas/tema4/img5.svg', alt='')             
            
            .col-md-8.mb-4.mb-md-0.mt-3
              p Identificar el problema.

          .row.justify-content-center
            .col-md-2.mb-4.mb-md-0
            .col-md-6.mb-4.mb-md-0.mt-3
              p Cuantificar y clarificar el problema.

            .col-8.col-md-2
              figure
                img(src='@/assets/curso/temas/tema4/img6.svg', alt='')

          .row.justify-content-center
            .col-8.col-md-2
              figure
                img(src='@/assets/curso/temas/tema4/img7.svg', alt='')             
            
            .col-md-8.mb-4.mb-md-0.mt-3
              p Análisis de causa raíz.
          
          .row.justify-content-center
            .col-md-2.mb-4.mb-md-0
            .col-md-6.mb-4.mb-md-0.mt-3
              p Establecimiento de metas.

            .col-8.col-md-2
              figure
                img(src='@/assets/curso/temas/tema4/img8.svg', alt='')

          .row.justify-content-center
            .col-8.col-md-2
              figure
                img(src='@/assets/curso/temas/tema4/img9.svg', alt='')             
            
            .col-md-8.mb-4.mb-md-0.mt-3
              p Diseño de soluciones.

          .row.justify-content-center
            .col-md-2.mb-4.mb-md-0
            .col-md-6.mb-4.mb-md-0.mt-3
              p Implantación de soluciones y evaluación de resultados.

            .col-8.col-md-2
              figure
                img(src='@/assets/curso/temas/tema4/img10.svg', alt='')

          .row.justify-content-center
            .col-8.col-md-2
              figure
                img(src='@/assets/curso/temas/tema4/img11.svg', alt='')             
            
            .col-md-8.mb-4.mb-md-0.mt-3
              p Acciones de garantía.

    .row.justify-content-center.mt-5
      .col-lg-10(data-aos="flip-down")
        .cajon.color-acento-botones.p-4
          p Para el sistema de gestión, es importante contar con el apoyo de algunas técnicas que ayuden a su desarrollo en la empresa. Algunas de estas herramientas sirven para encontrar problemas con la participación del personal, mientras que otras parten de mediciones o datos, obtenidos del proceso a controlar y, a partir del análisis de estos datos, se obtienen los resultados buscados.

    .row.my-5
      p Existen varias técnicas y herramientas que aplican las empresas para mejorar los productos y servicios que ayudan en la satisfacción del cliente; a continuación, presentamos algunos ejemplos:

    .row.justify-content-center.mt-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        .row.justify-content-center.p-4(titulo="Hoja de recopilación de datos")
          .col-8.col-md-3.mb-3
            figure
              img(src='@/assets/curso/temas/tema4/img12.svg', alt='')
        
          .col-md-9.mb-4.mb-md-0
            p Se diseña la hoja en forma de diagrama o de tabla y se recogen los datos indicando la frecuencia de observación, la cual sirve para identificar:
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.color-vineta1
                | Defectos de productos.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Causas de dichos defectos.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Clasificación de los productos defectuosos. 
              li 
                i.fas.fa-angle-right.color-vineta1
                | Variación de las características de los productos.

        .row.justify-content-center.p-4(titulo="Diagrama de Pareto")
          .col-8.col-md-3.mb-3
            figure
              img(src='@/assets/curso/temas/tema4/img13.svg', alt='')
        
          .col-md-9.mb-4.mb-md-0
            p También conocido como curva cerrada o distribución, es una gráfica que permite organizar datos de tal forma que queden en orden descendente, de izquierda a derecha, separados por barras.
        
        .row.justify-content-center.p-4(titulo="Diagrama de dispersión")
          .col-8.col-md-3.mb-3
            figure
              img(src='@/assets/curso/temas/tema4/img14.svg', alt='')
        
          .col-md-9.mb-4.mb-md-0
            p Es de gran utilidad para la solución de problemas en un proceso y permite comprobar qué factores están influyendo en la dispersión de una característica de calidad; la manera más común es:
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.color-vineta1
                | Correlación lineal positiva: al aumentar el valor de una variable, aumenta el de la otra.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Correlación lineal negativa: cuando aumenta una variable, la otra disminuye.
              li 
                i.fas.fa-angle-right.color-vineta1
                | De correlación no lineal: existe relación entre las dos variables, en forma de curva.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Sin correlación: no existe relación alguna de influencia entre las dos variables.

        .row.justify-content-center.p-4(titulo="Diagrama causa – efecto")
          .col-8.col-md-3.mb-3
            figure
              img(src='@/assets/curso/temas/tema4/img15.svg', alt='')
        
          .col-md-9.mb-4.mb-md-0
            p Es una herramienta que ayuda a estudiar todas las posibles causas que pueden producir variaciones en un proceso y son conocidas como las 6 V:
            .row.justify-content-center
              .col-lg-6
                ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right.color-vineta1
                    | Variaciones en las máquinas o equipos.
                  li 
                    i.fas.fa-angle-right.color-vineta1
                    | Variaciones en el material de entrada al proceso.
                  li 
                    i.fas.fa-angle-right.color-vineta1
                    | Variaciones en el método o procedimiento.
              .col-lg-6
                ul.lista-ul--color
                  li 
                    i.fas.fa-angle-right.color-vineta1
                    | Variaciones en los operarios o mano obra.
                  li 
                    i.fas.fa-angle-right.color-vineta1
                    | Variaciones en el medio ambiente.
                  li 
                    i.fas.fa-angle-right.color-vineta1
                    | Variaciones en las medidas.
        
        .row.justify-content-center.p-4(titulo="Histograma")
          .col-8.col-md-3.mb-3
            figure
              img(src='@/assets/curso/temas/tema4/img16.svg', alt='')
        
          .col-md-9.mb-4.mb-md-0
            p Consiste en la presentación de una serie de medidas clasificadas y ordenadas en filas y columnas. El histograma se usa para:
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.color-vineta1
                | Obtener una comunicación clara y efectiva de la variabilidad del sistema.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Mostrar el resultado de un cambio en el sistema.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Identificar anormalidades, examinando la forma.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Comparar la variabilidad con los límites de especificación.

        .row.justify-content-center.p-4(titulo="Estratificación")
          .col-8.col-md-3.mb-3
            figure
              img(src='@/assets/curso/temas/tema4/img17.svg', alt='')
        
          .col-md-9.mb-4.mb-md-0
            p Permite clasificar la información recopilada sobre una característica de calidad. Los criterios para la estratificación son:
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.color-vineta1
                | Tipo de defecto.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Causa y efecto.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Localización del efecto.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Material, producto, fecha de producción, grupo de trabajo, operador, proveedor, lote, etc.
        
        .row.justify-content-center.p-4(titulo="Gráficos de control")
          .col-8.col-md-3.mb-3
            figure
              img(src='@/assets/curso/temas/tema4/img18.svg', alt='')
        
          .col-md-9.mb-4.mb-md-0
            p Se refiere a monitorizar el proceso que se esté analizando para controlar su buen funcionamiento y detectar, rápidamente, cualquier anomalía. Existen dos tipos de gráficos de control:
            ul.lista-ul--color
              li 
                i.fas.fa-angle-right.color-vineta1
                | Gráficos de control por variables.
              li 
                i.fas.fa-angle-right.color-vineta1
                | Gráficos de control por atributos.

    .row.my-5
      p Las <b>técnicas correctivas</b> son oportunidades de mejora, cada vez que la organización pueda permitir identificar las causas que las generan; a través del ejercicio de seguimiento y la verificación de las acciones tomadas, se emplean herramientas para que la entidad planee, ejecute, verifique o controle sus actividades y procesos, para una mejora continua.  
      p.mt-3 En este punto es necesario tener presentes los siguientes pasos:
    .row.justify-content-center.my-5
      .col-lg-5.mb-5(data-aos="fade-up-right")
        figure
          img(src='@/assets/curso/temas/tema4/img19.svg', alt='')        
      .col-lg-7(data-aos="fade-up-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Apertura")
            p Se trata básicamente de tener en cuenta las características de la situación que demanda una solución. Por ejemplo, la naturaleza de la incidencia y sus eventuales efectos, los informes previos, los indicadores de medición y el trabajo desplegado por la dirección.
          
          .row(titulo="Análisis")
            p En este paso se identifica la causa de la situación. La idea es describirla con la mayor precisión posible para diseñar una solución eficaz que se encuentre a su altura.

          .row(titulo="Planificación")
            p Inmediatamente después, se establecen las acciones que permitirán eliminar el fallo que ha sido detectado. Esto suele hacerse a través de un cronograma con plazos, responsables y tiempos asignados.
          
          .row(titulo="Verificación")
            p Tras registrar los resultados, el equipo evaluador entra en la etapa de evaluación, que consiste básicamente en verificar si los fallos han sido corregidos y si las causas del mismo se han eliminado. De no ser así, habrá que implementar nuevas soluciones.

    .row.justify-content-center.mt-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-botones.p-4
          p Es momento de hablar del plan de acción. En el mundo empresarial, se conoce como plan de acción o plan estratégico, a una herramienta administrativa o de gestión, mediante la cual una organización traza el mejor camino hacia la consecución de sus objetivos. Se trata de planes completos y detallados, en distintos niveles, en los cuales se determinan objetivos concretos, recursos necesarios para su cumplimiento y, finalmente, actividades necesarias para convertirlos en realidad. No existe una forma única de realizar los planes de acción, dado que suelen adaptarse a la situación y a las necesidades de cada organización.

    .row.my-5
      p Por lo tanto, si la empresa decide crear un plan de acción para un programa o evento que desea implementar, debe tener en cuenta los siguientes pormenores: 

    .row.justify-content-center.my-5
      .col-9.col-lg-12
        .row.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
            .tarjeta--boton.tarjeta-avatar4.p-4
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema4/img20.svg', alt='Texto que describa la imagen')

              p.text-center.my-3 Quién será responsable de la gestión.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.tarjeta-avatar4.p-4
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema4/img21.svg', alt='Texto que describa la imagen')

              p.text-center.my-3 Indicar los plazos para completar cada paso.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.tarjeta-avatar4.p-4
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema4/img22.svg', alt='Texto que describa la imagen')

              p.text-center.my-3 Adjuntar presupuesto del proveedor.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-left")
            .tarjeta--boton.tarjeta-avatar4.p-4
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema4/img23.svg', alt='Texto que describa la imagen')

              p.text-center.my-3 Establecer plazos para la toma de decisiones.

    .row.my-5
      p Es importante tener en cuenta que, aunque no existe una forma única para desarrollar un plan de acción, este se puede dividir en seis pasos principales que se deben completar, para que este sea idóneo.
      p.mt-3 Dichos pasos son:

    .row.justify-content-center.mt-5
      .col-lg-6.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img24.svg', alt='')
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Definir correctamente los objetivos")
            p Esto significa que, si no se sabe lo que se quiere lograr, será imposible alcanzar el verdadero éxito. Por lo tanto, el punto de partida de cualquier plan de acción, será siempre plantearse objetivos alcanzables, específicos y concretos a largo, mediano y corto plazo.

          .row(numero="2" titulo="Planificación y selección de estrategias")
            p Existen varios caminos posibles hacia un mismo objetivo, y primero se deben considerar todos los caminos posibles para elegir el que mejor se adapte a las necesidades, ritmos y recursos. Una vez realizado el recuento, se pueden descartar aquellos que no sean útiles o viables, hasta encontrar una estrategia óptima.

          .row(numero="3" titulo="Definir y priorizar tareas")
            p La estrategia no es más que un camino posible, es decir, un camino seguido en abstracto que, puesto en práctica, conducirá a un determinado conjunto de tareas. Estas tareas van desde la obtención de los recursos faltantes, su organización y aprovechamiento, hasta el control o revisión necesarios para la toma de decisiones. Para alinearlos con la estrategia, será importante identificar qué tareas son necesarias y luego priorizarlas como urgentes, importantes y generalizadas.

          .row(numero="4" titulo="Crear un diagrama de Gantt")
            p Esta herramienta ayuda a definir las horas de inicio y finalización de cada tarea, así como el tiempo requerido para una revisión. Ninguna tarea puede posponerse indefinidamente.

          .row(numero="5" titulo="Asignar líderes y gerentes")
            p Cada organización está conformada por una jerarquía, una cadena de gerentes que se debe coordinar y hacer que cada tarea avance. No se trata de nombrar jefes, se trata de delegar autoridad para que no se presenten “cuellos de botella” que frenen la toma de decisiones.

          .row(numero="6" titulo="Ejecutar el plan")
            p Naturalmente, la última parte de cualquier plan es comenzar. Esto significa no solo seguir lo establecido en el plan, sino verificar también la corrección del plan propuesto con las dinámicas de control y auditoría y, en caso contrario, corregirlo en tiempo y forma.

    .row.justify-content-center.mt-5
      .col-lg-10(data-aos="flip-down")
        .bloque-texto-g.color-bloque-texto.p-3.p-sm-4.p-md-4
          .bloque-texto-g3__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img25.svg')})`}"
          )
          .bloque-texto-g3__texto.p-4
            p Los planes de acción están fundamentados en una estructura que ayuda a las organizaciones a mejorar sus procesos y a conservar la ruta de planificación, continuar con el crecimiento a través de la eficacia y la efectividad en la entrega de productos y servicios, y la satisfacción del cliente.
            p Las estrategias comprenden aquellas acciones oportunas para alcanzar los objetivos concretos de la organización; una vez se tiene claro qué se espera lograr, se puede analizar que en el plan de acción se especifican unas acciones a ejecutar en un tiempo determinado, seleccionando tareas con fechas límites de ejecución.

    .row.my-5
      p El plan de acción para la empresa, establece la necesidad de cumplir con los requerimientos de la norma NTC ISO 9001, para garantizar el buen funcionamiento de los programas y el análisis del mismo, permitiendo realizar un seguimiento a la ruta que debe seguir la organización, a través de una planificación precisa en cada programa, determinando las tareas con fechas límites de ejecución en sus productos y servicios, para una mejor atención al cliente. Además, el plan de acción debe contar con una planeación estratégica que contenga: 

    .row.justify-content-center.mt-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-secundario.p-4
          .row
            .col-lg-6
              ul.lista-ul--color
                li 
                  i.fas.fa-angle-right.color-vineta3
                  | Definición de la actividad principal de la empresa.
                li 
                  i.fas.fa-angle-right.color-vineta3
                  | Estructura organizacional.
                li 
                  i.fas.fa-angle-right.color-vineta3
                  | Principios corporativos y valores.
                li 
                  i.fas.fa-angle-right.color-vineta3
                  | Misión.
                li 
                  i.fas.fa-angle-right.color-vineta3
                  | Visión.
                li 
                  i.fas.fa-angle-right.color-vineta3
                  | Objetivos corporativos.
            .col-lg-6
              ul.lista-ul--color
                li 
                  i.fas.fa-angle-right.color-vineta3
                  | Metas.
                li 
                  i.fas.fa-angle-right.color-vineta3
                  | Políticas.
                li 
                  i.fas.fa-angle-right.color-vineta3
                  | Estrategias corporativas. 
                li 
                  i.fas.fa-angle-right.color-vineta3
                  | Cultura organizacional.
                li 
                  i.fas.fa-angle-right.color-vineta3
                  | Analizar el sistema de gestión.

    .row.my-5
      p Para conocer el seguimiento al cumplimiento de los planes de acción para el sistema de gestión, lo invitamos a ver el siguiente video:

    .row.mt-5(data-aos="zoom-in-up")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/RJcpj1SHDeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mt-5
          ul.vineta-titulos(data-aos="fade-down-left")
            li
              h2.mb-0.h2-vineta Identificación de las partes interesadas

    .row.my-5
      p Las partes interesadas, se refiere a todo aquel que se pueda ver afectado, beneficiado o perjudicado, por el desempeño de una organización, bien sea un individuo o un grupo de personas.

    .row.justify-content-center.mt-5
      .col-lg-6(data-aos="flip-left")
        .cajon.color-acento-botones.p-4
          p.mb-5 La Norma ISO 9001 entiende las partes interesadas como el contexto de la organización, es decir los factores internos y externos que puedan impactar en la empresa; algunos de ellos como son los empleados, socios, clientes, competencia, proveedores, sindicatos, normativas, entre otros.

      .col-lg-6(data-aos="flip-right")
        .cajon.color-secundario.p-4
          p.mb-4 Para desarrollar la matriz de partes interesadas debemos: identificar las partes interesadas de la empresa, describir las necesidades, describir que procedimientos o metodologías desarrolla cada aspecto identificado y la descripción de los documentos que se generan para evidenciar cómo se está controlando la necesidad.

    .row.my-5
      p El líder del proceso, que está representado por la alta gerencia, será responsable de garantizar que los criterios se definan para medir de manera estandarizada la satisfacción de las partes interesadas con respecto a los servicios.
      p En la administración pública y privada, en su mapa de procesos, se pueden dimensionar cuatro macro procesos: 

    .row.justify-content-center.my-5
      .col-9.col-lg-12
        .row.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
            .tarjeta--boton.tarjeta-avatar4.p-4
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema4/img26.svg', alt='Texto que describa la imagen')

              p.text-center.my-3 Proceso estratégico.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.tarjeta-avatar4.p-4
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema4/img27.svg', alt='Texto que describa la imagen')

              p.text-center.my-3 Procesos misionales.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.tarjeta-avatar4.p-4
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema4/img28.svg', alt='Texto que describa la imagen')

              p.text-center.my-3 Procesos de apoyo.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-left")
            .tarjeta--boton.tarjeta-avatar4.p-4
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema4/img29.svg', alt='Texto que describa la imagen')

              p.text-center.my-3 Procesos de control y evaluación.

    .row.my-5
      p La medición de la satisfacción de las partes interesadas, se aplica a la misión y a los procesos de apoyo; comienza con el diseño de la herramienta para medir la satisfacción para su aplicación, y termina con el establecimiento y evaluación de las oportunidades de mejora, resultado del análisis de medición.

    .row.justify-content-center.mt-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-botones.p-4
          p.mb-0 Ha finalizado el estudio de este recurso educativo. Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema4',
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
