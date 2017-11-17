/**
 * Created by wy on 2017/11/15.
 */

var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(req, res) {
        console.log('request received');
        var pathname = url.parse(req.url).pathname;
        console.log("request for" + pathname + " received");
        // 路由模块的处理
        route(pathname);

        res.writeHeader(200, {"Content-Type": "text/plain"});
        res.write("hello world");
        res.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("server has started");
}

exports.start = start;
