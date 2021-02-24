//搜索测试

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

searchKey = "黑客帝国"
homePageUrl = "http://www.pianyuan.tv"
url = "http://www.pianyuan.tv/search?q=黑客帝国"
url = encodeURI(url)
let result = new Array();
request(url,null,(err, res, html) => {
    if (err || res.statusCode != 200) { return console.log("Failed to scrape the post page."); }
    const $ = cheerio.load(html);
    const hrefs = $("div.litpic > a").get().map(x => $(x).attr('href'));
    const imgs =  $("div.litpic > a > img").get().map(x => $(x).attr('src'));

    for (i = 0; i < hrefs.length; i++) {
        result.push({"href": homePageUrl+ hrefs[i], "imgUrl": homePageUrl + imgs[i]})
    }
    console.log(result)
});




