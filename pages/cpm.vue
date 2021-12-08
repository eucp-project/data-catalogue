<template>
  <div class="flex place-content-center">
    <div id="mapid" style="height: 600px; width:500px" />
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
          SE: 'SE: 33 N, 7.4 E',
          NE: 'NE: 48.9 N, 5.7 E',
          NW: 'NW: 45.4 N, -15 E'
        },
        SE: {
          model: 'ICTP, ETH, UKMO',
          SW: 'SW: 34.3 N, 12.5 E',
          SE: 'SE: 34.3 N, 28.5 E',
          NE: 'NE: 40.9 N, 29.4 E',
          NW: 'NW: 40.9 N, 11.5 E'
        },
        C: {
          model: 'GERICS, ETH, UKMO',
          SW: 'SW: 44.5 N, 5.0 E',
          SE: 'SE: 45.5 N, 18.0 E',
          NE: 'NE: 56.0 N, 18.0 E',
          NW: 'NW: 53.0 N, 1.0 E'
        },
        CE: {
          model: 'SMHI, ICTP, ETH, UKMO',
          SW: 'SW : 41.5 N, 17.8 E',
          SE: 'SE: 41.5 N, 31.3 E',
          NE: 'NE: 51.6 N, 32.8 E',
          NW: 'NW: 51.6 N, 16.4 E'
        },
        N: {
          model: 'DMI/SMHI, GERICS',
          SW: 'SW: 50.7 N, 1 E',
          SE: 'SE: 49.7 N, 26.7 E',
          NE: 'NE: 70.6 N, 44.1 E',
          NW: 'NW: 72.6 N, -9.4 E'
        }
      }
    }
  },
  mounted () {
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
