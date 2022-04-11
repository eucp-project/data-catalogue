<template>
  <div class="flex flex-col p-24">
    <div class="prose w-2/3 text-gray-700 leading-7 pb-8">
    One of the important outcomes of EUCP (European Climate Prediction system) project is data.
    This data catalogue was developed to provide an overview of all data outputs of the project.
    No data is hosted here, but the catalogue redirects to the original
    sources and provides additional context and documentation.
    </div>
    <!-- Buttons -->
    <div class="flex gap-12">
      <div class="flex flex-col shadow-xl w-1/3 rounded-bl-lg rounded-br-lg pb-7">
        <NuxtLink to="cpm">
          <div class="rounded-tl-lg rounded-tr-lg py-6 text-center text-4xl text-white font-extralight tracking-wide bg-blue-900 hover:bg-gray-500">
            CPM data
          </div>
        </NuxtLink>
        <p class="prose p-4">
          Output data from convection permitting model (CPM) runs.
        </p>
        <img src="domains.jpg" alt="domains" class="object-contain object-top">
      </div>
      <div class="flex flex-col shadow-xl w-1/3 rounded-bl-lg rounded-br-lg pb-7">
        <NuxtLink to="decadal">
          <div class="rounded-tl-lg rounded-tr-lg py-6 text-center text-4xl text-white font-extralight tracking-wide bg-blue-900 hover:bg-gray-500">
            Decadal
          </div>
        </NuxtLink>
        <p class="prose p-4">
          Climate model output from decadal prediction runs, contributing to the CMIP6 project DCPP.
        </p>
        <img src="decadal_forecast.png" alt="domains" class="object-contain">
      </div>
      <div class="flex flex-col shadow-xl w-1/3 rounded-bl-lg rounded-br-lg pb-7">
        <NuxtLink to="topical">
          <div class="rounded-tl-lg rounded-tr-lg py-6 text-center text-4xl text-white font-extralight tracking-wide bg-blue-900 hover:bg-gray-500">
            Topical
          </div>
        </NuxtLink>
        <p class="p-4 font-extralight">
          <strong>Processed data on a broad range of applications.</strong> ‘Ad hoc’ datasets are published in standard open data repositories such as Zenodo. While this makes them available, they may be difficult to find and lacking in documentation.
        </p>
        <img src="shoreline_retreat.png" alt="shoreline retreat" class="object-contain">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
