//strings are immutable i.e. always it return new string but original string never changes
// string methods
/* 
1. length //property
2. toUpperCase() //function
3. toLowerCase() //function
4. slice(a,b) //function 
5. replace("str1 exsisting" , "str2 replacement") //case sensitive
6. concat(var , "str")
7. trim()  
*/

let a = 'hello'
let b = "hii"
console.log(a + " "+ b)
console.log(a.length + " "+ b.length)


// Template Literals
let c = "cat"
let d = "dog"
let sent = `My ${d} loves our ${c}`
console.log(sent)

//Escape sequence
let f = "\"Raju\""   // other escape sequence are \' \n \t \r
console.log(f)


let name = "Shiv   "
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(1,2))
console.log(name.slice(1))
console.log(name.replace("Shiv","Raju Srivastav"))
console.log(name.concat("is a good human being" + ' ok!'))
console.log(name.trim())