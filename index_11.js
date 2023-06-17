document.write("Hello")

const hello = (n) => {
    let a = document.getElementById("help");
    a.insertAdjacentHTML('afterbegin','<div class="red text">' +'<br>' + n + '</div>');
}
let b = setTimeout(hello,3000,"shreyansh ")
const boss = (z) => {
    let a = document.getElementById("help");
    a.insertAdjacentHTML('beforeend','<div class="red text">' +'<br>' + z+ '</div>');
    
}

let d = setInterval(boss,2000,"boss")

let c = prompt("are you ready?");
if(c == "n"){
    clearTimeout(b);
    clearInterval(d);
}

