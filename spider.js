//种子页测试

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');


url = "http://www.pianyuan.tv/r_ZkBaDefn0.html"


request(url,null,(err, res, html) => {
    if (err || res.statusCode != 200) { return console.log("Failed to scrape the post page."); }
    const $ = cheerio.load(html);
    const a = $("a.btn.btn-primary.btn-sm")
    console.log('电影的种子为: '+ a.attr().href)
});


