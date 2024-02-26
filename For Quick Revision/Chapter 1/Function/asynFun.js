function asyn(){
    setTimeout(()=>{
        console.log('Entry Point');
    },1000)
}

asyn()
console.log('Exit Point');