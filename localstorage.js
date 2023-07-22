let key = prompt("Enter Key: ");
let value = prompt("Enter Value: ");

localStorage.setItem(key, value);
console.log(`Item added with ${key}`);

console.log("----------------------------------------------------------------")
console.log(localStorage.getItem(`${key}`));
console.log("----------------------------------------------------------------")

setTimeout(() =>{
        let remo = prompt("Enter key to remove: ");
        localStorage.removeItem(remo);

        console.log(`Item removed successfully with key ${remo}`)
},3000)

