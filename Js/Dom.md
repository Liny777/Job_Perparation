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
