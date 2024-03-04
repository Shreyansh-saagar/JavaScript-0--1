const fetchData = (cb)=>{
    setTimeout(()=>{
        let Bname = prompt('Enter Name:')
        if(Bname == 'shreyansh'){
            const data = {
                bossName : Bname, 
                msg: 'Boss everything is fine developers are working hard for the product'
            }
            cb(data)
        }else{
            const data = {
                msg: 'Unauthorized request'
            }
            cb(data)
        }
    },1000)
}

const retData =(data)=>{
    let retdata = document.createElement('div')
    retdata.innerHTML = `<p>${data.bossName} -> ${data.msg}</p>`
    retdata.firstElementChild.setAttribute('class','highlight')
    document.getElementById('container').append(retdata)
    console.log(data);
}

fetchData(retData)