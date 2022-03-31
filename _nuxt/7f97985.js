(window.webpackJsonp=window.webpackJsonp||[]).push([[12,9,11],{2117:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{domain:"AL",pages:[{title:"CPM home",url:"/cpm"},{title:"Past performance",url:"/cpm/performance"},{title:"Future change",url:"/cpm/future"},{title:"Analyse",url:"/cpm/analyse"},{title:"Explore",url:"/cpm/explore"},{title:"Download",url:"/cpm/download"},{title:"More info",url:"/cpm/references"}]}}},r=n(23),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex gap-4 m-8"},[n("CpmMap",{model:{value:t.domain,callback:function(e){t.domain=e},expression:"domain"}}),t._v(" "),n("div",{staticClass:"border-4 flex-grow"},[n("NavTabs",{attrs:{pages:t.pages}}),t._v(" "),n("NuxtChild",{attrs:{domain:t.domain}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CpmMap:n(291).default,NavTabs:n(277).default})},263:function(t,e,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("29849a68",content,!0,{sourceMap:!1})},271:function(t,e,n){"use strict";n(263)},272:function(t,e,n){var o=n(64)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\na.nuxt-link-exact-active[data-v-7929573e]{\n  color:rgb(59 130 246);\n  border-bottom-width:2px;\n  border-color:rgb(59 130 246)\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},277:function(t,e,n){"use strict";n.r(e);var o={props:{pages:[]}},r=(n(271),n(23)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex bg-gray-100"},[n("nav",[n("ul",t._l(t.pages,(function(e){return n("li",{key:e.url,staticClass:"inline-block"},[n("NuxtLink",{staticClass:"text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none",attrs:{role:"button",to:e.url}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),0)])])}),[],!1,null,"7929573e",null);e.default=component.exports},291:function(t,e,n){"use strict";n.r(e);var o=n(21),r=n(9),l=(n(49),n(37),n(12),n(24),n(287),n(280)),c=n.n(l),d=(n(288),{props:["value"],data:function(){return{map:{},info:{},path_cpm:[],regions:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("regions").sortBy("sort").fetch();case 2:n=e.sent,t.regions=n,r=new c.a.Proj.CRS("EPSG:3995","+proj=stere +lat_0=90 +lat_ts=71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",{resolutions:[22600,11300,5650,2825,1412.5,706.25,353.125,176.5625,88.28125,44.140625],origin:[-12403632.82,17760.81494],bounds:c.a.bounds([-10403632.82,17760.815,12417841.08,-13082466.96])}),l=c.a.tileLayer.wms("https://view.eumetsat.int/geoserver/ows",{layers:"backgrounds:ne_background",format:"image/png",transparent:!0}),t.map=c.a.map("mapid",{center:c.a.latLng(52,10),zoom:1,tileSize:256,continuousWorld:!0,worldCopyJump:!1,crs:r,layers:[l]}),[["NW",[[40.4,-8],[40.4,11],[58.6,15.2],[58.6,-12.5]]],["SW",[[30,-10],[33,7.4],[48.9,5.7],[45.5,-15]]],["SE",[[34.3,12.5],[34.3,28.5],[40.9,29.4],[40.9,11.5]]],["C",[[44.5,5],[45.5,18],[56,18],[53,1]]],["CE",[[41.5,17.8],[41.5,31.3],[51.6,32.8],[51.6,16.4]]],["N",[[50.7,1],[49.7,26.7],[70.6,44.1],[72.6,-9.4]]],["AL",[[40,1],[40,17],[50,17],[50,1]]]].forEach((function(e){var n=Object(o.a)(e,2),r=n[0],l=n[1],d=c.a.polygon(l,{fillColor:"#ffffff",weight:2,opacity:1,color:"white",dashArray:"3",fillOpacity:.7});d.addTo(t.map),d._leaflet_id=r,d.on({mouseover:t.highlightFeature,mouseout:t.resetHighlight,click:t.onMapClicked})})),t.info=c.a.control(),t.info.onAdd=t.infoDiv,t.info.update=t.updateInfo,t.info.addTo(t.map);case 13:case"end":return e.stop()}}),e)})))()},methods:{onMapClicked:function(t){this.domain=t.target._leaflet_id,this.zoomToFeature(t),this.$emit("input",this.domain)},highlightFeature:function(t){var e=t.target;e.setStyle({weight:5,color:"#666",dashArray:"",fillOpacity:.7}),c.a.Browser.ie||c.a.Browser.opera||c.a.Browser.edge||e.bringToFront(),this.info.update(e._leaflet_id)},resetHighlight:function(t){t.target.setStyle({fillColor:"#ffffff",weight:2,opacity:1,color:"white",dashArray:"3",fillOpacity:.7}),this.info.update()},zoomToFeature:function(t){this.map.fitBounds(t.target.getBounds())},infoDiv:function(map){return this._div=c.a.DomUtil.create("div","info bg-white bg-opacity-75 text-base p-2 rounded-md"),this._div},updateInfo:function(t){this._div.innerHTML="<h4>CPM model&data availability</h4>"+(this.regions.regions[t]?this.regions.regions[t].model:"Hover over a region")}}}),f=n(23),component=Object(f.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"border-4",staticStyle:{height:"600px",width:"500px"},attrs:{id:"mapid"}})}),[],!1,null,null,null);e.default=component.exports}}]);