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
var maxArea = function(height) {
    let maxArea = 0,left=0,right=height.length-1,max=0;
   while(left<right){
       if(height[left]<=height[right]){
           max = height[left]*(right-left)
           left++
       }else{
           max = height[right]*(right-left)
           right--
       }
       console.log(max)
       maxArea = Math.max(max,maxArea)
   }
    return maxArea;
};
maxArea([1,1])