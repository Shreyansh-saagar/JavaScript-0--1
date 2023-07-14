
let p  = fetch("https://goweather.herokuapp.com/weather/Ny");
p.then((response)=>{
    // Step 1 getting response
    console.log(response.status)
    console.log(response.ok)

    console.log(response.headers)
    // step 2 Resolve response
    return response.json()
}).then((value)=>{
    console.log(value)
})
