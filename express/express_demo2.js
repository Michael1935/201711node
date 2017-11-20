/**
 * Created by wy on 2017/11/18.
 */
var express = require('express');
var app = express();
// 主页输出“Hello world”
app.get('/',function (req,res) {
    console.log("主页 GET 请求");
    res.send("Hello GET");
});

// POST 请求
app.post('/',function (req,res) {
    console.log("主页的 POST 请求");
    res.send("Hello Post")
});
var server = app.listen(8081,function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host,port);
});

// /list_user 页面的get 请求
app.get('/list_user',function (req,res) {
    console.log("/list_user GET 请求");
    res.send("用户列表页面");
})