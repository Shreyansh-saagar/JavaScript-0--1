// "use strict";
var x;
x = 3
console.log(x);

switch (x) {
    case 2:
        console.log("all good");
        break;
    case 3:
        console.log("all ok");
        break;
    default:
        console.log("all bad");
}

let a;
console.log(a);

let b = null;
console.log(null);

let c = Infinity;
console.log(c);



var student = {                 // object name
    firstName:"Jane",           // list of properties and values
    lastName:"Doe",
    age:18,
    height:170,
    fullName : function() {     // object function
       return this.firstName + " " + this.lastName;
    }
}; 
student.age = 19;           // setting value
student.age++;             // incrementing
name1 = student.fullName();  // call object function
console.log(name1);
