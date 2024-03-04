let capital = prompt('Enter capital name:')

fetch(`https://restcountries.com/v3.1/capital/${capital}`)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Network response was not ok')
        }

        return response.json()
    }).then((data)=>{
        console.log(data);
        fetcheddata(data)

    }).catch((e)=>{
        console.log('Error: '+e);
    })

const fetcheddata =(data)=>{
    data.forEach(country => {
        let details = document.createElement('div');
        details.innerHTML = `
            <p>Country Name: ${country.name.common}</p>
            <p>Capital: ${country.capital}</p>
            <img src="${country.flags.png}" width="300px" height="200px"/>
        `;
        document.getElementById('container').appendChild(details);
    });
}