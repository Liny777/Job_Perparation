// doSomething().then(function(result){
//     return doSomthingElse(result)
// }).then(function(newResult){
//     return doThirdthing(newResult)
// }).then(function(finalResult){
//     return finalResult
// }).catch(failureCallback)
// var name = "The Window";
// 　　var object = {
// 　　　　name : "My Object",
// 　　　　getNameFunc : function(){
// 　　　　　　var that = this;
// 　　　　　　return function(){
// 　　　　　　　　return that.name;
// 　　　　　　};
// 　　　　}
// 　　};
// 　　console.log(object.getNameFunc()());
var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　return function(){
                console.log(this)
　　　　　　　　return this.name;
　　　　　　};
　　　　}
　　};
　　console.log(object.getNameFunc()());