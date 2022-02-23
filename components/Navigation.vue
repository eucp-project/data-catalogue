<template>
  <div class="flex ml-auto gap-2 m-2 mr-20 space-x-1 text-l">
    <div
      v-for="(page, i) in pages"
      :key="i"
      class="space-y-0.5"
      @mouseover="page.hover = true"
      @mouseleave="page.hover = false"
    >
      <!-- main button -->
      <NuxtLink :to="page.url">
        <button
          class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded"
        >
          {{ page.title }}
        </button>
      </NuxtLink>
      <!-- dropdown pages -->
      <div
        v-if="page.hover"
        class="absolute flex flex-col space-y-0.5"
      >
        <div
          v-for="subPage in page.children"
          :key="subPage"
        >
          <NuxtLink :to="subPage.url">
            <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
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
          children: [{ title: 'Explore', url: '/cpm/explore' },
            { title: 'Analyse', url: '/cpm/analyse' },
            { title: 'Download', url: '/cpm/download' },
            { title: 'More info', url: '/cpm/references' }]
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
