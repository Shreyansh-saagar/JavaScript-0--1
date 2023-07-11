async function Hello(){

    let report1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("data 1")
        }, 2000);
    })

    let report2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("data 2")
        }, 4000);
    })

    /*     
    aSpeed.then((value)=>{
        console.log("A speed is : "+ value)
    })
    bSpeed.then((value)=>{
        console.log("B speed is : "+ value)
    }) 
    */

    console.log("wait A speed is calculating...")
    let r1 = await report1
    console.log("A data is " + r1)
    console.log("wait B speed is calculating...")
    let r2 = await report2
    console.log("B data is " + r2)

    return [r1, r2]
}

async function dev(){
    console.log("Dev Tester")
}

// console.log(".........")
// let a = Hello()
// let b = dev()
// a.then((x)=>{
//     console.log(x)
// })


async function direct(){
    console.log(".........")
    let a = await Hello()
    let b = await dev()
    // a.then((x)=>{
    //     console.log(x)
    // })
}
direct()