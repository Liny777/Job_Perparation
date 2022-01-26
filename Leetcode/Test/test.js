//时间复杂度：O(n)
//空间复杂度：O(1)
// var removeElement = (nums, val) => {
//     let k = 0;
//     for(let i = 0;i < nums.length;i++){
//         if(nums[i] != val){
//             nums[k++] = nums[i]
//         }
//     }
//     return k;
// };
// var removeElement = function(nums, val) {
//     let ans = 0;
//     for(const num of nums) {
//         if(num != val) {
//             nums[ans] = num;
//             ans++;
//         }
//     }
//     return ans;
// };
// var nums = [3,2,2,3]
// removeElement(nums,3)
// console.log(nums)
// var maxArea = function(height) {
//     let maxArea = 0,left=0,right=height.length-1,max=0;
//    while(left<right){
//        if(height[left]<=height[right]){
//            max = height[left]*(right-left)
//            left++
//        }else{
//            max = height[right]*(right-left)
//            right--
//        }
//        console.log(max)
//        maxArea = Math.max(max,maxArea)
//    }
//     return maxArea;
// };
// maxArea([1,1])
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var removeDuplicates = function(nums) {
//     let slowindex = 0
//     for(let fastIndex=0;fastIndex<nums.length;fastIndex++){
//         if(nums[slowindex]!==nums[fastIndex]){
//             slowindex++
//             nums[slowindex] = nums[fastIndex]
//         }
//     }
//     console.log(nums)
//     return slowindex
// };
// // console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
// console.log(removeDuplicates([1,1,2]))

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
//  var moveZeroes = function(nums) {
//     let slowindex=0
//     for (let fastIndex=0;fastIndex<nums.length;fastIndex++){
//         if(nums[fastIndex]!==0){
//             nums[slowindex++] = nums[fastIndex]
//         }
//     }
//     // console.log(slowindex)
//     console.log(nums.length);
//     while(slowindex<nums.length){
//         console.log(slowindex);
//         nums[slowindex] = 0
//         slowindex++
//     }
//     console.log(nums)
// };
// moveZeroes([0,1,0,3,12])

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
//  var backspaceCompare = function(s, t) {
//     let slowindex = 0,slowindex2=0;
//     for(let fastindex=0;fastindex<s.length;fastindex++){
//         // s[0]='f'
//         if(s[slowindex]==='#'){
//             s[slowindex] = s[fastindex]
//         }
//         if(s[fastindex]!=='#'){
//             slowindex++
//             s[slowindex] = s[fastindex]
//         }
        
//     }
//     console.log(s);
// };
// backspaceCompare('ab#c')

// var a = +Infinity
// var b = 1
// console.log(a>b);
// /**
//  * @param {number} target
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var minSubArrayLen = function(s, nums) {

//     // 二分查找
//        var binarySearch = function(nums,target){
//     let left=-1,right = nums.length,middle = 0
//     while(left+1!=right){
//         middle = Math.floor((left+right)/2)
//         if(nums[middle]>=target){
//             right = middle;
//         }else{
//             left = middle
//         }
//     }
//     return right==nums.length?-1:right
// }
// // ----------------------------------
//    let length=nums.length,min=+Infinity,sums=[]
//    sums[0] = 0
//    for(let i=1;i<=length;i++){
//        sums[i] = sums[i-1] + nums[i-1]
//    }
//    console.log("s: "+s);
//    console.log("sums[0]: "+sums[0]);
//    for(let i=0;i<=length;i++){
//        let target = s + sums[i]
//        console.log(i+" sums[i]: "+sums[i]);
//        console.log("target: "+target);
//        let index = binarySearch(sums,target)
//        console.log("index: "+index)
//        if(index<0){
//           break
//        }
//        if( index<=length){
//            min = Math.min(min,index-i)
//            console.log("min: "+min)
//        }
//        console.log("----------");
//    }
//    return min == +Infinity?0:min
// };
// console.log(minSubArrayLen(7,[2,3,1,2,4,3]))

//[1,1,2,2]
//[1,1,2,2,3] -> [2,2,3]
// var totalFruit = function(fruits) {
//     let l = 0;//起始指针
//     let maxLen = 0;//窗口的最大长度 其中最多包涵两种水果
//     let n = 0//前一类水果的结束位置
//     let arr = [fruits[l]]//水果的种类数组

//     for(let r = 0; r < fruits.length; r++){//窗口的右指针不断前进
//         console.log(arr);
//         if(!arr.includes(fruits[r])){//如果窗口中不包含 进窗口的水果
//             console.log(fruits[r]);
//             if(arr.length <= 1){//如果只有一种水果
//                 arr[1] = fruits[r]//将这种水果加入arr数组
//             }else{//如果有两种水果
//                 l = n//更新窗口的左边界
//                 arr[0] = fruits[r-1]//更新arr中水果的种类
//                 arr[1] = fruits[r]
//             }
//         }
       
//         if(fruits[r] !== fruits[n]){//如果进来了一种新的类型的水果 更新前一种水果的位置
//             n = r
//         }

//         maxLen = Math.max(maxLen,r-l+1)//更新滑动窗口的最大值
//         console.log("----------");
//     }
//     return maxLen

// };

// /**
//  * @param {number[]} fruits
//  * @return {number}
//  */
//  var totalFruit1 = function(fruits) {
//      // arr只是用来存水果类型，不是用来存所有水果的
//     let leftIndex=0,arr = [fruits[0]],currentType=0,result=0
//     for(let rightIndex=0;rightIndex<fruits.length;rightIndex++){
//         console.log(arr);
//         if(!arr.includes(fruits[rightIndex])){ // 不相等 代表是一种新的水果
//             console.log(fruits[rightIndex]);
//             if(arr.length<=1){ // 可以改成===1? 如果只有一种水果
//                 arr[1] = fruits[rightIndex]
//             }else{ // 已经有两种水果
//                 // currentType = rightIndex
//                 leftIndex = currentType
//                 arr[0] = fruits[rightIndex-1]
//                 arr[1] = fruits[rightIndex]
//             }
//         }
//         if(fruits[rightIndex]!==fruits[currentType]){
//             currentType = rightIndex // 这个要记录的是最晚出现的第一个类别的当前位置，比如 1，1，2，1，1，2 那么current是指向第三个1，而不是第一个1
//         }
//         result = Math.max(result,rightIndex-leftIndex+1)
//         console.log("----------");
//     }
//     return result
// };
// console.log(totalFruit([0,1,2,2]));
// console.log(totalFruit([1,1,2,1]));
// console.log(totalFruit([1,1,2,2]));
// console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));
// console.log("***********");
// console.log(totalFruit1([0,1,2,2]));
// console.log(totalFruit1([1,1,2,1]));
// console.log(totalFruit1([1,1,2,2]));
// console.log(totalFruit1([3,3,3,1,2,1,1,2,3,3,4]));

// t = '111'
// let need = {};
//   // 窗口中的字符
//   let window = {};
//   for (let a of t) {
//     // 统计需要的字符
//     console.log(need[a]);
//     console.log(need[a] || 0);
//     need[a] = (need[a] || 0) + 1;
//   }
//   console.log(need);

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
//  var minWindow = function(s, t) {
//     // 需要的
//     let need = {};
//     // 窗口中的字符
//     let window = {};
//     for (let a of t) {
//       // 统计需要的字符
//       need[a] = (need[a] || 0) + 1;
//     }
//     // 左右指针
//     let left = 0,
//       right = 0;
//     let valid = 0;
//     // 最小覆盖子串的起始索引及长度
//     let start = 0,
//       len = Number.MAX_VALUE;
//     while (right < s.length) {
//       // 即将移入窗口的字符
//       let c = s[right];
//       // 右移窗口
//       right++;
//       if (need[c]) {
//         // 当前字符在需要的字符中，则更新当前窗口统计
//         window[c] = (window[c] || 0) + 1;
//         if (window[c] == need[c]) {
//           // 当前窗口和需要的字符匹配时，验证数量增加1
//           valid++;
//         }
//       }
//       // 当验证数量与需要的字符个数一致时，就应该收缩窗口了
//       while (valid == Object.keys(need).length) {
//         // 更新最小覆盖子串
//         if (right - left < len) {
//           start = left;
//           len = right - left;
//         }
//         //即将移出窗口的字符
//         let d = s[left];
//         // 左移窗口
//         left++;
//         if (need[d]) {
//           if (window[d] == need[d]) {
//             valid--;
//           }
//           window[d]--;
//         }
//       }
//     }
//     return len == Number.MAX_VALUE ? "" : s.substr(start, len);
//   };

// // t = '111'w
// // let need = {};
// // for (let a of t) need[a] = (need[a] || 0) + 1
// // console.log(need);
// let left=right=valid=0
// console.log(left);
// console.log(right);
// console.log(valid);
// let b=a=c=0
// a=  1>0?c=4:4

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let need={},window={}
    for (let a of t) need[a] = (need[a] || 0) + 1
    console.log(need);
    let left=right=valid=start=0,len=+Infinity
    while(right<s.length){
        c = s[right++]
        if(need[c]){ // 当前字符在需要的字符中，则更新当前窗口统计
            window[c] = (window[c] || 0) + 1
            console.log(window);
            if(window[c] === need[c]){ // 同时比较了数量和键值
                console.log("valid1: "+valid);
                valid++ // 当前窗口和需要的字符匹配时，验证数量增加1
                console.log("valid2: "+valid);
            }
        }
         // 当验证数量与需要的字符个数一致时，就应该收缩窗口了
         console.log(Object.keys(need).length);
         while(valid === Object.keys(need).length){
              // 更新最小覆盖子串
              console.log(window);
              console.log("valid3: "+valid);
              if((right-left)<len){
                  start = left
                  len = right-left
              }
              d = s[left]
              left++
              if(need[d]){
                 if(window[d]===need[d]){
                     valid--
                 }
                 window[d]--
              }
              console.log("valid4: "+valid);
              console.log(window);
         }
         console.log("--------------------------------------");

    }
    return len == +Infinity ? "" : s.substr(start, len);

};
minWindow("aaa","aa")
