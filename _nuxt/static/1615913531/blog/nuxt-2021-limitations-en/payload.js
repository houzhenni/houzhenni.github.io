__NUXT_JSONP__("/blog/nuxt-2021-limitations-en", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){x[0]="Github";x[1]="bug report";x[2]="issue report";return {data:[{blog:{slug:t,description:"After updating to Nuxt 2.14.12, I encountered 3 problems, making the developing process a little difficult for me.",date:u,language:"English",layout:"post",title:"Limitations of latest version Nuxt in 2021",tags:["Tech",v,w],keywords:x,comments:g,related_blog:["2021-02-08-nuxt-2021-limitations"],toc:[{id:y,depth:k,text:z},{id:A,depth:k,text:B},{id:C,depth:k,text:D}],body:{type:"root",children:[{type:b,tag:l,props:{id:y},children:[{type:b,tag:h,props:{href:"#update-nuxt-and-use-of-content-module",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:z}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"In order to try out Nuxt module "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:", I updated Nuxt to latest version "},{type:b,tag:c,props:{},children:[{type:a,value:"2.14.12"}]},{type:a,value:", but actually I found out later that I could have used "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" without updating Nuxt."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fcontent.nuxtjs.org",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Here"}]},{type:a,value:" is the official introduction of "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" module."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"I changed all template files inside "},{type:b,tag:c,props:{},children:[{type:a,value:"pages\u002F"}]},{type:a,value:" folder from my self-built api to using "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" module, optimized some nested callbacks to more clean and simplified formats."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Now the "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" module can parse not only "},{type:b,tag:c,props:{},children:[{type:a,value:E}]},{type:a,value:" files, but also "},{type:b,tag:c,props:{},children:[{type:a,value:".txt"}]},{type:a,value:", "},{type:b,tag:c,props:{},children:[{type:a,value:".csv"}]},{type:a,value:" and "},{type:b,tag:c,props:{},children:[{type:a,value:".yml"}]},{type:a,value:" files, way more powerful than my own api."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"With "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" module, I'm more than content with it."}]},{type:a,value:d},{type:b,tag:l,props:{id:A},children:[{type:b,tag:h,props:{href:"#issues-with-nuxt-new-version",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:B}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Although "},{type:b,tag:c,props:{},children:[{type:a,value:f}]},{type:a,value:" module is very powerful, the latest Nuxt became less powerful than it was before. Here are 3 problems that I found:"}]},{type:a,value:d},{type:b,tag:"ol",props:{},children:[{type:a,value:d},{type:b,tag:r,props:{},children:[{type:a,value:"The new version Nuxt will generate "},{type:b,tag:c,props:{},children:[{type:a,value:i}]},{type:a,value:" for static pages, but it also did "},{type:b,tag:c,props:{},children:[{type:a,value:"url encoding"}]},{type:a,value:" with the paths for storing "},{type:b,tag:c,props:{},children:[{type:a,value:i}]},{type:a,value:", if the path contains non-English characters, the generated static webpage will not be able to access the "},{type:b,tag:c,props:{},children:[{type:a,value:i}]},{type:a,value:" generated specifically for this page, for they "},{type:b,tag:c,props:{},children:[{type:a,value:i}]},{type:a,value:" path needs to be "},{type:b,tag:c,props:{},children:[{type:a,value:"url encoded"}]},{type:a,value:" again before it can be accessed."}]},{type:a,value:d},{type:b,tag:r,props:{},children:[{type:a,value:"Nuxt cannot render page "},{type:b,tag:c,props:{},children:[{type:a,value:"slug"}]},{type:a,value:" or "},{type:b,tag:c,props:{},children:[{type:a,value:"tag"}]},{type:a,value:" ending with "},{type:b,tag:c,props:{},children:[{type:a,value:F}]},{type:a,value:", one of the Nuxt team member said that they did fallback for this, the only thing I need to do is to set it right in "},{type:b,tag:c,props:{},children:[{type:a,value:G}]},{type:a,value:". After the setting, the pages can be rendered in "},{type:b,tag:c,props:{},children:[{type:a,value:"Dev mode"}]},{type:a,value:", but when static files are generated, these paths are nowhere to be found."}]},{type:a,value:d},{type:b,tag:r,props:{},children:[{type:a,value:"The latest version of Nuxt has a built-in crawler that can crawl dynamic routes so that I don't have to list out every dynamic routes for "},{type:b,tag:c,props:{},children:[{type:a,value:"generate"}]},{type:a,value:". Here comes the problem, the crawler somehow ignores paths ending with "},{type:b,tag:c,props:{},children:[{type:a,value:F}]},{type:a,value:", this leads to the absence of certain pages, I have to specify these routes in "},{type:b,tag:c,props:{},children:[{type:a,value:G}]},{type:a,value:" so that they can be generated. Also if I referenced a non-existent internal path in some pages, this crawler will not verify its validity, Nuxt will still try to generate this page, resulting in an error. In a word, pages that need to be generated got ignored, while pages that do not need to be generated are being generated."}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:l,props:{id:C},children:[{type:b,tag:h,props:{href:"#experience-from-this",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:D}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Web application frameworks cannot be done within one night, I understand this. But the problems that did not exist in old version appear in the new one, I cannot say that I don't feel a little frustrated."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"I really hope Nuxt can be more and more powerful, empowering amateur programmers like me along the way."}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2021-02-08-nuxt-2021-limitations-en",extension:E,createdAt:"2021-03-16T16:51:27.342Z",updatedAt:"2021-03-16T16:51:27.346Z",readingTime:129300,prev:{slug:"nuxt-blog-generate-files-n-push-to-another-repo",title:"使用Github Actions把Nuxt静态网站push到其他repository"},next:{slug:H,title:I},relatedBlog:[{slug:H,description:"升级Nuxt到2.14.12之后，遇到了3个问题，这个新版本用起来有点不太顺手。",date:u,language:"中文",title:I,tags:["技术",v,w]}]},mySlug:t,keywords:x,ui_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"},etsy_item_list:[{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F0ea1e7\u002F2912468073\u002Fil_340x340.2912468073_8grx.jpg",title:"eBay template builder tool | listing item detail page description HTML generator | mobile responsive | no active content | instant download",link:"\u002Fstore\u002Ftemplate-ebay-desc",feat:g,tag:"USD 10.00"},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F002b6c\u002F2881264109\u002Fil_340x340.2881264109_qo8o.jpg",title:"2021 Pocket mini Calendar 8 page foldable printable A7 size DIY zine style A4 paper PDF format instant download",link:"\u002Fstore\u002Fcalendar-8-page",feat:g,tag:J},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F7a7880\u002F2863101521\u002Fil_340x340.2863101521_88kc.jpg",title:"2021 weekly schedule planner | 10 types simple to-do list checklist calendar | printable A4 PDF editable excel template instant download",link:"\u002Fstore\u002Fcalendar-weekly",feat:g,tag:s},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Fc0ac13\u002F2861084883\u002Fil_340x340.2861084883_qz8s.jpg",title:"100 day challenge planner | simple calendar | goal progress tracker | schedule A4 printable PDF excel template download",link:"\u002Fstore\u002Fcalendar-100-day",feat:g,tag:J},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F42e083\u002F2864671639\u002Fil_340x340.2864671639_1v9f.jpg",title:"2021 monthly calendar planner | elegant water blue theme simple | A4 printable PDF instant digital download",link:"\u002Fstore\u002Fcalendar-monthly-elegant",feat:j,tag:K},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F6691ba\u002F2815904808\u002Fil_340x340.2815904808_qn87.jpg",title:"2021 income expense track | annual monthly daily expenditure | bill spending tracker | personal financial statement | excel template",link:"\u002Fstore\u002Fexcel-bill-tracker",feat:j,tag:s},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F54d699\u002F2881129977\u002Fil_340x340.2881129977_n9ly.jpg",title:"multi year annual calendar | editable 2021 to 2030 selection excel template | three column | printable PDF xlsx instant download",link:"\u002Fstore\u002Fcalendar-annual",feat:j,tag:s},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Ff95279\u002F2863789693\u002Fil_340x340.2863789693_47rx.jpg",title:"2021 monthly calendar weekly schedule planner | multi year 8-color simple calendar | printable PDF with editable excel template download",link:"\u002Fstore\u002Fcalendar-monthly-vertical",feat:j,tag:K}]}],fetch:{},mutations:[]}}("text","element","code","\n","p","content",true,"a","payload",false,2,"h2","true",-1,"span","icon","icon-link","li","USD 2.00","nuxt-2021-limitations-en","2021-02-08T00:00:00.000Z","Nuxt.js","Nuxt Content",Array(3),"update-nuxt-and-use-of-content-module","Update Nuxt and use of content module","issues-with-nuxt-new-version","Issues with Nuxt new version","experience-from-this","Experience from this",".md",".js","nuxt.config.js","nuxt-2021-limitations","2021年Nuxt新版本的一些限制","USD 1.00","USD 3.00")));