/* `textContent` allows you to set or get the text content of an HTML element. */
const span1 = document.getElementById('span1')
span1.textContent = 'New text Content >> '

/* `innerHTML` is setting the HTML content of the `span2` element to `<i> New text in span2 </i>`.*/
const span2 = document.getElementById('span2')
span2.innerHTML = `<i> New text in span2 </i>`

/* `innerText` allows you to set or get the text content of an HTML element. */
const list = document.getElementById('list')
const item1 = list.firstElementChild
item1.innerText = 'Hello'

/* `setAttribute` method that allows you to set a specific attribute on an HTML element. */
const item2 = item1.nextElementSibling
item2.setAttribute('class','highlight')

/* `outerHTML` allows you to get or set the HTML content of an element, including the element itself. */
const item3 = list.lastElementChild
item3.outerHTML = '<b>highlight</b>'