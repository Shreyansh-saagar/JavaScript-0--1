/* //Walking with DOM
console.log(window)   //window is a universal object
console.log(document)
console.log(document.head)
console.log(document.documentElement)
console.log(document.body)

// Accessing children

console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)
let a = Array.from(document.body.childNodes)  //converting nodelist into array
console.log(a)  

let b = document.body.firstChild === document.body.childNodes[0]
console.log(b) */


// Parent and Sibling
console.log(document.body.firstChild)
let c = document.body.firstChild
console.log(c.parentNode)
console.log(c.parentElement)
let d = document.body.firstChild.nextSibling
console.log(d)
console.log(d.firstChild)
console.log(d.firstChild.nextSibling)