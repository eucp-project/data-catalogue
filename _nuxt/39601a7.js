(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(t,e,r){"use strict";var n=r(23),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-screen w-screen p-4"},[r("div",{staticClass:"flex gap-10 m-2 items-center"},[r("NuxtLink",{attrs:{to:"/"}},[r("img",{attrs:{src:"eucp_logo.png",alt:"EUCP Logo"}})]),t._v(" "),r("div",{staticClass:"flex-l"},[r("h1",{staticClass:"text-4xl"},[t._v("\n        Data Catalogue\n      ")]),t._v(" "),r("Breadcrumbs",{staticClass:"mt-2"})],1),t._v(" "),r("Navigation")],1),t._v(" "),r("Nuxt",{staticClass:"pt-4"})],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Breadcrumbs:r(254).default,Navigation:r(255).default})},193:function(t,e,r){r(194),t.exports=r(195)},221:function(t,e,r){"use strict";r.r(e);r(22),r(53);e.default=function(t){var path=t.route.hash.replace("#!","");path.length&&t.redirect(path)}},254:function(t,e,r){"use strict";r.r(e);r(170),r(22),r(132),r(12),r(24),r(80),r(43);var n={computed:{crumbs:function(){var t={},path=this.$route.path.split("/").splice(1);return path.forEach((function(element,e){t[element]="/"+path.slice(0,e+1).join("/")})),t}}},l=r(23),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"prose"},[r("li",{staticClass:"inline-block"},[r("nuxt-link",{attrs:{to:"/"}},[r("fa",{attrs:{icon:"house"}})],1)],1),t._v(" "),t._l(t.crumbs,(function(link,e,n){return r("li",{key:n,staticClass:"inline-block"},[t._v("\n      "),r("fa",{attrs:{icon:"angle-right"}}),t._v("  \n    "),r("nuxt-link",{attrs:{to:link}},[t._v("\n      "+t._s(e)+"\n    ")])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports},255:function(t,e,r){"use strict";r.r(e);r(39),r(31),r(38),r(12),r(59),r(24),r(60);var n=r(20);r(37);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var o={data:function(){return{pages:[{title:"CPM",url:"/cpm",children:[{title:"Explore",url:"/cpm/explore"},{title:"Past performance",url:"/cpm/performance"},{title:"Analyse",url:"/cpm/analyse"},{title:"Download",url:"/cpm/download"},{title:"More info",url:"/cpm/references"}]},{title:"Decadal",url:"/decadal",children:[{title:"Forecasts",url:"/decadal/forecasts"},{title:"Hindcasts",url:"/decadal/hindcasts"},{title:"Experiments",url:"/decadal/experiments"}]},{title:"Topical",url:"/topical"}]}},mounted:function(){this.pages=this.pages.map((function(t){return c(c({},t),{},{hover:!1})}))}},f=r(23),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex ml-auto gap-2 m-2 mr-20 space-x-1 text-l"},t._l(t.pages,(function(e,i){return r("div",{key:i,staticClass:"space-y-0.5",on:{mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[r("NuxtLink",{attrs:{to:e.url}},[r("button",{staticClass:"w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded"},[t._v("\n        "+t._s(e.title)+"\n      ")])]),t._v(" "),e.hover?r("div",{staticClass:"absolute flex flex-col space-y-0.5"},t._l(e.children,(function(e){return r("div",{key:e},[r("NuxtLink",{attrs:{to:e.url}},[r("button",{staticClass:"w-32 bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded"},[t._v("\n            "+t._s(e.title)+"\n          ")])])],1)})),0):t._e()],1)})),0)}),[],!1,null,null,null);e.default=component.exports}},[[193,23,5,24]]]);