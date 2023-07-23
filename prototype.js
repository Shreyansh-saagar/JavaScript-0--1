// PROTOTYPE
let  a  = {
        name : "Shreyansh",
        last_name:"saagar",
}

console.log(a.name);

let p ={
        currentCity: ()=>{
                console.log("Amritsar");
        }
}

a.__proto__ = p;
a.currentCity();

let b = {
        name2:"Jack",
}

p.__proto__= b;
console.log(a.name2)
console.log(a)
