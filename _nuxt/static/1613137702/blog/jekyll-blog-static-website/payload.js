__NUXT_JSONP__("/blog/jekyll-blog-static-website", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah){return {data:[{blog:{slug:H,description:"我的个人博客 = Github代码托管 + Jekyll模板 + Godaddy域名 + Cloudflare安全认证 + disqus评论系统 + 反向代理访问disqus(墙内) + zoho自主域名邮箱",date:"2018-03-28T00:00:00.000Z",language:E,layout:"post",title:"如何搭建静态个人博客",tags:["Jekyll","GitHub",F,I],comments:u,related_blog:["2020-04-19-editor-for-my-cms-of-my-nuxt-blog","2019-05-05-nuxt-blog-static-website"],toc:[{id:v,depth:k,text:v},{id:J,depth:k,text:K},{id:w,depth:k,text:w},{id:x,depth:k,text:x},{id:y,depth:k,text:y},{id:L,depth:k,text:M},{id:z,depth:k,text:z},{id:N,depth:k,text:O},{id:A,depth:k,text:A}],body:{type:"root",children:[{type:b,tag:l,props:{id:v},children:[{type:b,tag:f,props:{href:"#%E5%89%8D%E8%A8%80",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"折腾了半个月，终于算是建好了我的小窝，虽然还没有成为专业的程序媛，但是至少算是建立了一片自己的天地啦。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"以下就是这次搭建博客的完整流程，欢迎参考~"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"update 2020-05-21"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"我的博客现已转用 "},{type:b,tag:e,props:{},children:[{type:a,value:P}]},{type:a,value:" 生成的静态网站，可以参考 "},{type:b,tag:"nuxt-link",props:{to:"\u002Fblog\u002Fnuxt-blog-static-website"},children:[{type:a,value:Q}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:l,props:{id:J},children:[{type:b,tag:f,props:{href:"#%E5%A6%82%E4%BD%95%E5%9C%A8github%E4%B8%8A%E7%8E%A9%E8%80%8D%EF%BC%9F",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Github是一个可以免费进行代码托管和版本控制的平台，简单来说，就是你把代码储存在他们网站的云端，他们帮你保管，不光能在线修改、离线修改，还能记录下你每一次修改了哪里，而且不收你的钱。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"说句实话，“免费”这两个字最吸引我。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"记得本科毕业时，毕业论文总共大改了13次，每次都要另存为新的文件名，于是我有了14个差不多名称的doc文件，其中有三个还是同一天保存的。可是现在翻开文件夹，想回忆一下当时写论文的过程，却完全没有任何头绪。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"于是宇宙终极难题出现了：我到底改了啥？"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果使用word自带的校阅批改功能，添加“增”、“删”、“改”的高亮注释的话，也还算可以，但是如何能把握每次修改的不同的地方呢？"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"这就要提一提Github的修改记录高亮功能了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"你的每一次保存都会留下记录，而这一次保存的内容跟上一次保存的内容有什么差别，都能用高亮颜色告诉你。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"有了高亮的对比之后，改了哪里，怎么改的，一目了然。如果后期觉得改得不好，还能再改回去，绝对是各位手残党的福音。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"不过我现在只能对着那14个doc文件干瞪眼了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"那么我们怎样才能使用Github进行版本管理呢？"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"首先，要注册一个Github账号，然后为你的项目建立代码仓库（repository），往里面上传你正在做的代码文件。你可以用Git命令工具或者用GitHub桌面版进行管理，每次在电脑本地修改后都将你的修改推送上GitHub，每次修改都留有记录，这样就可以进行版本控制了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Git命令对我来说有点复杂，所以我用的是GitHub桌面版软件，也很方便。安装软件之后，把你的账号下的repo克隆到电脑本地，在本地修改、保存后，打开Github桌面版，先commit，给你这次的更新写个小备注，然后push上云端，就能看到了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"GitHub上建立公开的repo是免费的，而且不限个数，不限大小，不过当然不能滥用，那样会被封号的。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"有关Github的空间和使用限制"},{type:b,tag:f,props:{href:R,rel:[g,h,i],target:j},children:[{type:a,value:R}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果你已经用HTML或者Markdown这样的标记语言写好了静态网页文件，你就可以用Github的静态网页部署功能——Github Pages，来建立一个静态的网页项目，比如一个项目展示网页、个人简历页面，或者任何一个你希望大家看到的页面。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在你的repo的setting的Options那里找到“Github Pages”，选择一个分支，然后save即可发布。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Github上只能部署静态页面，不能部署动态页面和数据库，不过用来做个人博客已经是很够用了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"关于静态页面和动态页面的区别"},{type:b,tag:f,props:{href:S,rel:[g,h,i],target:j},children:[{type:a,value:S}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"通常在部署静态博客的时候，大家都会选择使用 username.github.io(username即为你注册的用户名) 这种Github免费提供的二级域名来作为repo的名称，然后在setting里面发布你的pages，发布成功后，username.github.io就成为你的博客地址啦。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"国内有一个类似Github的代码托管平台 "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.coding.net",rel:[g,h,i],target:j},children:[{type:a,value:"coding.net"}]},{type:a,value:"，也可以云储存代码、查看修改记录、部署网页、使用它的二级域名，而它提供的网页部署功能除了静态之外，甚至能部署动态的网页，还免费提供数据库，不过总空间有限制就是了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2020年5月1日更新： coding.net已经不支持免费部署动态网站了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"大家根据自己的需要来选择平台吧~"}]},{type:a,value:c},{type:b,tag:l,props:{id:w},children:[{type:b,tag:f,props:{href:"#%E9%9D%99%E6%80%81%E5%8D%9A%E5%AE%A2%E6%A8%A1%E6%9D%BF%E5%93%AA%E5%AE%B6%E5%BC%BA%EF%BC%9F",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"我们已经知道静态页面是什么了，那么静态博客又是怎么配置的呢？"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果我们写的都是HTML页面，那么只能自己在各个文件中指定互相的引用关系，如果想要用不同的HTML文件来写日志，再做一个HTML页面的总目录，这样一来每次要更新这些引用关系的时候都要伤筋动骨。那么有没有一种方法，可以只需要写新的日志，而日志的目录，或是文档结构可以自动更新呢？"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"于是现在就到了介绍Jekyll的时间啦！"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Jekyll是一个静态博客网站生成器，只要经过一定的配置，服务器就可以根据配置去解析文件夹里的文件，帮你生成博客目录页面，还能应用各个模块的模板，快速组合成一个好看的页面。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"其实除了Jekyll之外还有其他的静态博客生成器，但是我不知为啥被Jekyll这个名字吸引了，所以就选用了这个。其实我根本没有看过《化身博士》(Dr Jekyll and Mr Hyde)呢。。。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"大部分的Jekyll教程都会说需要在电脑本地安装Ruby，然后gem install Jekyll，以实现在电脑本地也可以预览最终效果，但是不知为啥我的电脑好不容易装好了Ruby，却怎么都装不上Jekyll，导致我只能push上Github之后才能在Github上直接看到效果。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果大家有兴趣，可以参照"},{type:b,tag:f,props:{href:T,rel:[g,h,i],target:j},children:[{type:a,value:T}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"就算没有安装Jekyll的运行环境，只要我们把文件配置好，上到Github之后照样能运行。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"大家可能会担心Jekyll的配置会很复杂，不过这种担心完全是不必要的，网上有很多Jekyll框架模板可以免费下载使用，挑选模板"},{type:b,tag:f,props:{href:U,rel:[g,h,i],target:j},children:[{type:a,value:U}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"我选中的这个和Jekyll的名字非常搭，它叫“Hydejack”，是很简洁的左右两栏布局，整体颜色是非常沉静的绿色，决定用它之后，我就点进它的主题页面，点“download”下载文件包，解压缩，全部放进电脑本地的 username.github.io 那个repo里面，然后就需要开始修改配置。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Hydejack里面需要修改的配置文件是 "},{type:b,tag:e,props:{},children:[{type:a,value:"\\_config.yml"}]},{type:a,value:"，里面可以设置你的个人站点的站点名、个人简介、你想展示的社交网站账号、Google Analytics账号设置，等等。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"总的来说就是声明这个网站为你所有的配置。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"然后你可以修改 "},{type:b,tag:e,props:{},children:[{type:a,value:"about.md"}]},{type:a,value:" 来配置个人介绍页，再到 "},{type:b,tag:e,props:{},children:[{type:a,value:"\\_featured_tags"}]},{type:a,value:" 文件夹下配置文章标签，最后就是按照格式添加 "},{type:b,tag:e,props:{},children:[{type:a,value:"markdown"}]},{type:a,value:" 格式的日志文章进入 "},{type:b,tag:e,props:{},children:[{type:a,value:"\\_posts"}]},{type:a,value:" 这个文件夹，命名规则为 "},{type:b,tag:e,props:{},children:[{type:a,value:"year-month-day-article-name.md"}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"markdown语法介绍 "},{type:b,tag:f,props:{href:"http:\u002F\u002Fxianbai.me\u002Flearn-md",rel:[g,h,i],target:j},children:[{type:a,value:"看这里"}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"每次新增文章之后，都可以按照 "},{type:b,tag:e,props:{},children:[{type:a,value:"save -\u003E commit -\u003E push"}]},{type:a,value:" 的方式将你的新文章推送到 github 上，这样别人就能通过访问 "},{type:b,tag:e,props:{},children:[{type:a,value:B}]},{type:a,value:" 来看到你的新日志啦。"}]},{type:a,value:c},{type:b,tag:l,props:{id:x},children:[{type:b,tag:f,props:{href:"#%E4%B9%B0%E4%B8%AA%E9%AB%98%E5%A4%A7%E4%B8%8A%E7%9A%84%E5%9F%9F%E5%90%8D%E5%92%8B%E6%A0%B7%EF%BC%9F",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"当我已经有了 Github 给的二级域名以后，不禁心想，如果我还可以有一个自己的域名，像什么 "},{type:b,tag:e,props:{},children:[{type:a,value:"txxbxx.com"}]},{type:a,value:" 啦， "},{type:b,tag:e,props:{},children:[{type:a,value:"qx.com"}]},{type:a,value:" 啦，"},{type:b,tag:e,props:{},children:[{type:a,value:"bxxdx.com"}]},{type:a,value:" 啦，要是我也有一个这样的域名指向我的博客那该多好啊。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"既然 Github 提供免费绑定域名的服务，我何不买一个来试试？"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"说干就干，我开始百度和 google 购买域名的方式和步骤，最终决定一件事，不要墙内的域名提供商，包括马云爸爸的阿里云。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"墙这个事啊，我们控制不了，但是我自己的日常生活和工作都很受墙的影响，所以真的是希望尽量远离。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"假设你是在阿里云上买空间，那么在绑定域名的时候，阿里云会要求你一定要使用备案过的域名，而备案的步骤看得人眼晕，且每一步都是奔着查水表来的。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"既然 Github没有这些查水表的要求，而我也不是非要用阿里云不可，那就还是另外看看别的服务吧。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"然后就是境外的域名提供商了，搜索结果里排名第一的是 "},{type:b,tag:e,props:{},children:[{type:a,value:"godaddy"}]},{type:a,value:"，以前我也有听说过，感觉是个可靠的选择，于是就注册，选定域名，购买，绑定信用卡。最后的结果是，域名的首年费用是8港币，第二年六十多港币，我以七十多块港币买下了我名字的拼音的.com域名——houzhenni.com的两年的使用权。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"域名买好了，得绑定到 "},{type:b,tag:e,props:{},children:[{type:a,value:B}]},{type:a,value:" 这个 repo 上才行。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"其实如果这个 repo 不是直接用你的二级域名，那么你的其他 repo 还能用别的域名，但是一旦将二级域名的 repo 绑定了之后，则所有其他的 repo 都会自动使用这个域名了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"域名绑定主机的步骤："}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Github方面"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:"在 "},{type:b,tag:e,props:{},children:[{type:a,value:B}]},{type:a,value:" 这个 repo 的外层文件夹里新建一个叫作 "},{type:b,tag:e,props:{},children:[{type:a,value:"CNAME"}]},{type:a,value:" 的没有扩展名的文件，里面只写一行内容，就是你的域名去掉 "},{type:b,tag:e,props:{},children:[{type:a,value:"http:\u002F\u002F"}]},{type:a,value:" 的后面的部分。"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Godaddy方面"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:"可以参考"},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F31377141",rel:[g,h,i],target:j},children:[{type:a,value:"这篇知乎问答"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"核心思想就是在github设置了CNAME之后，也要在godaddy上设置DNS解析，添加“A name”、“@”、“www”等等记录指向github，nameserver也要指向 Github。"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"设置好之后，没一会就能用域名访问了。"}]},{type:a,value:c},{type:b,tag:l,props:{id:y},children:[{type:b,tag:f,props:{href:"#%E5%9F%9F%E5%90%8D%E5%8F%AA%E8%83%BD%E7%94%A8http%E8%AE%BF%E9%97%AE%E6%80%8E%E4%B9%88%E5%8A%9E%EF%BC%9F",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"当我设置好域名之后，起初还是挺开心的，以为配置结束了。网页能打开，内容也都能正常浏览，看起来跟一般的网站也没什么区别了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"但是，当我们把目光转向浏览器的地址栏，你会发现在地址栏的左边有一个“不安全”的警告，乍一看差点吓个半死，我的网站什么时候变成“不安全”的了？"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"这个 "},{type:b,tag:e,props:{},children:[{type:a,value:"不安全"}]},{type:a,value:" 自然是因为没有用 "},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:" 链接访问网页，可是平常在地址栏输入 "},{type:b,tag:e,props:{},children:[{type:a,value:B}]},{type:a,value:" 的时候都会自动使用 "},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:" 来访问的呀？"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"于是我尝试手动将地址栏的网址改成使用 "},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:" 访问，这下好了，浏览器直接禁止访问了，说是“您的连接不是私密连接”。看样子并不是不能跳转 "},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:" 链接，而是直接不支持 "},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:" 访问了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在还没有绑定域名的时候，Github pages的设置页面上有写，pages自动配置了 "},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:" 加密，可以提高页面的安全性。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"于是我回到 Github 上去看设置，发现现在变成了这样一段话"}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Enforce HTTPS — Unavailable for your site because you have a custom domain configured ("},{type:b,tag:f,props:{href:V},children:[{type:a,value:V}]},{type:a,value:")\nHTTPS provides a layer of encryption that prevents others from snooping on or tampering with traffic to your site. When HTTPS is enforced, your site will only be served over HTTPS."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"也就是说，因为我绑定了域名，Github 就不再提供网页加密服务了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"虽然说即使没有 "},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:" 加密，网页也能正常访问，可是总觉得少了点什么。没办法，继续百度和 google 吧。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"然后就看到了 "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.cloudflare.com",rel:[g,h,i],target:j},children:[{type:a,value:"cloudflare"}]},{type:a,value:" 的网页免费加密服务。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"首先注册一个账号，然后需要在 godaddy 上设置 "},{type:b,tag:e,props:{},children:[{type:a,value:"nameserver"}]},{type:a,value:" 指向 cloudflare 的主机，再在 cloudflare 上设置 "},{type:b,tag:e,props:{},children:[{type:a,value:"A name"}]},{type:a,value:W},{type:b,tag:e,props:{},children:[{type:a,value:"@"}]},{type:a,value:W},{type:b,tag:e,props:{},children:[{type:a,value:"www"}]},{type:a,value:"等记录。"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"先在 "},{type:b,tag:e,props:{},children:[{type:a,value:"page rules"}]},{type:a,value:" 那里设置两条规则"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:X},{type:b,tag:e,props:{},children:[{type:a,value:"http:\u002F\u002Fdomain.com\u002F*"}]},{type:a,value:Y},{type:b,tag:e,props:{},children:[{type:a,value:"automatic HTTPS rewrites"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:X},{type:b,tag:e,props:{},children:[{type:a,value:"http:\u002F\u002Fwww.domain.com\u002F"}]},{type:a,value:Y},{type:b,tag:e,props:{},children:[{type:a,value:"Forwarding URL"}]},{type:a,value:" + "},{type:b,tag:e,props:{},children:[{type:a,value:"301 redirect"}]},{type:a,value:"，然后指向 "},{type:b,tag:e,props:{},children:[{type:a,value:"https:\u002F\u002Fwww.domain.com\u002F"}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"接着在 "},{type:b,tag:e,props:{},children:[{type:a,value:"crypto"}]},{type:a,value:" 的部分把 "},{type:b,tag:e,props:{},children:[{type:a,value:"always use https"}]},{type:a,value:" 打开"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"完成~"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"你就可以用 "},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:" 安全链接访问你的域名啦"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"update 2018-05-04"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"刚刚发现就在2018年5月1日，Github 支持自定义域名的 pages 使用 "},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:" 链接了，也就是说，完全不需要用 cloudflare 做加密了，心塞塞。。。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"参考 "},{type:b,tag:f,props:{href:"https:\u002F\u002Fblog.github.com\u002F2018-05-01-github-pages-custom-domains-https\u002F",rel:[g,h,i],target:j},children:[{type:a,value:Q}]}]},{type:a,value:c},{type:b,tag:l,props:{id:L},children:[{type:b,tag:f,props:{href:"#%E5%81%9A%E4%B8%AA%E6%9C%89%E5%BF%83%E4%BA%BA%EF%BC%8C%E7%94%A8-google-analytics-%E5%88%86%E6%9E%90%E4%BD%A0%E7%9A%84%E7%BD%91%E7%AB%99",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:Z},{type:b,tag:f,props:{href:_,rel:[g,h,i],target:j},children:[{type:a,value:_}]}]},{type:a,value:c},{type:b,tag:l,props:{id:z},children:[{type:b,tag:f,props:{href:"#%E9%9D%99%E6%80%81%E5%8D%9A%E5%AE%A2%E6%B2%A1%E6%9C%89%E8%87%AA%E5%B8%A6%E7%9A%84%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F%E6%80%8E%E4%B9%88%E5%8A%9E%EF%BC%9F",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:Z},{type:b,tag:f,props:{href:$,rel:[g,h,i],target:j},children:[{type:a,value:$}]}]},{type:a,value:c},{type:b,tag:l,props:{id:N},children:[{type:b,tag:f,props:{href:"#disqus-%E8%A2%AB%E5%A2%99%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E%EF%BC%9F",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"有的爱钻研的小伙伴写了转发 "},{type:b,tag:e,props:{},children:[{type:a,value:"disqus"}]},{type:a,value:" 请求的反向代理的方法，可以参考这个 "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Ffooleap\u002Fdisqus-php-api",rel:[g,h,i],target:j},children:[{type:a,value:"repo"}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"同时你还需要一个支持 "},{type:b,tag:e,props:{},children:[{type:a,value:aa}]},{type:a,value:" 的转发请求的服务器，可以试一下"},{type:b,tag:f,props:{href:ab,rel:[g,h,i],target:j},children:[{type:a,value:ab}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2020 年 5 月1 日更新： "},{type:b,tag:e,props:{},children:[{type:a,value:"000webhost"}]},{type:a,value:" 的服务条款里说，如果使用的是免费服务，那么托管方有权在不告知网站管理者的前提下直接删除被托管的网站，也就是我们用来转发请求的 "},{type:b,tag:e,props:{},children:[{type:a,value:aa}]},{type:a,value:" 网站。我 2019 年下半年的时候被删掉过一次，后来我重新注册了账号，目前还没被删第二次。"}]},{type:a,value:c},{type:b,tag:l,props:{id:A},children:[{type:b,tag:f,props:{href:"#%E6%9C%89%E7%BD%91%E7%AB%99%E4%BA%86%E8%BF%98%E6%83%B3%E8%A6%81%E8%87%AA%E5%B7%B1%E5%9F%9F%E5%90%8D%E7%9A%84%E9%82%AE%E7%AE%B1%E6%80%8E%E4%B9%88%E6%95%B4%EF%BC%9F",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"考虑一下 "},{type:b,tag:f,props:{href:ac,rel:[g,h,i],target:j},children:[{type:a,value:ac}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"后面写得比较草率了，毕竟时隔一年了，就这样吧。"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2018-03-28-jekyll-blog-static-website",extension:".md",createdAt:ad,updatedAt:ad,readingTime:96300,prev:{slug:"hao123-issue",title:"记录一下解决Chrome主页被hao123劫持的过程"},next:{slug:"death-of-a-nobody",title:"社畜烛九之死——看《镇魂》有感"},relatedBlog:[{slug:"editor-for-my-cms-of-my-nuxt-blog",description:"April CMS，一个兼具Headless CMS和Flat File CMS的特征的操作文本文件的基于API提供内容的CMS，很实用的一个项目哦~",date:"2020-04-19T00:00:00.000Z",language:E,title:"给Nuxt使用的基于API的CMS——还有管理后台呢",tags:[ae,"JavaScript",af,"jQuery",F]},{slug:"nuxt-blog-static-website",description:"重构了一下博客，从Jekyll迁移到了Nuxt。方法是先用Node API 来解析 Markdown 文件，然后 Nuxt+Axios 获取 API 返回的文章内容并生成静态页面。",date:"2019-05-05T00:00:00.000Z",language:E,title:"如何使用Nuxt建立个人博客",tags:[ae,af,P,I,F]}]},mySlug:H,keywords:[],ui_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"},etsy_item_list:[{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F0ea1e7\u002F2912468073\u002Fil_340x340.2912468073_8grx.jpg",title:"eBay template builder tool | listing item detail page description HTML generator | mobile responsive | no active content | instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F956233793",feat:u,tag:"USD 10.00"},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F002b6c\u002F2881264109\u002Fil_340x340.2881264109_qo8o.jpg",title:"2021 Pocket mini Calendar 8 page foldable printable A7 size DIY zine style A4 paper PDF format instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F952862667",feat:u,tag:ag},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F7a7880\u002F2863101521\u002Fil_340x340.2863101521_88kc.jpg",title:"2021 weekly schedule planner | 10 types simple to-do list checklist calendar | printable A4 PDF editable excel template instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F939707561",feat:u,tag:G},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Fc0ac13\u002F2861084883\u002Fil_340x340.2861084883_qz8s.jpg",title:"100 day challenge planner | simple calendar | goal progress tracker | schedule A4 printable PDF excel template download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F925324268",feat:u,tag:ag},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F42e083\u002F2864671639\u002Fil_340x340.2864671639_1v9f.jpg",title:"2021 monthly calendar planner | elegant water blue theme simple | A4 printable PDF instant digital download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F934477940",feat:D,tag:ah},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F6691ba\u002F2815904808\u002Fil_340x340.2815904808_qn87.jpg",title:"2021 income expense track | annual monthly daily expenditure | bill spending tracker | personal financial statement | excel template",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F928907974",feat:D,tag:G},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F54d699\u002F2881129977\u002Fil_340x340.2881129977_n9ly.jpg",title:"multi year annual calendar | editable 2021 to 2030 selection excel template | three column | printable PDF xlsx instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F939749315",feat:D,tag:G},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Ff95279\u002F2863789693\u002Fil_340x340.2863789693_47rx.jpg",title:"2021 monthly calendar weekly schedule planner | multi year 8-color simple calendar | printable PDF with editable excel template download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F939397411",feat:D,tag:ah}]}],fetch:[],mutations:[]}}("text","element","\n","p","code","a","nofollow","noopener","noreferrer","_blank",2,"h2","true",-1,"span","icon","icon-link","。","HTTPS","li",true,"前言","静态博客模板哪家强？","买个高大上的域名咋样？","域名只能用http访问怎么办？","静态博客没有自带的评论系统怎么办？","有网站了还想要自己域名的邮箱怎么整？","username.github.io","ul",false,"中文","技术","USD 2.00","jekyll-blog-static-website","静态博客","如何在github上玩耍？","如何在Github上玩耍？","做个有心人，用-google-analytics-分析你的网站","做个有心人，用 Google Analytics 分析你的网站","disqus-被墙了怎么办？","disqus 被墙了怎么办？","Nuxt.js","这篇文章","https:\u002F\u002Fhelp.github.com\u002Farticles\u002Fwhat-is-my-disk-quota","https:\u002F\u002Fzhidao.baidu.com\u002Fquestion\u002F40565483.html","https:\u002F\u002Fsegmentfault.com\u002Fa\u002F1190000012468796","http:\u002F\u002Fjekyllthemes.org","www.houzhenni.com","、","对于 "," 这个网址使用 ","看","https:\u002F\u002Fsupport.google.com\u002Fanalytics\u002Fanswer\u002F1008015?hl=zh-Hans","http:\u002F\u002Fcenalulu.github.io\u002Fjekyll\u002Fsetup-comment-for-your-blog\u002F","php","https:\u002F\u002Fwww.000webhost.com","https:\u002F\u002Fwww.zoho.com","2021-02-12T13:47:44.253Z","我的项目","Node.js","USD 1.00","USD 3.00")));