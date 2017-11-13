/**
 * Created by wy on 2017/11/12.
 */
var cheerio = require('cheerio');
var $ = cheerio.load('<h1 class="title">zfpx</h1>');
$('h1.title').text('hello node.js');
$('h1.title').addClass('welcome');
// console.log($.find('.welcome'));
console.log($.html());
