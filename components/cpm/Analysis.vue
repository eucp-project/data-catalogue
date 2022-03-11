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
      selectedModel: 'CLMcom-CMCC-CCLM5-0-9',
      variables: {
        pr: 'Precipitation',
        tas: 'Temperature'
      },
      seasons: {
        DJF: 'Winter',
        JJA: 'Summer'
      },
      models: {
        'CLMcom-CMCC-CCLM5-0-9': 'CLMcom-CMCC-CCLM5-0-9',
        'CNRM-AROME41t1': 'CNRM-AROME41t1',
        'COSMO-pompa': 'COSMO-pompa',
        'GERICS-REMO2015': 'GERICS-REMO2015',
        'HadREM3-RA-UM10.1': 'HadREM3-RA-UM10.1',
        'HCLIMcom-HCLIM38-AROME': 'HCLIMcom-HCLIM38-AROME',
        'ICTP-RegCM4-7-0': 'ICTP-RegCM4-7-0',
        'KNMI-HCLIM38h1-AROME': 'KNMI-HCLIM38h1-AROME'
      },
      modelsList: {
        'CLMcom-CMCC-CCLM5-0-9': { RCM: 'CCLM4-8-17_ICHEC-EC-EARTH', GCM: 'EC-EARTH' },
        'CNRM-AROME41t1': { RCM: 'ALADIN63_CNRM-CERFACS-CNRM-CM5', GCM: 'CNRM-CM5' },
        'COSMO-pompa': { RCM: 'CCLM4-8-17_MPI-M-MPI-ESM-LR', GCM: 'MPI-ESM-LR' },
        'GERICS-REMO2015': { RCM: 'REMO2015_MPI-M-MPI-ESM-LR', GCM: 'MPI-ESM-LR' },
        'HadREM3-RA-UM10.1': { RCM: 'MOHC-HadGEM3-GC3.1-N512_MOHC-HadGEM2-ES', GCM: 'HadGEM2-ES' },
        'HCLIMcom-HCLIM38-AROME': { RCM: 'HCLIMcom-HCLIM38-ALADIN_ICHEC-EC-EARTH', GCM: 'EC-EARTH' },
        'ICTP-RegCM4-7-0': { RCM: 'ICTP-RegCM4-7-0_MOHC-HadGEM2-ES', GCM: 'HadGEM2-ES' },
        'KNMI-HCLIM38h1-AROME': { RCM: 'KNMI-RACMO23E_KNMI-EC-EARTH', GCM: 'EC-EARTH' }
      },
      rcmImage: 'empty.png',
      gcmImage: 'empty.png'
    }
  },
  computed: {
    cpmImage () {
      const fallback = 'empty.png'
      try {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.rcmImage = require('~/static/maps/' + this.domain + '/' + this.selectedVariable + '/' + 'CORDEX_' + this.modelsList[this.selectedModel].RCM + '_' + this.selectedSeason + '.png')
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.gcmImage = require('~/static/maps/' + this.domain + '/' + this.selectedVariable + '/' + 'CMIP5_' + this.modelsList[this.selectedModel].GCM + '_' + this.selectedSeason + '.png')
        return require('~/static/maps/' + this.domain + '/' + this.selectedVariable + '/' + 'cordex-cpm_' + this.selectedModel + '_' + this.selectedSeason + '.png')
      } catch (err) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.rcmImage = 'empty.png'
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.gcmImage = 'empty.png'
        return fallback
      }
    }
  }
}
</script>
