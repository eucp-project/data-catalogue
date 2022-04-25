<template>
  <div class="flex ml-auto mr-8">
    <div
      v-for="(page, i) in pages"
      :key="i"
      class=""
      @mouseenter="toggleHover(page)"
      @mouseleave="toggleHover(page)"
    >
      <!-- first menu row -->
      <NuxtLink :to="page.url">
        <button
          class="
            w-40 mx-1 mt-12 px-3 py-2
            rounded-t-lg
            bg-gray-100
            text-center
            text-gray-700 text-lg
            hover:underline"
          :class="{
            'bg-gray-200': page.hover | inActiveRoute(page.url),
            'text-blue-500': inActiveRoute(page.url)
          }"
        >
          {{ page.title }}
        </button>
      </NuxtLink>
      <!-- second menu row -->
      <div
        v-if="page.hover | (inActiveRoute(page.url) && !checkHover(page, pages))"
        class="absolute flex flex-row inset-y-30 right-0 mr-8 pr-6"
      >
        <div
          v-for="subPage in page.children"
          :key="subPage"
        >
          <NuxtLink :to="subPage.url">
            <button
              class="
                px-8 py-3
                text-center
                text-gray-700 hover:underline"
              :class="{
                'text-blue-500': inActiveRoute(subPage.url)
              }"
            >
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
  },
  methods: {
    toggleHover (page) {
      page.hover = !page.hover
    },
    inActiveRoute (url) {
      return this.$route.path.includes(url)
    },
    checkHover (page, pages) {
      let hovercheck = false
      pages.forEach((p) => {
        if (p !== page && p.hover) { hovercheck = true }
      })
      return hovercheck
    }
  }
}
</script>
