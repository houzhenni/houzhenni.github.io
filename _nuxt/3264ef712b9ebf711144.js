(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{162:function(e,t,n){var content=n(170);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(96).default)("1bd5369a",content,!0,{sourceMap:!1})},169:function(e,t,n){"use strict";var r=n(162);n.n(r).a},170:function(e,t,n){(e.exports=n(95)(!1)).push([e.i,".blog-gallery{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.blog-gallery-unit{margin:20px 10px 0;width:46%;border:1px solid silver}.blog-gallery-unit:hover{border-color:#000}.blog-gallery-inner{padding:21px 10px 10px;height:100%}.blog-gallery-inner h4{margin-top:0}.blog-gallery-desc{line-height:21px;max-height:64px;display:block;overflow:hidden}.blog-gallery-tag{margin:1px;padding:0 8px;color:#fff;font-size:12px;font-family:Microsoft Yahei;line-height:20px;border-radius:999px;background:grey;display:inline-block}@media (max-width:425px){.read-more{width:140px}.blog-gallery-unit{width:100%}}",""])},172:function(e,t,n){var content=n(189);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(96).default)("36873827",content,!0,{sourceMap:!1})},173:function(e,t,n){"use strict";var r={name:"Blog-Gallery",data:function(){return{blogs:this.blogList,base:this.baseURL}},props:{blogList:{type:Array,required:!0},baseURL:{type:String,required:!0}}},l=(n(169),n(9)),component=Object(l.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blog-gallery"},e._l(e.blogList,function(t,r){return n("div",{key:r,staticClass:"blog-gallery-unit"},[n("a",{staticClass:"no-decor-link",attrs:{href:e.baseURL+"blogs/"+t.slug,title:t.description}},[n("div",{staticClass:"blog-gallery-inner"},[n("h4",[e._v(e._s(t.title))]),e._v(" "),n("p",{staticClass:"blog-date align-left"},[n("span",{staticClass:"fa fa-calendar"},[e._v("\n               "+e._s(t.date)+"\n            ")])]),e._v(" "),n("p",{staticClass:"align-left"},[n("span",{staticClass:"blog-gallery-desc"},[e._v(e._s(t.description))]),e._v(" "),n("br"),e._v(" "),n("span",{staticClass:"align-left"},e._l(t.tags,function(t,r){return n("span",{key:"tag"+r,staticClass:"blog-gallery-tag"},[e._v("\n                "+e._s(t)+"\n              ")])}),0)])])])])}),0)},[],!1,null,null,null);t.a=component.exports},188:function(e,t,n){"use strict";var r=n(172);n.n(r).a},189:function(e,t,n){(e.exports=n(95)(!1)).push([e.i,".index-wrap{width:100%;min-height:calc(100vh - 160px);text-align:center;display:flex;flex-direction:column;justify-content:center}#mypic img{box-shadow:3px 3px 10px 2px #164677,inset 0 0 19px 19px #164677;border-radius:50%}.read-more{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:20px auto;width:180px;text-align:center;color:grey;border:1px solid grey;cursor:pointer}.read-more:hover{color:#000;border-color:#000}.read-more p{margin:0;padding-top:16px;padding-bottom:16px}",""])},195:function(e,t,n){"use strict";n.r(t);n(32),n(19),n(63);var r=n(62),l=n.n(r),o={components:{BlogGallery:n(173).a},asyncData:function(e){for(var t=["2019-05-25-takarazuka-musical","2019-05-05-set-up-static-blog-using-nuxt","2018-03-28-set-up-static-blog","2017-05-28-hao123-issue"],n=[],i=0;i<t.length;i++){var r=l.a.get("http://127.0.0.1:4000?slug="+t[i]).then(function(e){return delete e.data.content,e.data.date=e.data.slug.substring(0,10),e.data});n.push(r)}return Promise.all(n).then(function(t){return{blogList:t,baseURL:e.app.router.options.base}})},head:function(){return{title:"Home",meta:[{hid:"description",name:"description",content:"This is Jenny Hou's personal website, come and get to know me here~"}]}}},c=(n(188),n(9)),component=Object(c.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-wrap"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("section",[e._m(2),e._v(" "),n("BlogGallery",{attrs:{blogList:e.blogList,baseURL:e.baseURL}})],1),e._v(" "),e._m(3)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{attrs:{id:"mypic"}},[t("img",{attrs:{src:"/img/mypic.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("p",[this._v("This is Jenny Hou's personal website, come and get to know me here~")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[t("span",{staticStyle:{"border-bottom":"2px solid black"}},[this._v("Featured blogs")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"read-more"},[t("a",{staticClass:"no-decor-link",attrs:{href:"/blogs"}},[t("p",[this._v("Read More")])])])}],!1,null,null,null);t.default=component.exports}}]);