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
          class="space-y-0.5"
          @mouseover="hoverCPM = true"
          @mouseleave="hoverCPM = false"
        >
          <NuxtLink :to="`/cpm`">
            <button
              class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded"
            >
              CPM
            </button>
          </NuxtLink>
          <div
            v-if="hoverCPM"
            class="absolute flex flex-col space-y-0.5"
          >
            <NuxtLink :to="`/cpm#overview`">
              <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
                Overview
              </button>
            </NuxtLink>
            <NuxtLink :to="`/cpm#storyboards`">
              <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
                Storyboards
              </button>
            </NuxtLink>
            <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
              Demonstrator
            </button>
          </div>
        </div>
        <div
          class="space-y-0.5"
          @mouseover="hoverDecadal = true"
          @mouseleave="hoverDecadal = false"
        >
          <NuxtLink :to="`/decadal`">
            <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
              Decadal
            </button>
          </NuxtLink>
          <div
            v-if="hoverDecadal"
            class="absolute flex flex-col space-y-0.5"
          >
            <NuxtLink :to="`/decadal#forecasts`">
              <button class="w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded">
                Forecasts
              </button>
            </NuxtLink>
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
