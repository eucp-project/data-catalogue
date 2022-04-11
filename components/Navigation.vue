<template>
  <div class="flex ml-auto mr-20">
    <div
      v-for="(page, i) in pages"
      :key="i"
      class=""
      @mouseover="page.hover = true"
      @mouseleave="page.hover = false"
    >
      <!-- main button -->
      <NuxtLink :to="page.url">
        <button
          class="w-40 p-4 bg-gray-200 hover:bg-gray-400 hover:text-white text-left font-extralight text-lg tracking-wider"
        >
          {{ page.title }}
        </button>
      </NuxtLink>
      <!-- dropdown pages -->
      <div
        v-if="page.hover"
        class="absolute flex flex-col"
      >
        <div
          v-for="subPage in page.children"
          :key="subPage"
        >
          <NuxtLink :to="subPage.url">
            <button class="w-40 p-2 bg-gray-400 hover:bg-gray-200 text-white hover:text-black text-right">
              {{ subPage.title }}
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pages: [
        {
          title: 'CPM',
          url: '/cpm',
          children: [
            { title: 'Explore', url: '/cpm/explore' },
            { title: 'Analyse', url: '/cpm/analyse' },
            { title: 'Lines of evidence', url: '/cpm/lines' },
            { title: 'Download', url: '/cpm/download' },
            { title: 'More info', url: '/cpm/references' }
          ]
        },
        {
          title: 'Decadal',
          url: '/decadal',
          children: [{ title: 'Forecasts', url: '/decadal/forecasts' },
            { title: 'Hindcasts', url: '/decadal/hindcasts' },
            { title: 'Experiments', url: '/decadal/experiments' }]
        },
        {
          title: 'Topical',
          url: '/topical'
        }
      ]
    }
  },
  mounted () {
    this.pages = this.pages.map(page => ({ ...page, hover: false }))
  }
}
</script>
