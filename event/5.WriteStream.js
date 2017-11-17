var fs = require('fs');
var data = '菜鸟我是一个菜鸟';

// 创建可以写入的流，写入到文件output.txt
var writerStream = fs.createWriteStream('output.txt');

// 设置编码为 utf-8
writerStream.write(data, 'UTF8');
// markup file end
writerStream.end();
// 处理流事件  --> data, end, and error
writerStream.on('finish',function () {
    console.log('already write finish!');
});
writerStream.on('error',function () {
    console.log(error.stack);
});
console.log('程序执行完成');