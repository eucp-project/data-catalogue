<template>
  <div class="w-full h-full">
    <span class="space-x-3 p-3">
      <CpmDropdown v-model="selectedVariable" :options="variables" alttext="Choose a variable." />
      <CpmDropdown v-model="selectedSeason" :options="seasons" alttext="Select a season." />
      <CpmDropdown v-model="selectedModel" :options="models" alttext="Choose a model/group" />
      <!-- same style but not selectable option to display region -->
      <select
        class="border border-gray-300 rounded-full cursor-pointer
      text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400
      focus:outline-none appearance-none"
      >
        <option :value="domain">
          {{ domain }}
        </option>
      </select>
    </span>
    <div class="w-full h-full flex flex-wrap">
      <div class="w-1/3 h-full">
        <p class="pt-6 text-center text-lg prose">
          CPM experiment
        </p>
        <div
          class="bg-no-repeat bg-left-top bg-contain w-full h-full"
          :style="{backgroundImage: `url(${cpmImage})` }"
        />
      </div>
      <div class="w-1/3 h-full">
        <p class="pt-6 text-center text-lg prose">
          RCM experiment
        </p>
        <div
          class="bg-no-repeat bg-left-top bg-contain w-full h-full"
          :style="{backgroundImage: `url(${rcmImage})` }"
        />
      </div>
      <div class="w-1/3 h-full">
        <p class="pt-6 text-center text-lg prose">
          GCM experiment
        </p>
        <div
          class="bg-no-repeat bg-left-top bg-contain w-full h-full"
          :style="{backgroundImage: `url(${gcmImage})` }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    domain: {
      default: 'AL',
      type: String
    }
  },
  data () {
    return {
      selectedVariable: 'pr',
      selectedSeason: 'DJF',
      selectedModel: 'CMCC',
      variables: {
        pr: 'Precipitation',
        tas: 'Temperature'
      },
      seasons: {
        DJF: 'Winter',
        JJA: 'Summer'
      },
      models: {
        CMCC: 'CMCC',
        CNRM: 'CNRM',
        ETHZ: 'ETHZ',
        GERICS: 'GERICS',
        UKMO: 'UKMO',
        'DMI/SMHI': 'DMI/SMHI',
        ICTP: 'ICTP',
        KNMI: 'KNMI'
      },
      modelsList: {
        CMCC: {
          cpm: 'ethz-cclm_ecmwf-erai',
          rcm: 'ethz-cclm_ecmwf-erai',
          gcm: 'ec-earth-cclm'
        },
        CNRM: {
          cpm: 'cnrm-arome_cnrm-cm5',
          rcm: 'cnrm-arome_cnrm-cm5',
          gcm: 'cnrm-cm5'
        },
        ETHZ: {
          cpm: 'ethz-cclm_mpi',
          rcm: 'ethz-cclm_mpi',
          gcm: 'ethz-mpi-esm-lr'
        },
        GERICS: {
          cpm: 'gerics_mpi-esm-lr',
          rcm: 'gerics_mpi-esm-lr',
          gcm: 'ethz-mpi-esm-lr'
        },
        UKMO: {
          cpm: 'mohc-um10.1_hadgem3-gc3.1',
          rcm: 'mohc-um10.1_hadgem3-gc3.1',
          gcm: 'mohc-hadgem3-gc3.1'
        },
        'DMI/SMHI': {
          cpm: 'hclim_ec-earth',
          rcm: 'hclim_ec-earth',
          gcm: 'ec-earth-smhi'
        },
        ICTP: {
          cpm: 'regcm4_hadgem2-es',
          rcm: 'regcm4_hadgem2-es',
          gcm: 'hadgem2-es'
        },
        IPSL: {
          cpm: 'ipsl-wrf_ipsl-cm5-mr',
          rcm: 'ipsl-wrf_ipsl-cm5-mr',
          gcm: 'ipsl-cm5a-mr'
        },
        KNMI: {
          cpm: 'hclim-knmi_ec-earth',
          rcm: 'hclim-knmi_ec-earth',
          gcm: 'ec-earth'
        }
      }
    }
  },
  computed: {
    cpmImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/past_performance/' + this.domain + '/' + this.selectedVariable + '/' + 'cpm_' + this.modelsList[this.selectedModel].cpm + '_' + this.selectedSeason + '.png')
      } catch (err) {
        return fallback
      }
    },
    rcmImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/past_performance/' + this.domain + '/' + this.selectedVariable + '/' + 'rcm_' + this.modelsList[this.selectedModel].rcm + '_' + this.selectedSeason + '.png')
      } catch (err) {
        return fallback
      }
    },
    gcmImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/cpm_analysis/past_performance/' + this.domain + '/' + this.selectedVariable + '/' + 'gcm_' + this.modelsList[this.selectedModel].gcm + '_' + this.selectedSeason + '.png')
      } catch (err) {
        return fallback
      }
    }
  }
}
</script>
