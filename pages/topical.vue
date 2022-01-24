<template>
  <div class="w-full flex flex-wrap gap-4 m-8">
    <div
      v-for="dataset in datasets"
      :key="dataset.title"
      class="border-4 p-4 prose space-y-0.5"
      role="button"
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
      showModal: false
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
