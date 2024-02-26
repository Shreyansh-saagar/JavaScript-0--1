const out = ()=>{
    let outvar ="Hello world"
    const inner = ()=>{
        console.log(outvar)
    }
    return inner
}

let closure = out()
closure()