<template>
  <div class="w-full h-full">
    <span class="space-x-3 p-3">
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
      <div>
        <multiselect
          v-model="selectedVariable"
          :options="variables"
          :searchable="false"
          :allow-empty="false"
          :close-on-select="true"
          :show-labels="true"
          label="name"
          deselect-label=" "
          placeholder="Choose a variable."
        />
      </div>
      <div>
        <multiselect
          v-model="selectedSystem"
          :options="modellingSystems"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          placeholder="Choose modelling system(s)"
          label="name"
          track-by="name"
          :preselect-first="true"
        >
          <template slot="selection" slot-scope="{ values, isOpen }"><span v-if="values.length &amp;&amp; !isOpen" class="multiselect__single">{{ values.length }} modelling system(s) selected</span></template>
        </multiselect>
      </div>
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
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  props: {
    domain: {
      default: 'AL',
      type: String
    }
  },
  data () {
    return {
      selectedVariable: { name: 'Precipitation', code: 'pr' },
      selectedSeason: 'DJF',
      selectedModel: 'UKMO',
      selectedSystem: [
        { name: 'CPM', code: 'cpm' },
        { name: 'RCM', code: 'rcm' },
        { name: 'GCM', code: 'gcm' }
      ],
      variables: [
        { name: 'Precipitation', code: 'pr' },
        { name: 'Temperature', code: 'tas' }
      ],
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
      },
      modellingSystems: [
        { name: 'CPM', code: 'cpm' },
        { name: 'RCM', code: 'rcm' },
        { name: 'GCM', code: 'gcm' }
      ]
    }
  },
  computed: {
    cpmImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/past_performance/' + this.domain + '/' + this.selectedVariable.code + '/' + 'cpm_' + this.selectedModel.toLowerCase() + '_' + this.selectedSeason + '.png')
      } catch (err) {
        return fallback
      }
    },
    rcmImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/past_performance/' + this.domain + '/' + this.selectedVariable.code + '/' + 'rcm_' + this.selectedModel.toLowerCase() + '_' + this.selectedSeason + '.png')
      } catch (err) {
        return fallback
      }
    },
    gcmImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/past_performance/' + this.domain + '/' + this.selectedVariable.code + '/' + 'gcm_' + this.selectedModel.toLowerCase() + '_' + this.selectedSeason + '.png')
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
