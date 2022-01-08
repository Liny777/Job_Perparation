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
