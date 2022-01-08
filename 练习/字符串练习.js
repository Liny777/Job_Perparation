var str = 'abaasdffgggghhjjkkgfddssssss344343'
// 1 长度
console.log(str.length)
// 2 指定位置
console.log(str.charAt(0))
console.log(str.charAt(3))
console.log(str.charAt(5))
console.log(str.charAt(9))
// 查找指定字符是否在以上字符串中存在
console.log(str.indexOf('i'))
console.log(str.indexOf('c'))
console.log(str.indexOf('b'))
// 4 替换制定的字符 如 g替换为22， ss替换为b
while(str.indexOf('g')!==-1){
    str = str.replace('g','22')
}
console.log('replace: '+str)

// 截取指定开始位置到结束位置的字符串，如 取得1-5的字符串
console.log('slice: ' + str.slice(1,6))
// 找出以上字符串出现次数最多的字符和出现的次数
var o = {}
for(var i=0;i<str.length;i++){
    if(o[str[i]]){
        o[str[i]]++
    }else{
        o[str[i]] = 1
    }
}
var max = 0;
var maxValue = ''
// var num = 0
for(var k in o){
    if(max<o[k]){
        max = o[k]
        maxValue = k
    }
}
console.log('max: '+max)
console.log('maxValue: '+maxValue)