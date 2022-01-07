function conutDown(time){
    var nowTime = +new Date() // 返回的是当前时间的总毫秒数
    var inputTime = +new Date(time); // 返回的是用户输入时间的总毫秒数
    var times = (inputTime - nowTime)/1000; // time是剩余时间总的毫秒数
    var d = parseInt(times/60/60/24) // 得到天数
    d = d<10?'0'+d:d;
    var h = parseInt(times/60/60%24) // 小时
    var m = parseInt(times/60%60) // 分
    var s = parseInt(times%60) // 秒
    return d+'天'+h+'时'+m+'分'+s+'秒'

}
console.log(conutDown('2022-5-1 18:00:00'))