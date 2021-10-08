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
        <div id="scroll-direction" class="container" style="min-height: 200vh;">
          <h2 data-scroll class="section-header">
            <strong>10 mentides</strong>
            <span>sobre l'ampliació</span>
            <span>del port</span>
          </h2>
          <div id="direction" class="marquees">
            <div class="marquee one">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#direction">
                Fals Fals Fals Fals Fals Fals Fals Fals
              </span>
            </div>
            <div class="marquee two">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-8" data-scroll-target="#direction">
                Fals Fals Fals Fals
              </span>
            </div>
            <div class="marquee three">
              <span
                class="marquee-inner"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="9"
                data-scroll-delay="0.05"
                data-scroll-target="#direction"
              >
                Fals Fals Fals Fals Fals Fals Fals
              </span>
            </div>
            <div class="marquee four">
              <span class="marquee-inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="15" data-scroll-target="#direction">
                Fals Fals Fals Fals Fals
              </span>
            </div>
            <div class="marquee five">
              <span
                class="marquee-inner"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="-20"
                data-scroll-delay="0.05"
                data-scroll-target="#direction"
              >
                Fals Fals Fals Fals
              </span>
            </div>
          </div>
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
.marquees {
  position: absolute;
  right: 0;
  left: 0;
  z-index: 1;
  top: -50vh;
  bottom: -50vh;
}

.marquee {
  position: absolute;
  font-size: 10vw;
  white-space: nowrap;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;

  &.one {
    top: 33%;
    transform: translateX(-50vw) rotate(26deg);
  }

  &.two {
    top: 45%;
  }

  &.three {
    top: 55%;
    transform: rotate(9deg);
  }

  &.four {
    top: 68%;
    transform: translateX(-50vw) rotate(-19deg);
  }

  &.five {
    top: 63%;
    transform: translateX(-10vw) rotate(3deg);
  }
}

.marquee-inner {
  display: block;
  white-space: nowrap;
  padding: .25em;
  font-size: 10vw;
  background: $red;
  width: fit-content;
}
</style>
