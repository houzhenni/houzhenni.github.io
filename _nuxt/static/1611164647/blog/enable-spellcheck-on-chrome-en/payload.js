__NUXT_JSONP__("/blog/enable-spellcheck-on-chrome-en", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{blog:{slug:n,description:"My Chrome used to check spelling for me when typing, but recently the spellcheck isn't working normally. I thought it was something related to coding, but it turns out to be just a browser setting thing.",date:"2020-05-01T00:00:00.000Z",language:o,layout:"post",title:"How to enable spell check on Chrome",tags:[p,"HTML","Tech"],comments:true,related_blog:["2017-05-28-hao123-issue"],toc:[{id:q,depth:g,text:r},{id:s,depth:g,text:t},{id:u,depth:g,text:v}],body:{type:"root",children:[{type:b,tag:h,props:{id:q},children:[{type:b,tag:f,props:{href:"#annoying-typos-driving-me-mad",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I have been writing blog articles with both Chinese and English versions since April, and I can always find a lot of typos after posting the English version."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Also I've been using this "},{type:b,tag:e,props:{},children:[{type:a,value:"CMS"}]},{type:a,value:" that I built on my own, the editor just wouldn't show any spelling mistakes for me."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But the browser used to check spellings, when has it stopped?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I started searching some programming ways to solve it, but they won't work, then I tried searching only Chrome-related keywords, and fond the solution."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.reddit.com\u002Fr\u002Fchrome\u002Fcomments\u002F6ztplx\u002Fcant_enable_spell_check_in_chrome\u002F",rel:[w,x,y],target:z},children:[{type:a,value:"reddit discussion"}]},{type:a,value:" is the key solution that I found."}]},{type:a,value:c},{type:b,tag:h,props:{id:s},children:[{type:b,tag:f,props:{href:"#can-it-be-solved-with-codes",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Yes, and no."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If spellcheck is enabled on Chrome, you can control whether to allow this feature by setting "},{type:b,tag:e,props:{},children:[{type:a,value:A}]},{type:a,value:B},{type:b,tag:e,props:{},children:[{type:a,value:"spellcheck=\"false\""}]},{type:a,value:" for specific elements on your website or web apps."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And unlike other "},{type:b,tag:e,props:{},children:[{type:a,value:"true\u002Ffalse"}]},{type:a,value:" attributes, if you want it enabled, you have to address it explicitly with "},{type:b,tag:e,props:{},children:[{type:a,value:A}]},{type:a,value:" rather than just write down the attribute name, like "},{type:b,tag:e,props:{},children:[{type:a,value:"\u003Cinput type=\"text\" spellcheck\u002F\u003E"}]},{type:a,value:". You can find some explanations "},{type:b,tag:f,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FHTML\u002FGlobal_attributes\u002Fspellcheck",rel:[w,x,y],target:z},children:[{type:a,value:"here"}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But if it is disabled on Chrome, the codes are just useless, you will not be able to turn it on by force."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"By "},{type:b,tag:D,props:{},children:[{type:a,value:"disabled"}]},{type:a,value:", I don't mean that you might really have clicked a button called "},{type:b,tag:e,props:{},children:[{type:a,value:"disable spellcheck"}]},{type:a,value:", it's possible that you just haven't "},{type:b,tag:D,props:{},children:[{type:a,value:"enabled"}]},{type:a,value:" the right setting. Believe me, I've been there too."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I'm a Chinese speaker, but I can also read Japanese and some Korean, so I added Japanese and Korean to browser language setting to stop Chrome translating Japanese and Korean pages. And I might have changed something that I shouldn't change at that time."}]},{type:a,value:c},{type:b,tag:h,props:{id:u},children:[{type:b,tag:f,props:{href:"#lets-set-it-right-on-chrome",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Go to "},{type:b,tag:e,props:{},children:[{type:a,value:"three dots \u003E Settings \u003E Advanced \u003E Languages \u003E Spell Check"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you only see a language "},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:" but without specific country name in parenthesis next to it, like "},{type:b,tag:e,props:{},children:[{type:a,value:"English(United Kingdom)"}]},{type:a,value:B},{type:b,tag:e,props:{},children:[{type:a,value:"English(United States)"}]},{type:a,value:", then you will see this message:"}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"checkSpell check isn’t supported for the languages you selected."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So please add those languages with country names in parenthesis and enable spellcheck for these languages, then your wavy red underline will be back and working."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"Shortcut"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Go to any input box or textarea box, type anything, right click on any word, then go to "},{type:b,tag:e,props:{},children:[{type:a,value:"Spell check \u003E Language settings"}]},{type:a,value:C}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2020-05-01-enable-spellcheck-on-chrome-en",extension:".md",createdAt:"2021-01-20T11:21:17.509Z",updatedAt:"2021-01-20T14:40:27.777Z",prev:{slug:"editor-for-my-cms-of-my-nuxt-blog-en",title:"Write a control panel for my API-based CMS for Nuxt"},next:{slug:"roommate-relationship",title:"论室友关系"},relatedBlog:[{slug:"hao123-issue",description:"Chrome主页被hao123劫持了，该怎么办？",date:"2017-05-28T00:00:00.000Z",title:"记录一下解决Chrome主页被hao123劫持的过程",tags:[p,"hao123","首页劫持","技术"]}]},mySlug:n,ui_str_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_str_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"}}],fetch:[],mutations:[]}}("text","element","\n","p","code","a",2,"h2","true",-1,"span","icon","icon-link","enable-spellcheck-on-chrome-en","English","Chrome","annoying-typos-driving-me-mad","Annoying typos driving me mad","can-it-be-solved-with-codes","Can it be solved with codes?","lets-set-it-right-on-chrome","Let's set it right on Chrome","nofollow","noopener","noreferrer","_blank","spellcheck=\"true\""," or ",".","em")));