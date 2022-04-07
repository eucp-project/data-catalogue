<template>
  <div class="flex flex-col p-24">
    <div class="prose w-2/3 text-gray-700 leading-7 pb-8">
    One of the important outcomes of EUCP (European Climate Prediction system) project is data.
    This data catalogue was developed to provide an overview of all data outputs of the project, specifically:
    <ul class="list-disc pl-6">
      <li>extension of CORDEX-FPS <strong>convection permitting model</strong> (CPM) data;</li>
      <li>contributions to the CMIP6 <strong>decadal prediction</strong> project DCPP;</li>
      <li>various smaller <strong>topical datasets</strong> resulting from multiple research activities.</li>
    </ul>
    This catalogue does not host data, but redirects to the original
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
          <strong>Convection-permitting climate model output.</strong> Convection permitting model (CPM) output is also in the process of being added to ESGF. However, unlike the decadal predictions, these datasets are less mature and therefore they have not yet found their way into a service like C3S.
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
          <strong>Climate model output from decadal prediction runs.</strong> Decadal prediction data is available through ESGF and, more or less in parallel with EUCP, C3S has developed a decadal predictions service, offering convenient access to decadal prediction data through their climate data store.
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
