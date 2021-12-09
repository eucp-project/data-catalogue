<template>
  <div>
    <h1 class="text-2xl m-4">
      Disclaimer: This page is a work in progress and does not currently contain dependable climate information!
    </h1>
    <div class="flex gap-4 m-4">
      <div id="mapid" style="height: 600px; width:500px" class="border-4" />
      <div class="border-4 flex-grow">
        <div class="flex bg-gray-100">
          <button
            v-for="(item, i) in tabs"
            :key="i"
            class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
            :class="item.isActive ? 'text-blue-500 border-b-2 font-medium border-blue-500' : ''"
            @click="toggle(i)"
          >
            {{ item.body }}
          </button>
        </div>
        <p class="text-red-500">
          {{ path_cpm }}
        </p>
        <img src="cpm_analysis/cpm_prec.png" alt="cpm"> <!-- change the path when the figs are ready -->
      </div>
    </div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import 'proj4leaflet'
// import proj4 from 'proj4'

export default {
  data () {
    return {
      map: {},
      info: {},
      path_cpm: [],
      regions: [],
      tab: {},
      tabs: [
        { isActive: true, body: 'lorem' },
        { isActive: true, body: 'ipsum' },
        { isActive: true, body: 'dolar' },
        { isActive: true, body: 'sit' },
        { isActive: true, body: 'amet' }
      ]
    }
  },
  async fetch () {
    // // collect regions information from yaml file
    const regions = await this.$content('regions').sortBy('sort').fetch()
    this.regions = regions
  },
  mounted () {
    this.toggle(0)
    // use WGS 84 / Arctic Polar Stereographic EPSG 3995 projection
    // -------- explanation of the projection parameters in proj --------
    // +proj=sterea +lat_0=Latitude of natural origin
    // +lon_0=Longitude of natural origin
    // +k_0=Scale factor at natural origin
    // +x_0=False Easting
    // +y_0=False Northing
    // resolutions (m / pixel)
    // !! note: the resolution can be calculated using GeoServer (http://geoserver.org/)
    // -------------------------------------------------------------------
    const customCrs = new L.Proj.CRS(
      'EPSG:3995',
      '+proj=stere +lat_0=90 +lat_ts=71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs',
      {
        resolutions: [22600, 11300, 5650, 2825, 1412.5, 706.25, 353.125, 176.5625, 88.28125, 44.140625],
        origin: [-12403632.820000000298023, 17760.814940000000206],
        bounds: L.bounds([-10403632.820, 17760.815, 12417841.080, -13082466.960])
      })

    const wmsBKLayer = L.tileLayer.wms('http://eumetview.eumetsat.int/geoserv/wms', {
      layers: 'bkg-raster:bkg-raster',
      format: 'image/png',
      transparent: true
    })

    // add country borders to the wms layer
    // const wmsCountryBorders = L.tileLayer.wms('http://eumetview.eumetsat.int/geoserv/wms', {
    //   layers: 'overlay:vector-overlay',
    //   format: 'image/png',
    //   transparent: true
    // })

    this.map = L.map('mapid', {
      center: L.latLng(52, 10),
      zoom: 1,
      tileSize: 256,
      continuousWorld: true,
      worldCopyJump: false,
      crs: customCrs,
      layers: [wmsBKLayer]
    })

    // from EPSG 4326 (WGS84) to EPSG 3995 via proj4
    const domains = [
      ['NW', [[40.4, -8], [40.4, 11], [58.6, 15.2], [58.6, -12.5]]],
      ['SW', [[30, -10], [33, 7.4], [48.9, 5.7], [45.5, -15]]],
      ['SE', [[34.3, 12.5], [34.3, 28.5], [40.9, 29.4], [40.9, 11.5]]],
      ['C', [[44.5, 5.0], [45.5, 18.0], [56.0, 18.0], [53.0, 1.0]]],
      ['CE', [[41.5, 17.8], [41.5, 31.3], [51.6, 32.8], [51.6, 16.4]]],
      ['N', [[50.7, 1], [49.7, 26.7], [70.6, 44.1], [72.6, -9.4]]]
    ]

    domains.forEach(([id, coordinates]) => {
      const layer = L.polygon(coordinates, { fillColor: '#ffffff', weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 0.7 })
      layer.addTo(this.map)
      layer._leaflet_id = id // rename the id of each layer
      layer.on({
        mouseover: this.highlightFeature,
        mouseout: this.resetHighlight,
        click: this.zoomToFeature
      })
    })

    // contro that shows source data availability info
    this.info = L.control()
    // Create a div with a class of info
    this.info.onAdd = this.infoDiv
    this.info.update = this.updateInfo
    this.info.addTo(this.map)
  },
  methods: {
    onMapClicked (event) {
      console.log(event.sourceTarget.feature.properties)
    },
    highlightFeature (e) {
      const layer = e.target

      layer.setStyle({ weight: 5, color: '#666', dashArray: '', fillOpacity: 0.7 })

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront()
      }

      this.info.update(layer._leaflet_id)
    },
    resetHighlight (e) {
      const layer = e.target
      layer.setStyle({ fillColor: '#ffffff', weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 0.7 })
      this.info.update()
    },
    zoomToFeature (e) {
      this.map.fitBounds(e.target.getBounds())
      const layer = e.target
      this.path_cpm = this.regions.regions[layer._leaflet_id] ? ('You select region ' + layer._leaflet_id) : ''
    },
    infoDiv (map) {
      this._div = L.DomUtil.create('div', 'info bg-white bg-opacity-75 text-base p-2 rounded-md') // create a div with a class "info"
      // this.update()
      return this._div
    },
    updateInfo (props) {
      // to do: loop through the json file after it is put in a geojson/yaml file
      this._div.innerHTML = '<h4>CPM model&data availability</h4>' + (this.regions.regions[props] ? (this.regions.regions[props].model + '<br>' + this.regions.regions[props].SW + '<br>' + this.regions.regions[props].SE + '<br>' + this.regions.regions[props].NE + '<br>' + this.regions.regions[props].NW) : 'Hover over a region')
    },
    toggle (i) {
      this.tab = this.tabs[i]
      // eslint-disable-next-line no-return-assign
      this.tabs.map(obj => obj.isActive = false)
      this.tabs[i].isActive = true
    }
  }
}
</script>
