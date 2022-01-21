<template>
  <div class="h-full w-full">
    <!-- search -->
    <input v-model="query" type="search" class="w-1/3 m-4 p-2 self-center" placeholder="search"></input>
    <!-- flashcard -->
    <div class="flex flex-wrap gap-4 m-8">
      <div
        v-for="dataset in datasets"
        :key="dataset.title"
        class="border-4 p-4 prose"
      >
        <h2>{{ dataset.title }}</h2>
        <ul>
          <li>Contact: {{ dataset.contact[0].name }}</li>
          <li>License: {{ dataset.license }}</li>
          <li>Format: {{ dataset.format }}</li>
          <li class="break-words">
            Data access: <a :href="dataset.doi" target="blank">{{ dataset.doi }}</a>
          </li>
        </ul>
        <h3>Description</h3>
        <nuxt-content :document="dataset" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      datasets: []
    }
  },
  watch: {
    async query (query) {
      this.datasets = await this.$content('topical')
        .only(['id', 'slug', 'title', 'contact', 'work_package', 'format', 'description'])
        .search(query)
        .fetch()
        .catch(e => console.log(e))
    }
  },
  async mounted () {
    this.datasets = await this.$content('topical').fetch()
  }
}
</script>
