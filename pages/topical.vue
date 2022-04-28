<template>
  <div class="flex flex-col gap-8 p-8">
    <!-- brief summary -->
    <p class="text-lg prose max-w-none">
      This page provides an overview of datasets that have been produced in EUCP on a variety of applications.
    </p>
    <!-- search -->
    <!-- eslint-disable vue/no-parsing-error -->
    <input
      v-model="query"
      type="search"
      class="border-2 border-gray-400 rounded-l w-1/3"
      placeholder="search"
    >
    </input>
    <!-- eslint-enable -->
    <!-- flashcard -->
    <div class="grid grid-cols-3 2xl:grid-cols-4 justify-items-stretch gap-4">
      <div
        v-for="dataset in datasets"
        :key="dataset.title"
        class="shadow-lg rounded prose"
        role="button"
        @click="updateModal(dataset)"
      >
        <h2 class="bg-blue-200 rounded-tl-lg rounded-tr-lg p-4">
          {{ dataset.title }}
        </h2>
        <div class="prose px-6 pb-2">
          <p>
            {{ dataset.description }}
          </p>
          <ul class="">
            <li>Contact: {{ dataset.contact[0].name }}</li>
            <li class="break-words">
              Data access: <a :href="dataset.doi" target="blank">{{ dataset.doi }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Modal
      v-show="showModal"
      :dataset="datacard"
      @close-modal="showModal = false"
    />
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
