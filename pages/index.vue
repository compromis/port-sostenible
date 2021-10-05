<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      direction: 'vertical'
    }"
  >
    <section data-scroll-section>
      <div data-scroll data-scroll-repeat class="wrapper">
        <div id="target" />
        <div id="target-2" />
        <div class="comparison-container" data-scroll data-scroll-sticky data-scroll-target="#target">
          <div class="box-wrapper">
            <div class="box a" />
            <div class="box b" :style="{ width: widthComparisonVw }" />
          </div>
        </div>
        <div class="year" data-scroll data-scroll-sticky data-scroll-target="#target-2">
          Text
        </div>
      </div>
    </section>
    <div class="filler" />
  </LocomotiveScroll>
</template>

<script>
export default {

  data () {
    return {
      widthComparison: 0
    }
  },

  computed: {
    widthComparisonVw () {
      return this.widthComparison + 'vw'
    }
  },

  mounted () {
    this.$refs.scroller.locomotive.on('scroll', this.handleScroll)
  },

  methods: {
    handleScroll ({ scroll }) {
      const vh = window.innerHeight * 0.01
      this.widthComparison = (scroll.y * 100) / (300 * vh)
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  position: relative;
  height: 700vh;
  background: fuchsia;
}

#target {
  position: absolute;
  top: -100vh;
  bottom: 100vh;
  left: 0;
  right: 0;
  background: yellow;
}

#target-2 {
  position: absolute;
  top: -100vh;
  bottom: 0;
  left: 0;
  right: 0;
  background: green;
}

.comparison-container {
  background: blue;
  position: absolute;
  top: -100vh;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100vh;
  display: flex;
  opacity: .5;
}

.filler {
  height: 1000vh;
}

.box-wrapper {
  position: relative;
  background: blueviolet;
  flex-grow: 1;
}

.box {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: aqua;
  top: 0;
  left: 0;
  bottom: 0;

  &.a {
    background: fuchsia;
    background: url(https://images.unsplash.com/photo-1633295979780-5445615c2cbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2970&q=80);
    width: 100vw;
  }

  &.b {
    background: aquamarine;
    background: url(https://images.unsplash.com/photo-1633334889899-35d144cdfd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2970&q=80);
    width: 25vw;
  }
}

.year {
  background: rgba(red, .5);
  position: absolute;
  top: -100vh;
  bottom: 0;
  right: 10px;
  left: 10px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
