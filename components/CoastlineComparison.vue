<template>
  <div class="sticky-container">
    <div class="sticky">
      <div class="comparison-container">
        <div class="a" />
        <div class="b" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sticky-container {
  background: red;
  height: 300vh;
  position: relative;
}

.sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  background: gray;
  display: flex;
}

.comparison-container {
  background: blue;
  flex-grow: 1;
  position: relative;
}

.a {
  position: absolute;
  background: url(https://images.unsplash.com/photo-1633307325974-dca964553b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80);
  background-attachment: fixed;
  background-size: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.b {
  position: absolute;
  width: 50vw;
  background: url(https://images.unsplash.com/photo-1633307325974-dca964553b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80);
  background-attachment: fixed;
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  filter: hue-rotate(180deg);
}
</style>
