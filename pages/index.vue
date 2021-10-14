<template>
  <main>
    <LocomotiveScroll ref="scroller">
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
      <section id="Lies" class="lies" data-scroll-section>
        <h2 class="section-header">
          <strong>10 mentides</strong><br>
          <span>sobre l'ampliació</span>
          <span>del port</span>
        </h2>
        <div id="scroll-direction" class="container" style="min-height: 200vh;">
          <div class="cards-list lies">
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
            <div class="lie-wrapper">
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
          <h2 class="section-header" data-scroll>
            <div class="line" style="margin-bottom: 0.25em;" data-scroll />
            Una ampliació que<br>no&nbsp;&nbsp;fa&nbsp;&nbsp;bé&nbsp;&nbsp;&nbsp;a&nbsp;&nbsp;ningú
            <div class="line" data-scroll />
          </h2>
          <article class="article article-1">
            <h3 data-scroll class="headline">
              La federación de vecinos exige que se paralice la ampliación del puerto de València
            </h3>
          </article>
          <div class="line" data-scroll />
          <article class="article article-2">
            <h3 data-scroll class="headline">
              Daños colaterales de la ampliación del puerto de València
            </h3>
          </article>
          <div class="line" data-scroll />
          <article class="article article-3">
            <h3 data-scroll class="headline">
              La ampliación del Puerto, a costa de la salud de los vecinos de Poblats Marítims
            </h3>
          </article>
          <div class="line" data-scroll />
          <article class="article article-4">
            <h3 data-scroll class="headline">
              Los estibadores exponen que la ampliación del puerto destruye 5.000 empleos
            </h3>
          </article>
          <div class="line" data-scroll />
        </div>
      </section>
    </LocomotiveScroll>
  </main>
</template>

<script>
export default {

  data () {
    return {
      widthComparison: 0
    }
  },

  computed: {
    comparisonProgress () {
      return this.widthComparison + '%'
    }
  },

  mounted () {
    this.$refs.scroller.locomotive.on('scroll', this.handleScroll)
    this.$refs.scroller.locomotive.update()
  },

  methods: {
    handleScroll ({ scroll }) {
      const vh = window.innerHeight * 0.01
      const progress = (scroll.y * 100) / (125 * vh)
      this.widthComparison = progress > 100 ? 100 : progress
    }
  }
}
</script>

<style lang="scss">
.hello {
  color: world;
}
</style>
