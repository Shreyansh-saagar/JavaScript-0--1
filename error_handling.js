setTimeout(() => {
    console.log("I am shreyansh")
}, 2000);

// console.log(shreyansh) // Error occured
// Solution to solve error
try {
    console.log(shreyansh)
} catch (error) {
    console.log("Error : " + error)
}

// But if we try to schedule any thing in try catch it will not handle it
    /* try{
        setTimeout(() => {
            console.log(Hello)
        }, 200);
    }catch(err){
        console.log(err)
    } */

// Solution for this is nesting try catch
try {
    setTimeout(() => {
        try {
            console.log(Hello)
        } catch (err2) {
            console.log("error 2 ")
        }
    }, 200);
} catch (err) {
    console.log(err)
}

setTimeout(() => {
    console.log("B.Tech student")
}, 3000);

setTimeout(() => {
    console.log("web developer + UI-UX designer")
}, 4000);