<template>
  <div class="flex h-full w-full gap-4 p-2">
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
