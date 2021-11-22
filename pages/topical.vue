<template>
  <div class="h-full w-full flex flex-wrap gap-4 m-8">
    <div
      v-for="dataset in datasets"
      :key="dataset.title"
      class="border-4 p-4 prose"
    >
      <h2>{{ dataset.title }}</h2>
      <ul>
        <li>Contact: {{ dataset.contact[0].name }}</li>
        <li>License: {{ dataset.license }}</li>
        <li>Format: {{dataset.format }}</li>
        <li>Data access: <a :href="dataset.doi" target="blank">{{ dataset.doi }}</a></li>
      </ul>
      <h3>Description</h3>
      <nuxt-content :document="dataset" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      datasets: []
    }
  },
  async mounted () {
    this.datasets = await this.$content('topical').fetch()
  }
}
</script>
