<template>
  <div class="flex w-full gap-4 p-2">
    <CpmMap v-model="domain" class="flex-none" />
    <div class="flex-grow p-4 prose max-w-none" :domain="domain">
      <h1>EUCP convection permitting model simulations</h1>
      <p>
        Building upon CORDEX FPS-Convection, EUCP has performed
        convection-permitting model runs for multiple domains covering Europe
        and the outermost regions. This page provides an overview of the most
        relevant data and results from our preliminary analysis. Select a region
        on the map to start exploring.
      </p>
      <p>
        The selected domain is: <strong>{{ domainNames[domain] }}</strong>.
        For this domain, data from the following groups/models is available:
        <ul>
          <li v-for="(group, i) in groups[domain]" :key="i">
            {{ group }}
          </li>
        </ul>
      </p>
      <p>
        More details about the simulations that have been performed may be
        found in <a
          href="CPM_simulation_details.docx"
          target="_blank"
          rel="noopener noreferrer"
        >this document</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      domain: 'AL', // default value for domain
      domainNames: {
        N: 'Northern Europe',
        NW: 'Northwest Europe',
        C: 'Central Europe',
        SW: 'Southwest Europe',
        SE: 'Southeast Europe',
        CE: 'Central Eastern Europe',
        AL: 'Alps'
      },
      groups: {
        NW: ['CNRM', 'KNMI', 'ETHZ', 'UKMO'],
        SW: ['CMCC', 'IPSL', 'ETHZ', 'UKMO'],
        SE: ['ICTP', 'ETHZ', 'UKMO'],
        C: ['GERICS', 'ETHZ', 'UKMO'],
        CE: ['SMHI', 'ICTP', 'ETHZ', 'UKMO'],
        N: ['SMHI', 'GERICS'],
        AL: ['CNRM', 'CMCC', 'IPSL', 'KNMI', 'GERICS', 'ETHZ', 'SMHI', 'ICTP', 'UKMO']
      }
    }
  }
}
</script>
