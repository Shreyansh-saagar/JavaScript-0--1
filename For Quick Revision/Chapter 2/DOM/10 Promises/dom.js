const fetchdata = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let Cname = prompt('Enter Name:')
            if(Cname == ''){
                rej('Valid data not provided')
            }else{
                const data = {
                    Patient_name: Cname,
                    checkUp_Id: Math.floor(Math.random() * 90000) + 10000
                }
                res(data)
            }
        },1000)
    })
}

fetchdata().then((data)=>{
    let retdata = document.createElement('div')
    retdata.innerHTML = `<p class='highlight'>${data.Patient_name} -> ${data.checkUp_Id}</p>`
    document.getElementById('container').appendChild(retdata)

    console.log(data);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('All Done');
})