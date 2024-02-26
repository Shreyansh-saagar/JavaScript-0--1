// Removing Elements ->

// using removeCHild
document.getElementById('container').removeChild(document.getElementById('paragraph1'))

// using remove
document.getElementById('box1').remove()


// Attribute Functions
const ele = document.getElementById('box2')
console.log(ele.getAttribute('class'));

ele.setAttribute('class', 'sty2 sty3')
console.log(ele.getAttribute('class'));

console.log(ele.hasAttribute('class'))

ele.removeAttribute('class')
console.log(ele.getAttribute('class'));