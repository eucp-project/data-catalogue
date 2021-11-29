<template>
  <div class="flex place-content-center">
    <div id="mapid" style="height: 600px; width:500px" />
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
      info: {},
      // groups and experiments over different regions
      groups: {
        NW: {
          model: 'CNRM, KNMI, ETH, UKMO',
          SW: 'SW: 40.4 N, -8.0 E',
          SE: 'SE: 40.4 N, 11.0 E',
          NE: 'NE: 58.6 N, 15.2 E',
          NW: 'NW: 58.6 N, -12.5 E'
        },
        SW: {
          model: 'CMCC, IPSL, ETH, UKMO',
          SW: 'SW: 30 N, -10 E',
          SE: 'SE: 40.4 N, 11.0 E',
          NE: 'NE: 58.6 N, 15.2 E',
          NW: 'NW: 58.6 N, -12.5 E'
        },
        SE: {
          model: 'ICTP, ETH, UKMO',
          SW: 'SW: 34.3 N, 12.5 E',
          SE: 'SE: 40.4 N, 11.0 E',
          NE: 'NE: 58.6 N, 15.2 E',
          NW: 'NW: 58.6 N, -12.5 E'
        },
        C: {
          model: 'GERICS, ETH, UKMO',
          SW: 'SW: 44.5 N, 5.0 E',
          SE: 'SE: 40.4 N, 11.0 E',
          NE: 'NE: 58.6 N, 15.2 E',
          NW: 'NW: 58.6 N, -12.5 E'
        },
        CE: {
          model: 'SMHI, ICTP, ETH, UKMO',
          SW: 'SW : 41.5 N, 17.8 E',
          SE: 'SE: 40.4 N, 11.0 E',
          NE: 'NE: 58.6 N, 15.2 E',
          NW: 'NW: 58.6 N, -12.5 E'
        },
        N: {
          model: 'DMI/SMHI, GERICS',
          SW: 'SW: 50.7 N, 1 E',
          SE: 'SE: 40.4 N, 11.0 E',
          NE: 'NE: 58.6 N, 15.2 E',
          NW: 'NW: 58.6 N, -12.5 E'
        }
      }
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
      // console.log(id, coordinates)
      const layer = L.polygon(coordinates, { fillColor: '#33333', weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 0.7 })
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
      // console.log(layer._leaflet_id)
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
      // to do: loop through the json file after it is put in a geojson/yaml file
      this._div.innerHTML = '<h4>CPM model&data availability</h4>' + (this.groups[props] ? (this.groups[props].model + '<br>' + this.groups[props].SW + '<br>' + this.groups[props].SE + '<br>' + this.groups[props].NE + '<br>' + this.groups[props].NW) : 'Hover over a region')
    }
  }
}
</script>

<style>
.info {
    padding: 6px 8px;
    font: 14px/16px Arial, Helvetica, sans-serif;
    background: white;
    background: rgba(255,255,255,0.8);
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    border-radius: 5px;
}
.info h4 {
    margin: 0 0 5px;
    color: #777;
}
</style>
