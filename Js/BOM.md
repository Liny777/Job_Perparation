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

