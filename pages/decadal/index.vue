<template>
  <nuxt-content :document="page" class="prose" />
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('decadal', 'index').fetch()
    return {
      page
    }
  }
}
</script>
