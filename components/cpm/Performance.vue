<template>
  <div class="w-full h-full">
    <span class="space-x-3 p-3">
      <CpmDropdown v-model="selectedVariable" :options="variables" alttext="Choose a variable." />
      <CpmDropdown v-model="selectedSeason" :options="seasons" alttext="Select a season." />
      <CpmDropdown v-model="selectedModel" :options="filterModels" alttext="Choose a model/group" />
      <!-- same style but not selectable option to display region -->
      <select
        class="border border-gray-300 rounded-full cursor-pointer
      text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400
      focus:outline-none appearance-none"
      >
        <option :value="domain">
          {{ domain }}
        </option>
      </select>
    </span>
    <div class="w-full h-full flex flex-wrap">
      <div class="w-1/3 h-full">
        <p class="pt-6 text-center text-lg prose">
          High-resolution models (CPM)
        </p>
        <div
          class="bg-no-repeat bg-left-top bg-contain w-full h-full"
          :style="{backgroundImage: `url(${cpmImage})` }"
        />
      </div>
      <div class="w-1/3 h-full">
        <p class="pt-6 text-center text-lg prose">
          Regional models (RCM)
        </p>
        <div
          class="bg-no-repeat bg-left-top bg-contain w-full h-full"
          :style="{backgroundImage: `url(${rcmImage})` }"
        />
      </div>
      <div class="w-1/3 h-full">
        <p class="pt-6 text-center text-lg prose">
          Global models (GCM)
        </p>
        <div
          class="bg-no-repeat bg-left-top bg-contain w-full h-full"
          :style="{backgroundImage: `url(${gcmImage})` }"
        />
      </div>
    </div>
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
  data () {
    return {
      selectedVariable: 'pr',
      selectedSeason: 'DJF',
      selectedModel: 'UKMO',
      variables: {
        pr: 'Precipitation',
        tas: 'Temperature'
      },
      seasons: {
        DJF: 'Winter',
        JJA: 'Summer'
      },
      regionsModels: {
        NW: ['CNRM', 'KNMI', 'ETHZ', 'UKMO'],
        SW: ['CMCC', 'IPSL', 'ETHZ', 'UKMO'],
        SE: ['ICTP', 'ETHZ', 'UKMO'],
        C: ['GERICS', 'ETHZ', 'UKMO'],
        CE: ['SMHI', 'ICTP', 'ETHZ', 'UKMO'],
        N: ['SMHI', 'GERICS'],
        AL: ['CNRM', 'CMCC', 'IPSL', 'KNMI', 'GERICS', 'ETHZ', 'SMHI', 'ICTP', 'UKMO']
      }
    }
  },
  computed: {
    cpmImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/past_performance/' + this.domain + '/' + this.selectedVariable + '/' + 'cpm_' + this.selectedModel.toLowerCase() + '_' + this.selectedSeason + '.png')
      } catch (err) {
        return fallback
      }
    },
    rcmImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/past_performance/' + this.domain + '/' + this.selectedVariable + '/' + 'rcm_' + this.selectedModel.toLowerCase() + '_' + this.selectedSeason + '.png')
      } catch (err) {
        return fallback
      }
    },
    gcmImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/past_performance/' + this.domain + '/' + this.selectedVariable + '/' + 'gcm_' + this.selectedModel.toLowerCase() + '_' + this.selectedSeason + '.png')
      } catch (err) {
        return fallback
      }
    },
    filterModels () {
      const filterList = {}
      this.regionsModels[this.domain].forEach((model) => {
        if (model === 'SMHI') {
          filterList[model] = 'DMI/SMHI'
        } else {
          filterList[model] = model
        }
      })
      return filterList
    }
  }
}
</script>
