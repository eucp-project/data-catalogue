(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{306:function(t,e,n){"use strict";n.r(e);var o={props:{dataset:{type:Object,default:null,required:!1}},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){"Escape"===e.key&&t.$emit("close-modal")}))}},l=n(33),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed top-0 right-0 bottom-0 left-0 flex justify-center bg-gray-900 bg-opacity-80",on:{click:function(e){return t.$emit("close-modal")}}},[n("div",{staticClass:"justify-center text-left overflow-auto m-10 p-10 rounded-xl mt-10 bg-white prose max-w-none",on:{click:function(t){t.stopPropagation()}}},[n("h2",[t._v(t._s(t.dataset.title))]),t._v(" "),n("ul",[n("li",[t._v("Contact: "+t._s(t.dataset.contact[0].name))]),t._v(" "),n("li",[t._v("License: "+t._s(t.dataset.license))]),t._v(" "),n("li",[t._v("Format: "+t._s(t.dataset.format))]),t._v(" "),n("li",{staticClass:"break-words"},[t._v("\n        Data access: "),n("a",{attrs:{href:t.dataset.doi,target:"blank"}},[t._v(t._s(t.dataset.doi))])])]),t._v(" "),n("h3",[t._v("Description")]),t._v(" "),n("nuxt-content",{staticClass:"break-words",attrs:{document:t.dataset}}),t._v(" "),n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",on:{click:function(e){return t.$emit("close-modal")}}},[t._v("\n      Close\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);