console.log(Math.PI)
console.log(Math.max("-1",-10))
// 有非数字的返回NaN
// 如果什么都不写 返回 -Infinity


// 利用对象封装自己的数学对象 里面有PI最大值和最小值

var myMath = {
    PI: 3.141592653,
    max: function(){
        var max = arguments[0];
        for(var i=1;i<arguments.length;i++){
            if(arguments[i]>max){
                max = arguments[i];
            }
        }
        return max;
    }

}

Math.abs() // 绝对值
Math.abs('1') // **************  隐式转换 会把字符串 -1 转换为数字型
Math.abs('pink') // NaN

// 2. 三个取整方法
// （1）Math.floor() 向下取整 
Math.floor(1.9) // 1
Math.ceil(1.1)  // 2  // 向上取整
Math.round(-1.5) // -1  // 四舍五入
Math.max()
Math.min()
Math.random()  //   返回一个随机小数  0=<x<1

// 得到一个两数之间的随机整数 并且包含这两个整数
function getRandom(min,max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}
console.log("Random: "+getRandom(0,100))

var arr = ['贺亦欣','贺神','欣欣','欣宝','包子']
console.log(arr[getRandom(0,arr.length-1)]);

var random = getRandom(1,10)
while(true){
    var num = prompt('你来猜？输入1～10之间的一个数字')
    if(num>random){
        alert('你猜大了')
    }else if(num<random){
        alert('你猜小了')
    }else{
        alert('你猜对了')
        break;
    }
}
