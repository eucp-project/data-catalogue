<template>
  <div class="w-full h-full">
    <span class="flex flex-wrap space-x-3 p-3">
      <div>
        <multiselect
          v-model="selectedVariable"
          :options="variables"
          :searchable="false"
          :allow-empty="false"
          :close-on-select="true"
          :show-labels="false"
          label="name"
          deselect-label=" "
          placeholder="Choose a variable."
        />
      </div>
      <div>
        <multiselect
          v-model="selectedSeason"
          :options="seasons"
          :searchable="false"
          :allow-empty="false"
          :close-on-select="true"
          :show-labels="false"
          label="name"
          deselect-label=" "
          placeholder="Select a season."
        />
      </div>
      <div>
        <multiselect
          v-model="selectedModel"
          :options="filterModels"
          :searchable="false"
          :allow-empty="false"
          :close-on-select="true"
          :show-labels="false"
          label="name"
          deselect-label=" "
          placeholder="Choose a model/group."
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
          :show-labels="true"
          placeholder="Choose modelling system(s)"
          label="name"
          track-by="name"
          :preselect-first="true"
        >
          <template slot="selection" slot-scope="{ values, isOpen }"><span v-if="values.length &amp;&amp; !isOpen" class="multiselect__single">{{ values.length }} modelling system(s) selected</span></template>
        </multiselect>
      </div>
      <div>
        <multiselect
          v-model="selectedCategory"
          :options="categories"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          :show-labels="true"
          placeholder="Choose experiment(s)"
          label="name"
          track-by="name"
          :preselect-first="true"
        >
          <template slot="selection" slot-scope="{ values, isOpen }"><span v-if="values.length &amp;&amp; !isOpen" class="multiselect__single">{{ values.length }} experiment(s) selected</span></template>
        </multiselect>
      </div>
      <!-- same style but not selectable option to display region -->
      <select
        class="border border-gray-300 rounded cursor-pointer
            text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-300
            focus:outline-none appearance-none"
      >
        <option :value="domain">
          {{ domain }}
        </option>
      </select>
    </span>
    <div
      v-for="experiment in selectedCategory"
      :key="experiment.path"
      class="w-full h-full"
    >
      <p>{{ experiment.name }}</p>
      <div class="flex flex-wrap w-full h-full">
        <div
          v-for="system in selectedSystem"
          :key="system.code"
          class="w-1/3 h-full"
        >
          <p class="pt-6 text-center text-lg prose">
            {{ system.title }}
          </p>
          <div
            class="bg-no-repeat bg-left-top bg-contain w-full h-full"
            :style="{backgroundImage: `url(${getMap(system.code, experiment.path)})` }"
          />
        </div>
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
      selectedSeason: { name: 'Winter', code: 'DJF' },
      selectedModel: { name: 'UKMO', code: 'ukmo' },
      selectedSystem: [
        { name: 'CPM', code: 'cpm', title: 'High-resolution models (CPM)' },
        { name: 'RCM', code: 'rcm', title: 'Regional models (RCM)' },
        { name: 'GCM', code: 'gcm', title: 'Global models (GCM)' }
      ],
      selectedCategory: [
        { name: 'Past performance', path: 'past_performance' },
        { name: 'Future change', path: 'future_change' }
      ],
      variables: [
        { name: 'Precipitation', code: 'pr' },
        { name: 'Temperature', code: 'tas' }
      ],
      seasons: [
        { name: 'Winter', code: 'DJF' },
        { name: 'Summer', code: 'JJA' }
      ],
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
        { name: 'CPM', code: 'cpm', title: 'High-resolution models (CPM)' },
        { name: 'RCM', code: 'rcm', title: 'Regional models (RCM)' },
        { name: 'GCM', code: 'gcm', title: 'Global models (GCM)' }
      ],
      categories: [
        { name: 'Past performance', path: 'past_performance' },
        { name: 'Future change', path: 'future_change' }
      ]
    }
  },
  computed: {
    filterModels () {
      const filterList = []
      this.regionsModels[this.domain].forEach((model) => {
        if (model === 'SMHI') {
          const modelObject = { name: 'DMI/SMHI', code: 'smhi' }
          filterList.push(modelObject)
        } else {
          const modelObject = { name: model, code: model.toLowerCase() }
          filterList.push(modelObject)
        }
      })
      return filterList
    }
  },
  methods: {
    getMap (system, experiment) {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/' + experiment + '/' + this.domain + '/' + this.selectedVariable.code + '/' + system + '_' + this.selectedModel.code + '_' + this.selectedSeason.code + '.png')
      } catch (err) {
        return fallback
      }
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
