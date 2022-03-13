doSomething().then(function(result){
    return doSomthingElse(result)
}).then(function(newResult){
    return doThirdthing(newResult)
}).then(function(finalResult){
    return finalResult
}).catch(failureCallback)