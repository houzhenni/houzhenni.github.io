(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{176:function(t,e,n){var content=n(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("1bd5369a",content,!0,{sourceMap:!1})},177:function(t,e,n){var content=n(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("36873827",content,!0,{sourceMap:!1})},192:function(t,e,n){"use strict";var r=n(176);n.n(r).a},193:function(t,e,n){(t.exports=n(67)(!1)).push([t.i,".blog-gallery{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.blog-gallery-unit{margin:20px 10px 0;width:46%;border:1px solid silver}.blog-gallery-unit:hover{border-color:#000}.blog-gallery-inner{padding:21px 10px 10px;height:100%}.blog-gallery-inner h4{margin-top:0}.blog-desc{line-height:21px;max-height:64px;display:block;overflow:hidden}.blog-tag:hover{background:grey}@media (max-width:425px){.read-more{width:140px}.blog-gallery-unit{width:100%}}",""])},194:function(t,e,n){"use strict";var r=n(177);n.n(r).a},195:function(t,e,n){(t.exports=n(67)(!1)).push([t.i,".index-wrap{width:100%;min-height:calc(100vh - 160px);text-align:center;display:flex;flex-direction:column;justify-content:center}#mypic img{box-shadow:3px 3px 10px 2px #164677,inset 0 0 19px 19px #164677;border-radius:50%}.read-more{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:20px auto;width:180px;text-align:center;color:grey;border:1px solid grey;cursor:pointer}.read-more:hover{color:#000;border-color:#000}.read-more p{margin:0;padding-top:16px;padding-bottom:16px}",""])},197:function(t,e,n){"use strict";n.r(e);n(32),n(19),n(70);var r=n(69),l=n.n(r),o={name:"Blog-Gallery",data:function(){return{blogs:this.blogList,base:this.baseURL}},props:{blogList:{type:Array,required:!0},baseURL:{type:String,required:!0}}},c=(n(192),n(9)),d={components:{BlogGallery:Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-gallery"},t._l(t.blogList,function(e,r){return n("div",{key:r,staticClass:"blog-gallery-unit"},[n("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+e.slug,title:e.description}},[n("div",{staticClass:"blog-gallery-inner"},[n("h4",[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"blog-date align-left"},[n("span",{staticClass:"fa fa-calendar"},[t._v("\n               "+t._s(e.date)+"\n            ")])]),t._v(" "),n("p",{staticClass:"align-left"},[n("span",{staticClass:"blog-desc"},[t._v(t._s(e.description))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"align-left"},t._l(e.tags,function(e,r){return n("span",{key:"tag"+r,staticClass:"blog-tag"},[t._v("\n                "+t._s(e)+"\n              ")])}),0)])])])])}),0)},[],!1,null,null,null).exports},asyncData:function(t){for(var e=["2019-05-25-takarazuka-musical","2019-05-05-set-up-static-blog-using-nuxt","2018-03-28-set-up-static-blog","2017-05-28-hao123-issue"],n=[],i=0;i<e.length;i++){var r=l.a.get("http://127.0.0.1:4000?slug="+e[i]).then(function(t){return delete t.data.content,t.data.date=t.data.slug.substring(0,10),t.data});n.push(r)}return Promise.all(n).then(function(e){return{blogList:e,baseURL:t.app.router.options.base}})},head:function(){return{title:"Home",meta:[{hid:"description",name:"description",content:"This is Jenny Hou's personal website, come and get to know me here~"}]}}},h=(n(194),Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-wrap"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("section",[t._m(2),t._v(" "),n("BlogGallery",{attrs:{blogList:t.blogList,baseURL:t.baseURL}})],1),t._v(" "),t._m(3)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"mypic"}},[e("img",{attrs:{src:"/img/mypic.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("p",[this._v("This is Jenny Hou's personal website, come and get to know me here~")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",{staticStyle:{"border-bottom":"2px solid black"}},[this._v("Featured blogs")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"read-more"},[e("a",{staticClass:"no-decor-link",attrs:{href:"/blogs"}},[e("p",[this._v("Read More")])])])}],!1,null,null,null));e.default=h.exports}}]);