/**
 * Created by wy on 2017/11/18.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
// 创建服务器
http.createServer(function (req,res) {
    var pathname = url.parse(req.url).pathname;
    // 输出
    console.log('request for'+ pathname+'received');
    fs.readFile(pathname.substr(1),function (err,data) {
        if(err){
            console.log(err);
            // http状态码： 404 not found
            // Content Type : text/plain
            res.writeHead(404,{'Content-Type':'text/html'});
        } else {
            // 200 ok
            // Content-Type : text/plain
            res.writeHead(200,{'Content-Type':'text/html'});
            // 响应文件内容
            res.write(data.toString());
        }
        // 发送响应数据
        res.end();
    })
}).listen(8085);
//控制台打印信息
console.log("Server running at http://localhost:8085");