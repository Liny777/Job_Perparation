// 查找字符串'abcoefoxyozzopp' 中所有o出现的位置以及次数
var str = 'abcoefoxyozzopp'
var index = str.indexOf('o')
// console.log(index)
var num = 0;
while(index!==-1){
    num++
    console.log(index)
    index = str.indexOf('o',index+1)
    // num++
}
console.log(num)

// 判断一个字符串中出现次数最多的字符，并统计其次数
// 核心算法：利用charAt() 遍历这个字符串
// 把每个字符都存储给对象，如果对象没有该属性，就为1，如果存在了就+1
// 遍历对象，得到最大值和该字符
var str = 'abcoefoxyozzopp'
var o = {}
for(var i=0;i<str.length;i++){
   var chars = str.charAt(i)
   if(o[chars]){
       o[chars]++
   }else{
       o[chars] = 1
   }
}
console.log(o)
var max = 0
var maxValue = ''
for (var k in o){
    if( o[k] >max){
        max = o[k]
        maxValue = k
    }
   
}
console.log(max)
console.log("最大值： "+maxValue)

var str = 'andy'
console.log(str.concat('red'))
var str1 = '改革春风吹满地'
console.log(str1.substr(2,2)) // 第一个2 是索引号 从第几个开始 第二个2 是取几个字符

// 有一个字符串'abcoefoxyozzopp'替换里面所有 o 为 * 
str1 = 'abcoefoxyozzopp'
while(str1.indexOf('o')!==-1){
    str1 = str1.replace('o','*')
}
console.log(str1)

