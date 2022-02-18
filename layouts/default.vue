<template>
  <div class="h-screen w-screen p-4">
    <div class="flex gap-10 m-2 items-center">
      <NuxtLink :to="`/`">
        <img src="eucp_logo.png" alt="EUCP Logo">
      </NuxtLink>
      <div class="flex-l">
        <h1 class="text-4xl">
          Data Catalogue
        </h1>
        <Breadcrumbs class="mt-2" />
      </div>
      <div class="flex ml-auto gap-10 m-2 mr-10 text-l space-x-1">
        <div
          @mouseover="hoverCPM = true"
          @mouseleave="hoverCPM = false"
        >
          <button
            class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded"
          >
            CPM
          </button>
          <div
            v-if="hoverCPM"
            class="absolute flex"
          >
            <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
              Overview
            </button>
            <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
              Storyboards
            </button>
            <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
              Demonstrator
            </button>
          </div>
        </div>
        <div
          @mouseover="hoverDecadal = true"
          @mouseleave="hoverDecadal = false"
        >
          <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
            Decadal
          </button>
          <div
            v-if="hoverDecadal"
            class="absolute flex"
          >
            <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
              Forecasts
            </button>
            <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
              Hindcasts
            </button>
            <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
              Experiments
            </button>
          </div>
        </div>
        <div>
          <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
            Topical
          </button>
        </div>
      </div>
    </div>
    <Nuxt class="pt-4" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      hoverCPM: false,
      hoverDecadal: false
    }
  }
}
</script>
