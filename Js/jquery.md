1、什么jquery
2、jquery的优点
3、Dom对象与jquery对象的区别
4、jquery的简单使用

1、什么jquery
jQuery封装了javaScript常用功能代码，优化了DOM操作，事件处理，动画设计和Ajax交互。
2、jquery优点
轻量级，核心文件几十kb，不影响页面加载速度
跨浏览器兼容
链式编程、隐式迭代
对事件、样式、动画支持、大大简化了DOM操作
支持插件扩展开发。有着丰富的第三方的插件：树形菜单，日期控件，轮播图
免费，开源

用法：
<script>
    $('div').hide()
</script>
依旧要写在div下面
如果不想，那么jQuery提供了入口函数
$(function()){
    // 此处是页面DOM加载完成的入口
}
$(document).ready(function(){
     // 此处是页面DOM加载完成的入口
})
1、等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery帮我们完成了封装
2、相当于原生js的DOMContentLoaded
3、不同于原生js中的load事件是等页面文档、外部的js文件、css文件、图片加载完毕才执行内部代码

2.4 jquery的顶级对象
1、$是jQuery的别称，在代码中可以使用jQuery代替$，但一般为了方便，通常直接使用$
2、$是jQuery的顶级对象，相当于原生JavaScript中的window，把元素利用$包装成jQuery对象，就可以调用jQuery的方法。

2.5 jQuery对象和DOM对象
1、用原生JS获取来的对象就是DOM对象
2、jQuery方法获取的元素就是jQuery对象。本质：通过$把DOM元素进行了包装。
3、jQuery对象本质是：利用$对DOM对象包装后产生的对象（伪数组形式存储）
4、jQuery对象只能使用jQuery方法，DOM对象则使用原生的JavaScript属性和方法

2.5 jQuery对象和DOM对象
原生js比jQuery更大
1、DOM对象转换为jQuery对象：$(DOM对象)
2、jQuery对象转换为DOM对象（两种方式）
$('div')[index] index是索引号
$('div').get(index) index是索引号

jQuery API
1、选择器
ID选择器： $("#id")  获取指定ID元素
全选选择器 $("*")       匹配所有元素
类选择器   $(".class")  获取同一类class的元素
标签选择器 $("div")     获取同一类标签的所有元素
并集选择器 $(div,p,li")     选取多个元素
交集选择器 $(li.current")      交集元素
1.2 层级选择器
子代选择器
