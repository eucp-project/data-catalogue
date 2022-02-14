<template>
  <div>
    <ul
      v-for="(crumb, i) in crumbs"
      :key="i"
      class="inline-block"
    >
      <li v-if="i==0" class="underline">
        <nuxt-link :to="`/`">
          {{ crumb }}&nbsp;
        </nuxt-link>
      </li>
      <li v-else>
        > {{ crumb }}&nbsp;
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
