<template>
  <div class="flex place-content-center">
    <div id="mapid" style="height: 800px; width: 900px" />
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
// import 'proj4leaflet'

export default {
  data () {
    return {
      map: {},
      info: {}
    }
  },
  mounted () {
    const background = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' })

    // const customCrs = new L.Proj.CRS('EPSG:32631', '+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs', { resolutions: [40000, 10000, 5000, 1000, 100, 1], origin: [500000.00, 4649776.22] })
    // const customCrs = new L.Proj.CRS(
    //   'EPSG:2056',
    //   '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs',
    //   {
    //     resolutions: [
    //       4000, 3750, 3500, 3250, 3000, 2750, 2500, 2250, 2000, 1750, 1500, 1250, 1000, 750, 650, 500, 250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5
    //     ],
    //     origin: [2420000, 1350000]
    //   })

    this.map = L.map('mapid', {
      // crs: customCrs,
      center: [52, 10],
      zoom: 3,
      layers: [background]
    }
    )

    const domains = [
      ['NW', [[40.4, -8], [40.4, 11], [58.6, 15.2], [58.6, -12.5]]],
      ['SW', [[30, -10], [33, 7.4], [48.9, 5.7], [45.5, -15]]],
      ['SE', [[34.3, 12.5], [34.3, 28.5], [40.9, 29.4], [40.9, 11.5]]],
      ['C', [[44.5, 5.0], [45.5, 18.0], [56.0, 18.0], [53.0, 1.0]]],
      ['CE', [[41.5, 17.8], [41.5, 31.3], [51.6, 32.8], [51.6, 16.4]]],
      ['N', [[50.7, 1], [49.7, 26.7], [70.6, 44.1], [72.6, -9.4]]]
    ]

    domains.forEach(([id, coordinates]) => {
      console.log(id, coordinates)
      const layer = L.polygon(coordinates, { fillColor: '#33333', weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 0.7 })
      layer.addTo(this.map)
      layer.on({
        mouseover: this.highlightFeature,
        mouseout: this.resetHighlight,
        click: this.zoomToFeature
      })
    })

    // groups and experiments over different regions
    // const groups = {
    //   NW: 'CNRM, KNMI, ETH, UKMO',
    //   SW: 'CMCC, IPSL, ETH, UKMO',
    //   SE: 'ICTP, ETH, UKMO',
    //   C: 'GERICS, ETH, UKMO',
    //   CE: 'SMHI, ICTP, ETH, UKMO',
    //   N: 'DMI/SMHI, GERICS'
    // }

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

      this.info.update(layer.feature)
      // console.log(layer.feature)
    },
    resetHighlight (e) {
      const layer = e.target
      layer.setStyle({ fillColor: '#ffffff', weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 0.7 })
      this.info.update()
    },
    zoomToFeature (e) {
      this.map.fitBounds(e.target.getBounds())
    },
    infoDiv (map) {
      this._div = L.DomUtil.create('div', 'info') // create a div with a class "info"
      // this.update()
      return this._div
    },
    updateInfo (props) {
      this._div.innerHTML = '<h1>List of groups running CP-RCM experiments</h1>'
    }
  }
}
</script>
