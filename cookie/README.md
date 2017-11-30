#cookie
-在web应用中,多个请求之间共享‘用户会话’是有必要的。但是HTTP协议是无状态的。那时候Cookie就会出现。
#Cookie的处理：
1、服务器向客户端发送Cookie
2、客户端的浏览器把Cookie保存
3、然后在每次请求浏览器都会将Cookie发送到服务端
在HTML文档被发送之前，Web服务器通过传送HTTP包头中Set-Cookie消息把一个cookie发送到用户的浏览器中：
eg: 
```
Set-Cookie:name=value;Path=/;expires=Wednesday,09-Nov-99 23:30:40 GMT;
```
说明：
-name=value :键值对，可以设置要保存的key/value,注意这里的name不能和其他属性项的名字一样
-Expires : 过期时间（秒），在设置的某个时间点后该Cookie就会失效，如expries=Wednesday,09-Nov-99 23:30:40 GMT
-maxAge : 最大失效时间（毫秒），设置在多少后失效
-secure : 当secure值为true时，cookie在HTTP中是无效的，在HTTPS中有效
-Path : 表示cookie影响的路径，如path=/。如果路径不能匹配时，浏览器则不发送这个Cookie
-httpOnly : 是微软对COOKIE做的扩展，如果cookie中设置‘httpOnly’属性，则通过程序（JS脚本，apple等）将无法读取到COOKIE信息，防止XSS攻击

#http中cookie
node.js是如何向客户端发送cookie的呢，
1.使用response.writeHead,代码如下：
// 设置过期时间的为一分钟
```
var time = new Date(new Date().getTime() + 60*1000).toGMTString();

```