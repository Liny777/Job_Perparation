// all 所有成功才成功，返回所有成功的，并用列表装起来
// race 返回最快的，最快的成功就是成功，最快的失败就是失败
// any 一个成功就是成功，所有失败才失败
// allsettled 不管失败还是成功，都要返回
Promise.MyAll = function(promises){
    let arr = [],count=0
    return new Promise((resolve,reject)=>{
        promises.forEach((item,i)=>{
            Promise.resolve(item).then(res=>{
                count += 1
                arr[i] = res
                if(count===promises.length) resolve(arr)
            },reject)
        })
    })
}

Promise.MyRace = function(promises){
    let arr = []
    return new Promise((resolve,reject)=>{
        for(const item of promises){
            Promise.resolve(item).then(resolve,reject)
        }
    })
}

// Promise.MyAllSettled = function(promises){
//     let arr = [],count=0
//     return new Promise((resolve,reject)=>{
//         promises.forEach((item,i)=>{
//             Promise.resolve(item).then(res=>{
//                 arr[i] = {status:'fullfilled',val:res}
//                 count += 1
//                 if (count===promises.length) resolve(arr)
//             },(err)=>{
//                 arr[i] = {status:'rejected',val:err}
//                 count += 1
//                 if(count===promises.length) resolve(arr)
//             })
//         })
//     })
// }

Promise.MyAllSettled = function(promises){
    let arr = [],count=0
    return new Promise((resolve,reject)=>{
        const TempFunction =  function(status,val,index){
            arr[index] = {status:status,val:val}
            count += 1
            if(count===promises.length) resolve(arr)
        }
        promises.forEach((item,i)=>{
            Promise.resolve(item).then(res=>{
                TempFunction('fullfilled',res,i)
            },err=>{
                TempFunction('rejected',err,i)
            })
        })
    })
}
// Promise.MyAllSettled = function (promises) {
//     let arr = [],
//       count = 0
//     return new Promise((resolve, reject) => {
//       const processResult = (res, index, status) => {
//         arr[index] = { status: status, val: res }
//         count += 1
//         if (count === promises.length) resolve(arr)
//       }
  
//       promises.forEach((item, i) => {
//         Promise.resolve(item).then(res => {
//           processResult(res, i, 'fulfilled')
//         }, err => {
//           processResult(err, i, 'rejected')
//         })
//       })
//     })
//   }

Promise.MyAny = function(promises){
    let arr = [],count=0
    return new Promise((resolve,reject)=>{
        promises.forEach((item,i)=>{
            Promise.resolve(item).then(resolve,err=>{
                arr[i] = {status:'rejected',val:err}
                count += 1
                if(count===promises.length) reject(new Error('没有Promise成功'))
            })
        })
    })
}

const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p2 延时一秒')
    },1000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p3 延时两秒')
    },2000)
})
const p4 = Promise.reject('p4 rejected')

const p5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('p5 reject 延时1.5秒')
    },1500)
})

const p6 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('sss')
    },2000)
})
const p7 = new Promise.reject('p7 rejected')
// Promise.MyAll([p1,p2,p3]).then(res=>console.log(res)).catch(err=>console.log(err))
// Promise.MyRace([p4,p5]).then(res=>console.log(res)).catch(err=>console.log(err))
// Promise.MyAny([p4,p5]).then(res=>console.log(res)).catch(err=>console.log(err))
Promise.MyAllSettled([p1,p2,p3,p4,p5]).then(res=>console.log(res)).catch(err=>console.log(err))