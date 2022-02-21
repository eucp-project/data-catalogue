<template>
  <div class="text-l">
    <div
      class="space-y-0.5"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <!-- main button -->
      <NuxtLink :to="`/` + page.toLowerCase()">
        <button
          class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded"
        >
          {{ page }}
        </button>
      </NuxtLink>
      <!-- dropdown pages -->
      <div
        v-if="hover"
        class="absolute flex flex-col space-y-0.5"
      >
        <div
          v-for="(subPage, i) in subPages"
          :key="i"
        >
          <NuxtLink :to="`/` + page.toLowerCase() + `#` + subPage.toLowerCase()">
            <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
              {{ subPage }}
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: null,
      required: false
    },
    subPages: {
      type: Array,
      default: null,
      required: false
    }
  },
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
