console.log("Hello")

console.log(console)

console.error("This is an error")

console.warn("It is a warning")

console.assert(5<4)

console.info("It's an info")

let act = {a:4,b:6,c:7}
console.table(act)

console.time("forloop")
for(let i = 0 ; i < 5;i++){
    console.log(i)
}
console.timeEnd("forloop")

alert("Be ready to play the game")
let a = prompt("Enter your lucky no. : ")
a = Number.parseInt(a)
let write = confirm("Is "+ a+" your lucky no.")
if(write){
    document.write(a)
}
else{
    document.write("enter correct lucky no.")
}