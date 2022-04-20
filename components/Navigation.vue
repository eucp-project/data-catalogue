<template>
  <div class="flex ml-auto mr-8">
    <div
      v-for="(page, i) in pages"
      :key="i"
      class=""
      @mouseover="page.hover = true"
      @mouseleave="page.hover = false"
    >
      <!-- first menu row -->
      <NuxtLink :to="page.url">
        <button
          class="
            w-40 mx-1 mt-12 px-3 py-2
            rounded-t-lg
            bg-gray-100 hover:bg-gray-200
            text-center
            text-gray-700 font-light hover:font-normal
            text-lg"
        >
          {{ page.title }}
        </button>
      </NuxtLink>
      <!-- second menu row -->
      <div
        v-if="page.hover"
        class="absolute flex flex-row inset-y-30 right-0 mr-8 pr-6"
      >
        <div
          v-for="subPage in page.children"
          :key="subPage"
        >
          <NuxtLink :to="subPage.url">
            <button
              class="
                px-8 py-2
                text-center
                font-light text-gray-700 hover:text-blue-500 tracking-wider
                hover:border-b-4 hover:border-blue-400">
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
