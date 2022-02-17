<template>
  <div>
    <nuxt-link :to="`/`">
      <fa icon="house" />
    </nuxt-link>
    <span
      v-for="(crumb, i) in crumbs"
      :key="i"
      class="inline-block prose"
    >
      &nbsp; <fa icon="angle-right" /> &nbsp;
      {{ crumb }}
    </span>
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
