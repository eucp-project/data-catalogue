<template>
  <div class="m-2 ml-9 prose">
    <p>
      Building upon CORDEX FPS-Convection, EUCP has performed
      convection-permitting model runs for multiple domains covering Europe and
      the outermost regions. This page provides an overview of the most relevant
      data and results from our preliminary analysis. Select a region on the map
      to start exploring.
    </p>
    <p> You selected the following domain: {{ domain }}</p>
  </div>
</template>

<script>
export default {
  props: ['domain']
}
</script>
