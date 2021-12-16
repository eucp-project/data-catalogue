<template>
  <div class="p-8">
    <div id="vis" />
  </div>
</template>

<script>
import vegaEmbed from 'vega-embed'

export default {
  data () {
    return {
      view: {},
      data: [],
      spec: {}
    }
  },
  async mounted () {
    this.data = await fetch('cpm_context_data.json').then(res => res.json())
    this.spec = await fetch('context_chart_spec.json').then(res => res.json())

    // Link the plotted data to an object we can access in JS
    delete this.spec.data.url
    this.spec.data.name = 'myData'
    this.spec.datasets = { myData: this.data }

    this.view = await vegaEmbed('#vis', this.spec).then(result => result.view).catch()
    this.view.addEventListener('click', this.updateSelection)
  },
  methods: {
    updateSelection (event, item) {
      if (item.datum.model) {
        this.data.forEach((datum) => {
          if ((datum.model === item.datum.model) & (datum.project === item.datum.project)) {
            // without comparing project, UKCP rcm and gcm are linked due to their numbered model names
            datum.highlight = true
          } else if (item.datum.ancestors.includes(datum.model)) {
            datum.highlight = true
          } else {
            datum.highlight = false
          }
        })
      } else {
        this.data.forEach((datum) => {
          datum.highlight = datum.isparent
        })
      }
      this.pushNewDataToChart()
    },
    pushNewDataToChart () {
      // this.view.data('myData', this.data).run() // only works from vega v5.5 onwards
      this.view.remove('myData', d => true).run() // remove all previous entries
      this.view.insert('myData', this.data).run()
      this.view.resize().run()
      // TODO this also re-calculates the jitter which is distracting
    }
  }
}
</script>
