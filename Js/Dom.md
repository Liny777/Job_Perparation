1、什么是DOM
文档对象模型（Document object model）是W3C组织推荐的处理可扩展标记语言HTML或XML的标准编程接口

W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容，结构和样式。

1.2 DOM树
- 文档：一个页面就是一个文档，DOM中使用Document表示
- 元素：页面中的所有标签都是元素，DOM中使用element表示
- 节点：网页中的所有内容都是节点（标签，属性，文本，注释等），DOM中使用node表示 

所有都是对象

获取页面元素
1、根据ID获取
2、根据标签名获取
3、通过HTML5新增的方法获取
4、特殊元素获取

2.2 根据ID
getElementById() 方法可以获取带有ID的元素对象
返回一个匹配的特定元素
大小写敏感
若在当前Document下没有找到，则返回null

2.3 获取元素
根据标签名获取
getElementsByTagName()方法可以返回带有指定标签名的对象集合

2.4 通过HTML5新增的方法获取 —— ie9以上才可使用
document.getElementByClassName('类名'); // 根据类名返回元素对象集合

2.5 document.querySelector('选择器') // 根据指定选择器返回第一个元素对象  -------  只获取第一个元素
3. querySelectorAll() 返回指定选择器的所有元素对象的集合
但是要加符号，类加. ID加#

2.6 获取特殊元素
2.6.1 获取body元素
document.body // 返回body元素对象
2.6.2 获取html元素
document.documentElement // 返回html元素对象

------------------------------------------------------
事件基础
3.1 事件概括
JS使我们有能力创建动态页面，而事件可以被JS侦测到的行为
简单理解：触发--响应机制
网页中的每个元素都可以产生某些可以触发JS的事件，例如我们可以在用户点击某按钮时产生一个事件，然后去执行一些操作

3.3 执行事件的步骤
1、获取事件源
2、注册事件（绑定事件）
3、添加事件处理程序（采取函数赋值形式)

3.4 操作元素
JS中的DOM操作可以改变网页内容，结构和样式，我们可以利用DOM操作元素来改变元素里面的内容，属性等，注意以下都是属性
3.4.1 改变元素内容
1. element.innerText() // 从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉
2. element.innerHTML() // 起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行
// innerText 和 innerHTML的区别
// 1. innerText 不识别html标签 非标准   去除空格和换行
// 2. innerHTML 识别html标签，W3C标准    保留空格和换行      ******  主要用这个 是标准 innerHTML

4.2 常用元素的属性操作
1. innerText、innerHTML 改变元素内容
2. src href
3. id、alt、title

4.3 表单元素的属性操作
利用DOM可以操作如下表单元素的属性
type value checked selected disabled
// 表单里面的值 文字内容是通过value来修改的
// 如果想要某个表单被禁用 不能再点击 disabled  我们想要这个按钮 button禁用
 // this 指向的是事件函数的调用者

 4.4 样式属性操作
 我们可以通过JS修改元素的大小，颜色，位置等样式
 1、element.style 修改比较少    行内样式操作
 2、element.className 修改比较多    类名样式操作
 3、JS里面的样式采取驼峰命名法 比如 fontSize,backgroundColor
 4、JS修改style样式操作，产生是行内样式，所以js修改的css权重比较高

.change{

}
 this.className = 'change'

 1、如果样式修改较多，可以采取操作类名方式更改元素样式
 2、class因为是个保留字，因此使用className来操作元素类名属性
 3、className 会直接更改元素类名，会覆盖原先的类名
 如果想保留原先的类名，我们可以这么做，多类名选择器
 this.className = 'first change'

操作元素
1、操作元素内容
1.1 innerText
1.2 innerHTML 识别标签 推荐
2、 操作常见元素属性 
2.1 src\href\title\alt等
3、操作表单元素属性
3.1 type value disabled等
4、操作元素样式属性
4.1 element.style
4.2 className 样式比较多

4.5 排他思想
1、所有元素全部清除样式
2、当前元素设置样式
3、注意顺序不能颠倒，首先干掉其他人，再设置自己

获取元素的属性值
方法一
var div = document.querySelector('div')
console.log(div.id)
element.属性
方法二
element.getAttribute('属性')

自定义属性 属性可以自己添加
比如 <div id ="demo" index="1"></div>
index属性就是自定义的属性
两种方法区别
element.属性 ： 获取内置属性值（元素本身自带的属性）
element.getAttribute(‘属性') 主要获取自定义的属性（标准） 我们程序员自定义的属性

2、设置元素属性值 
（1）element.属性 = 值
（2）element.setAttribute('属性','值') 

3、移除属性
element.removeAttribute('属性')

H5自定义属性
自定义属性的目的：是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中
自定义属性获取通过getAttribute('属性')获取

1、设置H5自定义属性 —— 规范

H5规定自定义属性data-开头作为属性名并且赋值
比如<div data-index="1"></div>

或者使用JS设置
element.setAttribute('data-index',2)

// h5新增的获取自定义属性的方法 它只能获取data-开头的
// dataset是一个集合里面存放了所有以data开头的自定义属性
console.log(div.dataset)
console.log(div.dataset.index)
console.log(div.dataset['index'])

如果是 data-list-name
div.getAttribute('data-list-name')
console.log(div.dataset.listName)  驼峰命名法


5、节点操作
5.1、为什么学节点操作
获取元素通常使用两种方式
1、利用DOM提供的方法获取元素
document.getElementById()
document.getElementByTagName()
document.querySelector等
逻辑性不强，繁琐
2、利用节点层级关系获取元素
利用父子兄弟关系获取元素
逻辑性强，但是兼容性稍差

这两种方法都可以获取元素
5.2 节点概述
网页中的所有内容都是节点（标签，属性，文本，注释等），在DOM中，节点使用node来表示
所有HTML元素都可以被修改

1、<li>我是li</li>
li叫做元素节点
我是li就是文字节点
2、<ul>
    <li>
ul和li之间的换行也称为文本节点

还有class称为属性节点

3、一般地，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这个基本属性

元素节点 nodeType 为1
属性节点 nodeType 为2
文本节点 nodeType 为3 （文本节点包含文字，空格，换行等）

我们实际开发中，节点操作主要操作的是元素节点

5.3、节点层级
利用Dom树可以把节点划分为不同的层级关系，常见的是父子熊层级关系。
1、父级节点
eg: erweima.parentNode  // 得到的是离元素最近的父级节点
如果找不到父节点就返回null

2、子节点
2.1 parentNode.childNodes (标准)
子节点 childNodes所有的子节点 包含 元素节点 文本节点等
通过nodeType
如果只想获得里面的元素节点，则需要专门处理，所以我们一般不提倡使用childNodes
var ul = document.querySelector('ul')
for (var i=0;i < ul.childNodes.length;i++) {
    if(ul.childNodes[i].nodeType == 1){
        // ul.childNodes[i] 是元素节点
        console.log(ul.childNodes[i])
    }
}
2.2 子节点 parentNode.children(非标准)
parentNode.children是一个只读属性，返回所有的子元素节点，它只返回子元素节点，其余节点不返回（这个是我们重点掌握的）
虽然children是一个非标准，但是得到了各个游览器的支持，因此我们可以放心使用

2.3 获取第一个子节点和最后一个子节点
2.3.1 parentNode.firstChild
firstChild返回第一个子节点，找不到则返回null。同样，也是包含所有的节点
firstChild第一个子节点，不管是文本节点还是元素节点
2.3.2 parentNode.lastChild

以下两个方法有兼容性问题 IE9以上才支持
2.3.3 firstElementChild返回第一个子元素节点
2.3.4 lastElementChild返回第一个子元素节点

实际开发中，firstChild和lastChild包含其他节点，操作不方便，而firstElementChild和lastElementChild又有兼容性问题，那么我们如何
获取第一个子元素节点或者最后一个子元素节点呢？
解决方法：
3、实际开发中，既没有兼容性问题，又返回第一个子元素
ol.children[0]
ol.children[ol.children.length-1]

5.3 兄弟节点
5.3.1 nextSibling返回当前元素的下一个兄弟节点，找不到则返回null。同样，也是包含所有的节点。
包含元素节点，文本节点 等等
5.3.2 previousSibling 
返回上一个兄弟节点

以下方法一样有兼容问题
5.3.3 nextElementSibling
返回当前元素下一个兄弟元素节点，找不到则返回null
5.3.4 previousElementSibling
返回前一个元素兄弟元素节点，找不到则返回null

function getNextElementSibling(element){
    var el = element;
    while(el = el.nextSibling) {
        if (el.nodeType === 1){
            return el;
        }
    }
    return null;
}

5.4 创建节点
document.createElement('tagName')
document.createElement()方法创建由tagName指定的HTML元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为动态创建元素节点。

5.4 添加节点
5.4.1 后面插入
node.appendChild(child)
node.appendChild()方法将一个节点添加到指定父节点的子节点列表末尾。类似于css里面的after元素。
node 父级 child 子级 后面追加元素 类似于数组中的push
5.4.2 前面插入
node.insertBefore(child,指定元素)
node.insertBefore()方法将一个节点添加到父节点的指定子节点前面，类似于css里面的before伪元素。
5.4.3 我们想要页面添加一个新的元素：1、创建元素 2、添加元素
Eg:
// 创建
var li = document.createElement('li');
// 添加
var ul =  document.querySelector('ul')
ul.appendChild(li)
var lili = document.createElement('li');
ul.insertBefore(lili,ul.children[0])


