<template>
  <div class="flex gap-4 p-2">
    <CpmMap class="flex-none" v-model="domain" />
    <NuxtChild class="self-stretch" :domain="domain" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      domain: 'AL' // default value for domain
    }
  }
}
</script>
