/**
 * Created by wy on 2017/11/18.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}))
// 主页输出“Hello world”
// app.use(bodyParser.json());
app.all('/',function (req,res) {
    res.send(req.body.text+'000'+req.body.title)
  });

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('server is running 3000');
    console.log(host);
    console.log(port);
})
