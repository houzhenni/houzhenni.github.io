__NUXT_JSONP__("/blog/hao123-issue", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:[{blog:{slug:v,description:"Chrome主页被hao123劫持了，该怎么办？",date:"2017-05-28T00:00:00.000Z",language:"中文",layout:"post",title:"记录一下解决Chrome主页被hao123劫持的过程",tags:[w,f,"首页劫持",x],comments:true,related_blog:["2020-05-01-enable-spellcheck-on-chrome-en","2020-04-19-editor-for-my-cms-of-my-nuxt-blog"],toc:[{id:h,depth:l,text:h},{id:i,depth:l,text:i},{id:j,depth:l,text:j}],body:{type:"root",children:[{type:b,tag:m,props:{id:h},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#%E5%8F%91%E7%8E%B0%E9%A6%96%E9%A1%B5%E8%A2%AB%E5%8A%AB%E6%8C%81",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:h}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"这一个多月以来，我一直饱受 Chrome 主页被 hao123 劫持之苦，虽然我自己之前也是把百度设为主页，但是我不喜欢百度旗下的 hao123。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"发现主页被劫持之后，我在网上搜了解决方法。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"第一个尝试的是查看桌面快捷方式的属性，但发现快捷方式只是指向 "},{type:b,tag:c,props:{},children:[{type:a,value:g}]},{type:a,value:"，并没有被添加 "},{type:b,tag:c,props:{},children:[{type:a,value:t}]},{type:a,value:"，所以没法修改。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"第二个尝试的是在程序安装文件夹里查看 "},{type:b,tag:c,props:{},children:[{type:a,value:g}]},{type:a,value:" 的属性，发现它也没有被添加任何 "},{type:b,tag:c,props:{},children:[{type:a,value:t}]},{type:a,value:" 的链接，但是直接点击 "},{type:b,tag:c,props:{},children:[{type:a,value:g}]},{type:a,value:" 也还是会被劫持到 "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" 。于是我又试了下网上的建议，把 "},{type:b,tag:c,props:{},children:[{type:a,value:g}]},{type:a,value:" 重命名为 "},{type:b,tag:c,props:{},children:[{type:a,value:y}]},{type:a,value:" ，然后再发送快捷方式到桌面，竟然成功了。然而高兴没两天，主页又被劫持了，打开安装文件夹，发现竟然多了一个 "},{type:b,tag:c,props:{},children:[{type:a,value:g}]},{type:a,value:" ，和 "},{type:b,tag:c,props:{},children:[{type:a,value:y}]},{type:a,value:" 并存，而且不管是桌面快捷方式还是 "},{type:b,tag:c,props:{},children:[{type:a,value:g}]},{type:a,value:" 都是直接被导向去了 "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:u}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"第三个尝试的是修改 "},{type:b,tag:c,props:{},children:[{type:a,value:z}]},{type:a,value:" 文件，让我的电脑访问不了 "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" 。这样很有效，当我打开浏览器的时候，确实访问不了 "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" 了，但是我的浏览器没法停止自动跳转 "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" 这个动作，只是会在访问不成功后报错“无法访问此网站”。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"第四个想尝试的是注册表，无奈不会改，就作罢了。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"然后我就放弃了，从 "},{type:b,tag:c,props:{},children:[{type:a,value:z}]},{type:a,value:" 里面把 "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" 解放出来，不再阻止浏览器访问 "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" 。"}]},{type:a,value:d},{type:b,tag:m,props:{id:i},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#%E6%89%BE%E5%88%B0%E5%8A%AB%E6%8C%81%E4%B8%BB%E9%A1%B5%E7%9A%84%E7%BD%AA%E9%AD%81%E7%A5%B8%E9%A6%96",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:i}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"这个时候我发现，每当打开浏览器的时候，地址栏出现的网址并不是 "},{type:b,tag:c,props:{},children:[{type:a,value:t}]},{type:a,value:" 本身 ，而是一个很长的网址，几秒后会跳转到 "},{type:b,tag:c,props:{},children:[{type:a,value:"http:\u002F\u002Fwww.hao123.com\u002Ftn=96363290_hao_pg"}]},{type:a,value:u}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"看到 "},{type:b,tag:c,props:{},children:[{type:a,value:"tn=96363290_hao_pg"}]},{type:a,value:" 这个部分，我意识到这肯定是负责为 "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" 做这个推广的人的账号，而跳转前的那个网址肯定是关键，于是我把浏览器关掉再重新打开，趁机记录下最开始出现的那个很长的网址，它是这样的："}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:A}]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"不过直接转到这个地址的话会变404。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"我在 google 上搜索了 "},{type:b,tag:c,props:{},children:[{type:a,value:B}]},{type:a,value:" 这个域名的注册信息，查到它是2016年2月在 goddady 上注册的，注册地在美国，不过这些信息没什么用。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"继续在 google 上搜 "},{type:b,tag:c,props:{},children:[{type:a,value:B}]},{type:a,value:" ，有个好玩的网址出现了："}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:k}]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"它跟 "},{type:b,tag:c,props:{},children:[{type:a,value:A}]},{type:a,value:" 会有什么关系呢？"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"点开 "},{type:b,tag:c,props:{},children:[{type:a,value:k}]},{type:a,value:" 看发现是个 wap 版的书城，这个信息本身也没什么用，但是再搜索 "},{type:b,tag:c,props:{},children:[{type:a,value:"book.rdtuijian.com\u002Fweb\u002Findex.html"}]},{type:a,value:" 就会发现一个有趣的网页"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"http:\u002F\u002Fbbs.mo.wps.cn\u002Fforum.php?mod=viewthread&tid=16210&extra=page=1"}]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"3楼的回帖里是这么说的："}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"\"如果您是WPS会员，现在是无法看到读书入口，您可以暂时退出WPS账号，或者直接浏览器访问—— "},{type:b,tag:c,props:{},children:[{type:a,value:k}]},{type:a,value:u}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"http:\u002F\u002Fbbs.mo.wps.cn\u002Fforum.php"}]},{type:a,value:" 这个网站貌似是WPS的官方论坛，而发表这个回帖的是一个 admin 账号，从这个语气上看，感觉 "},{type:b,tag:c,props:{},children:[{type:a,value:k}]},{type:a,value:" 应该是WPS下属的书城，那么这次的浏览器主页劫持应该就是 WPS 的锅没跑了。"}]},{type:a,value:d},{type:b,tag:m,props:{id:j},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#%E8%A7%A3%E5%86%B3%E9%97%AE%E9%A2%98",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:j}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"我的电脑上装了 WPS 也有好几年了，但是直到这两个月才出现浏览器主页劫持的问题，这很可能跟最近安装的插件有关，于是我打开控制面板的添加和删除程序，找到最近一次安装 WPS 插件的时间，果然让我发现，2017年3月18日我装了一个 PDF 转 WORD 的 WPS 插件，但是同一时间被安装的软件还有一个叫 "},{type:b,tag:c,props:{},children:[{type:a,value:"Yuike Cloud"}]},{type:a,value:" 的东西。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"PDF 转 WORD 的功能我还是需要的，如果真要尝试删除什么东西的话，就从 "},{type:b,tag:c,props:{},children:[{type:a,value:C}]},{type:a,value:" 开始着手吧。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"删掉 "},{type:b,tag:c,props:{},children:[{type:a,value:C}]},{type:a,value:" 之后再打开 Chrome 浏览器，终于直接跳转了我设置的主页，我简直要喜极而泣了。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"这次解决浏览器主页被劫持的过程大概就是这样，希望大家看了之后也能有启发。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"以上~"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2017-05-28-hao123-issue",extension:".md",createdAt:"2021-01-20T11:21:17.416Z",updatedAt:"2021-01-20T14:36:08.382Z",prev:null,next:{slug:"jekyll-blog-static-website",title:"如何搭建静态个人博客"},relatedBlog:[{slug:"enable-spellcheck-on-chrome-en",description:"My Chrome used to check spelling for me when typing, but recently the spellcheck isn't working normally. I thought it was something related to coding, but it turns out to be just a browser setting thing.",date:"2020-05-01T00:00:00.000Z",title:"How to enable spell check on Chrome",tags:[w,"HTML","Tech"]},{slug:"editor-for-my-cms-of-my-nuxt-blog",description:"April CMS，一个兼具Headless CMS和Flat File CMS的特征的操作文本文件的基于API提供内容的CMS，很实用的一个项目哦~",date:"2020-04-19T00:00:00.000Z",title:"给Nuxt使用的基于API的CMS——还有管理后台呢",tags:["我的项目","JavaScript","Node","jQuery",x]}]},mySlug:v,ui_str_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_str_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"}}],fetch:[],mutations:[]}}("text","element","code","\n","p","hao123","chrome.exe","发现首页被劫持","找到劫持主页的罪魁祸首","解决问题","http:\u002F\u002Fbook.rdtuijian.com\u002Fweb\u002Findex.html",2,"h2","a","true",-1,"span","icon","icon-link","hao123.com","。","hao123-issue","Chrome","技术","chrome2.exe","hosts","https:\u002F\u002Fvasapi.rdtuijian.com\u002Fjumber\u002Fv1?code=002_1000","rdtuijian.com","Yuike cloud")));