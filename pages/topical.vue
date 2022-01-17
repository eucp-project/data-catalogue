<template>
  <div class="w-full flex flex-wrap gap-4 m-8">
    <div
      v-for="dataset in datasets"
      :key="dataset.title"
      class="border-4 p-4 prose"
      @click="updateModal(dataset)"
    >
      <h2>
        {{ dataset.title }}
      </h2>
      <ul>
        <li>Contact: {{ dataset.contact[0].name }}</li>
        <li>License: {{ dataset.license }}</li>
        <li>Format: {{ dataset.format }}</li>
        <li class="break-words">
          Data access: <a :href="dataset.doi" target="blank">{{ dataset.doi }}</a>
        </li>
      </ul>
    </div>
    <ModalDialog v-show="showModal" :dataset="datacard" @close-modal="showModal = false" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      datasets: [],
      datacard: {},
      showModal: false
    }
  },
  async mounted () {
    this.datasets = await this.$content('topical').fetch()
  },
  methods: {
    updateModal (item) {
      this.datacard = item
      this.showModal = true
    }
  }
}
</script>
