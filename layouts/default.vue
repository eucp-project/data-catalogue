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
      <div class="flex ml-auto gap-10 m-2 mr-10 space-x-1">
        <Navigation :page="`CPM`" :sub-pages="pagesCPM" />
        <Navigation :page="`Decadal`" :sub-pages="pagesDecadal" />
        <Navigation :page="`Topical`" />
      </div>
    </div>
    <Nuxt class="pt-4" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      pagesCPM: ['Overview', 'Storyboards', 'Lines of evidence', 'Demonstrator'],
      pagesDecadal: ['Forecasts', 'Hindcasts', 'Experiments']
    }
  }
}
</script>
