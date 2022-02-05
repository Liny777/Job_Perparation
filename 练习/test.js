var s = "abcdefg"
// [s[0],s[1]] = [s[1],s[0]]
console.log(s[0])
let resArr = s.split(""); 
[resArr[0],resArr[1]] = [resArr[1],resArr[0]]
console.log(resArr)
