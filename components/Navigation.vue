<template>
  <div class="relative flex gap-2 justify-end w-full mr-8">
    <div
      v-for="(page, i) in pages"
      :key="`parent_${i}`"
      class=""
      @mouseenter="toggleHover(page)"
      @mouseleave="toggleHover(page)"
    >
      <!-- first menu row -->
      <NuxtLink :to="page.url">
        <button
          class="
            w-40 mt-12 px-3 py-2
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
        class="absolute right-0 flex flex-row justify-end h-12 w-full"
      >
        <NuxtLink
          v-for="(subPage, idx) in page.children"
          :key="`child_${idx}`"
          role="button"
          :to="subPage.url"
          class="
                h-full
                px-8 py-3
                text-center
                text-gray-700 hover:underline"
          :class="{
            'text-blue-500': inActiveRoute(subPage.url)
          }"
        >
          {{ subPage.title }}
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
            { title: 'Context', url: '/cpm/distribution' },
            { title: 'Download', url: '/cpm/download' },
            { title: 'More info', url: '/cpm/references' }
          ]
        },
        {
          title: 'Decadal',
          url: '/decadal',
          children: [
            { title: 'Forecasts', url: '/decadal/forecasts' },
            { title: 'Hindcasts', url: '/decadal/hindcasts' },
            { title: 'Experiments', url: '/decadal/experiments' },
            { title: 'Prototypes', url: '/decadal/c3s_34c' }
          ]
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
