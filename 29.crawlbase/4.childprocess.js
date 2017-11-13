var child_process = require('child_process');
console.log(process.execPath)
function execNodeFile(filename) {
    var pro = child_process.spawn(process.execPath,[filename]);
    pro.stdout.pipe(process.stdout);
    pro.stderr.pipe(process.stderr);
    // 当子进程出错的时候
    pro.on('err',function (code) {
        console.log(code);
    });
    // 当子进程结束的时候主进程也关闭掉
    pro.on('close',function (code) {
        console.log(code)
        process.exit();
    })
}
execNodeFile('1.js');