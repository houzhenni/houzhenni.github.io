(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{198:function(t,e,o){var content=o(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("1da8fc0f",content,!0,{sourceMap:!1})},200:function(t,e,o){"use strict";o(198)},201:function(t,e,o){(e=o(75)(!1)).push([t.i,".pic-showcase{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.pic-showcase-unit-2{margin:20px;width:46%}.pic-showcase-unit-2,.pic-showcase-unit-4{position:relative;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-unit-4{margin:20px 10px 0;width:22%}.pic-showcase-unit-2:nth-child(2n-1),.pic-showcase-unit-4:nth-child(4n-3){margin-left:0}.pic-showcase-unit-2:nth-child(2n),.pic-showcase-unit-4:nth-child(4n){margin-right:0}.pic-showcase-bg{width:100%;background:no-repeat top;background-size:cover;border:2px solid #fff;border-radius:6px}.rectangle-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.pic-showcase-unit-tag{position:absolute;left:5px;bottom:5px;padding:2px 8px;font-size:12px;background:#e1e1e1;border:1px solid hsla(0,0%,50.2%,.3);border-radius:16px}.pic-showcase-text-left{left:0;bottom:0;width:100%;height:100%;display:table-cell;vertical-align:middle;color:#fff;background:rgba(0,0,0,.7);transform:translateX(-100%);transition:transform .5s;justify-content:center;display:flex}.pic-showcase-text-left div{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.pic-showcase-text-bottom{position:absolute;left:0;bottom:0;width:100%;color:#fff;background:rgba(0,0,0,.7);transform:translateY(100%);transition:transform .5s}.pic-showcase-text-below{left:0;bottom:0;width:100%;height:50%}.pic-showcase-unit-2 .pic-showcase-text-bottom{height:50%;display:table}.pic-showcase-unit-2 .pic-showcase-text-bottom div{padding:20px;display:table-cell;vertical-align:middle}.pic-showcase-unit-2:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-2:hover>.pic-showcase-text-bottom,.pic-showcase-unit-4:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-title{margin:0 5px;padding:16px 0;text-align:center}.pic-showcase-title span.title{font-weight:700}.h-auto .pic-showcase-title{padding:8px 0 10px}.h-auto .pic-showcase-title span.title{max-height:108px;display:block;overflow:hidden}.pic-showcase-unit-4.h-auto .pic-showcase-title span.title{font-size:16px;font-weight:400;line-height:18px;max-height:92px}.h-200{height:200px}.h-300{height:300px}.h-400{height:400px}.h-500{height:500px}.h-full{height:100%}.h-half{height:50%}.h-auto{height:auto}.pos-relative{position:relative}.pos-absolute{position:absolute}@media (max-width:1024px){.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-text-left{transform:translateX(0);position:relative}}@media (max-width:768px){.h-300,.pic-showcase-unit-2,.pic-showcase-unit-4{height:200px}.h-auto{height:auto}.h-auto .h-200{height:140px}.pic-showcase-unit-4.h-auto{width:48%}}@media (max-width:539px){.pic-showcase-unit-2,.pic-showcase-unit-4{margin-left:0;margin-right:0;width:100%}.pic-showcase-unit-4.h-auto:nth-child(2n-1){margin-right:0}.pic-showcase-unit-4.h-auto:nth-child(2n){margin-left:10px}}",""]),t.exports=e},205:function(t,e,o){"use strict";var c={name:"Pic-Showcase",props:{pic_showcase_pics:{type:Array,required:!0},column:{type:String,required:!0},txt_pos:{type:String,required:!0}}},n=(o(200),o(4)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pic-showcase"},t._l(t.pic_showcase_pics,(function(e,c){return o("div",{key:"showcasepic"+c,class:"below"==t.txt_pos?"pic-showcase-unit-"+t.column+" h-auto":"pic-showcase-unit-"+t.column+" h-300"},[o("div",{staticClass:"pic-showcase-bg",class:"below"==t.txt_pos?4==t.column?"h-200 pos-relative rectangle-bottom":"h-300 pos-relative rectangle-bottom":"h-full pos-absolute",style:{backgroundImage:"url("+e.src+")"}},[e.tag?o("div",{staticClass:"pic-showcase-unit-tag"},[t._v(t._s(e.tag))]):t._e()]),t._v(" "),o("div",{class:"pic-showcase-text-"+t.txt_pos},[e.link?o("div",{staticClass:"pic-showcase-title"},[o("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[o("span",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()]):t._e(),t._v(" "),e.link?t._e():o("div",{staticClass:"pic-showcase-title"},[o("strong",[t._v(t._s(e.title))]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()])])])})),0)}),[],!1,null,null,null);e.a=component.exports},208:function(t,e,o){var content=o(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("38f23b6b",content,!0,{sourceMap:!1})},218:function(t,e,o){"use strict";o(208)},219:function(t,e,o){(e=o(75)(!1)).push([t.i,".center{text-align:center}.cover-pic{width:80%}@media (max-width:768px){.cover-pic{width:100%}}",""]),t.exports=e},248:function(t,e,o){"use strict";o.r(e);o(37);var c=o(2),n={layout:"page",components:{PicShowcase:o(205).a},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("products/list").fetch();case 2:return o=e.sent,e.next=5,t.$content("portfolio").fetch();case 5:return c=e.sent,e.abrupt("return",{etsy_item_list:o.etsy_item_list,portfolio:c});case 7:case"end":return e.stop()}}),e)})))()},computed:{ui_str:function(){return"Chi"==this.$store.state.lang.val?{cover_pic_title:"复刻Windows扫雷游戏",cover_proj:"置顶作品",feat_proj:"精选作品",other_proj:"其他作品",etsy_items_onsale:"我的Etsy在售产品"}:{cover_pic_title:"Replicated Windows Minesweeper Game",cover_proj:"Cover Project",feat_proj:"Featured Projects",other_proj:"Other Projects",etsy_items_onsale:"My Etsy listings on sale"}},portfolio1:function(){return"Chi"==this.$store.state.lang.val?this.portfolio.portfolio1.Chi:this.portfolio.portfolio1.Eng},portfolio2:function(){return"Chi"==this.$store.state.lang.val?this.portfolio.portfolio2.Chi:this.portfolio.portfolio2.Eng}},head:function(){return{title:"Portfolio",meta:[{hid:"description",name:"description",content:"Portfolio of Jenny HOU"}]}}},r=(o(218),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-wrap"},[o("section",{staticClass:"main-content-unit"},[o("h1",{staticClass:"center"},[t._v(t._s(t.ui_str.cover_proj))]),t._v(" "),t._m(0),t._v(" "),o("p",{staticClass:"center"},[o("a",{attrs:{target:"_blank",href:"https://www.houzhenni.com/myapp/minesweeper-vue.html"}},[t._v("\n\t\t    "+t._s(t.ui_str.cover_pic_title))])])]),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h1",{staticClass:"center"},[t._v(t._s(t.ui_str.etsy_items_onsale))]),t._v(" "),o("PicShowcase",{attrs:{pic_showcase_pics:t.etsy_item_list,column:"4",txt_pos:"below"}})],1),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h1",{staticClass:"center"},[t._v(t._s(t.ui_str.feat_proj))]),t._v(" "),o("PicShowcase",{attrs:{id:"portfolio-showcase-1",pic_showcase_pics:t.portfolio1,column:"2",txt_pos:"bottom"}})],1),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h1",{staticClass:"center"},[t._v(t._s(t.ui_str.other_proj))]),t._v(" "),o("PicShowcase",{attrs:{id:"portfolio-showcase-2",pic_showcase_pics:t.portfolio2,column:"2",txt_pos:"below"}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"center"},[e("img",{staticClass:"cover-pic",attrs:{src:"/img/portfolio/portfolio00.png"}})])}],!1,null,null,null);e.default=component.exports}}]);