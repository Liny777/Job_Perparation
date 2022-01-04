function getSum(num1,num2){

}
// 函数使用分为声明函数和调用函数
// 1、声明函数
// function 函数名(){
    //函数体
// }

// 函数名一般使用动词 

// -----------------------------------
// function 函数名(形参1，形参2...){ //声明函数的小括号里面是形参数 // 形参是接受实参

// }
// 函数名(实参1，实参2...); // 在函数调用的小括号里面是实参数(实际的参数)
// 参数个数不限，可以有也可以没有


// -----------------------------------
// 1、实参个数 > 形参个数
//  会取到形参个数
// 2、实参个数 < 形参个数
// 多于形参定义为underfind, 最终结果就是NaN
// isNaN 非数字 用来判断一个变量是否为非数字的类型

// -----------------------------------
// 利用函数，求两个数的最大值
function getMax(num1,num2){
    return num1 > num2 ? num1:num2;
}
console.log(getMax(1,3))
console.log(getMax())

// 求数组中最大值
function getArrMax(arr){
    var max = arr[0]
    for(var i=1;i<=arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}
console.log(getArrMax([5,2,99,101,67,77]))

// -----------------------------------
// 函数如果没有return,则返回underfind

// -----------------------------------
// 函数声明
// 1
function fn(){

}
// 2
var fun = function(){

}
fun()