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

var a = +Infinity
var b = 1
console.log(a>b);
