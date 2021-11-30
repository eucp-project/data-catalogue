<template>
  <!-- Buttons -->
  <div class="flex flex-col place-content-evenly h-full p-24">
    <div class="flex gap-48 place-content-center h-full">
      <div class="border-4 rounded-lg w-1/3 min-h-2/3 p-8">
        <NuxtLink to="cpm">
          <div class="border-2 p-8 rounded-lg text-3xl bg-red-400">
            CPM data
          </div>
        </NuxtLink>
        <p class="p-4">Convection-permitting climate model output</p>
        <img src="domains.jpg" alt="domains" class="object-contain">
      </div>
      <div class="border-4 rounded-lg w-1/3 min-h-2/3 p-8">
        <NuxtLink to="decadal">
          <div class="border-2 p-8 rounded-lg text-3xl bg-green-400">
            Decadal
          </div>
        </NuxtLink>
        <p class="p-4">Climate model output from decadal prediction runs</p>
      </div>
      <div class="border-4 rounded-lg w-1/3 min-h-2/3 p-8">
        <NuxtLink to="topical">
          <div class="border-2 p-8 rounded-lg text-3xl bg-blue-400">
            Topical
          </div>
        </NuxtLink>
        <p class="p-4">Processed data on a broad range of applications</p>
        <img src="shoreline_retreat.png" alt="shoreline retreat" class="object-contain">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {}
</script>
