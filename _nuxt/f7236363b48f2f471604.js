(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(t,n,e){var content=e(177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(52).default)("7dc5f74a",content,!0,{sourceMap:!1})},176:function(t,n,e){"use strict";var l=e(173);e.n(l).a},177:function(t,n,e){(t.exports=e(51)(!1)).push([t.i,".blog-link[data-v-59622864]{font-weight:700}",""])},187:function(t,n,e){"use strict";e.r(n);var l=e(71),o=e.n(l),r=e(70),c={asyncData:function(t){t.params;return o.a.get("http://127.0.0.1:4000").then(function(t){for(var data=t.data,n=[],i=0;i<data.blogs.length;i++)n[data.blogs.length-i-1]=data.blogs[i];return{blogs:n,baseURL:r.a.baseURL}})},head:function(){return{title:"Blogs | "+r.a.title,meta:[{hid:"description",name:"description",content:"Blog list of mine"}]}}},f=(e(176),e(9)),component=Object(f.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Blog list")]),t._v(" "),t._l(t.blogs,function(n,l){return e("p",{key:l,staticStyle:{"line-height":"26px"}},[e("span",{staticClass:"blog-date"},[t._v(t._s(n.slug.substring(0,10))+" ")]),t._v(" "),e("a",{staticClass:"blog-link",attrs:{href:t.baseURL+"blogs/"+n.slug}},[t._v("\n     "+t._s(n.title)+"\n    ")]),t._v(" "),e("br"),t._v(" "),n.tags?e("span",{staticClass:"blog-date"},[t._v("\n      Tags: \n      "),t._l(n.tags,function(n,i){return e("span",{key:i,staticClass:"blog-tag"},[e("a",{attrs:{href:t.baseURL+"blogs/tag/"+n}},[t._v(t._s(n))])])})],2):e("span",{staticClass:"blog-date"},[t._v("\n      Tags: \n      "),e("span",{staticClass:"blog-tag"},[e("a",{attrs:{href:t.baseURL+"blogs/tag/none"}},[t._v("none")])])])])})],2)},[],!1,null,"59622864",null);n.default=component.exports}}]);