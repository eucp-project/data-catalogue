<template>
  <div>
    <h1 class="text-2xl m-4">
      Disclaimer: This page is a work in progress and does not currently contain dependable climate information!
    </h1>
    <div class="flex gap-4 m-4">
      <Map />
      <div class="border-4 flex-grow">
        <div class="flex bg-gray-100">
          <button
            v-for="(item, i) in tabs"
            :key="i"
            class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
            :class="item.isActive ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''"
            @click="toggle(i)"
          >
            {{ item.body }}
          </button>
        </div>
        <img src="cpm_analysis/cpm_prec.png" alt="cpm"> <!-- change the path when the figs are ready -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: {},
      tabs: [
        { isActive: true, body: 'lorem' },
        { isActive: true, body: 'ipsum' },
        { isActive: true, body: 'dolar' },
        { isActive: true, body: 'sit' },
        { isActive: true, body: 'amet' }
      ]
    }
  },
  mounted () {
    this.toggle(0)
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
