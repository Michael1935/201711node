var child_process = require('child_process');
var fs = require('fs');
var url = "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png"
function download(url) {
    // 先得到文件名
    var filename = url.split("/").pop();
    // 创建一个可写流的实例
    var ws = fs.createWriteStream('./' + filename);
    var curl = child_process.spawn('curl',[url]);
    curl.stdout.on('data',function (data) {
        ws.write(data);
    });
    curl.stdout.on('end',function (data) {
        ws.end();
        console.log('download has alearly');
    })
}
download(url);