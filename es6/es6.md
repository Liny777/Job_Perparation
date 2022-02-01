ES
第六版：2015 模块化、面向对象、Promise、箭头函数、let、const、数组解构赋值等等
第七版： 2016 幂运算、数组扩展、Async/await关键字
第八版： 2017 Async/await 字符串扩展
第九版： 2018 对象解构赋值，正则扩展
第十版： 2019 扩展对象，数组方法

vue和react都是使用es6
ES6
http://kangax.github.io

ES6 let变量声明以及声明特性
1、变量不能重复声明
2、块儿级作用域 全局、函数、eval
块级：if else while for
3、不存在变量提升
不允许在变量声明之前
4、不影响作用域链
{
    let school = '尚硅谷'
    function fn(){
        console.log(school)
    }
    fn()
}

const用于声明常量
1、一定要赋予初始值
2、一般常量使用大写（潜规则）
3、常量的值不能修改
4、块级作用域
5、对于数组和对象的元素修改，不算做常量的修改，不会报错
const TEAM = ['UZI','MLXG‘,'Ming','Letme']
TEAM.push('Meiko')
不会报错，因为TEAM指向的地址没有改变

Es6 变量解构赋值
ES6 允许按照一定模式从数组和对象中提取值，对变量进行赋值
这被称为解构赋值
1、数组的结构 
const F4 = ['小沈阳‘，’刘能','赵四','宋小宝']
let [xiao,liu,zhao,song] = F4
console.log(xiao)   相当于 声明一个变量，让他等于小沈阳，let xiao = F4[0]
console.log(liu)
console.log(zhao)
console.log(song)
2、对象的解构
const zhao  = {
    name: '赵本山'
    age: '不详'
    xiaopin: function(){
        console.log("我可以演小品")
    }
};

let { name,age,xiaopin} = zhao;

模版字符串
ES6 引入新的声明字符串的方式 [``] '' ""
1、声明
let str = `我也是一个字符串哦`
console.log(str,typeof str);  // 输出 我也是一个字符串 string
2、内容中可以直接出现换行符
let str = '<ul>
            + <li>沈腾</li>
             + <li>玛丽</li>
            + </ul>'
let str = `<ul>    // 反引号
            <li>沈腾</li>
             <li>玛丽</li>
            </ul>`
3. 变量拼接
let lovest = '魏翔'
let out = `${lovest}xxx是我心目中最搞笑的演员!!` // 反引号

4. ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法
let name = '尚硅谷'
let change = function(){
    console.log('我们可以改变你')
}
const school = {
    name,
    change,
    以下是老方法：
    <!-- improve: function(){
        console.log("我们可以提高你的技能")
    } -->
    新方法：
    improve(){
        console.log("我们可以提高你的技能”)
    }
}
而不是 name:name  change:change

5. ES6 允许使用箭头定义函数
声明一个函数
let fn = function(){

}
let fn = (a,b) => {
    return a+b 
}

与之间的区别
5.1. this是静态的，this始终指向函数声明时，所在作用域下的this的值
function getName(){
    console.log(this.name)
}
let getName2 = () => {
    console.log(this.name)
}
// 设置 window对象的name属性
window.name = '尚硅谷'
const school = {
    name: "ATGUIGU"
}
// 直接调用
getName() -- 尚硅谷 
getName2() -- 尚硅谷 在全局作用域下声明的

// call 方法调用
getName.call(school) --- ATGUIGU
getName2.call(school) --- 尚硅谷

5.2 不能作为构造实例化对象
let Person = (name,age) => {
    this.name = name
    this.age = age
}
let me = new Person('xiao',30)
console.log(me)   -----  报错，Person is not a constructor

5.3 不能使用arguments变量
let fn = () => {
    console.log(arguments)
}
fn(1,2,3) ----> 输出argument is not defind

5.4 箭头函数简写
1) 省略小括号，当形参有且只有一个的时候
let add = (n) => {   // 可以改成 let add = n => { return n + n }
    return n+n
}
console.log(add(9))
2) 省略花括号,当代码体只有一条语句的时候，此时return必须省略
// 而且语句的执行结果就是函数的返回值
let pow = (n) => { return n*n}
console.log(pow(9))

箭头函数适合与this无关的回调，定时器，数组方法回调
箭头函数不适合与this有关的回调 事件回调 对象的方法
dom回调 因为这样this就指向申明函数的作用域就是window



