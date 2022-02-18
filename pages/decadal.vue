<template>
  <div class="h-full w-full">
    <NavTabs :pages="pages" />
    <div class="flex m-8">
      <NuxtChild />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pages: [
        { title: 'Decadal home', url: '/decadal' },
        { title: 'Forecasts', url: '/decadal/forecasts' },
        { title: 'Hindcasts', url: '/decadal/hindcasts' },
        { title: 'Experiments', url: '/decadal/experiments' }
      ]
    }
  }
}
</script>
