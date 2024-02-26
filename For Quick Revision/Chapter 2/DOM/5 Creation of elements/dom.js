// steps to insert a new element in element -> 1. create 2. add content in that 3. setAttributes 4. insert element by using append or insertElement function.


// appendChild method
const newdiv = document.createElement('div')
newdiv.innerHTML = '<b> Hello from JS div.</b>'
newdiv.firstElementChild.setAttribute('class','highlight')

const container = document.getElementById('container')
container.appendChild(newdiv)


// insertAdjecentHTML method
container.insertAdjacentHTML('beforeend', `<p class="sty3">Hello</p>`)
container.insertAdjacentHTML('beforeBegin', `<p class="sty3">Hello</p>`)
container.insertAdjacentHTML('afterEnd', `<p class="sty3">Hello</p>`)
container.insertAdjacentHTML('afterBegin', `<p class="sty3">Hello</p>`)
// other than insertAdjacentHTML we have insertAdjacentText and insertAdjacentElement


// Insert methods 
const newDivInsert = document.createElement('div')
newDivInsert.innerHTML = '<p>Hello from new div</p>'
newDivInsert.firstElementChild.setAttribute('class','sty2')

container.before(newDivInsert)
container.after(newDivInsert)
container.append(newDivInsert)
container.prepend(newDivInsert)
// container.replaceWith(newDivInsert)