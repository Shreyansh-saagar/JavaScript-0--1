const arr = [1,2,3,4,5,6,7,8,9,10]
const arr2 = arr.reduce((acc,num)=>{
    if(num % 2 == 0){
        acc += num
    }
    return acc
},0)

console.log(arr2);