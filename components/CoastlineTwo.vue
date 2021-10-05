<template>
  <LocomotiveScroll
    :getted-options="{
      smooth: true,
      direction: 'vertical',
      smartphone: {
        smooth: true,
        direction: 'vertical',
      },
      tablet: {
        smooth: true,
        direction: 'vertical',
      },
    }"
  >
    <div id="direction">
      <div
        class="a"
        data-scroll=""
      >
        A
      </div>
      <div
        class="b"
        data-scroll=""
      >
        B
      </div>
    </div>
  </LocomotiveScroll>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.a {
  height: 200px;
  width: 200px;
  background: red;
}

.b {
  height: 200px;
  width: 200px;
  background: yellow;
}
</style>
