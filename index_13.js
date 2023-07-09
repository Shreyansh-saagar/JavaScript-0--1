//SYNCRONOUS JS
//  let a = prompt("what is your name")
//  let b = prompt("Are you okay?")
//  console.log(a + " is " + b)

//  ASYNCRONOUS JS
// console.log("Start")
// setTimeout(function hello() {
//     console.log("Hello")
// },4000)
// console.log("End")

// CallBacks
//  -> a callback is a function that is passed as an argument to another function and is intended to be called at a later time. The purpose of a callback is to allow the receiving function to execute the provided callback function when a certain condition or event occurs. This allows for asynchronous programming and enables functions to be executed in a specific order or respond to events dynamically. Callbacks are commonly used in JavaScript for tasks such as handling asynchronous operations, event handling, and handling the result of an operation.

// function hello(src){
//     console.log("hello : " + src)
// }

// function night(src){
//     console.log("night : ",src)
// }

// function loadscript(src,callback){
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () =>{
//         console.log("src : " + src);
//         callback(src);
//     }
//     document.head.append(script,hello);
// }

// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",night)

// HANDLING ERROR
// function hello(error,src){
//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log("hello : " + src)
// }

// function night(src){
//     console.log("night : ",src)
// }

// function loadscript(src,callback){
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () =>{
//         console.log("src : " + src);
//         callback(null,src);
//     }
//     script.onerror = ()=>{
//         console.log("error src: "+ src);
//         callback(new Error('new error found'))
//     }
//     document.head.append(script );
// }
// loadscript("https://cdn.errorjsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",hello)

function fetchData(callback) {
    setTimeout(function() {
      const data = 'Hello, world!';
      callback(data); // Calling the callback function with the fetched data
    }, 2000);
}
  
function processData(data) {
  console.log('Processing data:', data);
}
  
fetchData(processData);
  