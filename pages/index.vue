<template>
  <div class="px-12 pt-8 flex flex-col">
    <div class="prose max-w-none w-2/3 mb-4 text-gray-700 leading-7 pb-8">
      One of the important outcomes of the EUCP (European Climate Prediction system) project is data.
      This data catalogue was developed to provide an overview of all data outputs of the project.
      No data is hosted here, but the catalogue redirects to the original
      sources and provides additional context and documentation.
    </div>
    <!-- Buttons -->
    <div class="flex-grow flex gap-12 items-stretch">
      <NuxtLink to="cpm" class="flex flex-col items-stretch h-full group shadow-xl rounded-bl-lg rounded-br-lg pb-7 filter hover:grayscale-80 w-1/3">
        <div class="rounded-tl-lg rounded-tr-lg py-4 text-center text-3xl text-white font-extralight tracking-wide bg-blue-900 group-hover:bg-gray-500">
          CPM data
        </div>
        <p class="prose p-4 max-w-none">
          Output data from convection permitting model (CPM) simulations.
        </p>
        <!-- <img src="domains.jpg" alt="domains" class="object-contain h-full w-auto mx-auto"> -->
        <div :style="{ backgroundImage: `url('domains.jpg')` }" class="bg-center bg-no-repeat bg-contain w-full h-full" />
      </NuxtLink>
      <NuxtLink to="decadal" class="flex flex-col items-stretch h-full group shadow-xl rounded-bl-lg rounded-br-lg pb-7 filter hover:grayscale-80 w-1/3">
        <div class="rounded-tl-lg rounded-tr-lg py-4 text-center text-3xl text-white font-extralight tracking-wide bg-blue-900 group-hover:bg-gray-500">
          Decadal
        </div>
        <p class="prose p-4 max-w-none">
          Climate model output from decadal prediction runs, contributing to the CMIP6 project DCPP.
        </p>
        <!-- <img src="decadal_forecast.png" alt="decadal forecast" class="object-contain h-full w-auto mx-auto"> -->
        <div :style="{ backgroundImage: `url('decadal_forecast.png')` }" class="bg-center bg-no-repeat bg-contain w-full h-full" />
      </NuxtLink>
      <NuxtLink to="topical" class="flex flex-col items-stretch h-full group shadow-xl rounded-bl-lg rounded-br-lg pb-7 filter hover:grayscale-80 w-1/3">
        <div class="rounded-tl-lg rounded-tr-lg py-4 text-center text-3xl text-white font-extralight tracking-wide bg-blue-900 group-hover:bg-gray-500">
          Topical
        </div>
        <p class="prose p-4 max-w-none">
          This page contains information on smaller topical datasets that resulted from multiple research activities.
        </p>
        <!-- <img src="shoreline_retreat.png" alt="shoreline retreat" class="object-contain h-full w-auto mx-auto"> -->
        <div :style="{ backgroundImage: `url('shoreline_retreat.png')` }" class="bg-center bg-no-repeat bg-contain w-full h-full" />
      </NuxtLink>
    </div>
    <div class="prose max-w-none p-8 text-center text-xs">
      This page is open source. <a href="https://github.com/eucp-project/data-catalogue" target="_blank" rel="noopener">Edit on github</a>.
    </div>
  </div>
</template>

<script>
export default {}
</script>
