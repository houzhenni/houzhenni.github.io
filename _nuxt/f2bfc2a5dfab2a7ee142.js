(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{176:function(t,e,n){var content=n(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("f28bdea2",content,!0,{sourceMap:!1})},185:function(t,e,n){"use strict";var r=n(176);n.n(r).a},186:function(t,e,n){(e=n(77)(!1)).push([t.i,".blog-gallery{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.blog-gallery-unit{margin:40px 10px 0;width:46%;border:1px solid silver;border-radius:5px}.blog-gallery-unit:first-child,.blog-gallery-unit:nth-child(2){margin-top:20px}.blog-gallery-unit:nth-child(2n-1){margin-left:0}.blog-gallery-unit:nth-child(2n){margin-right:0}.blog-gallery-unit:hover{border-color:#000}.blog-gallery-inner{padding:21px 10px 10px;height:100%}.blog-gallery-inner h4{margin-top:0;max-height:42px;overflow:hidden}.blog-gallery-desc{line-height:21px;max-height:64px;display:block;overflow:hidden}.blog-gallery-tag{margin:1px;padding:0 8px;color:#fff;font-size:12px;font-family:Microsoft Yahei;line-height:20px;border-radius:999px;background:grey;display:inline-block}@media (max-width:425px){.blog-gallery-unit{margin:20px 0 0;width:100%}}",""]),t.exports=e},187:function(t,e,n){var content=n(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("53a11731",content,!0,{sourceMap:!1})},190:function(t,e,n){"use strict";var r={name:"Blog-Gallery",data:function(){return{blogs:this.blogList,base:this.baseURL}},props:{blogList:{type:Array,required:!0},baseURL:{type:String,required:!0}}},o=(n(185),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-gallery"},t._l(t.blogList,(function(e,r){return n("div",{key:r,staticClass:"blog-gallery-unit"},[n("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+e.slug,title:e.description}},[n("div",{staticClass:"blog-gallery-inner align-left"},[n("h4",[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"blog-date"},[n("span",{staticClass:"fa fa-calendar"},[t._v("\n               "+t._s(e.date)+"\n            ")])]),t._v(" "),n("p",{staticClass:"align-left"},[n("span",{staticClass:"blog-gallery-desc"},[t._v(t._s(e.description))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"align-left"},t._l(e.tags,(function(e,r){return n("span",{key:"tag"+r,staticClass:"blog-gallery-tag"},[t._v("\n                "+t._s(e)+"\n              ")])})),0)])])])])})),0)}),[],!1,null,null,null);e.a=component.exports},207:function(t,e,n){"use strict";var r=n(187);n.n(r).a},208:function(t,e,n){(e=n(77)(!1)).push([t.i,'.markdown-body{margin-bottom:50px}.markdown-body img{max-height:100px}a[id]{position:relative;top:-40px;display:block}a#comment-link{top:0}.blog-desc{margin:10px;padding:10px;color:#666;background-color:rgba(0,0,0,.025)}.youtube-img{position:relative;display:inline-block}.youtube-img:before{width:40%;height:40%;border-radius:25%;background:rgba(0,0,0,.7);transition:background .2s}.youtube-img:after,.youtube-img:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;margin:auto}.youtube-img:after{width:0;height:0;border-top:10px solid transparent;border-left:20px solid #fff;border-bottom:10px solid transparent}.youtube-img:hover:before{background:red}#disqus_thread{margin-top:20px}.prev-next{margin:20px auto;display:block}.prev-next:after{display:table;content:" ";clear:both}.prev-next a{display:inline}.next,.prev{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:20px auto;width:100%;color:grey;border:1px solid grey;cursor:pointer}.prev{width:48%;text-align:left;float:left}.next{width:48%;text-align:right;float:right}.next:hover,.prev:hover{color:#000;border-color:#000}.prev p{padding-left:16px}.next p,.prev p{margin:0;padding-top:16px;padding-bottom:16px}.next p{padding-right:16px}#comment{margin-top:40px}',""]),t.exports=e},219:function(t,e,n){"use strict";n.r(e);n(80),n(21),n(14),n(32);var r=n(79),o=n.n(r),l={layout:"page",components:{BlogGallery:n(190).a},asyncData:function(t){var e=t.isDev;return o.a.get("http://127.0.0.1:4000/blogs?slug="+t.params.slug+"&isdev="+e).then((function(e){var n=e.data,r=n.related_blog;r||(r=[]);for(var l=[],i=0;i<r.length;i++){var c=o.a.get("http://127.0.0.1:4000/blogs?slug="+r[i]).catch((function(t){return{}})).then((function(t){return t.data?(delete t.data.content,t.data.date=t.data.slug.substring(0,10),t.data):{}}));l.push(c)}return l.length?Promise.all(l).then((function(e){for(var r=[],o=0;o<e.length;o++)"{}"!=JSON.stringify(e[o])&&r.push(e[o]);return{blog:n,tags:n.tags||["none"],date:t.params.slug.substring(0,10),relatedBlog:r,baseURL:t.app.router.options.base,ui_str:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"}}})):{blog:n,tags:n.tags||["none"],date:t.params.slug.substring(0,10),relatedBlog:[],baseURL:t.app.router.options.base,ui_str:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"}}}))},mounted:function(){var t=this;t.$nextTick((function(){var e=window,n=document;function r(script){var s=n.createElement("script");s.src=script,n.querySelector("body").appendChild(s)}var o=navigator.language||navigator.userLanguage;"zh"!=(o=o.substr(0,2))&&(t.ui_str={to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"}),r("/js/zoompic.js"),r("/js/jquery.js"),function t(){e.jQuery?$("article a").each((function(){var t=$(this),link=$(t).attr("href");if(link&&"http"==link.substring(0,4)&&$(t).attr("target","_blank"),!$(t).children().length)link&&"http"==link.substring(0,4)&&$(t).append('<i class="fa fa-external-link"></i>');else if("youtube-img"==$(t).children("img").eq(0).attr("alt")){var e=$(t).children("img").eq(0).clone();$(t).html('<span class="youtube-img"></span>'),$(t).children().eq(0).append(e)}})):setTimeout(t,200)}(),t.blog.comments&&(e.iDisqus||r("https://hzn-website.000webhostapp.com/disqus/dist/iDisqus.min.js"),function t(){if(e.iDisqus){if(n.getElementById("comment"))new iDisqus("comment",{forum:"houzhenni-com",api:"https://hzn-website.000webhostapp.com/disqus/api",site:"https://www.houzhenni.com",mode:1,timeout:3e3,init:!0,autoCreate:!1})}else setTimeout(t,200)}());for(var l=n.querySelectorAll("a[href]"),c=function(i){-1!==l[i].href.indexOf("#")&&(l[i].onclick=function(t){(t||event).preventDefault();var e=l[i].href,r=e.indexOf("#"),o=e.substring(r+1,e.length);n.querySelector("a[id='"+String(o)+"']").scrollIntoView({behavior:"smooth"})})},i=0;i<l.length;i++)c(i)}))},computed:{compiledMarkdown:function(){var html=this.blog.content;return html=html.replace(/href\=\"\#/g,'href="blogs/'+this.blog.slug+"#")}},head:function(){var t=this.blog.tags.join(", ");return{title:this.blog.title,meta:[{hid:"description",name:"description",content:this.blog.description},{hid:"keyword",name:"keyword",content:t}],link:[{rel:"stylesheet",href:this.baseURL+"css/github-markdown.min.css"},{rel:"stylesheet",href:"/css/hljs.dark.min.css"},{rel:"stylesheet",href:"https://hzn-website.000webhostapp.com/disqus/dist/iDisqus.min.css"}]}}},c=(n(207),n(4)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"main-content"},[n("h1",{staticClass:"align-center"},[t._v(t._s(t.blog.title))]),t._v(" "),n("p",{staticClass:"blog-date align-center"},[n("span",{staticClass:"fa fa-calendar"},[t._v(" "+t._s(t.date))])]),t._v(" "),n("p",{staticClass:"blog-tags align-center"},t._l(t.tags,(function(e,r){return n("a",{key:r,attrs:{href:t.baseURL+"blogs/tag/"+e}},[n("span",{staticClass:"blog-tag"},[t._v(t._s(e))])])})),0),t._v(" "),n("div",{staticClass:"blog-desc",domProps:{innerHTML:t._s(t.blog.description)}}),t._v(" "),n("article",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.compiledMarkdown)}}),t._v(" "),n("div",{staticClass:"prev-next"},[t.blog.prev?n("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+t.blog.prev}},[n("div",{staticClass:"prev"},[n("p",[t._v(t._s(t.ui_str.to_prev))])])]):t._e(),t._v(" "),t.blog.next?n("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blogs/"+t.blog.next}},[n("div",{staticClass:"next"},[n("p",[t._v(t._s(t.ui_str.to_next))])])]):t._e()]),t._v(" "),t.relatedBlog.length?n("div",[n("h3",{staticStyle:{"text-align":"center"}},[n("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v(t._s(t.ui_str.related_posts))])]),t._v(" "),n("BlogGallery",{attrs:{blogList:t.relatedBlog,baseURL:t.baseURL}})],1):t._e(),t._v(" "),t.blog.comments?n("div",{attrs:{id:"comment"}}):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);