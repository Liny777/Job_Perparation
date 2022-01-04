var arr = [5,4,3,2,1];
var temp;
// 从小排到大
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// 从大跑到小
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length-i-1;j++){
        if(arr[j]<arr[j+1]){
            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
