<template>
  <svg viewBox="0 0 345.65 452.7">
    <polygon class="chev three" points="345.65 171.03 174.62 0 174.26 0.36 173.9 0 2.87 171.03 37.64 205.8 174.26 69.19 310.88 205.8 345.65 171.03" />
    <polygon class="chev two" points="342.78 295.93 171.75 124.9 171.39 125.26 171.03 124.9 0 295.93 34.77 330.7 171.39 194.09 308.01 330.7 342.78 295.93" />
    <polygon class="chev one" points="344.78 417.93 173.75 246.9 173.39 247.26 173.03 246.9 2 417.93 36.77 452.7 173.39 316.09 310.01 452.7 344.78 417.93" />
  </svg>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.chev {
  fill: white;

  &.one {
    animation: fadeOne 2s infinite;
  }

  &.two {
    animation: fadeTwo 2s infinite;
  }

  &.three {
    animation: fadeThree 2s infinite;
  }
}

@keyframes fadeOne {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  60% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fadeTwo {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }

  60% {
    opacity: 1;
  }

  80% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fadeThree {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
