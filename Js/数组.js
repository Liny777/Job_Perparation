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

var arr5 = [1500,1200,2000,2100,1800]
var newArr = []
for(var i=0;i<arr5.length;i++){
    if(arr5[i]<2000){
        newArr.push(arr5[i])
        // newArr[newArr.length] = arr5[i];
    }
}

var arr6 = ['pink','red','blue']
arr6.reverse();
console.log(arr6)

var arr7 = [3,4,5,7]
arr7.sort() // sort 只能字典排序 只能排单数
console.log(arr7)

var arr8 = [13,4,77,1,7]
arr8.sort(function(a,b){
    return a-b;  // 升序的顺序排列
    // return b-a; // 降序的顺序排列
})

// 数组去重重点案例
// 有一个数组['c','c','c','c','c','c','a'],要求去除数组中重复的元素

var arr9 = ['c','c','c','c','c','c','a']
function unique(arr){
    var newArr = []
    for(var i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])=== -1){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
var demo = unique(['c','c','c','c','c','c','a'])
console.log(demo)

