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
          cpm: 'CLMcom-CMCC-CCLM5-0-9',
          rcm: 'CCLM4-8-17_ICHEC-EC-EARTH',
          gcm: 'EC-EARTH'
        },
        CNRM: {
          cpm: 'CNRM-AROME41t1',
          rcm: 'ALADIN63_CNRM-CERFACS-CNRM-CM5',
          gcm: 'CNRM-CM5'
        },
        ETHZ: {
          cpm: 'COSMO-pompa',
          rcm: 'CCLM4-8-17_MPI-M-MPI-ESM-LR',
          gcm: 'MPI-ESM-LR'
        },
        GERICS: {
          cpm: 'GERICS-REMO2015',
          rcm: 'REMO2015_MPI-M-MPI-ESM-LR',
          gcm: 'MPI-ESM-LR'
        },
        UKMO: {
          cpm: 'HadREM3-RA-UM10.1',
          rcm: 'MOHC-HadGEM3-GC3.1-N512_MOHC-HadGEM2-ES',
          gcm: 'HadGEM2-ES'
        },
        'DMI/SMHI': {
          cpm: 'HCLIMcom-HCLIM38-AROME',
          rcm: 'HCLIMcom-HCLIM38-ALADIN_ICHEC-EC-EARTH',
          gcm: 'EC-EARTH'
        },
        ICTP: {
          cpm: 'ICTP-RegCM4-7-0',
          rcm: 'ICTP-RegCM4-7-0_MOHC-HadGEM2-ES',
          gcm: 'HadGEM2-ES'
        },
        KNMI: {
          cpm: 'KNMI-HCLIM38h1-AROME',
          rcm: 'KNMI-RACMO23E_KNMI-EC-EARTH',
          gcm: 'EC-EARTH'
        }
      }
    }
  },
  computed: {
    cpmImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/maps/' + this.domain + '/' + this.selectedVariable + '/' + 'cordex-cpm_' + this.modelsList[this.selectedModel].cpm + '_' + this.selectedSeason + '.png')
      } catch (err) {
        return fallback
      }
    },
    rcmImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/maps/' + this.domain + '/' + this.selectedVariable + '/' + 'CORDEX_' + this.modelsList[this.selectedModel].rcm + '_' + this.selectedSeason + '.png')
      } catch (err) {
        return fallback
      }
    },
    gcmImage () {
      const fallback = 'empty.png'
      try {
        return require('~/static/maps/' + this.domain + '/' + this.selectedVariable + '/' + 'CMIP5_' + this.modelsList[this.selectedModel].gcm + '_' + this.selectedSeason + '.png')
      } catch (err) {
        return fallback
      }
    }
  }
}
</script>
