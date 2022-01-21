<template>
  <div class="h-full w-full">
    <!-- search -->
    <input
      v-model="query"
      type="search"
      class="border-2 border-gray-400 rounded-l w-1/3 m-8 p-2"
      placeholder="search"
    >
    </input>
    <!-- flashcard -->
    <div class="flex flex-wrap gap-4 m-8">
      <div
        v-for="dataset in datasets"
        :key="dataset.title"
        class="border-4 p-4 prose space-y-0.5"
        @click="updateModal(dataset)"
      >
        <h2>
          {{ dataset.title }}
        </h2>
        <p>
          {{ dataset.description }}
        </p>
        <ul class="space-y-0.5">
          <li>Contact: {{ dataset.contact[0].name }}</li>
          <li class="break-words">
            Data access: <a :href="dataset.doi" target="blank">{{ dataset.doi }}</a>
          </li>
        </ul>
      </div>
    </div>
    <ModalDialog v-show="showModal" :dataset="datacard" @close-modal="showModal = false" />
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const datasets = await context.$content('topical').fetch()
    const datacard = datasets[0]
    return { datasets, datacard }
  },
  data () {
    return {
      query: '',
      showModal: false
    }
  },
  watch: {
    async query (query) {
      this.datasets = await this.$content('topical')
        .search(query)
        .fetch()
        .catch(e => console.log(e))
    }
  },
  async mounted () {
  },
  methods: {
    updateModal (item) {
      this.datacard = item
      this.showModal = true
    }
  }
}
</script>
