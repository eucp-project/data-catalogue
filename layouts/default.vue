<template>
  <div class="h-screen w-screen p-4">
    <div class="flex gap-10 m-2 items-center">
      <NuxtLink :to="`/`">
        <img src="eucp_logo.png" alt="EUCP Logo">
      </NuxtLink>
      <h1 class="text-2xl">
        Data Catalogue
      </h1>
      <div class="m-4 ml-8 text-lg">
        <Breadcrumbs v-if="crumbs[0] !== ``" :crumbs="crumbs" />
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    crumbs () {
      // assembly full path of current page, including the tag
      const fullPath = this.$route.fullPath
      // break full path into crumbs for breadcrumbs view
      const crumbs = fullPath.substring(1).split('#')
      // crumbs.unshift('data-catalogue')

      return crumbs
    }
  }
}
</script>
