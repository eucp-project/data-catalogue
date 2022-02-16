<template>
  <div>
    <ul
      v-for="(crumb, i) in crumbs"
      :key="i"
      class="inline-block"
    >
      <li v-if="i==0">
        <nuxt-link :to="`/`">
          <fa icon="house"/>
        </nuxt-link>
        &nbsp; <fa icon="angle-right" /> &nbsp;
        {{ crumb }}
      </li>
      <li v-else>
        &nbsp; <fa icon="angle-right" /> &nbsp;
        {{ crumb }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      default: null,
      required: true
    }
  }
}
</script>
