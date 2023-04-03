const prompt = require("prompt-sync")({sigint:true}); //Use this line to use prompt also install prompt package using required cmnd.
// Basic for loop


for(var i = 1; i < 10; i ++){
    console.log(i)
}

// program to print sum of n even no. 
let sum = 0;
let n = prompt("Enter value on n : ")
n = Number.parseInt(n)
for(let i = 2; i <= n ; i= i+2){
    sum += i
}
console.log("The sum of first " + n + " even no. is : "+ sum)


// For-in loop

/* 
let marks = {
    samridhi : 23,
    sneha : 22,
    rudra : 20,
    shruti : 18,
    shreyansh : 15
}

for(let a in marks){
    console.log(a)
    console.log("The marks of " + a + " is : "+ marks[a])
}
 */

// For - of loop

/* 
for (let a of "marks") {
    console.log(a)
}
 */