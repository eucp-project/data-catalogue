<template>
  <div class="h-full">
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
