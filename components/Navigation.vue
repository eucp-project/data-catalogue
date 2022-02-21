<template>
  <div class="flex ml-auto gap-10 m-2 mr-20 space-x-1 text-l">
    <div
      v-for="(page, i) in pages"
      :key="i"
      class="space-y-0.5"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <!-- main button -->
      <NuxtLink :to="page.parent.url">
        <button
          class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded"
        >
          {{ page.parent.title }}
        </button>
      </NuxtLink>
      <!-- dropdown pages -->
      <div
        v-if="hover"
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
      hover: false,
      pages: [
        {
          parent: { title: 'CPM', url: '/cpm' },
          children: [{ title: 'Explore', url: '/cpm/explore' },
            { title: 'Analyse', url: '/cpm/analyse' },
            { title: 'Download', url: '/cpm/download' },
            { title: 'More info', url: '/cpm/references' }]
        },
        {
          parent: { title: 'Decadal', url: '/decadal' },
          children: [{ title: 'Forecasts', url: '/decadal/forecasts' },
            { title: 'Hindcasts', url: '/decadal/hindcasts' },
            { title: 'Experiments', url: '/decadal/experiments' }]
        },
        {
          parent: { title: 'Topical', url: '/topical' }
        }
      ]
    }
  }
}
</script>
