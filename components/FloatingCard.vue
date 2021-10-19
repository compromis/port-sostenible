<template>
  <article :class="['card', type]">
    <div class="card-number top">
      <span>{{ number }}</span>
      <img v-if="type === 'lie'" src="../assets/icons/x.svg" alt="Fals">
      <img v-if="type === 'proposal'" src="../assets/icons/tick.svg" alt="Proposta">
    </div>
    <div class="card-text top">
      <slot name="top" />
    </div>
    <div class="card-text bottom">
      <slot name="bottom" />
    </div>
    <div class="card-number bottom" aria-hidden="true">
      <span>{{ number }}</span>
      <img v-if="type === 'lie'" src="../assets/icons/x.svg" alt="">
      <img v-if="type === 'proposal'" src="../assets/icons/tick.svg" alt="">
    </div>
    <div class="card-background">
      <img v-if="type === 'lie'" src="../assets/icons/x-outline.svg" alt="">
      <img v-if="type === 'proposal'" src="../assets/icons/tick-outline.svg" alt="">
    </div>
  </article>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'lie'
    },
    number: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  z-index: 1000;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "number-top text-top text-top"
    "text-bottom text-bottom ."
    "text-bottom text-bottom number-bottom";
  gap: 2rem;
  background: var(--card-background);
  color: var(--card-outline);
  padding: 2.25rem 2rem;
  aspect-ratio: 1 / 1.5;
  box-shadow: 0 0 7rem -2rem rgba($black, .75), 0 0 2rem -.4rem $black;
  border-radius: 1rem;
  border: 2px var(--card-outline) solid;

  @supports not (aspect-ratio: auto) {
    min-height: 30em;
  }

  &-text {
    position: relative;
    z-index: 5;
    font-size: clamp(1.25rem, 2vw, 1.75rem);
    line-height: 1.25;

    &.top {
      grid-area: text-top;
      text-align: right;
      color: var(--card-accent);
      font-weight: bold;
      max-width: 12ch;
      justify-self: end;
    }

    &.bottom {
      grid-area: text-bottom;
      align-self: end;
    }
  }

  &-number {
    position: relative;
    z-index: 5;
    font-family: $headings-font-family;
    width: fit-content;
    line-height: 1;

    &.top {
      grid-area: number-top;
    }

    &.bottom {
      grid-area: number-bottom;
      transform: rotate(180deg);
    }

    span {
      font-size: 4.25rem;
      display: block;
    }

    img {
      display: block;
      width: 1em;
      transform: scale(1.5);
      margin: 0 auto;
      user-select: none;
    }
  }

  &-background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-self: center;
    justify-content: center;
    z-index: 1;

    img {
      width: 65%;
    }
  }

  &.proposal {
    --card-accent: #{$green};
    --card-background: #{$white};
    --card-outline: #{$black};

    box-shadow: 0 0 10rem -2rem rgba($black, .15), 0 0 2rem -.4rem rgba($black, .5);
    border-color: $white;
  }

  &.lie {
    --card-accent: #{$red};
    --card-background: #{$black};
    --card-outline: #{$white};
  }
}

@media (max-width: $breakpoint-md) {
  .card {
    padding: 1.5rem;
    box-shadow: 0 0 4rem -2rem rgba($black, .75), 0 0 2rem -.4rem $black;
  }
}
</style>
