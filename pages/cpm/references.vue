<template>
  <div class="p-4 prose max-w-none">
    <h1>In-depth analyses and example applications</h1>
    <h2>Storyboards</h2>
    <p>These storyboards incorporate convection-permitting model output:</p>
    <ul>
      <li v-for="(story, i) in stories" :key="`story_${i}`">
        <a :href="story.link" target="_blank">{{ story.title }}</a>
      </li>
    </ul>
    <h2>Journal publications</h2>
    <p>
      These publications deal with convection-permitting model data. Links
      point to the EUCP project site which features nice summaries.
    </p>
    <ul>
      <li v-for="(publication, i) in stories" :key="`paper_${i}`">
        <a :href="publication.link" target="_blank">{{ publication.title }}</a>
      </li>
    </ul>
    <div class="h-12 mb-4" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      stories: [
        { title: 'Attribution of a small scale, heavy flash flood event to climate change', link: 'https://eucp-project.github.io/storyboards/flood' },
        { title: 'Benefits and added value of convection-permitting climate modeling over Fenno-Scandinavia', link: 'https://eucp-project.github.io/storyboards/cp_benefits' },
        { title: 'Alpine flash floods', link: 'https://eucp-project.github.io/storyboards/flashflood' },
        { title: 'The EUCP Caribbean runs', link: 'https://eucp-project.github.io/storyboards/carribean' },
        { title: 'Identification of historic "Heavy Precipitation Events" using a tracking algorithm', link: 'https://eucp-project.github.io/storyboards/heavy_precip' }
        // { title: '', link: '' }
      ],
      publications: [
        { title: 'Extreme windstorms and sting jets in convection-permitting climate simulations over Europe', link: 'https://www.eucp-project.eu/publications/extreme-windstorms-and-sting-jets-in-convection-permitting-climate-simulations-over-europe/' },
        { title: 'Convection-permitting modeling with regional climate models: Latest developments and next steps', link: 'https://www.eucp-project.eu/publications/convection-permitting-modeling-with-regional-climate-models-latest-developments-and-next-steps/' },
        { title: 'The first multi-model ensemble of regional climate simulations at kilometer-scale resolution part 1: evaluation of precipitation', link: 'https://www.eucp-project.eu/publications/the-first-multi-model-ensemble-of-regional-climate-simulations-at-kilometer-scale-resolution-part-1-evaluation-of-precipitation/' },
        { title: 'The first multi-model ensemble of regional climate simulations at kilometer-scale resolution part 2: historical and future simulations of precipitation', link: 'https://www.eucp-project.eu/publications/the-first-multi-model-ensemble-of-regional-climate-simulations-at-kilometer-scale-resolution-part-2-historical-and-future-simulations-of-precipitation/' },
        { title: 'Europe-wide precipitation projections at convection permitting scale with the Unified Model', link: 'https://www.eucp-project.eu/publications/europe-wide-climate-change-projections-at-convection-permitting-scale-with-the-unified-model/' },
        { title: 'A first-of-its-kind multi-model convection permitting ensemble for investigating convective phenomena over Europe and the Mediterranean', link: 'https://www.eucp-project.eu/publications/a-first-of-its-kind-multi-model/' }
        // { title: '', link: '' }
      ]
    }
  }
}
</script>
