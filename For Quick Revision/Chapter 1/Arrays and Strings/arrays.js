let arr = [1,2,3,4,5,6,7,8,9,10]

let arr2 = [90,91,92,93,94,95,96,97,98,99]

let arr3 = arr.concat(arr2)
console.log(arr3);
console.log('--------------------------------');
console.log(arr.indexOf(3));
console.log(arr.lastIndexOf(5));
console.log('--------------------------------');
console.log(arr.join(" + "));
console.log('--------------------------------');
arr2.push(100)
console.log(arr2);
arr2.pop(100)
console.log(arr2);
console.log('--------------------------------');
console.log(arr2.reverse());
arr2.shift()
console.log(arr2);
arr2.unshift(20)
console.log(arr2);
console.log('--------------------------------');
let arr4 = arr.slice(1,5)
console.log(arr4);
arr4.sort((a,b) =>{return a - b}) //numeric sort order
console.log('--------------------------------');
arr4.splice(2,0,"Hello","Hi") //add elements (where, how many to remove, element list)
console.log(arr4);
console.log('--------------------------------');
console.log(arr4.toString());
console.log(arr4.length);