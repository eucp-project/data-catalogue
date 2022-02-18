<template>
  <div class="w-full h-full">
    <span class="space-x-3 p-3">
      <Dropdown v-model="selectedVariable" :options="variables" alttext="Choose a variable." />
      <Dropdown v-model="selectedResolution" :options="resolution" alttext="Select a resolution." />
      <Dropdown v-model="selectedCategory" :options="categories" alttext="Choose a category" />
      <Dropdown v-model="selectedDate" :options="dates" alttext="Select a date." />
    </span>
    <div
      class="bg-no-repeat bg-left-top bg-contain w-full h-full"
      :style="{backgroundImage: `url(${bgImage})` }"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedVariable: 'pr',
      selectedResolution: '3KM',
      selectedCategory: 'FREQ',
      selectedDate: '2005-05-30',
      variables: {
        pr: 'Precipitation'
      },
      resolution: {
        '3KM': '3KM',
        '12KM': '12KM'
      },
      categories: {
        FREQ: 'FREQ',
        INT: 'INT'
      },
      dates: {
        '2005-05-30': '2005-05-30',
        '2005-08-30': '2005-08-30',
        '2005-11-30': '2005-11-30',
        '2006-01-01': '2006-01-01'
      }
    }
  },
  computed: {
    bgImage () {
      const fallback = '~/static/cpm_analysis/cpm_prec.png'
      try {
        return require('~/static/cpm_analysis/ALP_' + this.selectedVariable + '_' + this.selectedResolution + '_' + this.selectedCategory + '_' + this.selectedDate + '.png')
      } catch (err) {
        return fallback
      }
    }
  }
}
</script>
