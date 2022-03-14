<template>
  <div class="w-full h-full p-2">
    <CpmAnalysis :domain="domain" />
  </div>
</template>

<script>
export default {
  props: ['domain']
}
</script>
