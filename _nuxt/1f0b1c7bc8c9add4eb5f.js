(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{174:function(t,e,o){var content=o(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(68).default)("498b36b5",content,!0,{sourceMap:!1})},186:function(t,e,o){"use strict";var n=o(174);o.n(n).a},187:function(t,e,o){(t.exports=o(67)(!1)).push([t.i,'a[id]{position:relative;top:-40px;display:block}.blog-desc{margin:10px;padding:10px;color:#666;background-color:rgba(0,0,0,.025)}.blog-content>:first-child+h3{text-align:center}.youtube-img{position:relative;display:inline-block}.youtube-img:before{width:40%;height:40%;border-radius:25%;background:red}.youtube-img:after,.youtube-img:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;transition:opacity .2s}.youtube-img:after{width:0;height:0;border-top:10px solid transparent;border-left:20px solid #fff;border-bottom:10px solid transparent}.youtube-img:hover:after,.youtube-img:hover:before{opacity:.7;transition:opacity .2s}',""])},193:function(t,e,o){"use strict";o.r(e);o(102),o(103);var n=o(69),r=o.n(n),l={asyncData:function(t){return r.a.get("http://127.0.0.1:4000?slug="+t.params.slug).then(function(e){var o=e.data;return{blog:o,tags:o.tags||["none"],date:t.params.slug.substring(0,10),baseURL:t.app.router.options.base}})},mounted:function(){var t=this;t.$nextTick(function(){if(t.blog.comments){e=document,(s=e.createElement("script")).src="https://houzhenni-com.disqus.com/embed.js",s.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(s)}var e,s;window.scrollToId=function(t){return event.preventDefault(),document.querySelector("a[name='"+String(t)+"']").scrollIntoView({behavior:"smooth"}),!1}})},computed:{compiledMarkdown:function(){var html=this.blog.content,t=(html=(html=html.replace(/href\=\"http/g,'target="_blank" href="http')).replace(/href\=\"\#/g,'href="blogs/'+this.blog.slug+"#")).match(/<img src=\"https:\/\/i\.ytimg\.com\/vi\/[^(<|>)]+default\.jpg\" alt=\"youtube-img\">/g);if(t)for(var i=0;i<t.length;i++)html=html.replace(t[i],'<span class="youtube-img">'+t[i]+"</span>");return html}},head:function(){return{title:this.blog.title,meta:[{hid:"description",name:"description",content:this.blog.description}],link:[{rel:"stylesheet",href:this.baseURL+"github-markdown.min.css"},{rel:"stylesheet",href:"/highlight.js.css"}]}}},c=(o(186),o(9)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v(t._s(t.blog.title))]),t._v(" "),o("p",{staticClass:"blog-date"},[t._v(t._s(t.date))]),t._v(" "),o("p",{staticClass:"blog-date"},[t._v("\n    Tags: \n    "),t._l(t.tags,function(e,n){return o("span",{key:n,staticClass:"blog-tag"},[o("a",{attrs:{href:t.baseURL+"blogs/tag/"+e}},[t._v(t._s(e))])])})],2),t._v(" "),o("div",{staticClass:"blog-desc",domProps:{innerHTML:t._s(t.blog.description)}}),t._v(" "),o("div",{staticClass:"markdown-body blog-content",domProps:{innerHTML:t._s(t.compiledMarkdown)}}),t._v(" "),t.blog.comments?o("div",{attrs:{id:"disqus_thread"}}):t._e()])},[],!1,null,null,null);e.default=component.exports}}]);