// MAP - creates new array by performing some operation on array elements but foreach is used only to operate on an array it doesn't make any new array.
// syntax> map(value, index, array)

let a = [ 1,2,3,4,5]
let b = a.map((value,index , array) => {
    console.log(value, index, array)
    return value + index
})
console.log(b)
console.log("-------------------------------------------")

//filter - filter elements and create a new array on the basis of given condition
let c = [6,7,8,9,10,11,12,13]
let d = c.filter((item,index) => {
    console.log(item>10 , index)
    return item>10
})
console.log(d)
console.log("-------------------------------------------")

// reduce - it reduces an array to a single value
let e = [1,2,3,4,5]
const add=(g,h)=> {
    return g + h
}
let f = e.reduce(add)
console.log(f)