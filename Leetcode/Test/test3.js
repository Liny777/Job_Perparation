// s = "  hello world  "
// console.log(s.split(' '))
// let arr = s.split(' ').filter((item)=> item!==' ')
//     // return arr.reverse().join(' ')
//     // function reverseWords(s: string): string {
//     // let arr = s.split(' ').filter((item) => item !== '')

// arr.reverse().join(' ')
// let s = 'abcdefg'
// let n =2
// const length = s.length;
// let i = 0;
// while (i < length - n) {
//   s = s[length - 1] + s;
//   console.log(s)
//   i++;
// // }
// var removeDuplicates = function(s) {
//   let stack = []
//   let temp = ''
//   for(let i=0;i<s.length;i++){
     
//       if(!stack.length){
//           stack.push(s[i])
//           // console.log("1")
//       }else{
//           temp = stack.pop()
//           // console.log(temp)
//           if(temp!==s[i]){
//             // console.log("2")
//               stack.push(temp)
//               stack.push(s[i])
//           }else{
//               // stack.pop()
//               // console.log("3")
//               continue
//           }
//       }
//       console.log(stack)
//       console.log(`ID:${i}:${stack}`)
//   }
//   // stack.push(temp)
//   let ss = ''
//   for(let j=0;j<stack.length;j++){
//       ss = ss + stack[j]
//   }
//   return ss
// };
// let s = "abbaca"
// console.log(removeDuplicates(s))
var evalRPN = function(tokens) {
  let stack = []
  let a1,a2,a3,c
  for(let i=0;i<tokens.length;i++){
      c = tokens[i]
      // console.log(`1:${c}:${stack}`)
      if(c!=='+'&&c!=='-'&&c!=='*'&&c!=='/'){
          stack.push(c)
      }else{
        // console.log(1)
        // console.log(c)
          switch (c){
              case "-":
                  a1 = parseInt(stack.pop())
                  a2 = parseInt(stack.pop())
                  a3 = a2 - a1
                  console.log("---------")
                  console.log(a1)
                  console.log(a2)
                  console.log(a3)
                  stack.push(a3)
                  break
              case "+":
                  a1 = parseInt(stack.pop())
                  a2 = parseInt(stack.pop())
                  a3 = a2 + a1
                  stack.push(a3)
                  console.log("---------")
                  console.log(a1)
                  console.log(a2)
                  console.log(a3)
                  break
                  // console.log(a3)
              case "*":
                  a1 = parseInt(stack.pop())
                  a2 = parseInt(stack.pop())
                  a3 = a2 * a1
                  stack.push(a3)
                  console.log("---------")
                  console.log(a1)
                  console.log(a2)
                  console.log(a3)
                  break
                  // console.log(a3)
              case "/":
                  a1 = parseInt(stack.pop())
                  a2 = parseInt(stack.pop())
                  a3 = a2/a1
                  stack.push(a3)
                  console.log("---------")
                  console.log(a1)
                  console.log(a2)
                  console.log(a3)
                  break
          }
      }
      // console.log(`2:${c}:${stack}`)
  }
  // console.log(stack)
  return Math.round(stack.pop())
};
console.log(evalRPN(["-8","23","8","-","9","23","-","-","*","33","-8","/","+","38","-14","-","-","-7","32","-19","-","11","+","+","+","14","22","-","-","27","-9","-","+","31","+","-12","-11","-","-","14","+","30","+","37","30","-","+","-9","+","7","-","37","+","-5","13","/","-","19","-2","-19","12","+","-","23","+","-","-19","-","+","6","+","-17","+","17","+","5","36","+","-10","+","+","23","-8","-","-","18","-","31","-16","-","+","34","+","-6","+","24","-","22","-","-8","-","28","+","-12","+","39","28","-7","+","+","-14","5","+","5","+","10","+","+","+","-18","*","10","+","-5","11","-","6","+","-","-12","31","+","+","30","29","-","-","39","+","13","-8","-5","+","-","26","19","-","*","-","10","-","-20","5","+","+","0","-","28","-","19","/","28","+","-18","-","28","20","+","-5","-19","+","+","-","-12","-","3","-","6","-15","+","4","-","-","38","+","-9","-","38","-","12","-20","-","10","5","-15","-","-","-","+","-11","+","5","+","2","-","28","+","-9","-11","-","+","37","-","-17","31","-","2","+","+","-16","-12","-","-","12","+","34","-","15","+","8","+","17","-","2","-","33","+","-5","+","14","+","29","-","33","23","+","26","30","-","+","+","39","+","9","24","-","-","20","15","+","-","24","+","37","-","30","-1","-","+","34","+","-13","-","23","15","-","-","-5","-8","8","30","35","-9","22","+","-","-","36","-1","+","5","-","-","+","25","-","+","27","-","16","+","+","+","39","-","15","-","-3","+","5","-6","-","+","-6","-15","-7","-","+","/","13","-","18","+","4","+","29","+","-17","0","-6","-20","-17","+","12","-","+","-","+","+","-10","22","+","+","-11","-","-2","38","-","-","-6","+","0","-","-10","+","-4","-10","+","-","0","-","31","30","-","37","5","+","+","+","-15","+","38","4","-","-16","-17","+","+","+","38","-","27","-19","/","12","+","/"]))
// console.log(parseInt((-0.666)))

