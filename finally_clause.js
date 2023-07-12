// First case - no error in try block
/* try{
    console.log("hello")
}catch(err){
    console.log(err.name)
}finally{
    console.log("all done")
} */

// second case - error in try block
/* try{
    console.log(hello)
}catch(err){
    console.log(err.name)
}finally{
    console.log("all done")
} */

// Third case - no error in try block but error in catch
/* 
try{
    console.log("hello")
}catch(err){
    console.log(err.name)
    console.log(p)
}finally{
    console.log("all done")
} */

// fourth case - error in botth try and catch

/* try{
    console.log(hello)
}catch(err){
    console.log(err.name)
    console.log(p)
}finally{
    console.log("all done")
} */

// fifth case - try catch inside a function when program doesn't contains any error in try block and return keyword is used

const f =()=>{
    try{
        console.log("hello")
        return
    }catch(err){
        console.log(err.name)
    }finally{
        console.log("all done")
    }
}
f()
console.log("end")