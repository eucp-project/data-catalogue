<template>
  <div class="h-full w-full">
    <div class="flex bg-gray-100 m-8">
      <button
        v-for="(tag, i) in tabs"
        :key="i"
        class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
        :class="tag.isActive ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''"
        @click="toggle(i)"
      >
        {{ tag.tag }}
      </button>
    </div>
    <div class="flex gap-8 m-8">
      <div class="flex flex-col gap-4 w-2/3">
        <h1 class="text-xl">
          {{ tab.title }}
        </h1>
        <nuxt-content class="break-words" :document="tab" />
        <h1>List of datasets</h1>
      </div>
      <div class="bg-blue-100 flex flex-col items-center p-4">
        <img :src="tab.img" alt="topic picture" class="object-contain rounded-full">
        <h2 class="italic">
          {{ tab.caption }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [],
      tab: {}
    }
  },
  async mounted () {
    const tabs = await this.$content('decadal').fetch()
    this.tabs = tabs.map(obj => ({ ...obj, isActive: false }))
    // default tab
    this.tab = this.tabs[0]
    this.tab.isActive = true
  },
  methods: {
    toggle (i) {
      this.tab = this.tabs[i]
      // eslint-disable-next-line no-return-assign
      this.tabs.map(obj => obj.isActive = false)
      this.tabs[i].isActive = true
    }
  }
}
</script>
