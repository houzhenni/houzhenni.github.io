(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{175:function(t,e,o){var content=o(371);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(52).default)("498b36b5",content,!0,{sourceMap:!1})},370:function(t,e,o){"use strict";var r=o(175);o.n(r).a},371:function(t,e,o){(t.exports=o(51)(!1)).push([t.i,'.blog-desc{margin:10px;padding:10px;color:#666;background-color:rgba(0,0,0,.025)}.youtube-img{position:relative;display:inline-block}.youtube-img:before{width:40%;height:40%;border-radius:25%;background:red}.youtube-img:after,.youtube-img:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;transition:opacity .2s}.youtube-img:after{width:0;height:0;border-top:10px solid transparent;border-left:20px solid #fff;border-bottom:10px solid transparent}.youtube-img:hover:after,.youtube-img:hover:before{opacity:.7;transition:opacity .2s}',""])},375:function(t,e,o){"use strict";o.r(e);o(104),o(105);var r=o(71),n=o.n(r),l=o(182),c=o.n(l),d=o(70),h=o(183);c.a.setOptions({highlight:function(code){return h.highlightAuto(code).value}});var m={asyncData:function(t){var e=t.params;return n.a.get("http://127.0.0.1:4000?slug="+e.slug).then(function(t){var o=t.data;return{blog:o,tags:o.tags||["none"],date:e.slug.substring(0,10),baseURL:d.a.baseURL}})},mounted:function(){var t,s;t=document,(s=t.createElement("script")).src="https://"+d.a.disqus.shortname+".disqus.com/embed.js",s.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(s)},computed:{compiledMarkdown:function(){var t=new c.a.Renderer,html=c()(this.blog.content,{renderer:t,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,highlight:function(code){return h.highlightAuto(code).value}}),e=(html=(html=html.replace(/href\=\"http/g,'target="_blank" href="http')).replace(/href\=\"\#/g,'href="blogs/'+this.blog.slug+"#")).match(/<img src=\"https:\/\/i\.ytimg\.com\/vi\/[^(<|>)]+default\.jpg\" alt=\"youtube-img\">/g);if(e)for(var i=0;i<e.length;i++)html=html.replace(e[i],'<span class="youtube-img">'+e[i]+"</span>");return html}},head:function(){return{title:this.blog.title+" | "+d.a.title,meta:[{hid:"description",name:"description",content:this.blog.description}],link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css"},{rel:"stylesheet",href:"/highlight.js.css"}]}}},f=(o(370),o(9)),component=Object(f.a)(m,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v(t._s(t.blog.title))]),t._v(" "),o("p",{staticClass:"blog-date"},[t._v(t._s(t.date))]),t._v(" "),o("p",{staticClass:"blog-date"},[t._v("\n    Tags: \n    "),t._l(t.tags,function(e,r){return o("span",{key:r,staticClass:"blog-tag"},[o("a",{attrs:{href:t.baseURL+"blogs/tag/"+e}},[t._v(t._s(e))])])})],2),t._v(" "),o("div",{staticClass:"blog-desc",domProps:{innerHTML:t._s(t.blog.description)}}),t._v(" "),o("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.compiledMarkdown)}}),t._v(" "),o("div",{attrs:{id:"disqus_thread"}})])},[],!1,null,null,null);e.default=component.exports}}]);