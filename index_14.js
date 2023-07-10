/* let a = new Promise(function(resolve,reject){
    console.log("Hello")
    // resolve(56);
    reject(54)
})

console.log("hello one")
console.log("Hello 2")
setTimeout(function(){
    console.log("Hello 3")
},3000)
console.log("Hello 4")

console.log(a) */

// Resolve and Reject
//  Promises -> fulfilment -> resolve / reject

/* let b = new Promise((resolve,reject)=>{
    console.log("Promise b is pending")
    setTimeout(()=>{
        resolve(true);
    },3000)
})

let c = new Promise((resolve,reject)=>{
    console.log("Promise c is pending")
    setTimeout(()=>{
        reject(new Error("Error occured"))
    },3000)
})

b.then((value)=>{
    console.log("B resolved")
},(error)=> {
    console.log(error)
}) */

// OR

/* b.then((value)=>{
    console.log("B resolved")
})
b.catch((error)=>{
    console.log(error)
}) */

// Both works same no difference

/* c.then((value)=>{
    console.log("C Resolved")
},(error)=>{
    console.log(error)
})
 */
// It's providing u state of promise 
/* setTimeout(() => {
    console.log(b)
    console.log(c)
}, 1000);

setTimeout(() => {
    console.log(b)
    console.log(c)
}, 7000); */

//Promise Chaining
// -> promise chaining is solution of callback hell.
/* let a = new Promise((resolve,reject)=>{
    console.log("Promise A here")
    setTimeout(() => {
        resolve("A resolved")
    }, 5000);
})

a.then((value)=>{
    console.log(value)

    console.log("chain part 1")
    return new Promise((resolve,reject)=>{
        console.log("2nd Promise here")
        setTimeout(() => {
            resolve("chain part 1 resolved")
        }, 3000);
    })
}).then((value)=>{
    console.log(value)

    console.log("Dhoni : ")
    // passing directly a constant will convert it in already resolved promise with value = constant
    return 7
}).then((value)=>{
    console.log(value)
})
 */

// Writing loadscript function with promises
/* 
let loadscript = (src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = src;
        document.head.appendChild(script);
        script.onload=()=>{
            resolve("Script loaded")
        }
        script.onerror=()=>{
            reject(new Error("Error 404"))
        }
    })
}

let p = loadscript("https://cdn.1jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")

p.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error + " error occured")
})
*/

// Attaching multiple handlers to a promise

let a = new Promise((resolve,reject)=>{
    console.log("not resolved yet")
    setTimeout(() => {
        resolve("resolved")
    }, 5000);
})

// handler 1 with concept of promise chaining
a.then(()=>{
    console.log("one")
    return 7
}).then((value)=>{
    console.log(value)
})

// handler 1 without concept of promise chaining
a.then(()=>{
    console.log("two")
})