// 当我们不确定有多少个参数传递的时候，可以用arguments来获取，在JS中，arguments实际上它是当前函数的一个内置对象
// 所有函数都内置了一个arguments对象，arguments对象中存储了传递的所有实参数。
// arguments展示形式是一个伪数组，因此可以进行遍历，伪数组具有以下特点:
// 具有length属性
// 按索引方式存储数据
// 不具有数组的push,pop等方法
/** 
    
**/

// 寻找数组大小
function getMax(){
    var max = arguments[0]
    for(var i=0;i<arguments.length;i++){
        if(arguments[i]>max){
           max = arguments[i]
        }
    }
    return max;
}
console.log(getMax(1,2,3))

// 翻转数组
function reverse(arr){
    var newArr = []
    for(var i=arr.length-1;i>=0;i--){
        newArr[newArr.length] = arr[i]
    }
    return newArr;
}
var arr1 = reverse([1,2,3,4,5])
console.log(arr1)

// 冒泡排序
function sort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
var arr1 = sort([1,4,2,9])
console.log(arr1)