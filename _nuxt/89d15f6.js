(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{272:function(t,e,o){"use strict";o.r(e);var r=o(20),n=o(9),l=(o(38),o(15),o(45),o(252),o(251)),c=o.n(l),d=(o(258),{data:function(){return{map:{},info:{},path_cpm:[],regions:[],tab:{},tabs:[{isActive:!0,body:"lorem"},{isActive:!0,body:"ipsum"},{isActive:!0,body:"dolar"},{isActive:!0,body:"sit"},{isActive:!0,body:"amet"}]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("regions").sortBy("sort").fetch();case 2:o=e.sent,t.regions=o;case 4:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;this.toggle(0);var e=new c.a.Proj.CRS("EPSG:3995","+proj=stere +lat_0=90 +lat_ts=71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",{resolutions:[22600,11300,5650,2825,1412.5,706.25,353.125,176.5625,88.28125,44.140625],origin:[-12403632.82,17760.81494],bounds:c.a.bounds([-10403632.82,17760.815,12417841.08,-13082466.96])}),o=c.a.tileLayer.wms("http://eumetview.eumetsat.int/geoserv/wms",{layers:"bkg-raster:bkg-raster",format:"image/png",transparent:!0});this.map=c.a.map("mapid",{center:c.a.latLng(52,10),zoom:1,tileSize:256,continuousWorld:!0,worldCopyJump:!1,crs:e,layers:[o]});[["NW",[[40.4,-8],[40.4,11],[58.6,15.2],[58.6,-12.5]]],["SW",[[30,-10],[33,7.4],[48.9,5.7],[45.5,-15]]],["SE",[[34.3,12.5],[34.3,28.5],[40.9,29.4],[40.9,11.5]]],["C",[[44.5,5],[45.5,18],[56,18],[53,1]]],["CE",[[41.5,17.8],[41.5,31.3],[51.6,32.8],[51.6,16.4]]],["N",[[50.7,1],[49.7,26.7],[70.6,44.1],[72.6,-9.4]]]].forEach((function(e){var o=Object(r.a)(e,2),n=o[0],l=o[1],d=c.a.polygon(l,{fillColor:"#ffffff",weight:2,opacity:1,color:"white",dashArray:"3",fillOpacity:.7});d.addTo(t.map),d._leaflet_id=n,d.on({mouseover:t.highlightFeature,mouseout:t.resetHighlight,click:t.zoomToFeature})})),this.info=c.a.control(),this.info.onAdd=this.infoDiv,this.info.update=this.updateInfo,this.info.addTo(this.map)},methods:{onMapClicked:function(t){console.log(t.sourceTarget.feature.properties)},highlightFeature:function(t){var e=t.target;e.setStyle({weight:5,color:"#666",dashArray:"",fillOpacity:.7}),c.a.Browser.ie||c.a.Browser.opera||c.a.Browser.edge||e.bringToFront(),this.info.update(e._leaflet_id)},resetHighlight:function(t){t.target.setStyle({fillColor:"#ffffff",weight:2,opacity:1,color:"white",dashArray:"3",fillOpacity:.7}),this.info.update()},zoomToFeature:function(t){this.map.fitBounds(t.target.getBounds());var e=t.target;this.path_cpm=this.regions.regions[e._leaflet_id]?"You select region "+e._leaflet_id:""},infoDiv:function(map){return this._div=c.a.DomUtil.create("div","info bg-white bg-opacity-75 text-base p-2 rounded-md"),this._div},updateInfo:function(t){this._div.innerHTML="<h4>CPM model&data availability</h4>"+(this.regions.regions[t]?this.regions.regions[t].model+"<br>"+this.regions.regions[t].SW+"<br>"+this.regions.regions[t].SE+"<br>"+this.regions.regions[t].NE+"<br>"+this.regions.regions[t].NW:"Hover over a region")},toggle:function(i){this.tab=this.tabs[i],this.tabs.map((function(t){return t.isActive=!1})),this.tabs[i].isActive=!0}}}),f=o(50),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticClass:"text-2xl m-4"},[t._v("\n    Disclaimer: This page is a work in progress and does not currently contain dependable climate information!\n  ")]),t._v(" "),o("div",{staticClass:"flex gap-4 m-4"},[o("div",{staticClass:"border-4",staticStyle:{height:"600px",width:"500px"},attrs:{id:"mapid"}}),t._v(" "),o("div",{staticClass:"border-4 flex-grow"},[o("div",{staticClass:"flex bg-gray-100"},t._l(t.tabs,(function(e,i){return o("button",{key:i,staticClass:"text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none",class:e.isActive?"text-blue-500 border-b-2 font-medium border-blue-500":"",on:{click:function(e){return t.toggle(i)}}},[t._v("\n          "+t._s(e.body)+"\n        ")])})),0),t._v(" "),o("p",{staticClass:"text-red-500"},[t._v("\n        "+t._s(t.path_cpm)+"\n      ")]),t._v(" "),o("img",{attrs:{src:"cpm_analysis/cpm_prec.png",alt:"cpm"}})])])])}),[],!1,null,null,null);e.default=component.exports}}]);