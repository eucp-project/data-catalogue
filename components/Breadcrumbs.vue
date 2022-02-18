<template>
  <div>
    <nuxt-link :to="`/`">
      <fa icon="house" class="fa-sm" />
    </nuxt-link>
    <span
      v-for="(link, crumb, index) in crumbs"
      :key="index"
      class="inline-block prose"
    >
      &nbsp; <fa icon="angle-right" class="fa-sm" /> &nbsp;
      <nuxt-link :to="link">
        {{ crumb }}
      </nuxt-link>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    crumbs () {
      const crumbs = {} // { 'pagename' : 'pageurl' }

      const path = this.$route.path.split('/').splice(1)
      path.forEach((element, index) => {
        crumbs[element] = path.slice(0, index + 1).join('/')
      })

      // Add hash to breadcrumbs if it exists
      const hash = this.$route.hash.substring(1)
      if (hash !== '') {
        crumbs[hash] = path.join('/') + '#' + hash
      }

      return crumbs
    }
  }
}
</script>
