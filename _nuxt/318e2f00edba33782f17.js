(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{165:function(t,e,n){var content=n(173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("1bd5369a",content,!0,{sourceMap:!1})},172:function(t,e,n){"use strict";var r=n(165);n.n(r).a},173:function(t,e,n){(t.exports=n(63)(!1)).push([t.i,".blog-gallery{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.blog-gallery-unit{margin:20px 10px 0;width:46%;border:1px solid silver;border-radius:5px}.blog-gallery-unit:hover{border-color:#000}.blog-gallery-inner{padding:21px 10px 10px;height:100%}.blog-gallery-inner h4{margin-top:0;max-height:42px;overflow:hidden}.blog-gallery-desc{line-height:21px;max-height:64px;display:block;overflow:hidden}.blog-gallery-tag{margin:1px;padding:0 8px;color:#fff;font-size:12px;font-family:Microsoft Yahei;line-height:20px;border-radius:999px;background:grey;display:inline-block}@media (max-width:425px){.blog-gallery-unit{width:100%}}",""])},174:function(t,e,n){var content=n(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("498b36b5",content,!0,{sourceMap:!1})},176:function(t,e,n){"use strict";var r={name:"Blog-Gallery",data:function(){return{blogs:this.blogList,base:this.baseURL}},props:{blogList:{type:Array,required:!0},baseURL:{type:String,required:!0}}},o=(n(172),n(5)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-gallery"},t._l(t.blogList,function(e,r){return n("div",{key:r,staticClass:"blog-gallery-unit"},[n("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+e.slug,title:e.description}},[n("div",{staticClass:"blog-gallery-inner"},[n("h4",[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"blog-date align-left"},[n("span",{staticClass:"fa fa-calendar"},[t._v("\n               "+t._s(e.date)+"\n            ")])]),t._v(" "),n("p",{staticClass:"align-left"},[n("span",{staticClass:"blog-gallery-desc"},[t._v(t._s(e.description))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"align-left"},t._l(e.tags,function(e,r){return n("span",{key:"tag"+r,staticClass:"blog-gallery-tag"},[t._v("\n                "+t._s(e)+"\n              ")])}),0)])])])])}),0)},[],!1,null,null,null);e.a=component.exports},189:function(t,e,n){"use strict";var r=n(174);n.n(r).a},190:function(t,e,n){(t.exports=n(63)(!1)).push([t.i,'.markdown-body{margin-bottom:50px}a[id]{position:relative;top:-40px;display:block}a#comment-link{top:0}.blog-desc{margin:10px;padding:10px;color:#666;background-color:rgba(0,0,0,.025)}.youtube-img{position:relative;display:inline-block}.youtube-img:before{width:40%;height:40%;border-radius:25%;background:rgba(0,0,0,.7);transition:background .2s}.youtube-img:after,.youtube-img:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;margin:auto}.youtube-img:after{width:0;height:0;border-top:10px solid transparent;border-left:20px solid #fff;border-bottom:10px solid transparent}.youtube-img:hover:before{background:red}#disqus_thread{margin-top:20px}.prev-next{margin:20px auto;display:block}.prev-next:after{display:table;content:" ";clear:both}.prev-next a{display:inline}.next,.prev{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:20px auto;width:100%;color:grey;border:1px solid grey;cursor:pointer}.prev{width:48%;text-align:left;float:left}.next{width:48%;text-align:right;float:right}.next:hover,.prev:hover{color:#000;border-color:#000}.prev p{padding-left:16px}.next p,.prev p{margin:0;padding-top:16px;padding-bottom:16px}.next p{padding-right:16px}#comment{margin-top:40px}',""])},196:function(t,e,n){"use strict";n.r(e);n(98),n(99),n(32),n(19),n(66);var r=n(65),o=n.n(r),l={components:{BlogGallery:n(176).a},asyncData:function(t){return o.a.get("http://127.0.0.1:4000?slug="+t.params.slug).then(function(e){var n=e.data,r=n.related_blog;r||(r=[]);for(var l=[],i=0;i<r.length;i++){var c=o.a.get("http://127.0.0.1:4000?slug="+r[i]).then(function(t){return delete t.data.content,t.data.date=t.data.slug.substring(0,10),t.data});l.push(c)}return l.length?Promise.all(l).then(function(e){return{blog:n,tags:n.tags||["none"],date:t.params.slug.substring(0,10),relatedBlog:e,baseURL:t.app.router.options.base}}):{blog:n,tags:n.tags||["none"],date:t.params.slug.substring(0,10),relatedBlog:[],baseURL:t.app.router.options.base}})},mounted:function(){var t=this;t.$nextTick(function(){var e=window,n=document;var r=n.createElement("script");r.src="/js/zoompic.js",n.querySelector("body").appendChild(r),t.blog.comments&&(!function(){if(!e.iDisqus){var s=n.createElement("script");s.src="https://disqus-api-hzn.000webhostapp.com/disqus/dist/iDisqus.min.js",n.querySelector("body").appendChild(s)}}(),function t(){e.iDisqus?n.getElementById("comment")&&new iDisqus("comment",{forum:"houzhenni-com",api:"https://disqus-api-hzn.000webhostapp.com/disqus/api",site:"https://www.houzhenni.com",mode:2,timeout:3e3,init:!0,autoCreate:!1}):setTimeout(t,200)}());for(var o=n.querySelectorAll("a[href]"),l=function(i){-1!==o[i].href.indexOf("#")&&(o[i].onclick=function(t){(t||event).preventDefault();var e=o[i].href,r=e.indexOf("#"),l=e.substring(r+1,e.length);n.querySelector("a[id='"+String(l)+"']").scrollIntoView({behavior:"smooth"})})},i=0;i<o.length;i++)l(i)})},computed:{compiledMarkdown:function(){var html=this.blog.content,t=(html=html.replace(/href\=\"\#/g,'href="blogs/'+this.blog.slug+"#")).match(/href\=\"http.+<\/a>/g);if(t)for(var e=0;e<t.length;e++){var n=t[e];/<img/.test(n)||(n=t[e].replace("</a>",'&nbsp;<i class="fa fa-external-link"></i></a>')),html=html.replace(t[e],'target="_blank" '+n)}var r=html.match(/<img src=\"https:\/\/i\.ytimg\.com\/vi\/[^(<|>)]+default\.jpg\" alt=\"youtube-img\">/g);if(r)for(var i=0;i<r.length;i++)html=html.replace(r[i],'<span class="youtube-img">'+r[i]+"</span>");return html}},head:function(){var t=this.blog.tags.join(" ");return{title:this.blog.title,meta:[{hid:"description",name:"description",content:this.blog.description},{hid:"keyword",name:"keyword",content:t}],link:[{rel:"stylesheet",href:this.baseURL+"css/github-markdown.min.css"},{rel:"stylesheet",href:"/css/highlight.js.css"},{rel:"stylesheet",href:"https://disqus-api-hzn.000webhostapp.com/disqus/dist/iDisqus.min.css"}]}}},c=(n(189),n(5)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"main-content"},[n("h1",{staticClass:"align-center"},[t._v(t._s(t.blog.title))]),t._v(" "),n("p",{staticClass:"blog-date align-center"},[n("span",{staticClass:"fa fa-calendar"},[t._v(" "+t._s(t.date))])]),t._v(" "),n("p",{staticClass:"blog-tags align-center"},t._l(t.tags,function(e,r){return n("a",{key:r,attrs:{href:t.baseURL+"blogs/tag/"+e}},[n("span",{staticClass:"blog-tag"},[t._v(t._s(e))])])}),0),t._v(" "),n("div",{staticClass:"blog-desc",domProps:{innerHTML:t._s(t.blog.description)}}),t._v(" "),n("article",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.compiledMarkdown)}}),t._v(" "),n("div",{staticClass:"prev-next"},[t.blog.prev?n("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+t.blog.prev}},[t._m(0)]):t._e(),t._v(" "),t.blog.next?n("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+t.blog.next}},[t._m(1)]):t._e()]),t._v(" "),t.relatedBlog.length?n("div",[t._m(2),t._v(" "),n("BlogGallery",{attrs:{blogList:t.relatedBlog,baseURL:t.baseURL}})],1):t._e(),t._v(" "),t.blog.comments?n("div",{attrs:{id:"comment"}}):t._e()])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"prev"},[e("p",[this._v("上一篇")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"next"},[e("p",[this._v("下一篇")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticStyle:{"text-align":"center"}},[e("span",{staticStyle:{"border-bottom":"2px solid black"}},[this._v("相关文章")])])}],!1,null,null,null);e.default=component.exports}}]);