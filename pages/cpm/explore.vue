<template>
  <div class="w-full h-full p-2">
    <CpmExplore :domain="domain" />
  </div>
</template>

<script>
export default {
  props: ['domain']
}
</script>
