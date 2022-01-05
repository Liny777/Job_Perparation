var mingren = new Object()
mingren.name = "鸣人"
mingren.sex = "男"
mingren.age = 19
mingren.skill = "影分身术"
console.log(mingren['name'])

var obj = {
      name: 'pink老师',
      age: 18,
      sex: "男"
}

for(var k in obj) {
    console.log(k); // k变量输出得到的是属性名
    console.log(obj[k]); // obj[k]得到的是属性值
}

// 我们使用for in 里面的变量 我们喜欢写 k 或者 key

// *************  函数也可以遍历 ******************//
