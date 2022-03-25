<template>
  <div>
    <div class="flex gap-4 m-8">
      <CpmMap v-model="domain" />
      <div class="border-4 flex-grow">
        <NavTabs :pages="pages" />
        <NuxtChild :domain="domain" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      domain: 'AL', // default value for domain
      pages: [
        { title: 'CPM home', url: '/cpm' },
        { title: 'Past performance', url: '/cpm/performance' },
        { title: 'Future change', url: '/cpm/future' },
        { title: 'Analyse', url: '/cpm/analyse' },
        { title: 'Explore', url: '/cpm/explore' },
        { title: 'Download', url: '/cpm/download' },
        { title: 'More info', url: '/cpm/references' }
      ]
    }
  }
}
</script>
