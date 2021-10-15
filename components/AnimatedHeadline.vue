<template>
  <component :is="as" class="headline">
    <span v-for="(word, i) in words" :key="i" :style="{ '--delay': `${i * 0.15}s` }">
      {{ word }}
    </span>
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'h3'
    },
    text: {
      type: String,
      required: true
    }
  },

  computed: {
    words () {
      return this.text.split(' ')
    }
  }
}
</script>
