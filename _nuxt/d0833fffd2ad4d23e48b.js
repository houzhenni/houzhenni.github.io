(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{179:function(t,e,n){var content=n(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("f28bdea2",content,!0,{sourceMap:!1})},180:function(t,e){t.exports=function(t){var e=document,n=e.createElement("style"),o=e.createElement("div");o.id="mask_layer",o.className="hidden",o.innerHTML='<div id="mask_child"></div>',n.innerHTML="\n.zoomable {\n\tcursor: zoom-in;\n}\n#mask_layer {\n\tposition: fixed;\n\ttop: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(0, 0, 0, .5);\n}\n#mask_child {\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbottom: 0px;\n\tmargin: auto;\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tcursor: zoom-out;\n}\n.hidden {\n\tdisplay: none;\n}\n.fade-in-anime {\n\tanimation: fade-in 0.5s;\n  \tz-index: 999;\n}\n.fade-out-anime {\n\tanimation: fade-out 0.5s;\n\tanimation-fill-mode: forwards;\n}\n@keyframes fade-in {\n  from {\n  \topacity: 0;\n  \tz-index: 999;\n  }\n  to {\n  \topacity: 1;\n  \tz-index: 999;\n  }\n}\n@keyframes fade-out {\n  0% {\n  \topacity: 1;\n  \tz-index: 999;\n  }\n  99% {\n  \topacity: 0;\n  \tz-index: 999;\n  }\n  100% {\n  \topacity: 0;\n  \tz-index: -1;\n  }\n}\n",e.querySelector("head").appendChild(n),e.querySelector("body").appendChild(o),e.querySelector("#mask_layer").onclick=function(){this.className="fade-out-anime"};for(var r=0;r<t.length;r++)l(t[r][0],t[r][1]);function l(t,n){for(var o=e.querySelectorAll(t),i=0;i<o.length;i++){var r=o[i].parentNode,l=r.parentNode;if("A"!=r.nodeName&&"A"!=l.nodeName){var d=""==o[i].className?"":o[i].className+" ";o[i].className=d+"zoomable",o[i].onclick=function(){e.querySelector("#mask_child").style.backgroundImage=n?"url("+this.src+")":this.style.backgroundImage,e.querySelector("#mask_layer").className="fade-in-anime"}}}}}},190:function(t,e,n){"use strict";var o=n(179);n.n(o).a},191:function(t,e,n){(e=n(79)(!1)).push([t.i,".blog-gallery{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.blog-gallery-unit{margin:40px 20px 0;width:46%;border:1px solid silver;border-radius:5px}.blog-gallery-unit:first-child,.blog-gallery-unit:nth-child(2){margin-top:20px}.blog-gallery-unit:nth-child(2n-1){margin-left:0}.blog-gallery-unit:nth-child(2n){margin-right:0}.blog-gallery-unit:hover{border-color:#000}.blog-gallery-inner{padding:21px 10px 10px;height:100%}.blog-gallery-inner h4{margin-top:0;max-height:42px;overflow:hidden}.blog-gallery-desc{line-height:21px;max-height:64px;display:block;overflow:hidden}.blog-gallery-tag{margin:1px;padding:0 8px;color:#fff;font-size:12px;font-family:Microsoft Yahei;line-height:20px;border-radius:999px;background:grey;display:inline-block}@media (max-width:425px){.blog-gallery-unit{margin:20px 0 0;width:100%}}",""]),t.exports=e},192:function(t,e,n){var content=n(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("72520070",content,!0,{sourceMap:!1})},195:function(t,e,n){"use strict";var o={name:"Blog-Gallery",props:{blogList:{type:Array,required:!0},baseURL:{type:String,required:!0}}},r=(n(190),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-gallery"},t._l(t.blogList,(function(e,o){return n("div",{key:o,staticClass:"blog-gallery-unit"},[n("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blog/"+e.slug,title:e.description}},[n("div",{staticClass:"blog-gallery-inner align-left"},[n("h4",[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"blog-date"},[n("span",{staticClass:"fa fa-calendar"},[t._v("\n               "+t._s(e.date)+"\n            ")])]),t._v(" "),n("p",{staticClass:"align-left"},[n("span",{staticClass:"blog-gallery-desc"},[t._v(t._s(e.description))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"align-left"},t._l(e.tags,(function(e,o){return n("span",{key:"tag"+o,staticClass:"blog-gallery-tag"},[t._v("\n                "+t._s(e)+"\n              ")])})),0)])])])])})),0)}),[],!1,null,null,null);e.a=component.exports},210:function(t,e,n){"use strict";var o=n(192);n.n(o).a},211:function(t,e,n){(e=n(79)(!1)).push([t.i,'#amzn-assoc-ad-51e0e5d0-fdd4-49b3-8945-e3e2f60d21e2{box-shadow:0 0 1px 1px silver}div.amzn-native-product-asin-container:hover{box-shadow:inset 0 0 1px 1px silver}.markdown-body{margin-bottom:50px}.markdown-body img{max-height:100px}a[id]{position:relative;top:-40px;display:block}a#comment-link{top:0}.blog-desc{margin:10px;padding:10px;color:#666;background-color:rgba(0,0,0,.025)}.youtube-img{position:relative;display:inline-block}.youtube-img:before{width:40%;height:40%;border-radius:25%;background:rgba(0,0,0,.7);transition:background .2s}.youtube-img:after,.youtube-img:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;margin:auto}.youtube-img:after{width:0;height:0;border-top:10px solid transparent;border-left:20px solid #fff;border-bottom:10px solid transparent}.youtube-img:hover:before{background:red}#disqus_thread{margin-top:20px}.prev-next{margin:20px auto;display:block}.prev-next:after{display:table;content:" ";clear:both}.prev-next a{display:inline}.next,.prev{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:20px auto;width:100%;color:grey;border:1px solid grey;cursor:pointer}.prev{width:48%;text-align:left;float:left}.next{width:48%;text-align:right;float:right}.next:hover,.prev:hover{color:#000;border-color:#000}.prev p{padding-left:16px}.next p,.prev p{margin:0;padding-top:16px;padding-bottom:16px}.next p{padding-right:16px}#comment{margin-top:40px}',""]),t.exports=e},216:function(t,e,n){"use strict";n.r(e);n(64),n(18),n(11),n(26);var o=n(81),r=n.n(o),l=n(195),d=n(180),c=n.n(d),h={layout:"blog",components:{BlogGallery:l.a},asyncData:function(t){var e=t.params.slug,n=t.isDev,o={isSlugUseDate:!0},l={relatedBlog:[],baseURL:t.app.router.options.base,ui_str_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_str_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"}};return r.a.get("http://127.0.0.1:4000/config").then((function(t){return o=t.data,r.a.get("http://127.0.0.1:4000/blog?slug="+e+"&isdev="+n)})).then((function(t){l.blog=t.data,l.tags=t.data.tags||["none"],l.date=t.data.date;for(var e=t.data.related_blog,n=[],i=0;i<e.length;i++)if(e[i]&&!o.isSlugUseDate){e[i]=e[i].substring(11,e[i].length);var d=r.a.get("http://127.0.0.1:4000/blog?slug="+e[i]).then((function(t){return t.data?(delete t.data.content,t.data):{}}));n.push(d)}return Promise.all(n)})).then((function(t){for(var i=0;i<t.length;i++)"{}"!=JSON.stringify(t[i])&&l.relatedBlog.push(t[i]);return l}))},mounted:function(){var t=this;c()([["article img",!0]]),t.$nextTick((function(){var e=window,n=document;function o(script){var s=n.createElement("script");s.src=script,n.querySelector("body").appendChild(s)}o("/js/jquery.js"),function t(){e.jQuery?$("article a").each((function(){var t=$(this),link=$(t).attr("href");if(link&&"http"==link.substring(0,4)&&$(t).attr("target","_blank"),!$(t).children().length)link&&"http"==link.substring(0,4)&&$(t).append('<i class="fa fa-external-link"></i>');else if("youtube-img"==$(t).children("img").eq(0).attr("alt")){var e=$(t).children("img").eq(0).clone();$(t).html('<span class="youtube-img"></span>'),$(t).children().eq(0).append(e)}})):setTimeout(t,200)}(),t.blog.comments&&(e.iDisqus||o("https://hzn-website.000webhostapp.com/disqus/dist/iDisqus.min.js"),function t(){if(e.iDisqus){if(n.getElementById("comment"))new iDisqus("comment",{forum:"houzhenni-com",api:"https://hzn-website.000webhostapp.com/disqus/api",site:"https://www.houzhenni.com",mode:1,timeout:3e3,init:!0,autoCreate:!1})}else setTimeout(t,200)}());for(var r=n.querySelectorAll("a[href]"),l=function(i){-1!==r[i].href.indexOf("#")&&(r[i].onclick=function(t){(t||event).preventDefault();var e=r[i].href,o=e.indexOf("#"),l=e.substring(o+1,e.length);n.querySelector("a[id='"+String(l)+"']").scrollIntoView({behavior:"smooth"})})},i=0;i<r.length;i++)l(i)}))},computed:{compiledMarkdown:function(){var html=this.blog.content;return html=html.replace(/href\=\"\#/g,'href="blog/'+this.blog.slug+"#")},ui_str:{get:function(){return"Chi"==this.$store.state.lang.val?this.ui_str_zh:this.ui_str_en},set:function(){return"Chi"==this.$store.state.lang.val?this.ui_str_zh:this.ui_str_en}}},head:function(){var t=this.blog.tags.join(", ");return{title:this.blog.title,meta:[{hid:"description",name:"description",content:this.blog.description},{hid:"keyword",name:"keyword",content:t}],link:[{rel:"stylesheet",href:this.baseURL+"css/github-markdown.min.css"},{rel:"stylesheet",href:"/css/hljs.dark.min.css"},{rel:"stylesheet",href:"https://hzn-website.000webhostapp.com/disqus/dist/iDisqus.min.css"}]}}},m=(n(210),n(3)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"main-content"},[n("h1",{staticClass:"align-center article-title"},[t._v(t._s(t.blog.title))]),t._v(" "),n("p",{staticClass:"blog-date align-center"},[n("span",{staticClass:"fa fa-calendar"},[t._v(" "+t._s(t.date))])]),t._v(" "),n("p",{staticClass:"blog-tags align-center"},t._l(t.tags,(function(e,o){return n("a",{key:o,attrs:{href:t.baseURL+"blog/tag/"+e}},[n("span",{staticClass:"blog-tag"},[t._v(t._s(e))])])})),0),t._v(" "),n("div",{staticClass:"blog-desc",domProps:{innerHTML:t._s(t.blog.description)}}),t._v(" "),n("article",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.compiledMarkdown)}}),t._v(" "),n("div",{attrs:{id:"amzn-assoc-ad-51e0e5d0-fdd4-49b3-8945-e3e2f60d21e2"}}),n("script",{attrs:{async:"",src:"//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=51e0e5d0-fdd4-49b3-8945-e3e2f60d21e2"}}),t._v(" "),n("div",{staticClass:"prev-next"},[t.blog.prev?n("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blog/"+t.blog.prev}},[n("div",{staticClass:"prev"},[n("p",[t._v(t._s(t.ui_str.to_prev))])])]):t._e(),t._v(" "),t.blog.next?n("a",{staticClass:"no-decor-link",attrs:{href:t.baseURL+"blog/"+t.blog.next}},[n("div",{staticClass:"next"},[n("p",[t._v(t._s(t.ui_str.to_next))])])]):t._e()]),t._v(" "),t.relatedBlog.length?n("div",[n("h3",{staticStyle:{"text-align":"center"}},[n("span",{staticStyle:{"border-bottom":"2px solid black"}},[t._v(t._s(t.ui_str.related_posts))])]),t._v(" "),n("BlogGallery",{attrs:{blogList:t.relatedBlog,baseURL:t.baseURL}})],1):t._e(),t._v(" "),t.blog.comments?n("div",{attrs:{id:"comment"}}):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);