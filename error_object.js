/* try{
    console.log(hello)
}catch(error){
    // Error object properties
    console.log(error.name)
    console.log(error.message)

    console.log(error.stack)
} */

// Custom errors

try{
    age = 23
    if(age>20){
        throw new ReferenceError("hello ni namaskaram")
    }
}catch(err){
    console.log(err.name)
    console.log(err.message)
}