__NUXT_JSONP__("/blog/why-vlookup-cannot-return-value", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{blog:{slug:v,description:"VLOOKUP公式里的查找值必须和被查找区域的首列关键字为相同类型，否则会返回“#N\u002FA”，如果查找值是引用过来的，类型不同，此时可以强行转换类型，即可使VLOOKUP公式生效",date:"2019-12-28T00:00:00.000Z",language:w,layout:"post",title:"在Excel中用vlookup公式灵活查找数字或文本类型关键字",tags:[x,"vlookup",y],comments:i,related_blog:["2020-01-31-summary-of-my-life-in-2019"],toc:[{id:z,depth:k,text:A},{id:B,depth:k,text:C},{id:D,depth:k,text:E}],body:{type:"root",children:[{type:b,tag:m,props:{id:z},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#%E6%83%B3%E7%94%A8%E5%85%B3%E9%94%AE%E5%AD%97%E5%9C%A8%E5%A4%9A%E5%88%97%E6%95%B0%E6%8D%AE%E7%9A%84excel%E8%A1%A8%E9%87%8C%E6%89%BE%E5%AF%B9%E5%BA%94%E6%95%B0%E6%8D%AE%EF%BC%8C%E5%85%AC%E5%BC%8F%E6%80%8E%E4%B9%88%E5%86%99%EF%BC%9F",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"假设你在A1到B6范围内有一个姓名和性别的对应列表，你想在D2单元格输入姓名，在E2单元格得到性别，那么E2的公式可以按下图这样写。在E2输入 "},{type:b,tag:g,props:{},children:[{type:a,value:t}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:j,props:{alt:"vlookup01",src:"\u002Fimg\u002Fblog\u002F2019-12-28\u002Fvlookup01.png"},children:[]},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n图1"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"解析："},{type:b,tag:e,props:{},children:[]},{type:a,value:"\nVLOOKUP公式一共需要4个参数，前3个是必填的，第4个是选填的。"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"第一个参数是“查找值”"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"它也就是你想用来查找的关键字，在查找的时候要用这个关键字去匹配被查找的数据区域的第一列，从中找到匹配的那一项。假如你的关键字是姓名，那么你要确保被查找的数据区域内“姓名”是在左边第一列，而如果性别在左，姓名在右，那么用普通的VLOOKUP写法就找不到它了。这时可以搜一下“VLOOKUP反向查找”，太长不说。"}]},{type:a,value:c},{type:b,tag:h,props:{start:k},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"第二个参数是被查找的数据区域"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"本次被查找的数据处在A1到B6单元格范围内，其实你输入“A1:B6”或者“A2:B6”效果都是一样的，因为第一行是标题行，可以不要。"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n如果不想精确到哪一行，可以用“A:B”，那么被查找的数据范围就会扩大到整个两列，而不只是这12个单元格。"}]},{type:a,value:c},{type:b,tag:h,props:{start:3},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"第三个参数是用户想显示的数据在被查找的数据区的第几列"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"本次我们的数据区域只有两列，“性别”在第2列，如果我们想显示“性别”，那么就输入2，而如果我们想显示被查找的关键字自己，输入1就可以了。"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n此处要注意，这个 "},{type:b,tag:g,props:{},children:[{type:a,value:"2"}]},{type:a,value:" 是返回值相对于整个数据区域的第几列，如果数据区域在C1到D6，仍然是2列，“性别”仍然在第2列，那么虽然D是整个Excel的第4列，我们还是要输入2。"}]},{type:a,value:c},{type:b,tag:h,props:{start:4},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"第四个参数是布尔值，是问用户要不要模糊查找"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"“布尔值”就是TRUE和FALSE，如果这里不填，默认为TRUE，那么就会进行模糊查找匹配，可能你要找张涵予，而列表里没有张涵予，但是有张馨予，那就给你匹配到张馨予那里了，这样就不太对了。"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n总之建议你写上FALSE就行了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"* 如果有两个张涵予，一个是男的，一个是女的，那么返回哪个人的性别呢？"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n答：返回第一个出现的张涵予的性别，如果是女的在前面，那就返回女的。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"* 如何让单元格直接显示 "},{type:b,tag:g,props:{},children:[{type:a,value:t}]},{type:a,value:" ？"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n答：可能会有人想知道怎样让单元格直接显示 "},{type:b,tag:g,props:{},children:[{type:a,value:t}]},{type:a,value:" 而不是计算结果，其实有两种办法。"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"把单元格格式改成“文本”，然后双击单元格再回车即可。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"在单元格内输入"},{type:b,tag:g,props:{},children:[{type:a,value:"=\"=VLOOKUP(D2,A1:B6,2,FALSE)\""}]},{type:a,value:"即可。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"* 那么反过来，如果单元格内输入了公式却不显示计算结果只显示公式本身，那怎么办？"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n答：把单元格格式改成“数字”，然后双击单元格再回车即可。"}]},{type:a,value:c},{type:b,tag:m,props:{id:B},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#vlookup%E5%85%AC%E5%BC%8F%E6%98%8E%E6%98%8E%E6%98%AF%E5%AF%B9%E7%9A%84%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%94%E5%9B%9E%E4%BA%86na%EF%BC%9F",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"假如我们现在不用汉字而是用纯数字做查找值，那么会怎么样呢？看看下面的2个例子吧！"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:j,props:{alt:"vlookup02",src:"\u002Fimg\u002Fblog\u002F2019-12-28\u002Fvlookup02.png"},children:[]},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n图2"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:j,props:{alt:"vlookup03",src:"\u002Fimg\u002Fblog\u002F2019-12-28\u002Fvlookup03.png"},children:[]},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n图3"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"数据区域范围、查找值单元格位置、公式什么的全都跟之前是一样的，为什么都会返回一个错误呢？"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"这里要注意了，图2里面的数据区域的“学号”的单元格左上角有绿色小三角，且Excel默认给它们居左了，这说明从A2到A6的单元格格式为“文本”。我们再看用来查找的关键字D2，它左上角没有绿色小三角，且Excel默认给它居右了，这说明它的单元格格式为“数字”，两边的数据格式不一致。当我们用“数字”作为关键字去匹配“文本”格式的数据时，是找不到结果的，所以公式计算的结果就报错了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"再看图3，数据区域的“学号”的单元格左上角没有绿色小三角，且Excel默认给它居右了，这说明从A2到A6的单元格格式为“数字”。我们再看用来查找的关键字D2，它左上角有绿色小三角，且Excel默认给它们居左了，这说明它的单元格格式为“文本”，又是出现了数据格式不一致的情况，所以也是找不到的。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"例1有两种解决办法："}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"选中A2到A6，Excel会提示一个黄色的感叹号按钮，点击感叹号可以批量将文本格式的数字改成数字格式。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"给D2的数字前面加个英文的单引号"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"例2也有两种解决办法："}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"选中A2到A6，右击选中区域，点“单元格格式”，改成“文本”，但是还需要一个一个双击单元格再回车来确认输入，所以不推荐"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"把D2单元格里数字前面的英文单引号删掉"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:D},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#%E6%95%B0%E6%8D%AE%E5%8C%BA%E5%9F%9F%E5%92%8C%E6%9F%A5%E6%89%BE%E5%80%BC%E4%B8%8D%E8%83%BD%E4%BF%AE%E6%94%B9%EF%BC%8C%E5%A6%82%E4%BD%95%E8%AE%A9vlookup%E6%AD%A3%E7%A1%AE%E8%BF%94%E5%9B%9E%E6%95%B0%E6%8D%AE%EF%BC%9F",tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"想要解决上面的问题，但又不能直接改数据区域和查找值，那么我们可以对公式作如下的修改"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:j,props:{alt:"vlookup04",src:"\u002Fimg\u002Fblog\u002F2019-12-28\u002Fvlookup04.png"},children:[]},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n图4"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:j,props:{alt:"vlookup05",src:"\u002Fimg\u002Fblog\u002F2019-12-28\u002Fvlookup05.png"},children:[]},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n图5"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在VLOOKUP公式当中，如果我们希望查找值D2从数字转为“文本”，可以在查找值的位置输入 "},{type:b,tag:g,props:{},children:[{type:a,value:"D2&\"\""}]},{type:a,value:"，这样就能在不更改D2的情况下，强行把VLOOKUP公式内的查找值变成“文本”类型。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"而如果我们希望查找值D2从文本转为“数字”，可以在查找值的位置输入 "},{type:b,tag:g,props:{},children:[{type:a,value:"D2+0"}]},{type:a,value:"，这样就能在不更改D2的情况下，强行把VLOOKUP公式内的查找值变成“数字”类型。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"* 使用 "},{type:b,tag:g,props:{},children:[{type:a,value:"+0"}]},{type:a,value:" 时必须确认原数据是纯数字，否则会报错"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"以上~"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F2019-12-28-why-vlookup-cannot-return-value",extension:".md",createdAt:"2021-02-20T10:08:35.237Z",updatedAt:"2021-02-20T10:08:35.241Z",readingTime:23400,prev:{slug:"the-birth-of-the-drama-king",title:"沙雕小说沙雕剧，拆我CP虐我心——《少年江湖物语》观后感"},next:{slug:F,title:G},relatedBlog:[{slug:F,description:"我的2019年过得还算充实，看了很多剧，追了很多星，做了很多事，还学了很多东西，要继续保持。",date:"2020-01-31T00:00:00.000Z",language:w,title:G,tags:[y,"生活","剧评",x]}]},mySlug:v,keywords:[],ui_zh:{to_prev:"上一篇",to_next:"下一篇",related_posts:"相关文章"},ui_en:{to_prev:"Previous",to_next:"Next",related_posts:"Related Posts"},etsy_item_list:[{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F0ea1e7\u002F2912468073\u002Fil_340x340.2912468073_8grx.jpg",title:"eBay template builder tool | listing item detail page description HTML generator | mobile responsive | no active content | instant download",link:"\u002Fstore\u002Ftemplate-ebay-desc",feat:i,tag:"USD 10.00"},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F002b6c\u002F2881264109\u002Fil_340x340.2881264109_qo8o.jpg",title:"2021 Pocket mini Calendar 8 page foldable printable A7 size DIY zine style A4 paper PDF format instant download",link:"\u002Fstore\u002Fcalendar-8-page",feat:i,tag:H},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F7a7880\u002F2863101521\u002Fil_340x340.2863101521_88kc.jpg",title:"2021 weekly schedule planner | 10 types simple to-do list checklist calendar | printable A4 PDF editable excel template instant download",link:"\u002Fstore\u002Fcalendar-weekly",feat:i,tag:u},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Fc0ac13\u002F2861084883\u002Fil_340x340.2861084883_qz8s.jpg",title:"100 day challenge planner | simple calendar | goal progress tracker | schedule A4 printable PDF excel template download",link:"\u002Fstore\u002Fcalendar-100-day",feat:i,tag:H},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F42e083\u002F2864671639\u002Fil_340x340.2864671639_1v9f.jpg",title:"2021 monthly calendar planner | elegant water blue theme simple | A4 printable PDF instant digital download",link:"\u002Fstore\u002Fcalendar-monthly-elegant",feat:l,tag:I},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F6691ba\u002F2815904808\u002Fil_340x340.2815904808_qn87.jpg",title:"2021 income expense track | annual monthly daily expenditure | bill spending tracker | personal financial statement | excel template",link:"\u002Fstore\u002Fexcel-bill-tracker",feat:l,tag:u},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002F54d699\u002F2881129977\u002Fil_340x340.2881129977_n9ly.jpg",title:"multi year annual calendar | editable 2021 to 2030 selection excel template | three column | printable PDF xlsx instant download",link:"\u002Fstore\u002Fcalendar-annual",feat:l,tag:u},{src:"https:\u002F\u002Fi.etsystatic.com\u002F20529188\u002Fc\u002F2000\u002F2000\u002F0\u002F0\u002Fil\u002Ff95279\u002F2863789693\u002Fil_340x340.2863789693_47rx.jpg",title:"2021 monthly calendar weekly schedule planner | multi year 8-color simple calendar | printable PDF with editable excel template download",link:"\u002Fstore\u002Fcalendar-monthly-vertical",feat:l,tag:I}]}],fetch:[],mutations:[]}}("text","element","\n","p","br","li","code","ol",true,"img",2,false,"h2","a","true",-1,"span","icon","icon-link","=VLOOKUP(D2,A1:B6,2,FALSE)","USD 2.00","why-vlookup-cannot-return-value","中文","Excel","技术","想用关键字在多列数据的excel表里找对应数据，公式怎么写？","想用关键字在多列数据的Excel表里找对应数据，公式怎么写？","vlookup公式明明是对的，为什么返回了na？","VLOOKUP公式明明是对的，为什么返回了“#N\u002FA”？","数据区域和查找值不能修改，如何让vlookup正确返回数据？","数据区域和查找值不能修改，如何让VLOOKUP正确返回数据？","summary-of-my-life-in-2019","2019年的小总结","USD 1.00","USD 3.00")));