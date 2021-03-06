// 引入 events 模块
var events = require('events');
// 创建 eventEmiter 对象
var eventEmiter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function concneted() {
    console.log('链接成功');
    // 触发data_received 事件
    eventEmiter.emit('data_received');
};

// 绑定connection 事件处理程序
eventEmiter.on('connection', connectHandler);

// 使用匿名函数绑定data_received事件
eventEmiter.on('data_received',function () {
    console.log('数据接收成功');
});

// 触发connection事件
eventEmiter.emit('connection');
console.log("程序执行完毕");
