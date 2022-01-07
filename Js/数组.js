// 创建数组
var arr = [1,2,3];
console.log(arr[0])
var arr1 = new Array(); // 创建一个空的数组
var arr2 = new Array(2);  // 代表长度为2，里面有两个空元素
// var arr3 = new Array(2,3) // [2,3] 等价于 [2,3] 这样写表示里面有2个数组元素， 是2和3
var arr3 = new Array(2,3,4)
console.log(arr3)

function reverse(arr){
    if(arr instanceof Array){
        var newArr = []
        for(i=arr.length;i>=0;i--){
            newArr[newArr.length] = arr[i]
        }
        return newArr
    } else{
        return '这个参数要求必须满足数组格式[1,2,3]'
    }
}

var arr4 = [1,2,3]
arr4.push(4)
