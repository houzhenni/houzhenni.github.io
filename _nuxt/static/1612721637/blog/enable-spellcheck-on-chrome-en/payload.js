__NUXT_JSONP__("/blog/enable-spellcheck-on-chrome-en", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{blog:{slug:q,description:"My Chrome used to check spelling for me when typing, but recently the spellcheck isn't working normally. I thought it was something related to coding, but it turns out to be just a browser setting thing.",date:"2020-05-01T00:00:00.000Z",language:r,layout:"post",title:"How to enable spell check on Chrome",tags:[s,"HTML","Tech"],comments:g,related_blog:["2017-05-28-hao123-issue"],toc:[{id:t,depth:j,text:u},{id:v,depth:j,text:w},{id:x,depth:j,text:y}],body:{type:"root",children:[{type:b,tag:k,props:{id:t},children:[{type:b,tag:h,props:{href:"#annoying-typos-driving-me-mad",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I have been writing blog articles with both Chinese and English versions since April, and I can always find a lot of typos after posting the English version."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Also I've been using this "},{type:b,tag:e,props:{},children:[{type:a,value:"CMS"}]},{type:a,value:" that I built on my own, the editor just wouldn't show any spelling mistakes for me."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But the browser used to check spellings, when has it stopped?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I started searching some programming ways to solve it, but they won't work, then I tried searching only Chrome-related keywords, and fond the solution."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This "},{type:b,tag:h,props:{href:"https:\u002F\u002Fwww.reddit.com\u002Fr\u002Fchrome\u002Fcomments\u002F6ztplx\u002Fcant_enable_spell_check_in_chrome\u002F",rel:[z,A,B],target:C},children:[{type:a,value:"reddit discussion"}]},{type:a,value:" is the key solution that I found."}]},{type:a,value:c},{type:b,tag:k,props:{id:v},children:[{type:b,tag:h,props:{href:"#can-it-be-solved-with-codes",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Yes, and no."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If spellcheck is enabled on Chrome, you can control whether to allow this feature by setting "},{type:b,tag:e,props:{},children:[{type:a,value:D}]},{type:a,value:E},{type:b,tag:e,props:{},children:[{type:a,value:"spellcheck=\"false\""}]},{type:a,value:" for specific elements on your website or web apps."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And unlike other "},{type:b,tag:e,props:{},children:[{type:a,value:"true\u002Ffalse"}]},{type:a,value:" attributes, if you want it enabled, you have to address it explicitly with "},{type:b,tag:e,props:{},children:[{type:a,value:D}]},{type:a,value:" rather than just write down the attribute name, like "},{type:b,tag:e,props:{},children:[{type:a,value:"\u003Cinput type=\"text\" spellcheck\u002F\u003E"}]},{type:a,value:". You can find some explanations "},{type:b,tag:h,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTML\u002FGlobal_attributes\u002Fspellcheck",rel:[z,A,B],target:C},children:[{type:a,value:"here"}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But if it is disabled on Chrome, the codes are just useless, you will not be able to turn it on by force."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"By "},{type:b,tag:G,props:{},children:[{type:a,value:"disabled"}]},{type:a,value:", I don't mean that you might really have clicked a button called "},{type:b,tag:e,props:{},children:[{type:a,value:"disable spellcheck"}]},{type:a,value:", it's possible that you just haven't "},{type:b,tag:G,props:{},children:[{type:a,value:"enabled"}]},{type:a,value:" the right setting. Believe me, I've been there too."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I'm a Chinese speaker, but I can also read Japanese and some Korean, so I added Japanese and Korean to browser language setting to stop Chrome translating Japanese and Korean pages. And I might have changed something that I shouldn't change at that time."}]},{type:a,value:c},{type:b,tag:k,props:{id:x},children:[{type:b,tag:h,props:{href:"#lets-set-it-right-on-chrome",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Go to "},{type:b,tag:e,props:{},children:[{type:a,value:"three dots \u003E Settings \u003E Advanced \u003E Languages \u003E Spell Check"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you only see a language "},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:" but without specific country name in parenthesis next to it, like "},{type:b,tag:e,props:{},children:[{type:a,value:"English(United Kingdom)"}]},{type:a,value:E},{type:b,tag:e,props:{},children:[{type:a,value:"English(United States)"}]},{type:a,value:", then you will see this message:"}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"checkSpell check isn’t supported for the languages you selected."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So please add those languages with country names in parenthesis and enable spellcheck for these languages, then your wavy red underline will be back and working."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"Shortcut"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Go to any input box or textarea box, type anything, right click on any word, then go to "},{type:b,tag:e,props:{},children:[{type:a,value:"Spell check \u003E Language settings"}]},{type:a,value:F}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2020-05-01-enable-spellcheck-on-chrome-en",extension:".md",createdAt:"2021-02-07T18:13:06.254Z",updatedAt:"2021-02-07T18:13:06.258Z",readingTime:114900,prev:{slug:"editor-for-my-cms-of-my-nuxt-blog-en",title:"Write a control panel for my API-based CMS for Nuxt"},next:{slug:"roommate-relationship",title:"论室友关系"},relatedBlog:[{slug:"hao123-issue",description:"Chrome主页被hao123劫持了，该怎么办？",date:"2017-05-28T00:00:00.000Z",language:"中文",title:"记录一下解决Chrome主页被hao123劫持的过程",tags:[s,"首页劫持","技术"]}]},mySlug:q,ui_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"},etsy_item_list:[{src:"\u002Fimg\u002Fetsy\u002Fetsy08.jpg",title:"eBay template builder tool | listing item detail page description HTML generator | mobile responsive | no active content | instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F956233793",tag:f,feat:g},{src:"\u002Fimg\u002Fetsy\u002Fetsy01.jpg",title:"2021 to 2030 annual calendar | editable multi year selection excel template | three column | printable PDF xlsx instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F939749315",tag:f,feat:i},{src:"\u002Fimg\u002Fetsy\u002Fetsy02.jpg",title:"2021 weekly schedule planner | 10 types simple to-do list checklist calendar | printable PDF editable excel template instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F939707561",tag:f,feat:g},{src:"\u002Fimg\u002Fetsy\u002Fetsy03.jpg",title:"2021 monthly calendar weekly schedule planner | multi year multi color simple calendar | printable PDF with editable excel template download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F939397411",tag:f,feat:i},{src:"\u002Fimg\u002Fetsy\u002Fetsy04.jpg",title:"100 day challenge planner minimalist | simple calendar | goal progress tracker | schedule A4 printable PDF download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F925324268",tag:f,feat:g},{src:"\u002Fimg\u002Fetsy\u002Fetsy05.jpg",title:"2021 income expense track | annual monthly daily expenditure | bill spending tracker | personal financial statement | excel template",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F928907974",tag:f,feat:i},{src:"\u002Fimg\u002Fetsy\u002Fetsy06.jpg",title:"2021 monthly calendar planner | elegant water blue theme simple | A4 printable PDF instant digital download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F934477940",tag:f,feat:i},{src:"\u002Fimg\u002Fetsy\u002Fetsy07.jpg",title:"2021 Pocket Calendar 8 page foldable printable A7 size DIY zine style A4 paper PDF format instant download",link:"https:\u002F\u002Fwww.etsy.com\u002Flisting\u002F952862667",tag:f,feat:g}]}],fetch:[],mutations:[]}}("text","element","\n","p","code","Digital",true,"a",false,2,"h2","true",-1,"span","icon","icon-link","enable-spellcheck-on-chrome-en","English","Chrome","annoying-typos-driving-me-mad","Annoying typos driving me mad","can-it-be-solved-with-codes","Can it be solved with codes?","lets-set-it-right-on-chrome","Let's set it right on Chrome","nofollow","noopener","noreferrer","_blank","spellcheck=\"true\""," or ",".","em")));