// s = "  hello world  "
// console.log(s.split(' '))
// let arr = s.split(' ').filter((item)=> item!==' ')
//     // return arr.reverse().join(' ')
//     // function reverseWords(s: string): string {
//     // let arr = s.split(' ').filter((item) => item !== '')

// arr.reverse().join(' ')
let s = 'abcdefg'
let n =2
const length = s.length;
let i = 0;
while (i < length - n) {
  s = s[length - 1] + s;
  console.log(s)
  i++;
}

