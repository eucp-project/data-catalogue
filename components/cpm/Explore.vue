<template>
  <div class="flex flex-col gap-8 items-center w-full h-full">
    <span class="flex space-x-3 p-3">
      <div>
        <multiselect
          v-model="selectedDomain"
          :options="domains"
          :allow-empty="false"
          :close-on-select="true"
          :show-labels="false"
          label="name"
          deselect-label=" "
          placeholder="Select a domain."
        />
      </div>
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
          :searchable="true"
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
          v-model="selectedProject"
          :options="projects"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          :show-labels="true"
          placeholder="Choose resolution(s)"
          label="title"
          track-by="name"
          :preselect-first="true"
        >
          <!-- <template slot="selection" slot-scope="{ values, isOpen }"><span v-if="values.length &amp;&amp; !isOpen" class="multiselect__single">{{ values.length }} project(s) selected</span></template> -->
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
          placeholder="Choose historical or future"
          label="name"
          track-by="name"
          :preselect-first="true"
        >
          <!-- <template slot="selection" slot-scope="{ values, isOpen }"><span v-if="values.length &amp;&amp; !isOpen" class="multiselect__single">{{ values.length }} experiment(s) selected</span></template> -->
        </multiselect>
      </div>
    </span>
    <div
      v-for="experiment in selectedCategory"
      :key="experiment.path"
      class="w-full h-full"
    >
      <div class="flex h-full w-full">
        <p class="flex-none text-lg prose">
          {{ experiment.name }}:
        </p>
        <div
          v-for="project in selectedProject"
          :key="project.code"
          class="bg-no-repeat bg-contain w-full h-full"
          :style="{backgroundImage: `url(${getMap(project.code, experiment.path)})` }"
        />
        <!-- <img
          v-for="project in selectedProject"
          :key="project.code"
          :src="getMap(project.code, experiment.path)"
          class="object-contain h-full w-full"
        > -->
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  data () {
    return {
      selectedDomain: { name: 'Alps', code: 'AL' },
      selectedVariable: { name: 'Precipitation', code: 'pr' },
      selectedSeason: { name: 'Winter', code: 'DJF' },
      selectedModel: { name: 'CNRM', code: 'cnrm' },
      selectedProject: [
        { name: 'CPM', code: 'cpm', title: 'High-resolution models (CPM)' },
        { name: 'CORDEX', code: 'rcm', title: 'Regional models (RCM)' },
        { name: 'CMIP', code: 'gcm', title: 'Global models (GCM)' }
      ],
      selectedCategory: [
        { name: 'Past performance', path: 'past_performance' },
        { name: 'Future change', path: 'future_change' }
      ],
      domains: [
        { name: 'Alps', code: 'AL' },
        { name: 'Northern Europe', code: 'N' },
        { name: 'Northwest Europe', code: 'NW' },
        { name: 'Central Europe', code: 'C' },
        { name: 'Central Eastern Europe', code: 'CE' },
        { name: 'Southwest Europe', code: 'SW' },
        { name: 'Southeast Europe', code: 'SE' }
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
      projects: [
        { name: 'CPM', code: 'cpm', title: 'High-resolution models (CPM)' },
        { name: 'CORDEX', code: 'rcm', title: 'Regional models (RCM)' },
        { name: 'CMIP', code: 'gcm', title: 'Global models (GCM)' }
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
      this.regionsModels[this.selectedDomain.code].forEach((model) => {
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
  watch: {
    selectedDomain () {
      if (!this.regionsModels[this.selectedDomain.code].includes(this.selectedModel.name)) {
        this.selectedModel = this.filterModels[0]
      }
    }
  },
  methods: {
    getMap (project, experiment) {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/' + experiment + '/' + this.selectedDomain.code + '/' + this.selectedVariable.code + '/' + project + '_' + this.selectedModel.code + '_' + this.selectedSeason.code + '.png')
      } catch (err) {
        return fallback
      }
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
