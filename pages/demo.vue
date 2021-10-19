<template>
  <main>
    <LocomotiveScroll
      ref="scroller"
      :getted-options="{
        smooth: true,
        tablet: { smooth: false, breakpoint: 0 },
        smartphone: { smooth: false, breakpoint: 0 }
      }"
    >
      <header id="Comparison" class="comparison">
        <div data-scroll-section class="comparison-section images">
          <div data-scroll data-scroll-repeat class="comparison-section-wrapper">
            <div id="rail-images" class="rail" />
            <div class="comparison-slide" data-scroll data-scroll-sticky data-scroll-target="#rail-images">
              <div class="image-wrapper">
                <div class="image image-a" />
                <div class="image image-b" :style="{ '--progress': comparisonProgress }" />
              </div>
            </div>
          </div>
        </div>
        <div class="comparison-texts">
          <div data-scroll-section class="comparison-section year-1960">
            <div data-scroll data-scroll-repeat class="comparison-section-wrapper">
              <div id="rail-1960" class="rail" />
              <div
                class="comparison-slide text"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#rail-1960"
              >
                1960
                <swipe-up :class="['swipe-up-icon', { scrolled }]" />
              </div>
            </div>
          </div>
          <div data-scroll-section class="comparison-section year-2021">
            <div data-scroll data-scroll-repeat class="comparison-section-wrapper">
              <div id="rail-2021" class="rail" />
              <div
                class="comparison-slide text top-0"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#rail-2021"
              >
                2021
              </div>
            </div>
          </div>
          <div data-scroll-section class="comparison-section header">
            <div data-scroll data-scroll-repeat class="comparison-section-wrapper">
              <div id="rail-header" class="rail" />
              <div
                class="comparison-slide text text-header top-0"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#rail-header"
              >
                <h2>Les conseqüències de <br> l'amplicació del port</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="intro-paragraph" data-scroll-section>
        <div class="container">
          <p data-scroll>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea com.
          </p>
        </div>
      </div>
      <section id="Lies" class="lies cards-section" data-scroll-section>
        <h2 class="section-header">
          <strong>10 mentides</strong><br>
          <span>sobre l'ampliació</span>
          <span>del port</span>
        </h2>
        <div id="scroll-direction" class="container">
          <div class="cards-list">
            <div class="card-wrapper">
              <floating-card type="lie" number="1" data-scroll data-scroll-speed="2">
                <template #top>
                  Es crearan milers de llocs de treball
                </template>
                <template #bottom>
                  El personal del port ha denunciat queamb l'automatització de la terminal es poden destruir fins a 500 llocs de treball
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset">
              <floating-card type="lie" number="2" data-scroll data-scroll-speed="3">
                <template #top>
                  Té una avaluació ambiental vigent favorable
                </template>
                <template #bottom>
                  L’avaluació de 2007 està caducada
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="lie" number="3" data-scroll data-scroll-speed="2">
                <template #top>
                  Millorarà l’economia valenciana
                </template>
                <template #bottom>
                  No, sols respon a l’avarícia d’una de les empreses més contaminants del planeta
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="lie" number="4" data-scroll data-scroll-speed="3">
                <template #top>
                  No costarà ni un euro a la ciutadania
                </template>
                <template #bottom>
                  Tindrà un cost directe de, com a mínim, 458 milions públics, el que valen 82 escoles públiques
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="lie" number="5" data-scroll data-scroll-speed="2">
                <template #top>
                  No afectarà l’Albufera ni les platges del sud
                </template>
                <template #bottom>
                  Els dics del Port ja afecten les platges del sud, i posen en perill el parc natural de l’Albufera
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="lie" number="6" data-scroll data-scroll-speed="3">
                <template #top>
                  El Port necessita l’ampliació per a ser competitiu
                </template>
                <template #bottom>
                  El que necessita per a ser més competitiu és la connexió ferroviària del Corredor Mediterrani
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="lie" number="7" data-scroll data-scroll-speed="2">
                <template #top>
                  L’ampliació ja està feta perquè els dics ja es van fer
                </template>
                <template #bottom>
                  Queda la part més important del projecte, l’emplenament d’uns 250 camps de futbol de ciment i àrids
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="lie" number="8" data-scroll data-scroll-speed="3">
                <template #top>
                  S’està escoltant a la ciutadania
                </template>
                <template #bottom>
                  No, actuen de forma unilateral sense escoltar els veïns, els treballadors, els experts, conselleria, ni tampoc a l’Ajuntament
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="lie" number="9" data-scroll data-scroll-speed="2">
                <template #top>
                  El Port de Barcelona farà una ampliació
                </template>
                <template #bottom>
                  Barcelona la va aturar en 2020 per no ser viable econòmicament
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="lie" number="10" data-scroll data-scroll-speed="3">
                <template #top>
                  El govern d’Espanya ha  autoritzat l’ampliació
                </template>
                <template #bottom>
                  El govern ha traslladat a l’Autoritat Portuària (organisme independent), la recomanació de fer un nou informe ambiental
                </template>
              </floating-card>
            </div>
          </div>
          <div id="direction" class="marquees">
            <div class="marquee one">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="4" data-scroll-target="#direction">
                Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;Fals&nbsp;&nbsp;Fals&nbsp;&nbsp;Fals&nbsp;&nbsp;Fals&nbsp;&nbsp;Fals&nbsp;&nbsp;Fals
              </span>
            </div>
            <div class="marquee two">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#direction">
                Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals
              </span>
            </div>
            <div class="marquee three">
              <span
                class="marquee-inner"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="5"
                data-scroll-delay="0.05"
                data-scroll-target="#direction"
              >
                Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals
              </span>
            </div>
            <div class="marquee four">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-target="#direction">
                Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals&nbsp;&nbsp;&nbsp;Fals
              </span>
            </div>
            <div class="marquee five">
              <span
                class="marquee-inner"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-10"
                data-scroll-delay="0.05"
                data-scroll-target="#direction"
              >
                Fals Fals Fals Fals
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="Headlines" class="headlines" data-scroll-section>
        <div class="container newspaper-page">
          <h2 class="section-header" data-scroll data-scroll-offset="20%,0">
            <div class="line" style="margin-bottom: 0.25em;" data-scroll data-scroll-offset="20%,0" />
            Una ampliació que<br>no&nbsp;&nbsp;fa&nbsp;&nbsp;bé&nbsp;&nbsp;&nbsp;a&nbsp;&nbsp;ningú
            <div class="line" data-scroll style="--delay: .5s;" />
          </h2>
          <a href="https://www.lasprovincias.es/valencia-ciudad/federacion-vecinos-exige-20210413122732-nt.html" target="_blank" rel="noopener" class="article article-1">
            <div>
              <img
                data-scroll
                data-scroll-offset="20%,0"
                src="~assets/images/lasprovincias.svg"
                alt="Las Provincias"
                class="source-logo"
                style="margin-bottom: .25em;"
              >
              <animated-headline data-scroll data-scroll-offset="20%,0" text="La federación de vecinos exige que se paralice la ampliación del puerto de València" />
            </div>
            <div data-scroll class="article-video">
              <video
                width="320"
                height="240"
                loop
                autoplay
                playsinline
                muted
              >
                <source src="../assets/videos/exhaust.mp4" type="video/mp4">
              </video>
            </div>
          </a>
          <div class="line" data-scroll data-scroll-offset="20%,0" />
          <a href="https://www.eldiario.es/comunitat-valenciana/valencia/danos-colaterales-ampliacion-puerto-valencia-erosion-playas-saler-alcanza-dunas-protegidas_1_6487618.html" target="_blank" rel="noopener" class="article article-2">
            <img
              data-scroll
              data-scroll-offset="20%,0"
              src="~assets/images/eldiario.svg"
              alt="eldiario.es"
              class="source-logo"
              style="margin-top: -.25em; margin-bottom: .75em;"
            >
            <animated-headline data-scroll data-scroll-offset="20%,0" text="Daños colaterales de la ampliación del puerto de València" />
            <animated-headline as="p" data-scroll data-scroll-offset="20%,0" text="La erosión de las playas del Saler alcanza ya las dunas protegidas" class="subtitle" />
          </a>
          <div class="line" data-scroll data-scroll-offset="20%,0" />
          <a href="https://www.valenciaextra.com/es/valencia/la-ampliacion-del-puerto-a-costa-de-la-salud-de-los-vecinos-de-poblats-maritims_158011_102.html" target="_blank" rel="noopener" class="article article-3">
            <div>
              <img
                data-scroll
                data-scroll-offset="20%,0"
                src="~assets/images/valenciaextra.svg"
                alt="eldiario.es"
                class="source-logo"
                style="margin-top: -.15em; margin-bottom: .25em;"
              >
              <animated-headline data-scroll data-scroll-offset="20%,0" text="La ampliación del Puerto, a costa de la salud de los vecinos de Poblats Marítims" />
            </div>
            <div>
              <p data-scroll data-scroll-offset="35%,0">
                Ayer el alcalde de València, Joan Ribó, volvió a pedir a la APV que el proyecto de ampliación de la nueva terminal de
                contenedores se sometiera a un nuevo estudio de impacto ambiental. Desde la presidencia de la entidad, Aurelio Martínez,
                señaló que dicha obra esta "cubierta" por el informe medioambiental que la APV obtuvo en 2007 para la ampliación norte.
              </p>
              <p data-scroll data-scroll-offset="35%,0">
                Desde el Puerto quieren modificar el antiguo proyecto para transformar la zona norte en un nuevo 'macromuelle' para contenedores, que conlleva varias acciones. Supone eliminar un contradique -en rojo en la imagen-, realizar una ampliación del 'dique de abrigo" -en verde-, y dragar y rellenar de tierra 137 hectáreas -en marrón-.
              </p>
            </div>
          </a>
          <div class="line" data-scroll data-scroll-offset="20%,0" style="margin-top: -.25em;" />
          <a href="https://valenciaplaza.com/los-estibadores-exponen-a-ribo-que-la-ampliacion-del-puerto-de-valencia-destruiria-500-empleos" target="_blank" rel="noopener" class="article article-4">
            <div data-scroll class="article-video">
              <video
                width="320"
                height="240"
                loop
                autoplay
                playsinline
                muted
              >
                <source src="~assets/videos/estibadores.mp4" type="video/mp4">
              </video>
            </div>
            <div>
              <img
                data-scroll
                data-scroll-offset="20%,0"
                src="~assets/images/valenciaplaza.svg"
                alt="Valencia Plaza"
                class="source-logo"
                style="margin-bottom: .35em;"
              >
              <animated-headline data-scroll data-scroll-offset="20%,0" text="Los estibadores exponen que la ampliación del puerto destruye 5.000 empleos" />
            </div>
          </a>
          <div class="line" data-scroll />
        </div>
      </section>
      <section id="consensus" class="consensus" data-scroll-section>
        <div class="container">
          <h2 class="section-header" data-scroll data-scroll-offset="20%,0">
            <span>Una ampliació</span>
            <strong>sense consens</strong>
          </h2>
          <div class="consensus-cols">
            <ul class="consensus-list consensus-against">
              <consensus-list-item icon="ajuntament" name="Ajuntament" stance="against" data-scroll data-scroll-offset="20%,0" />
              <consensus-list-item icon="generalitat" name="Generalitat" stance="against" data-scroll data-scroll-offset="20%,0" />
              <consensus-list-item icon="estibadors" name="Estibadors" stance="against" data-scroll data-scroll-offset="20%,0" />
              <consensus-list-item icon="veinat" name="Veïnat" stance="against" data-scroll data-scroll-offset="20%,0" />
              <consensus-list-item icon="ecologistes" name="Ecologistes" stance="against" data-scroll data-scroll-offset="20%,0" />
            </ul>
            <ul class="consensus-list consensus-for">
              <consensus-list-item icon="empresaris" name="Empresaris" stance="for" data-scroll data-scroll-offset="20%,0" />
              <consensus-list-item icon="vlcportauthority" name="Autoritat portuària" stance="for" data-scroll data-scroll-offset="20%,0" />
            </ul>
          </div>
        </div>
      </section>
      <section id="Proposals" class="proposals cards-section" data-scroll-section>
        <h2 class="section-header">
          <strong>10 propostes</strong><br>
          <span>per un port</span>
          <span>més sostenible</span>
        </h2>
        <div id="scroll-direction" class="container">
          <div class="cards-list">
            <div class="card-wrapper">
              <floating-card type="proposal" number="1" data-scroll data-scroll-speed="2">
                <template #top>
                  Es crearan milers de llocs de treball
                </template>
                <template #bottom>
                  El personal del port ha denunciat queamb l'automatització de la terminal es poden destruir fins a 500 llocs de treball
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset">
              <floating-card type="proposal" number="2" data-scroll data-scroll-speed="3">
                <template #top>
                  Té una avaluació ambiental vigent favorable
                </template>
                <template #bottom>
                  L’avaluació de 2007 està caducada
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="proposal" number="3" data-scroll data-scroll-speed="2">
                <template #top>
                  Millorarà l’economia valenciana
                </template>
                <template #bottom>
                  No, sols respon a l’avarícia d’una de les empreses més contaminants del planeta
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="proposal" number="4" data-scroll data-scroll-speed="3">
                <template #top>
                  No costarà ni un euro a la ciutadania
                </template>
                <template #bottom>
                  Tindrà un cost directe de, com a mínim, 458 milions públics, el que valen 82 escoles públiques
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="proposal" number="5" data-scroll data-scroll-speed="2">
                <template #top>
                  No afectarà l’Albufera ni les platges del sud
                </template>
                <template #bottom>
                  Els dics del Port ja afecten les platges del sud, i posen en perill el parc natural de l’Albufera
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="proposal" number="6" data-scroll data-scroll-speed="3">
                <template #top>
                  El Port necessita l’ampliació per a ser competitiu
                </template>
                <template #bottom>
                  El que necessita per a ser més competitiu és la connexió ferroviària del Corredor Mediterrani
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="proposal" number="7" data-scroll data-scroll-speed="2">
                <template #top>
                  L’ampliació ja està feta perquè els dics ja es van fer
                </template>
                <template #bottom>
                  Queda la part més important del projecte, l’emplenament d’uns 250 camps de futbol de ciment i àrids
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="proposal" number="8" data-scroll data-scroll-speed="3">
                <template #top>
                  S’està escoltant a la ciutadania
                </template>
                <template #bottom>
                  No, actuen de forma unilateral sense escoltar els veïns, els treballadors, els experts, conselleria, ni tampoc a l’Ajuntament
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper">
              <floating-card type="proposal" number="9" data-scroll data-scroll-speed="2">
                <template #top>
                  El Port de Barcelona farà una ampliació
                </template>
                <template #bottom>
                  Barcelona la va aturar en 2020 per no ser viable econòmicament
                </template>
              </floating-card>
            </div>
            <div class="card-wrapper offset-mini">
              <floating-card type="proposal" number="10" data-scroll data-scroll-speed="3">
                <template #top>
                  El govern d’Espanya ha  autoritzat l’ampliació
                </template>
                <template #bottom>
                  El govern ha traslladat a l’Autoritat Portuària (organisme independent), la recomanació de fer un nou informe ambiental
                </template>
              </floating-card>
            </div>
          </div>
          <div id="direction-proposals" class="marquees">
            <div class="marquee one">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="4" data-scroll-target="#direction-proposals">
                Sostenible&nbsp;&nbsp;&nbsp;Sostenible&nbsp;&nbsp;Sostenible
              </span>
            </div>
            <div class="marquee two">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#direction-proposals">
                Participatiu&nbsp;&nbsp;&nbsp;Participatiu&nbsp;&nbsp;&nbsp;Participatiu
              </span>
            </div>
            <div class="marquee three">
              <span
                class="marquee-inner"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="5"
                data-scroll-delay="0.05"
                data-scroll-target="#direction-proposals"
              >
                Ecologisme&nbsp;&nbsp;&nbsp;Ecologisme&nbsp;&nbsp;&nbsp;Ecologisme&nbsp;&nbsp;&nbsp;Ecologisme
              </span>
            </div>
            <div class="marquee four">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-target="#direction-proposals">
                Treball&nbsp;&nbsp;&nbsp;Treball&nbsp;&nbsp;&nbsp;Treball&nbsp;&nbsp;&nbsp;Treball
              </span>
            </div>
            <div class="marquee five">
              <span
                class="marquee-inner"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-10"
                data-scroll-delay="0.05"
                data-scroll-target="#direction-proposals"
              >
                Entorn&nbsp;&nbsp;Entorn&nbsp;&nbsp;Entorn&nbsp;&nbsp;Entorn&nbsp;&nbsp;Entorn&nbsp;&nbsp;Entorn
              </span>
            </div>
          </div>
        </div>
      </section>
    </LocomotiveScroll>
  </main>
</template>

<script>
import ComparisonMixin from '@/mixins/comparison-mixin'

export default {
  mixins: [ComparisonMixin]
}
</script>
