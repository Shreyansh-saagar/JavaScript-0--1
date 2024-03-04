const fetchdata =()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let Cname = prompt('Enter name:')
            if(Cname == ''){
                rej('Invalid name')
            }else{
                const data = {
                    client: Cname,
                    number: Math.floor(Math.random() * 9000000000) + 1000000000
                }
                res(data)
            }
        },2000)
    })
}


async function fetchedData(){
    try{
        const data = await fetchdata();
        let retdata = document.createElement('div')
        retdata.innerHTML = `<p class='highlight'>${data.client} -> ${data.number}</p>`
        document.getElementById('container').appendChild(retdata)

        console.log(data);
    }
    catch(e){
        console.log(e);
    }finally{
        console.log('All Done');
    }
}

fetchedData()