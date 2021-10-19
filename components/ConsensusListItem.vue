<template>
  <li>
    <span class="consensus-list-icon">
      <img v-if="icon === 'ajuntament'" src="~/assets/icons/ajuntament.svg" alt="">
      <img v-if="icon === 'generalitat'" src="~/assets/icons/generalitat.svg" alt="">
      <img v-if="icon === 'estibadors'" src="~/assets/icons/estibadors.svg" alt="">
      <img v-if="icon === 'veinat'" src="~/assets/icons/veinat.svg" alt="">
      <img v-if="icon === 'ecologistes'" src="~/assets/icons/ecologistes.svg" style="width: 75%;" alt="">
      <img v-if="icon === 'empresaris'" src="~/assets/icons/empresaris.svg" alt="">
      <img v-if="icon === 'vlcportauthority'" src="~/assets/icons/vlcportauthority.svg" alt="">
    </span>
    <span class="consensus-list-name">
      {{ name }}
    </span>
    <span class="consensus-list-stance">
      {{ stance === 'against' ? 'En contra' : 'A favor' }}
    </span>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    stance: {
      type: String,
      default: 'against'
    }
  }
}
</script>
