(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{195:function(t,e,o){var content=o(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("1da8fc0f",content,!0,{sourceMap:!1})},196:function(t,e,o){"use strict";o(195)},197:function(t,e,o){(e=o(75)(!1)).push([t.i,".pic-showcase{margin:20px auto;display:flex;justify-content:center;flex-wrap:wrap;overflow:hidden}.pic-showcase-unit-2,.pic-showcase-unit-3{position:relative;margin:20px;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-unit-2{width:45%}.pic-showcase-unit-3{width:29%}.pic-showcase-unit-4{position:relative;margin:20px 10px 0;width:22%;border:1px solid silver;border-radius:5px;overflow:hidden}.pic-showcase-bg{width:100%;background:no-repeat top;background-size:cover;border:2px solid #fff;border-radius:6px}.rectangle-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.pic-showcase-unit-tag{position:absolute;left:5px;bottom:5px;padding:2px 8px;font-size:12px;background:#e1e1e1;border:1px solid hsla(0,0%,50.2%,.3);border-radius:16px}.pic-showcase-text-left{left:0;bottom:0;width:100%;height:100%;display:table-cell;vertical-align:middle;color:#fff;background:rgba(0,0,0,.7);transform:translateX(-100%);transition:transform .5s;justify-content:center;display:flex}.pic-showcase-text-left div{position:absolute;top:50%;left:50%;width:90%;transform:translate(-50%,-50%)}.pic-showcase-text-bottom{position:absolute;left:0;bottom:0;width:100%;color:#fff;background:rgba(0,0,0,.7);transform:translateY(100%);transition:transform .5s}.pic-showcase-text-below{left:0;bottom:0;width:100%;height:50%}.pic-showcase-unit-2 .pic-showcase-text-bottom{height:50%;display:table}.pic-showcase-unit-2 .pic-showcase-text-bottom div{padding:20px;display:table-cell;vertical-align:middle}.pic-showcase-unit-2:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-2:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-3:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-left{transform:translateX(0)}.pic-showcase-unit-4:hover>.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-title{margin:0 5px;padding:16px 0;text-align:center}.pic-showcase-title span.title{font-weight:700}.h-auto .pic-showcase-title{padding:8px 0 10px}.h-auto .pic-showcase-title span.title{max-height:108px;display:block;overflow:hidden}.pic-showcase-unit-4.h-auto .pic-showcase-title span.title{font-size:16px;font-weight:400;line-height:18px;max-height:92px}.h-200{height:200px}.h-300{height:300px}.h-400{height:400px}.h-500{height:500px}.h-full{height:100%}.h-half{height:50%}.h-auto{height:auto}.pos-relative{position:relative}.pos-absolute{position:absolute}@media (max-width:1024px){.pic-showcase-unit-2{margin:0 10px 20px}.pic-showcase-text-bottom{transform:translateY(0)}.pic-showcase-text-left{transform:translateX(0);position:relative}}@media (max-width:768px){.h-300,.pic-showcase-unit-2,.pic-showcase-unit-4{height:200px}.pic-showcase-unit-2{width:44%}.pic-showcase-unit-3{margin:0 10px 10px;width:45%}.h-auto{height:auto}.h-auto .h-200{height:140px}.pic-showcase-unit-4{width:22%}}@media (max-width:539px){.pic-showcase-unit-2{margin:0 5px 10px;width:100%}.pic-showcase-unit-3{margin:0 5px 10px;width:47%}.pic-showcase-unit-4{margin-left:0;margin-right:5px;width:45%}.mobile-hidden{display:none}}@media (max-width:425px){.pic-showcase-unit-3,.pic-showcase-unit-4{width:48%}}",""]),t.exports=e},198:function(t,e,o){"use strict";var n={name:"Pic-Showcase",data:function(){for(var t=this.pic_showcase_pics,e=[],i=0;i<t.length;i++){var o="";o="below"==this.txt_pos?"pic-showcase-unit-"+this.column+" h-auto":"pic-showcase-unit-"+this.column+" h-300","enabled"!=this.isNeedFeat||t[i].feat||(o+=" mobile-hidden"),e.push(o)}return{picClass:e}},props:{pic_showcase_pics:{type:Array,required:!0},column:{type:String,required:!0},txt_pos:{type:String,required:!0},isNeedFeat:{type:String}}},c=(o(196),o(4)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pic-showcase"},t._l(t.pic_showcase_pics,(function(e,n){return o("div",{key:"showcasepic"+n,class:t.picClass[n]},[o("div",{staticClass:"pic-showcase-bg",class:{"h-full pos-absolute":"below"!=t.txt_pos,"h-200 pos-relative rectangle-bottom":"below"==t.txt_pos&&(4==t.column||3==t.column),"h-300 pos-relative rectangle-bottom":"below"==t.txt_pos&&2==t.column},style:{backgroundImage:"url("+e.src+")"}},[e.tag?o("div",{staticClass:"pic-showcase-unit-tag"},[t._v(t._s(e.tag))]):t._e()]),t._v(" "),o("div",{class:"pic-showcase-text-"+t.txt_pos},[e.link?o("div",{staticClass:"pic-showcase-title"},[o("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[o("span",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()]):t._e(),t._v(" "),e.link?t._e():o("div",{staticClass:"pic-showcase-title"},[o("strong",[t._v(t._s(e.title))]),t._v(" "),e.desc?o("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e()])])])})),0)}),[],!1,null,null,null);e.a=component.exports},246:function(t,e,o){"use strict";o.r(e);o(19),o(10),o(46),o(37);var n=o(2),c={layout:"blog",components:{PicShowcase:o(198).a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,c,r,i,l,h,d,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=function(t){for(var e=0;e<t.length;e++)r[t[e]]?r[t[e]]++:r[t[e]]=1},e.next=3,t.$content("products/list").fetch();case 3:return o=e.sent,e.next=6,t.$content("blog-tag-index").fetch();case 6:return n=e.sent,e.next=9,t.$content("blog").sortBy("date","desc").only(["date","tags","slug"]).fetch();case 9:for(c=e.sent,r={},i=0;i<c.length;i++)(0==i||c[i].slug!=c[i-1].slug)&&l(c[i].tags);for(h=Object.keys(r),d=[],w=0;w<h.length;w++)d[w]={name:h[w],len:r[h[w]]};return e.abrupt("return",{tags:d,baseURL:t.app.router.options.base,ui_zh:n.ui_str_zh,ui_en:n.ui_str_en,etsy_item_list:o.etsy_item_list});case 16:case"end":return e.stop()}}),e)})))()},computed:{ui_str:function(){return"Chi"==this.$store.state.lang.val?this.ui_zh:this.ui_en}},mounted:function(){},head:function(){return{title:"Tag list",meta:[{hid:"description",name:"description",content:this.blog_tag_index_description}]}}},r=o(4),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-content"},[o("h1",[t._v("\n    "+t._s(t.ui_str.tag_list)+"\n    "),o("a",{attrs:{href:t.baseURL+"blog"}},[o("span",{staticClass:"blog-tag"},[t._v(t._s(t.ui_str.all_posts))])])]),t._v(" "),o("p",t._l(t.tags,(function(e,n){return o("a",{key:n,attrs:{href:t.baseURL+"blog/tag/"+e.name}},[o("span",{staticClass:"blog-tag"},[t._v(t._s(e.name)+": "+t._s(e.len))])])})),0),t._v(" "),o("p",[t._v(" ")]),t._v(" "),t._m(0),t._v(" "),o("PicShowcase",{attrs:{pic_showcase_pics:t.etsy_item_list,column:"4",txt_pos:"below"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"align-center"},[e("span",[this._v("You may also like")])])}],!1,null,null,null);e.default=component.exports}}]);