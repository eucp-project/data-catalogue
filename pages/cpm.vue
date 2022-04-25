<template>
  <div>
    <div class="flex gap-4 m-8">
      <CpmMap v-model="domain" />
      <div class="border-4 flex-grow">
        <NuxtChild :domain="domain" />
      </div>
    </div>
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
