(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{195:function(t,e,o){var content=o(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("1da8fc0f",content,!0,{sourceMap:!1})},196:function(t,e,o){"use strict";o(195)},197:function(t,e,o){(e=o(75)(!1)).push([t.i,".pic-showcase{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.pic-showcase-unit-2,.pic-showcase-unit-3{position:relative;margin:20px;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-unit-2{width:45%}.pic-showcase-unit-3{width:29%}.pic-showcase-unit-4{position:relative;margin:20px 10px 0;width:22%;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-bg{width:100%;background:no-repeat top;background-size:cover;border:2px solid #fff;border-radius:6px}.rectangle-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.pic-showcase-unit-tag{position:absolute;left:5px;bottom:5px;padding:2px 8px;font-size:12px;background:#e1e1e1;border:1px solid hsla(0,0%,50.2%,.3);border-radius:16px}.pic-showcase-text-left{left:0;bottom:0;width:100%;height:100%;display:table-cell;vertical-align:middle;color:#fff;background:rgba(0,0,0,.7);transform:translateX(-100%);transition:transform .5s;justify-content:center;display:flex}.pic-showcase-text-left div{position:absolute;top:50%;left:50%;width:90%;transform:translate(-50%,-50%)}.pic-showcase-text-bottom{position:absolute;left:0;bottom:0;width:100%;color:#fff;background:rgba(0,0,0,.7);transform:translateY(100%);transition:transform .5s}.pic-showcase-text-below{left:0;bottom:0;width:100%;height:50%}.pic-showcase-unit-2 .pic-showcase-text-bottom{height:50%;display:table}.pic-showcase-unit-2 .pic-showcase-text-bottom div{padding:20px;display:table-cell;vertical-align:middle}.pic-showcase-unit-2:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-2:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-title{margin:0 5px;padding:16px 0;text-align:center}.pic-showcase-title span.title{font-weight:700}.h-auto .pic-showcase-title{padding:8px 0 10px}.h-auto .pic-showcase-title span.title{max-height:108px;display:block;overflow:hidden}.pic-showcase-unit-4.h-auto .pic-showcase-title span.title{font-size:16px;font-weight:400;line-height:18px;max-height:92px}.h-200{height:200px}.h-300{height:300px}.h-400{height:400px}.h-500{height:500px}.h-full{height:100%}.h-half{height:50%}.h-auto{height:auto}.pos-relative{position:relative}.pos-absolute{position:absolute}@media (max-width:1024px){.pic-showcase-unit-2{margin:0 10px 20px}.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-text-left{transform:translateX(0);position:relative}}@media (max-width:768px){.h-300,.pic-showcase-unit-2,.pic-showcase-unit-4{height:200px}.pic-showcase-unit-2{width:44%}.pic-showcase-unit-3{margin:0 10px 10px;width:45%}.h-auto{height:auto}.h-auto .h-200{height:140px}.pic-showcase-unit-4{width:22%}}@media (max-width:539px){.pic-showcase-unit-2{margin:0 5px 10px;width:100%}.pic-showcase-unit-3{margin:0 5px 10px;width:47%}.pic-showcase-unit-4{margin-left:5px;margin-right:5px;width:46%}.mobile-hidden{display:none}}@media (max-width:425px){.pic-showcase-unit-3{width:48%}}",""]),t.exports=e},198:function(t,e,o){"use strict";var r={name:"Pic-Showcase",data:function(){for(var t=this.pic_showcase_pics,e=[],i=0;i<t.length;i++){var o="";o="below"==this.txt_pos?"pic-showcase-unit-"+this.column+" h-auto":"pic-showcase-unit-"+this.column+" h-300","enabled"!=this.isNeedFeat||t[i].feat||(o+=" mobile-hidden"),e.push(o)}return{picClass:e}},props:{pic_showcase_pics:{type:Array,required:!0},column:{type:String,required:!0},txt_pos:{type:String,required:!0},isNeedFeat:{type:String}}},c=(o(196),o(4)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pic-showcase"},t._l(t.pic_showcase_pics,(function(e,r){return o("div",{key:"showcasepic"+r,class:t.picClass[r]},[o("div",{staticClass:"pic-showcase-bg",class:{"h-full pos-absolute":"below"!=t.txt_pos,"h-200 pos-relative rectangle-bottom":"below"==t.txt_pos&&(4==t.column||3==t.column),"h-300 pos-relative rectangle-bottom":"below"==t.txt_pos&&2==t.column},style:{backgroundImage:"url("+e.src+")"}},[e.tag?o("div",{staticClass:"pic-showcase-unit-tag"},[t._v(t._s(e.tag))]):t._e()]),t._v(" "),o("div",{class:"pic-showcase-text-"+t.txt_pos},[e.link?o("div",{staticClass:"pic-showcase-title"},[o("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[o("span",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()]):t._e(),t._v(" "),e.link?t._e():o("div",{staticClass:"pic-showcase-title"},[o("strong",[t._v(t._s(e.title))]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()])])])})),0)}),[],!1,null,null,null);e.a=component.exports},203:function(t,e,o){var content=o(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("38f23b6b",content,!0,{sourceMap:!1})},212:function(t,e,o){"use strict";o(203)},213:function(t,e,o){(e=o(75)(!1)).push([t.i,".center{text-align:center}.cover-pic{width:80%}@media (max-width:768px){.cover-pic{width:100%}}",""]),t.exports=e},247:function(t,e,o){"use strict";o.r(e);o(38);var r=o(2),c={layout:"page",components:{PicShowcase:o(198).a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("portfolio").fetch();case 2:return o=e.sent,e.abrupt("return",{cover_proj:o.cover_proj,portfolio1_zh:o.portfolio1.Chi,portfolio1_en:o.portfolio1.Eng,portfolio2_zh:o.portfolio2.Chi,portfolio2_en:o.portfolio2.Eng,ui_zh:o.ui_zh,ui_en:o.ui_en});case 4:case"end":return e.stop()}}),e)})))()},computed:{ui_str:function(){return"Chi"==this.$store.state.lang.val?this.ui_zh:this.ui_en},portfolio1:function(){return"Chi"==this.$store.state.lang.val?this.portfolio1_zh:this.portfolio1_en},portfolio2:function(){return"Chi"==this.$store.state.lang.val?this.portfolio2_zh:this.portfolio2_en}},head:function(){return{title:"Portfolio",meta:[{hid:"description",name:"description",content:this.portfolio_description}]}}},n=(o(212),o(4)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-wrap"},[o("section",{staticClass:"main-content-unit"},[o("h1",{staticClass:"center"},[t._v(t._s(t.ui_str.cover_proj))]),t._v(" "),o("p",{staticClass:"center"},[o("img",{staticClass:"cover-pic",attrs:{src:t.cover_proj.img_src}})]),t._v(" "),o("p",{staticClass:"center"},[o("a",{attrs:{target:"_blank",href:t.cover_proj.link}},[t._v("\n      "+t._s(t.ui_str.cover_pic_title))])])]),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h1",{staticClass:"center"},[t._v(t._s(t.ui_str.feat_proj))]),t._v(" "),o("PicShowcase",{attrs:{id:"portfolio-showcase-1",pic_showcase_pics:t.portfolio1,column:"2",txt_pos:"below"}})],1),t._v(" "),o("section",{staticClass:"main-content-unit"},[o("h1",{staticClass:"center"},[t._v(t._s(t.ui_str.other_proj))]),t._v(" "),o("PicShowcase",{attrs:{id:"portfolio-showcase-2",pic_showcase_pics:t.portfolio2,column:"2",txt_pos:"bottom"}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);