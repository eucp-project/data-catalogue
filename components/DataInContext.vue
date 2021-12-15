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
    this.spec = await fetch('context_chart_spec.json').then(res => res.json())
    this.view = await vegaEmbed('#vis', this.spec).then(result => result.view).catch()
  }
}
</script>
