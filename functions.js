const prompt = require("prompt-sync")({sigint:true}); //Use this line to use prompt also install prompt package using required cmnd.

/* 
function sum(x,y){
    console.log("Done")
    let sum = x + y
    return sum
}

let a = prompt("Enter value of a : ")
a = Number.parseInt(a)
let b = prompt("Enter value of b : ")
b = Number.parseInt(b)
console.log("The sum is : " + sum(a,b) ) 
*/

//arrow function

/* const hello =() => {
    console.log("Hello, How are you?")
    return "hi"
}
hello()
let a = hello()
console.log(a) 
*/

const sum=(x,y) => {
    console.log("Done")
    return x + y
}
let a = prompt("Enter value of a : ")
a = Number.parseInt(a)
let b = prompt("Enter value of b : ")
b = Number.parseInt(b)
console.log("The sum is : " + sum(a,b) ) 