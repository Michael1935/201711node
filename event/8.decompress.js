/**
 * Created by wy on 2017/11/18.
 */
var fs = require('fs');
var zlib = require('zlib');

// 解压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("文件jie压缩完成");