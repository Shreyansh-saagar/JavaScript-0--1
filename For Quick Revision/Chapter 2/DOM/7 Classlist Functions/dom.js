const ele = document.getElementById('box1')

ele.classList.add('sty3','sty2')
ele.classList.remove('sty3')

ele.classList.toggle('sty3')
console.log(ele.classList.contains('sty2'))

console.log(ele.classList.item(0) + " " + ele.classList.item(1) + " " + ele.classList.item(2))
ele.classList.replace('sty3','highlight')
console.log(ele.classList.item(0) + " " + ele.classList.item(1) + " " + ele.classList.item(2))