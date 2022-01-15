1、能够说出什么是BOM
2、能够知道浏览器的顶级对象window
3、能够写出页面加载事件以及注意事项
4、能够写出两种定时器函数并说出区别
5、能够说出JS执行机制
6、能够使用location对象完成页面之间的跳转
7、能够知晓navigator对象涉及的属性
8、能够知晓history提供的方法实现页面刷新

1.1 什么是BOM 
（Browser Object Model）即浏览器对象模型，它提供独立于内容而与浏览器窗口进行交互的对象，其核心对象是window。

BOM由一系列相关对象构成，并且每个对象都提供了很多方法与属性

BOM缺乏标准，Javascript语法的标准组织是ECMA DOM的标准组织是W3C，BOM最初是Netscape浏览器标准的一部分

DOM是把文档对象当作一个对象来看待，顶级对象是document
BOM是把浏览器当做一个对象来看待，顶级对象是window
BOM学习的是浏览器窗口交互的一些对象
BOM是浏览器厂商在各自浏览器上定义的，兼容性较差

BOM比DOM更大，它包括DOM

1.2 BOM的构成
window对象是浏览器的顶级对象，它具有双重角色
1、它是JS访问浏览器窗口的一个接口
2、它是一个全局对象，定义在全局作用域中的变量，函数都会变成window对象的属性和方法，
在调用的时候可以省略window，前面学习的对话框都属于window对象方法，如alert()，prompt()等。
注意：window下的一个特殊属性 window.name
所以不要声明name

全局变量都是window的对象，包括函数

2.window对象的常见事件
2.1 窗口加载事件
window.onload = function(){}
或者
window.addEventListener("load",function(){})
window.onload是窗口（页面）加载事件，当文档内容完全加载完成会触发该事件（包括图像，脚本文件，CSS文件等），就调用的处理函数。

注意：
1、有了window.onload就可以把JS代码写到页面元素的上方，因为onload是等页面内容全部加载完毕，再去执行处理函数
2、window.onload传统注册事件方式只能写一次，如果有多个，会以最后一个window.onload为准
3、如果使用addEventListener则没有限制

document.addEventListener('DOMContentLoaded',function(){})
DOMContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等。
ie9以上才支持
如果页面的图片很多的话，从用户访问到onload触发可能需要较长时间，交互效果就不能实现，必然影响用户的体验，此时用DOMContentLoaded事件比较合适。

load页等页面全部加载完成，包含页面dom元素，图片，flash，css等
DOMContentLoaded 是DOM加载完毕，不包含图片，flash，css等就可以

2.2 调整窗口大小事件
window.onresize = function(){}
window.addEventListener("resize",function(){})
window.onresize是调整窗口大小加载事件，当触发时就调用的处理函数。
注意：
1、只要窗口大小发生像素变化，就会触发这个事件,当触发时就调用处理函数
注意：
1、只要窗口大小发生像素变化，就会触发这个事件。
2、我们经常利用这个事件完成响应式布局。window.innerWidth当前屏幕的宽度

3定时器
3.1 两种定时器
window对象给我们提供2个非常好用的方法-定时器
- setTimeout()
- setInterval()
3.2 setTimeout()定时器
window.setTimeout(调用函数，[延迟的毫秒数])
setTimeout()方法用于设置一个定时器，该定时器在定时器到期后执行函数

3,2 setTimeout()定时器
window.setTimeout(调用函数，[延迟的毫秒数])
setTimeout() 这个调用函数我们也称为回调函数callback
普通函数是按照代码顺序直接调用
而这个函数，需要等待时间，时间到了才去调用这个函数，因此称为回调函数
以前讲 element.onclick = function(){} 或者 element.addEventListener("clcik",fn)里面函数也是回调

3.3 停止定时器setTimeout()
window.clearTimeout(timeoutID)
clearTimeout()方法取消了先前通过调用setTimeout()建立的定时器
注意
1. window可以省略
2. 里面的参数就是定时器的标识符

3.4 setInterval() 定时器
window.setInterval(回调函数,[间隔的毫秒数])
setInterval(方法重复调用一个函数，每隔这个时间，就去调用一次回调函数。)
注意：
1、window可以省略
2、这个调用函数可以直接写函数，或者写函数名，或者采取字符串‘函数名’三种形式
3、间隔的毫秒数省略默认是0，如果写，必须是毫秒，表示每隔多少毫秒就自动调用这个函数
4、给他一个标识符

4.JS执行队列
# 4.3同步和异步
## 同步任务
同步任务都在主线程上执行，形成一个执行栈
## 异步任务
JS的异步是通过回调函数实现的。
一般而言，异步任务有以下三种类型：
1、普通事件，如click，resize等
2、资源加载，如load，error等
3、定时器：包括setInterval，setTimeout等
异步任务相关回调函数添加到任务队列中（任务队列也称为消息队列）

# 4.4 JS执行机制
1、先执行执行栈中的同步任务
2、异步任务（回调函数）放入任务队列中。
3、一旦执行栈中所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。


4.1 例子
//// 123
console.log(1)
setTimeout(function(){
    console.log(3)
},0)
console.log(2)

4.4 JS执行机制
由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环（event loop)

JS会开始执行执行栈（JS主线程）-》当有异步任务时，提交给对应的异步进程处理 
比如web API（异步API）1.ajax 2.DOM事件（DOM模块）3. setTimeout，setInterval（timer模块）
异步任务完毕，推入任务队列中

5 location 对象
5.1 location对象
window对象给我们提供了一个location属性，用于获取或设置窗体的URL，并且可以用于解析URL。
因为这个属性返回的是一个对象，所以我们这个属性也称为location对象。
5.2 URL
统一资源定位符（Uniform Resource Locator URL）是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。

protocol://host[:port]/path/[?query]#fragment
组成 说明
protocol 通信协议 常用http ftp maito(邮件)等
host 主机（域名）
port 端口号 省略时使用方案的默认端口 如http的默认端口为80
path 路由 由零或多个'/'符合隔开的字符串，一般用来表示主机上的一个目录或文件地址
query 参数 以键值对的形式通过&符号分隔开来
fragment 片段 #后面内容 常见于链接锚点

5.3 location对象的属性
location对象属性 返回值
location.href   获取或者设置整个URL
location.host   返回主机（域名）
location.port   返回端口，如果未写返回 空字符串
location.pathname 返回路径
location.search   返回参数
location.hash     返回片段 #后面内容 常见于链接锚点
重点记住 href 和 search

location对象的方法
location.assign() 跟href一样，可以跳转页面（也称为重定向页面）  记录历史 可以实现后退功能
location.replace() 替换当前页面，因为不记录历史，所以不能后退页面
location.reload() 重新加载页面，相当于刷新按钮或者f5如果参数为true强制刷新ctrl+F5

navigator对象
