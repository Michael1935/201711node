/**
 * Created by wy on 2017/11/12.
 */
var request = require('request');
request('http://www.baidu.com',function (err,response,body) {
    if(err){
        console.log(err)
    }
    console.log(body)
})