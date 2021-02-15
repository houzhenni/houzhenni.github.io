__NUXT_JSONP__("/blog/nuxt-2021-limitations", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){y[0]="Github";y[1]="bug report";y[2]="issue report";return {data:[{blog:{slug:x,description:"升级Nuxt到2.14.12之后，遇到了3个问题，这个新版本用起来有点不太顺手。",date:"2021-02-08T00:00:00.000Z",language:h,layout:"post",title:"2021年Nuxt新版本的一些限制",tags:[i,m,"Nuxt Content"],keywords:y,comments:g,related_blog:["2019-05-05-nuxt-blog-static-website","2020-04-19-editor-for-my-cms-of-my-nuxt-blog","2021-02-07-nuxt-blog-generate-files-n-push-to-another-repo"],toc:[{id:z,depth:n,text:A},{id:B,depth:n,text:C},{id:j,depth:n,text:j}],body:{type:"root",children:[{type:b,tag:o,props:{id:z},children:[{type:b,tag:k,props:{href:"#%E5%8D%87%E7%BA%A7nuxt%E5%92%8C%E4%BD%BF%E7%94%A8content",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:A}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"为了试用 Nuxt 的新模块 "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" ，我升级了 Nuxt 到最新版本 "},{type:b,tag:c,props:{},children:[{type:a,value:"2.14.12"}]},{type:a,value:" ，不过其实不用升级也能用这个模块，这是后话了。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" 的官方页面在 "},{type:b,tag:k,props:{href:"https:\u002F\u002Fcontent.nuxtjs.org",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"这里"}]},{type:a,value:"。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"我把那些原本使用本机自建 api 获取内容的 "},{type:b,tag:c,props:{},children:[{type:a,value:"pages\u002F"}]},{type:a,value:" 的模板文件全都改成使用 "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" 了，也终于把那些因为改起来太麻烦而保留的嵌套 3 层的回调改成了更一目了然的简洁写法。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" 不光可以解析 "},{type:b,tag:c,props:{},children:[{type:a,value:D}]},{type:a,value:" 的文件，还可以解析 "},{type:b,tag:c,props:{},children:[{type:a,value:".txt"}]},{type:a,value:" 、 "},{type:b,tag:c,props:{},children:[{type:a,value:".csv"}]},{type:a,value:" 和 "},{type:b,tag:c,props:{},children:[{type:a,value:".yml"}]},{type:a,value:" 等格式的文本文件，可以实现比我的 api 要更丰富的功能。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"对于 "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" 我是非常满意的。"}]},{type:a,value:d},{type:b,tag:o,props:{id:B},children:[{type:b,tag:k,props:{href:"#nuxt%E6%96%B0%E7%89%88%E6%9C%AC%E7%9A%84%E9%97%AE%E9%A2%98",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:C}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"虽然 "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" 十分给力，但是新版本的 Nuxt 不是很给力，我发现有 3 个问题："}]},{type:a,value:d},{type:b,tag:"ol",props:{},children:[{type:a,value:d},{type:b,tag:u,props:{},children:[{type:a,value:"新版本会为静态页面的各个路径都生成 "},{type:b,tag:c,props:{},children:[{type:a,value:E}]},{type:a,value:"，用来为页面提供内容，但是 Nuxt 会对保存的路径进行 url 编码，此时如果路径含有非英语字符，那么最后的页面将无法正确访问 "},{type:b,tag:c,props:{},children:[{type:a,value:E}]},{type:a,value:" 资源，因为访问路径需要再次进行 url 编码。 我在 GitHub 上提了 issue ，貌似被接受了，但是得等下次 release 才能用到了。而且不知道为什么，这个问题会影响手机版的导航栏，只要是路径含有非英语字符的页面，手机导航栏就打不开，我尝试自己在 "},{type:b,tag:c,props:{},children:[{type:a,value:"node_modules"}]},{type:a,value:" 里面找到了和生成静态网站时的 url 编码有关的代码，手动改成了不编码。这样很有效，在本机生成静态文件时，路径就正常了，但是如果想用 "},{type:b,tag:c,props:{},children:[{type:a,value:"GitHub Actions"}]},{type:a,value:" 自动部署的话，那就又不行了。"}]},{type:a,value:d},{type:b,tag:u,props:{},children:[{type:a,value:"文章 "},{type:b,tag:c,props:{},children:[{type:a,value:"slug"}]},{type:a,value:" 或 "},{type:b,tag:c,props:{},children:[{type:a,value:"tag"}]},{type:a,value:" 如果是以 "},{type:b,tag:c,props:{},children:[{type:a,value:F}]},{type:a,value:" 结尾的，那么 Nuxt 就无法正常渲染，这个我也提了 issue ，Nuxt 团队人员说有对这个做 fallback，让我改 "},{type:b,tag:c,props:{},children:[{type:a,value:v}]},{type:a,value:" 的设置，然后关闭了我的 issue。"}]},{type:a,value:d},{type:b,tag:u,props:{},children:[{type:a,value:"新版本内建了爬虫，这样就不需要在 "},{type:b,tag:c,props:{},children:[{type:a,value:v}]},{type:a,value:" 里面为 "},{type:b,tag:c,props:{},children:[{type:a,value:"generate"}]},{type:a,value:" 列出所有动态生成的路径了。但是问题来了，爬虫没有爬取 "},{type:b,tag:c,props:{},children:[{type:a,value:F}]},{type:a,value:" 结尾的路径，导致有的页面无法生成，还需要我手动在 "},{type:b,tag:c,props:{},children:[{type:a,value:v}]},{type:a,value:" 里面列出相关路径才行。还有就是如果我在一些页面里引用了不存在的路径，这个爬虫不会验证路径有效性，还是会尝试生成这个不存在的页面。结果就是明明需要生成的，没有生成；明明不需要生成的，却去尝试生成了（当然最后会报错）。"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:o,props:{id:j},children:[{type:b,tag:k,props:{href:"#%E6%84%9F%E6%83%B3",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:j}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"网络应用框架的开发和迭代不可能一蹴而就，这个我明白，但是旧版本里没有的问题，新版本却反而出现了，这不得不让人感到有点失望。"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"希望 Nuxt 以后能再发展壮大，让我这个非专业程序媛也能继续受益吧！"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2021-02-08-nuxt-2021-limitations",extension:D,createdAt:G,updatedAt:G,readingTime:31500,prev:{slug:"nuxt-2021-limitations-en",title:"Limitations of latest version Nuxt in 2021"},next:{slug:"summary-of-my-life-in-2020",title:"我的2020年"},relatedBlog:[{slug:"nuxt-blog-static-website",description:"重构了一下博客，从Jekyll迁移到了Nuxt。方法是先用Node API 来解析 Markdown 文件，然后 Nuxt+Axios 获取 API 返回的文章内容并生成静态页面。",date:"2019-05-05T00:00:00.000Z",language:h,title:"如何使用Nuxt建立个人博客",tags:[H,I,m,"静态博客",i]},{slug:"editor-for-my-cms-of-my-nuxt-blog",description:"April CMS，一个兼具Headless CMS和Flat File CMS的特征的操作文本文件的基于API提供内容的CMS，很实用的一个项目哦~",date:"2020-04-19T00:00:00.000Z",language:h,title:"给Nuxt使用的基于API的CMS——还有管理后台呢",tags:[H,"JavaScript",I,"jQuery",i]},{slug:"nuxt-blog-generate-files-n-push-to-another-repo",description:"试了一下用GitHub Actions生成Nuxt静态博客，推送并发布到其他代码仓库，还是挺有意思的。",date:"2021-02-07T00:00:00.000Z",language:h,title:"使用Github Actions把Nuxt静态网站push到其他repository",tags:[i,"GitHub",m]}]},mySlug:x,keywords:y,ui_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"},etsy_item_list:[{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F0ea1e7\u002F2912468073\u002Fil_340x340.2912468073_8grx.jpg",title:"eBay template builder tool | listing item detail page description HTML generator | mobile responsive | no active content | instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F956233793",feat:g,tag:"USD 10.00"},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F002b6c\u002F2881264109\u002Fil_340x340.2881264109_qo8o.jpg",title:"2021 Pocket mini Calendar 8 page foldable printable A7 size DIY zine style A4 paper PDF format instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F952862667",feat:g,tag:J},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F7a7880\u002F2863101521\u002Fil_340x340.2863101521_88kc.jpg",title:"2021 weekly schedule planner | 10 types simple to-do list checklist calendar | printable A4 PDF editable excel template instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F939707561",feat:g,tag:w},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Fc0ac13\u002F2861084883\u002Fil_340x340.2861084883_qz8s.jpg",title:"100 day challenge planner | simple calendar | goal progress tracker | schedule A4 printable PDF excel template download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F925324268",feat:g,tag:J},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F42e083\u002F2864671639\u002Fil_340x340.2864671639_1v9f.jpg",title:"2021 monthly calendar planner | elegant water blue theme simple | A4 printable PDF instant digital download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F934477940",feat:l,tag:K},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F6691ba\u002F2815904808\u002Fil_340x340.2815904808_qn87.jpg",title:"2021 income expense track | annual monthly daily expenditure | bill spending tracker | personal financial statement | excel template",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F928907974",feat:l,tag:w},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F54d699\u002F2881129977\u002Fil_340x340.2881129977_n9ly.jpg",title:"multi year annual calendar | editable 2021 to 2030 selection excel template | three column | printable PDF xlsx instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F939749315",feat:l,tag:w},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Ff95279\u002F2863789693\u002Fil_340x340.2863789693_47rx.jpg",title:"2021 monthly calendar weekly schedule planner | multi year 8-color simple calendar | printable PDF with editable excel template download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F939397411",feat:l,tag:K}]}],fetch:[],mutations:[]}}("text","element","code","\n","p","content",true,"中文","技术","感想","a",false,"Nuxt.js",2,"h2","true",-1,"span","icon","icon-link","li","nuxt.config.js","USD 2.00","nuxt-2021-limitations",Array(3),"升级nuxt和使用content","升级Nuxt和使用content","nuxt新版本的问题","Nuxt新版本的问题",".md","payload",".js","2021-02-15T11:46:21.564Z","我的项目","Node.js","USD 1.00","USD 3.00")));