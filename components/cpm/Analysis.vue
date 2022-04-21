<template>
  <div class="w-full h-full flex flex-wrap">
    <p class="m-2 ml-9 text-lg prose">
      Diurnal cycles of precipitation in summer for the future climate.
    </p>
    <p class="m-2 ml-9 text-lg prose">
      The selected domain is: {{ domain }}
    </p>
    <div
      class="bg-no-repeat bg-left-top bg-contain w-full h-full"
      :style="{backgroundImage: `url(${diurnalCycleImage})` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    domain: {
      default: 'AL',
      type: String
    }
  },
  computed: {
    diurnalCycleImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/analyse/' + this.domain + '_future_JJA.png')
      } catch (err) {
        return fallback
      }
    }
  }
}
</script>
