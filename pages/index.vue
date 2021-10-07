<template>
  <div>
    <LocomotiveScroll
      ref="scroller"
      :getted-options="{
        direction: 'vertical',
        smooth: true
      }"
    >
      <div class="comparison">
        <section data-scroll-section class="comparison-section images">
          <div data-scroll data-scroll-repeat class="comparison-section-wrapper">
            <div id="rail-images" class="rail" />
            <div class="comparison-slide" data-scroll data-scroll-sticky data-scroll-target="#rail-images">
              <div class="image-wrapper">
                <div class="image image-a" />
                <div class="image image-b" :style="{ '--progress': comparisonProgress }" />
              </div>
            </div>
          </div>
        </section>
        <section data-scroll-section class="comparison-section year-1960">
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
        </section>
        <section data-scroll-section class="comparison-section year-2021">
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
        </section>
        <section data-scroll-section class="comparison-section header">
          <div data-scroll data-scroll-repeat class="comparison-section-wrapper">
            <div id="rail-header" class="rail" />
            <div
              class="comparison-slide text text-header top-0"
              data-scroll
              data-scroll-sticky
              data-scroll-target="#rail-header"
            >
              Les conseqüències de <br> l'amplicació del port
            </div>
          </div>
        </section>
      </div>
      <div class="filler">
        filler
      </div>
    </LocomotiveScroll>
  </div>
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
:root {
  --comparison-height: 525vh;
}

.comparison {
  position: relative;
  height: var(--comparison-height);

  &-section {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1000;

    &-wrapper {
      position: relative;
    }

    &.images {
      position: static;

      .comparison-section-wrapper {
        height: calc(var(--comparison-height) - 150vh);
      }
    }

    &.year-1960 {
      top: 0;

      .comparison-section-wrapper {
        height: 150vh;
      }
    }

    &.year-2021 {
      top: 125vh;

      .comparison-section-wrapper {
        height: 150vh;
      }
    }

    &.header {
      top: 250vh;

      .comparison-section-wrapper {
        height: 200vh;
      }
    }
  }

  &-slide {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100vh;
    display: flex;

    &.text {
      align-items: center;
      justify-content: center;
      color: white;
      font-size: clamp(3rem, 12vw, 15rem);
      font-family: $headings-font-family;
      text-align: center;
      text-transform: uppercase;
      line-height: 1.05;
    }

    &.top-0 {
      top: 0;
    }
  }

  .rail {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .image-wrapper {
    position: relative;
    flex-grow: 1;
  }

  .image {
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;

    &-a {
      background-image: url('../assets/beach-bn.webp');
    }

    &-b {
      background-image: url('../assets/beach-col.webp');
      clip-path: polygon(0 0, var(--progress) 0, var(--progress) 100%, 0% 100%);
    }
  }
}

.filler {
  height: 1000vh;
  background: fuchsia;
}
</style>
