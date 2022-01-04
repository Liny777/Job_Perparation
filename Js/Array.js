//  1、删除数组里指定元素 —— 就是把旧数组进行判断然后赋给给一个新的
var arr = [2,0,6,1,77,0,52];
var newArr = []
for(var i=0;i<arr.length;i++){
    if(arr[i]!=0){
        newArr[newArr.length] = arr[i]
    }
}
for(var i=0;i<newArr.length;i++){
    console.log(newArr[i])
}
// ********** 重点在于 newArr[newArr.length]
// 2、翻转数组
for(var i=arr.length;i>=0;i--){
    newArr[newArr.length] = arr[i]
}
for(var i=0;i<newArr.length;i++){
    console.log(newArr[i])
}
