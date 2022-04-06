<template>
  <!-- Buttons -->
  <div class="flex flex-col place-content-center p-24">
    <div class="flex gap-12">
      <div class="flex flex-col shadow-xl w-1/3 rounded-bl-lg rounded-br-lg">
        <NuxtLink to="cpm">
          <div class="rounded-tl-lg rounded-tr-lg py-6 text-center text-4xl text-white bg-blue-900 hover:bg-gray-500">
            CPM data
          </div>
        </NuxtLink>
        <p class="p-4">
          Convection-permitting climate model output
        </p>
        <img src="domains.jpg" alt="domains" class="object-contain">
      </div>
      <div class="flex flex-col shadow-xl w-1/3 rounded-bl-lg rounded-br-lg">
        <NuxtLink to="decadal">
          <div class="rounded-tl-lg rounded-tr-lg py-6 text-center text-4xl text-white bg-blue-900 hover:bg-gray-500">
            Decadal
          </div>
        </NuxtLink>
        <p class="p-4">
          Climate model output from decadal prediction runs
        </p>
        <img src="decadal_forecast.png" alt="domains" class="object-contain">
      </div>
      <div class="flex flex-col shadow-xl w-1/3 rounded-bl-lg rounded-br-lg">
        <NuxtLink to="topical">
          <div class="rounded-tl-lg rounded-tr-lg py-6 text-center text-4xl text-white bg-blue-900 hover:bg-gray-500">
            Topical
          </div>
        </NuxtLink>
        <p class="p-4">
          Processed data on a broad range of applications
        </p>
        <img src="shoreline_retreat.png" alt="shoreline retreat" class="object-contain">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
