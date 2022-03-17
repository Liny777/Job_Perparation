// // const p1 = new Promise(function(){

// // })
// const p1 = new Promise((resolve,reject)=>{
//     resolve("hello")
// }).then(result=>result).catch(e=>e)

// const p2 = new Promise((resolve,reject)=>{
//     throw new Error('报错了')
// }).then(result=>result).catch(e=>e)

// Promise.all([p1,p2]).then(result=>console.log(result)).catch(e=>console.log(e))

Promise.Myall = function(promises){
    let arr = []
    count = 0
    return new Promise((resolve,reject)=>{
        promises.forEach((item,i) => {
            Promise.resolve(item).then(res=>{
                arr[i] = res
                count += 1
                if(count === promises.length) resolve(arr)
            }).catch(reject)
        });
    })
}

Promise.Myall = function(promises){
    let arr = []
    count = 0
    return new Promise((resolve,reject)=>{
        promises.forEach((item,i)=>{
            Promise.resolve(item).then(res=>{
                arr[i] = res
                count += 1
                if(count===promises.length) resolve(arr)
            }).catch(reject)

        })
    })
}

Promise.MyRace = function(promises){
    return new Promise((resolve,reject)=>{
        for(const item of promises){
            Promise.resolve(item).then(resolve,reject)
        }
    })
}

Promise.MyAny = function(promises){
    let arr = [],
    count = 0
    return new Promise((resolve,reject)=>{
        resolve,err=>{
            arr[i] = {status:'rejected',val:err}
            count += 1
            if(count === promises.length) reject(new Error('没有promise成功'))
        }
    })
}

Promise.MyallSettled = function(promises){
    let arr = [],count=0
    return new Promise((resolve,reject)=>{
        promises.forEach((item,i)=>{
            Promise.resolve(item).then(res=>{
                arr[i] = {status:'fullfilled',val:res}
                count += 1
                if(count===promises.length)resolve(arr)
            },(err)=>{
                arr[i] = {status:"rejected",val:err}
                count += 1
                if(count===promises.length)resolve(arr)
            })
        })
    })
}