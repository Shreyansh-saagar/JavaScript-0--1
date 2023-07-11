let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 1")
    }, 5000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve("value 2")
        reject(new Error("error"))
    }, 7000);
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 3")
    }, 3000);
})

// 6 methods of promise api are:
// 1> Promise.all()

/* let a = Promise.all([p1,p2,p3])
a.then((value)=>{
    console.log(value)
})
 */
// but what if any one of promise got rejected then it will through error
/*     let b = Promise.all([p1,p2,p3])
    b.then((value)=>{
        console.log(value)
    }) */

// 2> Promise.allSettled()
/* let a = Promise.allSettled([p1,p2,p3])
a.then((value)=>{
    console.log(value)
})
 */
// 3> Promise.race()
// let a = Promise.race([p1,p2,p3])
// a.then((value)=>{
//     console.log(value)
// })
// 4> Promise.any()
// let b = Promise.any([p1,p2,p3])
// b.then((value)=>{
//     console.log(value)
// })
// 5> Promise.resolve()
let a = Promise.resolve(6)
a.then((value)=>{
    console.log(value)
})
// 6> Promise.reject()
let b = Promise.reject(new Error("errror"))
b.then((error)=>{
    console.log(error)
})