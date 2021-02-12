__NUXT_JSONP__("/blog/minesweeper", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:[{blog:{slug:s,description:"我之前用原生JavaScript、jQuery、微信小程序写过3个版本的扫雷游戏，当我体验过类似Vue的微信小程序之后，学习Vue好像是自然而然的事，于是我终于用Vue写出了最让我满意的一个版本的扫雷~",date:"2018-11-18T00:00:00.000Z",language:t,layout:"post",title:"我最喜欢的PC游戏——扫雷",tags:[u,"JavaScript",v,"Vue.js"],comments:f,related_blog:["2018-11-08-product-landing-page-with-scroll-effects"],toc:[{id:g,depth:h,text:g},{id:i,depth:h,text:i},{id:w,depth:h,text:x},{id:j,depth:h,text:j}],body:{type:"root",children:[{type:b,tag:k,props:{id:g},children:[{type:b,tag:e,props:{href:"#%E6%88%91%E5%92%8C%E6%89%AB%E9%9B%B7",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:g}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"我其实不是一个爱玩游戏的人，不管是PC、iPad、手机还是PS4上的游戏，我都是浅尝辄止，过了一段时间之后甚至记不起自己装过什么游戏。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"小学大概三、四年级时家里开始有台式机了，然而我一个半文盲并不怎么会操作电脑，只是观察我爸爸玩电脑自带的游戏，后来我就学会玩了，并且一直持续到大学。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"大二的时候爸爸给我买了个苹果壳子的无牌笔记本电脑，由于里面装的是盗版精简Windows系统，小游戏和日语输入法这种一般人用不到的东西就没有装，于是我用优盘从学校的机房把它们拷出来，装进了自己的电脑。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"当然了，这也证明了小游戏和日语都是一般人不需要的东西。"}]},{type:a,value:c},{type:b,tag:k,props:{id:i},children:[{type:b,tag:e,props:{href:"#%E6%88%91%E5%86%99%E6%89%AB%E9%9B%B7",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:i}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"好了，现在说说我做的这个扫雷。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"首先写一个雷区的算法，获得一个地雷的矩阵，然后把它渲染到画面上。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"这个雷区的算法是我在codefights上刷题的时候想到的，也是因为做了这道题，我才兴起了做这个游戏的念头。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"一开始想挑战下用原生JavaScript，可仅仅是写document.getElementsByTagName就已经累个半死了，点击事件也都写得很长，还只完成了基本的翻开单个方块、标记地雷、确认输赢、开始新一局等功能，远没有达到我想要的复刻经典版功能的目标。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"后来第二版用了jQuery，在DOM操作上确实简单了一些，但是仍然免不了在看不见摸不着的数据和眼见着要操作的DOM之间纠缠，而且由于各种限制，游戏在功能上并没有增多。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"再来是第三版，尝试用微信小程序的wxml、wxss、JS来写。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"学习微信小程序的文档和各类经验贴的时候确实有不少收获，由于它和Vue的相似性，顺带还学了点Vue，而游戏的功能上则新增了计时、计数、保存成绩等功能。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"然而由于微信小程序限制了开发游戏的时候不可以使用wxml、wxss、JS，它就这么死掉了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"它死掉之后，我因为过于伤心，直到11月之前都没有再碰过。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"上个星期五晚上，我突发奇想，要用Vue来重写一遍，于是我重新设计了CSS，再结合Vue的文档，终于用了一个周末的时间写出了这个最新的VueJS版本的扫雷游戏。"}]},{type:a,value:c},{type:b,tag:k,props:{id:w},children:[{type:b,tag:e,props:{href:"#vue%E7%89%88%E6%89%AB%E9%9B%B7",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"这个Vue版本的最大特点是实现了根据窗口大小调整雷区和地雷数，而且可以做到点开周围没有雷的方块时可以一连翻开一大片。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"之前的三个版本中，我一直想做成片翻开方块的功能，但是写着写着就报错call stack limit exceeded，自查又查不出bug在哪，简直令人头秃。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"这次我着重在这个功能上花了心思，每写一步都去console输出一下，一旦报错就立刻调整。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"最终结果是，大概报错3、4次之后就完成了这个功能，开心~"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"除了成片翻开的功能之外，我还在设置按钮和它的弹出窗口上下了功夫。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"设置按钮的图标是我以前用CSS画的八齿空心齿轮，而它的弹出窗口本身是一个轮播图的形式，以后也可以直接复用。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"轮播图在 "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.houzhenni.com\u002Fmyapp\u002Fcarousel-vue.html",rel:[y,z,A],target:B},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"我想做的功能都实现了，这个版本基本上算是圆满了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"扫雷游戏完整版在 "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.houzhenni.com\u002Fmyapp\u002Fminesweeper-vue.html",rel:[y,z,A],target:B},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:k,props:{id:j},children:[{type:b,tag:e,props:{href:"#%E5%85%B6%E4%BB%96%E4%BA%BA%E7%9A%84%E6%89%AB%E9%9B%B7",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在查找各种用法资料的时候，我顺便还看了一些关于扫雷的帖子，才发现原来世界上还有比我更沉迷于扫雷的人。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"他们专门建立了扫雷的论坛，按照各人的扫雷成绩进行排名，甚至还拿到世界上参与排名。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"跟他们比起来，我的扫雷成绩可能只能算新手入门，但我对扫雷这个游戏的热爱跟他们是一样的。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"有那么点爱好，真的挺好。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"完~"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2018-11-18-minesweeper",extension:".md",createdAt:D,updatedAt:D,readingTime:12300,prev:{slug:E,title:F},next:{slug:"memories-of-the-alhambra",title:"阿尔罕布拉宫的回忆"},relatedBlog:[{slug:E,description:"之前做了不添加任何效果的产品页，这两天看苹果ipad pro的产品页，惊艳到不行，所以自己仿照做一个鼠标滚轮事件触发页面元素平移的版本，不过比较粗糙。",date:"2018-11-08T00:00:00.000Z",language:t,title:F,tags:[u,v]}]},mySlug:s,keywords:[],ui_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"},etsy_item_list:[{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F0ea1e7\u002F2912468073\u002Fil_340x340.2912468073_8grx.jpg",title:"eBay template builder tool | listing item detail page description HTML generator | mobile responsive | no active content | instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F956233793",feat:f,tag:"USD 10.00"},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F002b6c\u002F2881264109\u002Fil_340x340.2881264109_qo8o.jpg",title:"2021 Pocket mini Calendar 8 page foldable printable A7 size DIY zine style A4 paper PDF format instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F952862667",feat:f,tag:G},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F7a7880\u002F2863101521\u002Fil_340x340.2863101521_88kc.jpg",title:"2021 weekly schedule planner | 10 types simple to-do list checklist calendar | printable A4 PDF editable excel template instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F939707561",feat:f,tag:r},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Fc0ac13\u002F2861084883\u002Fil_340x340.2861084883_qz8s.jpg",title:"100 day challenge planner | simple calendar | goal progress tracker | schedule A4 printable PDF excel template download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F925324268",feat:f,tag:G},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F42e083\u002F2864671639\u002Fil_340x340.2864671639_1v9f.jpg",title:"2021 monthly calendar planner | elegant water blue theme simple | A4 printable PDF instant digital download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F934477940",feat:q,tag:H},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F6691ba\u002F2815904808\u002Fil_340x340.2815904808_qn87.jpg",title:"2021 income expense track | annual monthly daily expenditure | bill spending tracker | personal financial statement | excel template",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F928907974",feat:q,tag:r},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F54d699\u002F2881129977\u002Fil_340x340.2881129977_n9ly.jpg",title:"multi year annual calendar | editable 2021 to 2030 selection excel template | three column | printable PDF xlsx instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F939749315",feat:q,tag:r},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Ff95279\u002F2863789693\u002Fil_340x340.2863789693_47rx.jpg",title:"2021 monthly calendar weekly schedule planner | multi year 8-color simple calendar | printable PDF with editable excel template download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F939397411",feat:q,tag:H}]}],fetch:[],mutations:[]}}("text","element","\n","p","a",true,"我和扫雷",2,"我写扫雷","其他人的扫雷","h2","true",-1,"span","icon","icon-link",false,"USD 2.00","minesweeper","中文","我的项目","技术","vue版扫雷","Vue版扫雷","nofollow","noopener","noreferrer","_blank","这里","2021-02-12T13:47:44.253Z","product-landing-page-with-scroll-effects","添加元素平移效果的产品页面","USD 1.00","USD 3.00")));