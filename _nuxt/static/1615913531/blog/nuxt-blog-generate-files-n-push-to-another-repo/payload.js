__NUXT_JSONP__("/blog/nuxt-blog-generate-files-n-push-to-another-repo", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L){A[0]="Github Actions";return {data:[{blog:{slug:y,description:"试了一下用GitHub Actions生成Nuxt静态博客，推送并发布到其他代码仓库，还是挺有意思的。",date:"2021-02-07T00:00:00.000Z",language:h,layout:"post",title:"使用Github Actions把Nuxt静态网站push到其他repository",tags:[i,"GitHub",z],keywords:A,comments:g,related_blog:["2019-05-05-nuxt-blog-static-website","2020-04-19-editor-for-my-cms-of-my-nuxt-blog","2017-05-28-hao123-issue"],toc:[{id:B,depth:q,text:C},{id:j,depth:q,text:j},{id:k,depth:q,text:k}],body:{type:"root",children:[{type:b,tag:r,props:{id:B},children:[{type:b,tag:f,props:{href:"#%E5%8F%91%E7%8E%B0github-actions",ariaHidden:s,tabIndex:t},children:[{type:b,tag:u,props:{className:[v,w]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"之前研究过 "},{type:b,tag:d,props:{},children:[{type:a,value:"Travis CI"}]},{type:a,value:" 之类的持续集成服务，但是我自己的小工程实在用不上，而且我写的东西怕是也不配套。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"后来看到了 GitHub 的 "},{type:b,tag:d,props:{},children:[{type:a,value:"Actions"}]},{type:a,value:" 服务，貌似可以写个自动化流程，然后只要 push 到 repo 就能触发更新。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"这里有个 "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.ruanyifeng.com\u002Fblog\u002F2019\u002F09\u002Fgetting-started-with-github-actions.html",rel:[l,m,n],target:o},children:[{type:a,value:"教学"}]},{type:a,value:" 。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"我兴冲冲地研究了下，想给我的 Nuxt 博客弄个自动部署更新啥的，但是有两个问题"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:D,props:{},children:[{type:a,value:"我的博客用了本机自建的 api，自动部署时无法自动开启"}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:a,value:"很多教程都是要发布到 "},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:" 里面，而我的 Nuxt 博客工程文件在一个私有的 Repo 里，不公开就不能用 "},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:" 这个分支。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"如果找不到办法把生成的静态文件 push 到博客网站所在的 repo ，那我就不能做这个自动部署了。"}]},{type:a,value:c},{type:b,tag:r,props:{id:j},children:[{type:b,tag:f,props:{href:"#%E5%8F%91%E7%8E%B0%E6%8E%A8%E9%80%81%E5%88%B0%E5%85%B6%E4%BB%96repo%E7%9A%84%E6%96%B9%E6%B3%95",ariaHidden:s,tabIndex:t},children:[{type:b,tag:u,props:{className:[v,w]},children:[]}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"我最近给 Nuxt 升了级，还用了 Nuxt 的新模块 "},{type:b,tag:d,props:{},children:[{type:a,value:"content"}]},{type:a,value:" 来解析博客内容，这个比我自己写的 api 好用多了。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"在停用本机自建 api 之后，我想起之前看过的将 Nuxt 生成的静态文件目录 "},{type:b,tag:d,props:{},children:[{type:a,value:"dist\u002F"}]},{type:a,value:" 部署到 "},{type:b,tag:d,props:{},children:[{type:a,value:"Github pages"}]},{type:a,value:" 的 "},{type:b,tag:f,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fdocs\u002F2.x\u002Fdeployment\u002Fgithub-pages",rel:[l,m,n],target:o},children:[{type:a,value:F}]},{type:a,value:"，我现在满足使用这个方法的前提了，再找找有没有办法把静态文件推送到其他 repo 的办法，也许我就能实现自动部署了呢！"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"然后我果然很幸运地找到了这个 "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fmarketplace\u002Factions\u002Fpush-directory-to-another-repository",rel:[l,m,n],target:o},children:[{type:a,value:F}]},{type:a,value:"，这就是我要实现的效果。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"好了，是时候展示我的缝合怪功力了！"}]},{type:a,value:c},{type:b,tag:r,props:{id:k},children:[{type:b,tag:f,props:{href:"#%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4%E5%92%8C%E4%BB%A3%E7%A0%81",ariaHidden:s,tabIndex:t},children:[{type:b,tag:u,props:{className:[v,w]},children:[]}]},{type:a,value:k}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"在要使用的项目分支下新建 "},{type:b,tag:d,props:{},children:[{type:a,value:".github"}]},{type:a,value:" 文件夹，里面再新建 "},{type:b,tag:d,props:{},children:[{type:a,value:"workflows"}]},{type:a,value:" 文件夹，然后在里面新建 "},{type:b,tag:d,props:{},children:[{type:a,value:"cd.yml"}]},{type:a,value:"，输入以下代码："}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"name: cd\n\non: [push, pull_request]\n\njobs:\n  cd:\n    runs-on: ${{ matrix.os }}\n\n    strategy:\n      matrix:\n        os: [ubuntu-latest]\n        node: [14]\n\n    steps:\n      - name: Checkout\n        uses: actions\u002Fcheckout@master\n\n      - name: Setup node env\n        uses: actions\u002Fsetup-node@v2.1.2\n        with:\n          node-version: ${{ matrix.node }}\n\n      - name: Install dependencies\n        run: npm install\n\n      - name: Generate\n        run: npm run generate\n\n      - name: Publish\n        uses: cpina\u002Fgithub-action-push-to-another-repository@master\n        env:\n          API_TOKEN_GITHUB: ${{ secrets.API_TOKEN_GITHUB }}\n        with:\n          source-directory: 'dist'\n          destination-github-username: 'username'\n          destination-repository-name: 'username.github.io'\n          user-email: email@email.com\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"代码中使用的 "},{type:b,tag:d,props:{},children:[{type:a,value:G}]},{type:a,value:" 可以到 "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fsettings\u002Ftokens",rel:[l,m,n],target:o},children:[{type:a,value:"这个页面"}]},{type:a,value:" 来生成，生成好之后切换到用来生成文件的项目的 repo 那里，在 "},{type:b,tag:d,props:{},children:[{type:a,value:"Settings"}]},{type:a,value:" 里面的 "},{type:b,tag:d,props:{},children:[{type:a,value:"Secrets"}]},{type:a,value:" 里面添加刚才生成的 "},{type:b,tag:d,props:{},children:[{type:a,value:"token"}]},{type:a,value:" ，如果你取的名字不是 "},{type:b,tag:d,props:{},children:[{type:a,value:G}]},{type:a,value:" ，那么在前面的代码里记得把相关引用改成自己取的名字。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"然后把项目工程文件和新创建的工作流程 push 到 GitHub 上，就能触发自动部署更新了。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"完~"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2021-02-07-nuxt-blog-generate-files-n-push-to-another-repo",extension:".md",createdAt:H,updatedAt:H,readingTime:49800,prev:{slug:"get-pdf-read-aloud-on-edge",title:"Edge浏览器PDF朗读功能测评"},next:{slug:"nuxt-2021-limitations-en",title:"Limitations of latest version Nuxt in 2021"},relatedBlog:[{slug:"nuxt-blog-static-website",description:"重构了一下博客，从Jekyll迁移到了Nuxt。方法是先用Node API 来解析 Markdown 文件，然后 Nuxt+Axios 获取 API 返回的文章内容并生成静态页面。",date:"2019-05-05T00:00:00.000Z",language:h,title:"如何使用Nuxt建立个人博客",tags:[I,J,z,"静态博客",i]},{slug:"editor-for-my-cms-of-my-nuxt-blog",description:"April CMS，一个兼具Headless CMS和Flat File CMS的特征的操作文本文件的基于API提供内容的CMS，很实用的一个项目哦~",date:"2020-04-19T00:00:00.000Z",language:h,title:"给Nuxt使用的基于API的CMS——还有管理后台呢",tags:[I,"JavaScript",J,"jQuery",i]},{slug:"hao123-issue",description:"Chrome主页被hao123劫持了，该怎么办？",date:"2017-05-28T00:00:00.000Z",language:h,title:"记录一下解决Chrome主页被hao123劫持的过程",tags:["Chrome","首页劫持",i]}]},mySlug:y,keywords:A,ui_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"},etsy_item_list:[{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F0ea1e7\u002F2912468073\u002Fil_340x340.2912468073_8grx.jpg",title:"eBay template builder tool | listing item detail page description HTML generator | mobile responsive | no active content | instant download",link:"\u002Fstore\u002Ftemplate-ebay-desc",feat:g,tag:"USD 10.00"},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F002b6c\u002F2881264109\u002Fil_340x340.2881264109_qo8o.jpg",title:"2021 Pocket mini Calendar 8 page foldable printable A7 size DIY zine style A4 paper PDF format instant download",link:"\u002Fstore\u002Fcalendar-8-page",feat:g,tag:K},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F7a7880\u002F2863101521\u002Fil_340x340.2863101521_88kc.jpg",title:"2021 weekly schedule planner | 10 types simple to-do list checklist calendar | printable A4 PDF editable excel template instant download",link:"\u002Fstore\u002Fcalendar-weekly",feat:g,tag:x},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Fc0ac13\u002F2861084883\u002Fil_340x340.2861084883_qz8s.jpg",title:"100 day challenge planner | simple calendar | goal progress tracker | schedule A4 printable PDF excel template download",link:"\u002Fstore\u002Fcalendar-100-day",feat:g,tag:K},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F42e083\u002F2864671639\u002Fil_340x340.2864671639_1v9f.jpg",title:"2021 monthly calendar planner | elegant water blue theme simple | A4 printable PDF instant digital download",link:"\u002Fstore\u002Fcalendar-monthly-elegant",feat:p,tag:L},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F6691ba\u002F2815904808\u002Fil_340x340.2815904808_qn87.jpg",title:"2021 income expense track | annual monthly daily expenditure | bill spending tracker | personal financial statement | excel template",link:"\u002Fstore\u002Fexcel-bill-tracker",feat:p,tag:x},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F54d699\u002F2881129977\u002Fil_340x340.2881129977_n9ly.jpg",title:"multi year annual calendar | editable 2021 to 2030 selection excel template | three column | printable PDF xlsx instant download",link:"\u002Fstore\u002Fcalendar-annual",feat:p,tag:x},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Ff95279\u002F2863789693\u002Fil_340x340.2863789693_47rx.jpg",title:"2021 monthly calendar weekly schedule planner | multi year 8-color simple calendar | printable PDF with editable excel template download",link:"\u002Fstore\u002Fcalendar-monthly-vertical",feat:p,tag:L}]}],fetch:{},mutations:[]}}("text","element","\n","code","p","a",true,"中文","技术","发现推送到其他repo的方法","详细步骤和代码","nofollow","noopener","noreferrer","_blank",false,2,"h2","true",-1,"span","icon","icon-link","USD 2.00","nuxt-blog-generate-files-n-push-to-another-repo","Nuxt.js",Array(1),"发现github-actions","发现GitHub Actions","li","gh-pages","教程","API_TOKEN_GITHUB","2021-03-16T16:51:27.342Z","我的项目","Node.js","USD 1.00","USD 3.00")));