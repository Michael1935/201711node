/**
 * Created by wy on 2017/9/24.
 */
var express = require('express');
var app = express();
app.get('/',function (req,res) {
    res.sendfile('./index.html');
});
//app是一个监听函数

var server=require('http').createServer(app);
var io =require('socket.io')(server);
//监听客户端的链接事件

io.on('connection',function (socket) {
    console.log('客户端已经连接');
    // 监听客户端发过来的消息

    socket.on('message',function (msg) {
        console.log(msg);
        socket.send(msg+' too');
    })
});
server.listen(8181);