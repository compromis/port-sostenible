<template>
  <div class="placeholder">
    <h1>NO A L'AMPLIACIÓ DEL PORT</h1>
    <p>Estem en construcció</p>
    <p>Torna en uns dies ;)</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.placeholder {
  background: $green;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-family: $headings-font-family;
    font-size: clamp(3rem, 12vw, 15rem);
  }
}
</style>
