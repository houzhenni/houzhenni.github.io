(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(t,e,n){var content=n(178);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("4e76d1ad",content,!0,{sourceMap:!1})},177:function(t,e,n){"use strict";var o=n(169);n.n(o).a},178:function(t,e,n){(t.exports=n(67)(!1)).push([t.i,".blog-link[data-v-37f70eeb]{text-decoration:none;font-weight:700}.blog-link[data-v-37f70eeb]:hover{color:grey}",""])},198:function(t,e,n){"use strict";n.r(e);var o=n(69),l=n.n(o),r={asyncData:function(t){return l.a.get("http://127.0.0.1:4000").then(function(e){return{blogs:e.data.blogs,baseURL:t.app.router.options.base}})},head:function(){return{title:"Blogs",meta:[{hid:"description",name:"description",content:"Blog list of mine"}]}}},c=(n(177),n(9)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._l(t.blogs,function(e,o){return n("p",{key:o},[n("a",{staticClass:"blog-link",attrs:{href:t.baseURL+"blogs/"+e.slug}},[n("span",{staticClass:"blog-title"},[t._v(t._s(e.title))])]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"blog-date"},[t._v(t._s(e.slug.substring(0,10))+" ")]),t._v(" "),t._l(e.tags,function(o,i){return e.tags?n("span",{key:i,staticClass:"blog-tag"},[n("a",{attrs:{href:t.baseURL+"blogs/tag/"+o}},[t._v(t._s(o))])]):t._e()})],2)})],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[this._v("Blog list "),e("span",{staticClass:"blog-tag"},[e("a",{attrs:{href:"/blogs/tag"}},[this._v("all tags")])])])}],!1,null,"37f70eeb",null);e.default=component.exports}}]);