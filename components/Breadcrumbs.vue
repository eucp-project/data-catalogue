<template>
  <ul class="prose">
    <li class="inline-block">
      <nuxt-link :to="`/`">
        <fa icon="house" />
      </nuxt-link>
    </li>
    <li
      v-for="(link, crumb, index) in crumbs"
      :key="index"
      class="inline-block"
    >
      &nbsp; <fa icon="angle-right" /> &nbsp;
      <nuxt-link :to="link">
        {{ crumb }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    crumbs () {
      const crumbs = {} // { 'pagename' : 'pageurl' }

      const path = this.$route.path.split('/').splice(1)
      path.forEach((element, index) => {
        crumbs[element] = '/' + path.slice(0, index + 1).join('/')
      })

      return crumbs
    }
  }
}
</script>
