(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(t,e,n){var content=n(191);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("db582384",content,!0,{sourceMap:!1})},124:function(t,e,n){var content=n(193);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("779bf73e",content,!0,{sourceMap:!1})},125:function(t,e,n){var content=n(195);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("c3b0b3e0",content,!0,{sourceMap:!1})},142:function(t,e,n){"use strict";var o=n(21),c=n(22),r={components:{Navigation:o.a,Footer:c.a}},l=n(3),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Navigation"),t._v(" "),n("main",[n("nuxt")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports},143:function(t,e,n){"use strict";n(44);var o=n(21),c=n(22),r={components:{Navigation:o.a,Footer:c.a},mounted:function(){var t=function(){(n.body.scrollTop||n.documentElement.scrollTop)>360?(nav.style="position: fixed",nav.className=nav.className.replace(/no-bg-no-shadow/g,"").replace(/  /g," "),c.style.position="fixed"):(nav.style="position: absolute",-1==nav.className.indexOf("no-bg-no-shadow")&&(nav.className+=" no-bg-no-shadow"),c.style.position="absolute")},e=function(){nav.style="position: fixed",nav.className=nav.className.replace(/no-bg-no-shadow/g,"").replace(/  /g," ")},n=document,o=n.body.clientWidth,nav=(n.body.scrollTop||n.documentElement.scrollTop,n.getElementsByTagName("nav")[0]),c=n.getElementsByClassName("nav-mask")[0];n.getElementById("my-info");o<425?e():t(),window.addEventListener("scroll",(function(){(o=n.body.clientWidth)>425?t():e()})),window.addEventListener("resize",(function(){(o=n.body.clientWidth)>425?t():e()}))}},l=(n(190),n(3)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Navigation"),t._v(" "),n("main",[n("nuxt")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports},144:function(t,e,n){"use strict";var o=n(21),c=n(22),r=n(50),l={components:{Navigation:o.a,Footer:c.a,Breadcrumbs:r.a}},d=n(3),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Navigation"),t._v(" "),n("main",[n("div",{staticClass:"below-nav"},[n("Breadcrumbs",{attrs:{isCurPathUpper:"1"}})],1),t._v(" "),n("nuxt")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports},145:function(t,e,n){"use strict";var o=n(21),c=n(22),r=n(50),l={components:{Navigation:o.a,Footer:c.a,Breadcrumbs:r.a}},d=n(3),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Navigation"),t._v(" "),n("main",[n("div",{staticClass:"below-nav"},[n("Breadcrumbs",{attrs:{isCurPathUpper:"0"}})],1),t._v(" "),n("nuxt")],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports},146:function(t,e,n){"use strict";var o=n(21),c=n(22),r=n(50),l={components:{Navigation:o.a,Footer:c.a,Breadcrumbs:r.a},data:function(){return{isProd:!0}},computed:{lang:function(){return"Chi"==this.$store.state.lang.val?"zh":"en"}},mounted:function(){var t=this,e="Chi"==t.$store.state.lang.val?"zh":"en";document.addEventListener("snipcart.ready",(function(){Snipcart.api.session.setLanguage(e),document.querySelector("#lang-switch").onclick=function(){e="Chi"==t.$store.state.lang.val?"zh":"en",Snipcart.api.session.setLanguage(e)}}))},head:function(){return{htmlAttrs:{lang:this.lang},link:[{rel:"preconnect",href:"https://app.snipcart.com"},{rel:"preconnect",href:"https://cdn.snipcart.com"},{rel:"stylesheet",href:"https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"}],script:[{src:"https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"}]}}},d=(n(194),n(3)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Navigation"),t._v(" "),n("main",[n("div",{staticClass:"below-nav"},[n("Breadcrumbs",{attrs:{isCurPathUpper:"0"}}),t._v(" "),t._m(0)],1),t._v(" "),n("nuxt"),t._v(" "),t.isProd?n("div",{attrs:{id:"snipcart","data-config-modal-style":"side","data-api-key":"NGFhNzBmNzYtMmQ0NS00MjgzLWFlM2UtYWVmOTc0MGM1ZmExNjM3NTExMjY2MTE5Mzg5MjYw",hidden:""}}):n("div",{attrs:{id:"snipcart","data-config-modal-style":"side","data-api-key":"YzJiMGY4MzAtN2I0ZS00Mjg5LTk3MmYtYWExZTRlNDhjZmMwNjM3NTExMjY2MTE5Mzg5MjYw",hidden:""}})],1),t._v(" "),n("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"snipcart-checkout my-cart"},[e("a",[e("i",{staticClass:"fa fa-shopping-cart"}),e("span",{staticClass:"snipcart-items-count"})])])}],!1,null,null,null);e.a=component.exports},149:function(t,e,n){t.exports=n(150)},188:function(t,e,n){var content=n(189);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("89dfa84c",content,!0,{sourceMap:!1})},189:function(t,e,n){var o=n(52)(!1);o.push([t.i,'code[class*=language-],pre[class*=language-]{color:#d4d4d4;font-size:13px;text-shadow:none;font-family:Menlo,Monaco,Consolas,"Andale Mono","Ubuntu Mono","Courier New",monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#75a7ca}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#75a7ca}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;background:#1e1e1e}:not(pre)>code[class*=language-]{padding:.1em .3em;border-radius:.3em;color:#db4c69;background:#f9f2f4}.namespace{opacity:.7}.token.doctype .token.doctype-tag{color:#569cd6}.token.doctype .token.name{color:#9cdcfe}.token.comment,.token.prolog{color:#6a9955}.language-html .language-css .token.punctuation,.language-html .language-javascript .token.punctuation,.token.punctuation{color:#d4d4d4}.token.boolean,.token.constant,.token.inserted,.token.number,.token.property,.token.symbol,.token.tag,.token.unit{color:#b5cea8}.token.attr-name,.token.builtin,.token.char,.token.deleted,.token.selector,.token.string{color:#ce9178}.language-css .token.string.url{text-decoration:underline}.token.entity,.token.operator{color:#d4d4d4}.token.operator.arrow{color:#569cd6}.token.atrule{color:#ce9178}.token.atrule .token.rule{color:#c586c0}.token.atrule .token.url{color:#9cdcfe}.token.atrule .token.url .token.function{color:#dcdcaa}.token.atrule .token.url .token.punctuation{color:#d4d4d4}.token.keyword{color:#569cd6}.token.keyword.control-flow,.token.keyword.module{color:#c586c0}.token.function,.token.function .token.maybe-class-name{color:#dcdcaa}.token.regex{color:#d16969}.token.important{color:#569cd6}.token.italic{font-style:italic}.token.constant{color:#9cdcfe}.token.class-name,.token.maybe-class-name{color:#4ec9b0}.token.console,.token.interpolation,.token.parameter{color:#9cdcfe}.token.boolean,.token.punctuation.interpolation-punctuation{color:#569cd6}.token.exports .token.maybe-class-name,.token.imports .token.maybe-class-name,.token.property,.token.variable{color:#9cdcfe}.token.escape,.token.selector{color:#d7ba7d}.token.tag{color:#569cd6}.token.cdata,.token.tag .token.punctuation{color:grey}.token.attr-name{color:#9cdcfe}.token.attr-value,.token.attr-value .token.punctuation{color:#ce9178}.token.attr-value .token.punctuation.attr-equals{color:#d4d4d4}.token.entity{color:#569cd6}.token.namespace{color:#4ec9b0}code[class*=language-javascript],code[class*=language-jsx],code[class*=language-tsx],code[class*=language-typescript],pre[class*=language-javascript],pre[class*=language-jsx],pre[class*=language-tsx],pre[class*=language-typescript]{color:#9cdcfe}code[class*=language-css],pre[class*=language-css]{color:#ce9178}code[class*=language-html],pre[class*=language-html]{color:#d4d4d4}.language-regex .token.anchor{color:#dcdcaa}.language-html .token.punctuation{color:grey}pre[data-line]{position:relative}pre[class*=language-]>code[class*=language-]{position:relative;z-index:1}.line-highlight{position:absolute;left:0;right:0;padding:inherit 0;margin-top:1em;background:#f7ebc6;box-shadow:inset 5px 0 0 #f7d87c;z-index:0;pointer-events:none;line-height:inherit;white-space:pre}',""]),t.exports=o},190:function(t,e,n){"use strict";n(123)},191:function(t,e,n){var o=n(52)(!1);o.push([t.i,".container{position:relative}.no-bg-no-shadow{background:none;box-shadow:none}",""]),t.exports=o},192:function(t,e,n){"use strict";n(124)},193:function(t,e,n){var o=n(52)(!1);o.push([t.i,".breadcrumbs{display:inline-block}",""]),t.exports=o},194:function(t,e,n){"use strict";n(125)},195:function(t,e,n){var o=n(52)(!1);o.push([t.i,".my-cart{margin-left:10px;font-size:24px;text-align:right;transform:translateY(-5px);flex:1}",""]),t.exports=o},196:function(t,e,n){"use strict";n.r(e);e.default={state:function(){return{val:"Eng",ui:"中文",title:"将UI文本切换成中文"}},mutations:{toggleLang:function(t){"Chi"==t.val?(t.val="Eng",t.ui="中文",t.title="将UI文本切换成中文"):(t.val="Chi",t.ui="English",t.title="Change UI texts to English")}}}},21:function(t,e,n){"use strict";var o=n(10),c=(n(16),n(9),n(121),n(29),n(25),n(2)),r={name:"Navigation",data:function(){return{siteName:"",isNavVisible:!1,path_status:{},nav_links_zh:[],nav_links_en:[],baseURL:"/"}},computed:{lang:function(){return this.$store.state.lang.ui},txt_toggleLang:function(){return this.$store.state.lang.title},nav_links:function(){return"Chi"==this.$store.state.lang.val?this.nav_links_zh:this.nav_links_en}},created:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,r,l,d,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,t.next=3,n.$content("ui-config").fetch();case 3:for(c=t.sent,n.siteName=c.navigation.siteName,n.nav_links_zh=c.navigation.nav_links_zh,n.nav_links_en=c.navigation.nav_links_en,c.navigation.nav_links_en.map((function(link){n.path_status[link.path]=!1})),n.path_status[n.$route.path]=!0,r=0,l=Object.entries(n.path_status);r<l.length;r++)d=Object(o.a)(l[r],2),v=d[0],d[1],-1!=n.$route.path.indexOf(v+"/")&&(n.path_status[v]=!0);case 10:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this,e=navigator.language||navigator.userLanguage;e=e.substr(0,2);var n=localStorage.getItem("lang");"zh"!=e?n?n!=t.$store.state.lang.val&&t.$store.commit("lang/toggleLang"):(t.$store.commit("lang/toggleLang"),localStorage.setItem("lang","Eng")):n&&n!=t.$store.state.lang.val&&(t.$store.commit("lang/toggleLang"),localStorage.setItem("lang",t.$store.state.lang.val))},methods:{handleClk:function(){var t=this;t.isNavVisible?t.isNavVisible=!1:t.isNavVisible=!0},toggleLang:function(){var t=this;t.$store.commit("lang/toggleLang",t.lang),localStorage.setItem("lang",t.$store.state.lang.val)},hide_nav:function(){this.isNavVisible=!1}}},l=n(3),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"nav-wrap"},[n("header",[n("a",{staticClass:"no-decor-link",attrs:{href:"/"}},[n("p",{staticClass:"nav-home",on:{click:t.hide_nav}},[t._v(t._s(t.siteName))])])]),t._v(" "),n("div",{staticClass:"nav-btn",on:{click:t.handleClk}},[n("div",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"bar"})]),t._v(" "),n("div",{staticClass:"nav-mask"}),t._v(" "),n("div",{staticClass:"body-mask",class:{"body-mask-visible":t.isNavVisible},on:{click:t.hide_nav}}),t._v(" "),n("ul",{staticClass:"nav-ul",class:{"nav-mobile":t.isNavVisible}},[n("span",{staticClass:"nav-link",staticStyle:{"padding-left":"10px"},attrs:{id:"lang-switch",title:t.txt_toggleLang},on:{click:t.toggleLang}},[t._v("\n      "+t._s(t.lang)+"\n    ")]),t._v(" "),t._l(t.nav_links,(function(link,e){return n("a",{key:e,staticClass:"nav-link",class:{"nuxt-link-active":t.path_status[link.path]},attrs:{href:link.path,target:link.target}},[n("li",{on:{click:t.hide_nav}},[t._v(t._s(link.title)),/http/.test(link.path)?n("span",[t._v(" ")]):t._e(),/http/.test(link.path)?n("i",{staticClass:"fa fa-external-link"}):t._e()])])}))],2)])])}),[],!1,null,null,null);e.a=component.exports},22:function(t,e,n){"use strict";var o={data:function(){return{isHidden:!0}},methods:{toTop:function(){document.querySelector(".container").scrollIntoView({behavior:"smooth"})}},mounted:function(){var t,e=this;(t=window).addEventListener("scroll",(function(){t.scrollY>199?e.isHidden=!1:e.isHidden=!0}))}},c=n(3),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._m(0),t._v(" "),n("div",{staticClass:"go-top",class:{"go-top-hidden":t.isHidden},on:{click:t.toTop}},[n("div",{staticClass:"arrow"}),t._v(" "),n("div",{staticClass:"stick"})])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Created with Nuxt.js "),n("br"),t._v("\n    \tDesigned by  \n    \t"),n("a",{staticClass:"no-decor-link",attrs:{href:"https://github.com/c53hzn",target:"_blank"}},[n("strong",[t._v("Jenny HOU")]),t._v(" "),n("i",{staticClass:"fa fa-github font-20"})])])}],!1,null,null,null);e.a=component.exports},33:function(t,e,n){"use strict";var o=n(3),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-content"},[n("p",[t._v("404 not found.")]),t._v(" "),n("p",[t._v("Go back to "),n("a",{staticClass:"err-home",attrs:{href:"/"}},[t._v("Home")])])])}],!1,null,null,null);e.a=component.exports},50:function(t,e,n){"use strict";n(63),n(25);var o=n(2),c=(n(28),{name:"breadcrumbs",data:function(){return{paths_en:[],paths_zh:[]}},props:{isCurPathUpper:{type:String,required:!0}},computed:{curPath:function(){var t=this,path=t.paths[t.paths.length-1];return 1==t.isCurPathUpper?path.text.charAt(0).toUpperCase()+path.text.slice(1):path.text},paths:function(){return"Chi"==this.$store.state.lang.val?this.paths_zh:this.paths_en}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,r,l,d,i,v,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,n.$content("ui-config").fetch();case 3:for(o=e.sent,c=o.breadcrumbs.ui_en,r=o.breadcrumbs.ui_zh,l=t.$route.path.split("/"),d="",i=0;i<l.length;i++)0==i?d="/":1==i?d="/"+l[i]:d+="/"+l[i],v={href:d,text:c[d]?c[d]:decodeURI(l[i])},h={href:d,text:c[d]?r[d]:decodeURI(l[i])},n.paths_en.push(v),n.paths_zh.push(h);case 9:case"end":return e.stop()}}),e)})))()}}),r=(n(192),n(3)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumbs"},t._l(t.paths,(function(path,e){return n("span",{key:e},[e<t.paths.length-1?n("a",{attrs:{href:path.href}},[t._v(" \n        "+t._s(path.text)+" \n      ")]):n("span",[t._v(" \n        "+t._s(t.curPath)+" \n      ")]),t._v(" "),e<t.paths.length-1?n("span",[t._v("/")]):t._e()])})),0)}),[],!1,null,null,null);e.a=component.exports}},[[149,15,1,16]]]);