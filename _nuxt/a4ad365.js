(window.webpackJsonp=window.webpackJsonp||[]).push([[9,7],{1638:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{domain:"AL"}}},r=o(24),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"flex gap-4 m-8"},[o("CpmMap",{model:{value:t.domain,callback:function(e){t.domain=e},expression:"domain"}}),t._v(" "),o("div",{staticClass:"border-4 flex-grow"},[o("NuxtChild",{attrs:{domain:t.domain}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CpmMap:o(299).default})},299:function(t,e,o){"use strict";o.r(e);var n=o(22),r=o(9),l=(o(54),o(33),o(11),o(25),o(294),o(289)),d=o.n(l),c=(o(295),{props:["value"],data:function(){return{map:{},info:{},path_cpm:[],regions:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("regions").sortBy("sort").fetch();case 2:o=e.sent,t.regions=o,r=new d.a.Proj.CRS("EPSG:3995","+proj=stere +lat_0=90 +lat_ts=71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",{resolutions:[22600,11300,5650,2825,1412.5,706.25,353.125,176.5625,88.28125,44.140625],origin:[-12403632.82,17760.81494],bounds:d.a.bounds([-10403632.82,17760.815,12417841.08,-13082466.96])}),l=d.a.tileLayer.wms("https://view.eumetsat.int/geoserver/ows",{layers:"backgrounds:ne_background",format:"image/png",transparent:!0}),t.map=d.a.map("mapid",{center:d.a.latLng(52,10),zoom:1,tileSize:256,continuousWorld:!0,worldCopyJump:!1,crs:r,layers:[l]}),[["NW",[[40.4,-8],[40.4,11],[58.6,15.2],[58.6,-12.5]]],["SW",[[30,-10],[33,7.4],[48.9,5.7],[45.5,-15]]],["SE",[[34.3,12.5],[34.3,28.5],[40.9,29.4],[40.9,11.5]]],["C",[[44.5,5],[45.5,18],[56,18],[53,1]]],["CE",[[41.5,17.8],[41.5,31.3],[51.6,32.8],[51.6,16.4]]],["N",[[50.7,1],[49.7,26.7],[70.6,44.1],[72.6,-9.4]]],["AL",[[40,1],[40,17],[50,17],[50,1]]]].forEach((function(e){var o=Object(n.a)(e,2),r=o[0],l=o[1],c=d.a.polygon(l,{fillColor:"#ffffff",weight:2,opacity:1,color:"white",dashArray:"3",fillOpacity:.7});c.addTo(t.map),c._leaflet_id=r,c.on({mouseover:t.highlightFeature,mouseout:t.resetHighlight,click:t.onMapClicked})})),t.info=d.a.control(),t.info.onAdd=t.infoDiv,t.info.update=t.updateInfo,t.info.addTo(t.map);case 13:case"end":return e.stop()}}),e)})))()},methods:{onMapClicked:function(t){this.domain=t.target._leaflet_id,this.zoomToFeature(t),this.$emit("input",this.domain)},highlightFeature:function(t){var e=t.target;e.setStyle({weight:5,color:"#666",dashArray:"",fillOpacity:.7}),d.a.Browser.ie||d.a.Browser.opera||d.a.Browser.edge||e.bringToFront(),this.info.update(e._leaflet_id)},resetHighlight:function(t){t.target.setStyle({fillColor:"#ffffff",weight:2,opacity:1,color:"white",dashArray:"3",fillOpacity:.7}),this.info.update()},zoomToFeature:function(t){this.map.fitBounds(t.target.getBounds())},infoDiv:function(map){return this._div=d.a.DomUtil.create("div","info bg-white bg-opacity-75 text-base p-2 rounded-md"),this._div},updateInfo:function(t){this._div.innerHTML="<h4>CPM model&data availability</h4>"+(this.regions.regions[t]?this.regions.regions[t].model:"Hover over a region")}}}),f=o(24),component=Object(f.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"border-4",staticStyle:{height:"600px",width:"500px"},attrs:{id:"mapid"}})}),[],!1,null,null,null);e.default=component.exports}}]);