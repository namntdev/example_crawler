var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
var articleSchema = new mongoose.Schema({
  title: String,
  shortDescription: String,
  url: String
});
var Article = mongoose.model('Article', articleSchema);

var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            var title = $("title").text();
            let tinmoi = [];

            $('#ulTinMoi li').each(function (i, e) {
                var title = $(this).find('.text').text();
                var url = 'http://cafebiz.vn' + $(this).find('a').attr("href");
                var data = new Article({ title: title, shortDescription: title, url: url });
                data.save();
            });
            //console.log(tinmoi);
            //var data = new Article({ title: title, shortDescription: 'shortDescription', url: 'url' });
            //data.save();
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('http://cafebiz.vn/');