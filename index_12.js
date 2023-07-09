let x = function(e){
    console.log(e)
    alert('hello alert1')
}
btn.addEventListener('click',x)
let y = function(e){
    alert('hello alert2')
}
btn.addEventListener('click',y)

let a = prompt("1 or 2");
if( a == '1'){
    btn.removeEventListener('click',y)
}else if( a == '2'){
    btn.removeEventListener('click',x)
}else{
    btn.removeEventListener('click',x)
    btn.removeEventListener('click',y)
}