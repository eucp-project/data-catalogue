(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{293:function(t,e,c){"use strict";c.r(e);var n={props:{dataset:{type:Object,default:null,required:!1}},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){"Escape"===e.key&&t.$emit("close-modal")}))},methods:{urlGitHub:function(path,t){return"https://github.com/eucp-project/data-catalogue/edit/main/content"+path+t}}},o=c(23),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"fixed top-0 right-0 bottom-0 left-0 flex justify-center bg-gray-900 bg-opacity-80",on:{click:function(e){return t.$emit("close-modal")}}},[c("div",{staticClass:"justify-center text-left overflow-auto m-10 p-10 rounded-xl mt-10 bg-white prose max-w-none",on:{click:function(t){t.stopPropagation()}}},[c("button",{staticClass:"h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-full float-right",on:{click:function(e){return t.$emit("close-modal")}}},[t._v("\n      Close\n    ")]),t._v(" "),c("h2",[t._v(t._s(t.dataset.title))]),t._v(" "),c("ul",[c("li",[t._v("Contact: "+t._s(t.dataset.contact[0].name))]),t._v(" "),c("li",[t._v("License: "+t._s(t.dataset.license))]),t._v(" "),c("li",[t._v("Format: "+t._s(t.dataset.format))]),t._v(" "),c("li",{staticClass:"break-words"},[t._v("\n        Data access: "),c("a",{attrs:{href:t.dataset.doi,target:"blank"}},[t._v(t._s(t.dataset.doi))])])]),t._v(" "),c("h3",[t._v("Description")]),t._v(" "),c("nuxt-content",{staticClass:"break-words",attrs:{document:t.dataset}}),t._v(" "),c("span",{staticClass:"float-right"},[c("a",{attrs:{href:t.urlGitHub(t.dataset.path,t.dataset.extension),target:"_blank"}},[c("svg",{staticClass:"h-5 prose",attrs:{viewBox:"0 0 134 16"}},[c("path",{attrs:{fill:"#828282",d:"M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"}}),t._v(" "),c("text",{attrs:{x:"26",y:"14"}},[t._v("Edit on GitHub")])])])])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);