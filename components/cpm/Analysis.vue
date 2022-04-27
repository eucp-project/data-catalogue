<template>
  <div class="flex flex-col items-stretch w-full h-full">
    <div class="prose max-w-none p-4">
      <h1>
        Diurnal cycles of precipitation in summer for the future climate.
      </h1>
    </div>
    <div class="flex p-4">
      <div class="prose max-w-none">Select a region:</div>
      <div class="ml-4"><!-- not prose not working in this version? -->
        <multiselect
          v-model="selectedDomain"
          :options="domains"
          :allow-empty="false"
          :close-on-select="true"
          :show-labels="false"
          label="name"
          deselect-label=" "
          placeholder="Select a region."
        />
      </div>
    </div>
    <div
      class="bg-no-repeat bg-left-top bg-contain h-full"
      :style="{backgroundImage: `url(${diurnalCycleImage})` }"
    />
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  data () {
    return {
      selectedDomain: { name: 'Alps', code: 'AL' },
      domains: [
        { name: 'Alps', code: 'AL' },
        { name: 'Northern Europe', code: 'N' },
        { name: 'Northwest Europe', code: 'NW' },
        { name: 'Central Europe', code: 'C' },
        { name: 'Central Eastern Europe', code: 'CE' },
        { name: 'Southwest Europe', code: 'SW' },
        { name: 'Southeast Europe', code: 'SE' }
      ]
    }
  },
  computed: {
    diurnalCycleImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/analyse/' + this.selectedDomain.code + '_future_JJA.png')
      } catch (err) {
        return fallback
      }
    }
  }
}
</script>
