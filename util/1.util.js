/**
 * Created by wy on 2017/9/24.
 */
var util = require('util');
function Parent() {
    this.name='parent';
}
Parent.prototype.say=function () {
    console.log(this.name);
}
function Child() {
    this.name='child';
}
// 类似   Child.prototype=new Parent.prototype;
util.inherits(Child,Parent);

var child=new Child();
child.say();
console.log(util.inspect(child))