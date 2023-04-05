// array is collection of some item. we can access it through index values.
//syntax> let name =[items....]
//arrays are mutable


let a = [20,23,21,18,16,null,true]
console.log(a)
console.log(a[2])
console.log(a[7]) //undefined 

console.log(a.length)  //count start from 1 ...

a[5] = 12 //changing a value to array
console.log(a)

a[7] = 14
console.log(a)

//accessing elements of array using for loogp
console.log(typeof a)
for(let i in a){
    console.log(a[i])
    // console.log(i)
}



//METHODS OF ARRAY
/*
1. toString() - convert array into string
2. join() - join all element using a seprator
3. pop() - remove last element of array in same array, it doesn't create new array
4. push() - add new element into array in same array
5. shift() - remove first element and return it
6. unshift() - add new element to begin of array and return new array length
7. delete - its an operator, it deletes an element but length of array doesn't get affected.
8. concat() - it joins two array, it creates new array
9. sort() - sort array alphabeticlaly, modify original array
10. sort(compare) - for sorting elements
11. reverse - reverse the array
12. splice - used to add new item to an array
        e.g. splice(index,remove,elements.....)

13. slice() - alice out a array and create a new array


let compare = (a,b) => {
    return a - b  //for low to high
    return b - a // for high to low
}
*/ 

let num = [12,34,56,111,78,90]
console.log(typeof num.toString() , num)
console.log(num.join(' | '))
console.log(num.pop())
console.log(num)
console.log(num.push(90))
console.log(num)
console.log(num.shift())
console.log(num.unshift(20))
console.log(num)
console.log(delete(num[0]))
console.log(num)
console.log(num.sort())
console.log(num.reverse())
console.log(num.splice(1,2,252,263,324))
console.log(num)
console.log(num.slice(1,3))

let n1 = [454,452]
let f1 = num.concat(n1)
console.log(f1)


// FOR LOOP WITH ARRAY
let num1 = [12,34,56,111,78,90]

//Basic for loop
for(let i = 0; i < num1.length;i++){
    console.log(num1[i])
}

console.log('===========================')

// For of
for(let it of num1){
    console.log(it)
}

//for in
console.log('===========================')
for(let item in num1){
    // console.log(item)
    console.log(num1[item])
}

console.log('===========================')
//foreach
num1.forEach((i) => {
    console.log(i*i)
})

//Array of
console.log('===========================')
let name = 'shreyansh'
let arr = Array.from(name)
console.log(arr)



