let button = document.getElementById('link')

/* `addEventListener` allows to attach an event listener to a specified element. When the specified event occurs on that element, the function provided (an arrow function in
this case) will be executed.*/

// Types of Events
// click, mouseover, mouseOut, mouseEnter, mouseLeave , keydown, keypress,keyup, keypressEnter, keypressLeave, focus, blur, change, load, submit. 

button.addEventListener('click',()=>{
    alert('Routing toward linkedin')
})

let li = document.getElementById('list').firstElementChild
li.addEventListener('mouseover',()=>{
    li.setAttribute('style','background:red; color:white')
})