<template>
  <div class="flex flex-col items-stretch gap-10">
    <span class="flex space-x-3 p-3">
      <div>
        <multiselect
          v-model="region"
          :options="regions"
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
          v-model="variable"
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
          v-model="season"
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
    </span>
    <div id="vis" />
  </div>
</template>

<script>
import vegaEmbed from 'vega-embed'
import Multiselect from 'vue-multiselect'
import spec from './distribution-spec.json'

export default {
  components: { Multiselect },
  data () {
    return {
      spec,
      data: {},
      view: {},
      season: { name: 'Winter', code: 'DJF' },
      region: { name: 'Alps', code: 'ALP' },
      variable: { name: 'Precipitation', code: 'pr' },
      regions: [
        { name: 'Alps', code: 'ALP' },
        { name: 'Northern Europe', code: 'NEU' },
        { name: 'Northwest Europe', code: 'NWE' },
        { name: 'Central Europe', code: 'CEU' },
        { name: 'Central Eastern Europe', code: 'CEE' },
        { name: 'Southwest Europe', code: 'SWE' },
        { name: 'Southeast Europe', code: 'SEE' }
      ],
      variables: [
        { name: 'Precipitation', code: 'pr' },
        { name: 'Temperature', code: 'tas' }
      ],
      seasons: [
        { name: 'Winter', code: 'DJF' },
        { name: 'Summer', code: 'JJA' }
      ]
    }
  },
  computed: {
    dataPath () {
      return `lines_of_evidence/${this.region.code}-3_${this.season.code}_${this.variable.code}.json`
    }
  },
  watch: {
    dataPath () {
      return this.updateGraph()
    }
  },
  async mounted () {
    // Don't load data through url. Pass it in instead
    delete this.spec.data.url
    this.spec.data.name = 'myData'
    this.data = await fetch(this.dataPath).then(res => res.json()).catch()
    this.spec.datasets = { myData: this.data }

    this.view = await vegaEmbed('#vis', this.spec).then(result => result.view).catch()
  },
  methods: {
    async updateGraph () {
      this.data = await fetch(this.dataPath).then(res => res.json()).catch()
      this.view.data('myData', this.data).runAsync()
    }
  }
}
</script>
