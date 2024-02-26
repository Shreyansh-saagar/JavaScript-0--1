console.log(document.head);
console.log(document.body);


const body = document.body

/* used to access the parent node of a specified node in the DOM (Document Object Model). In the provided code snippet. This property allows you to navigate up the DOM tree from a specific node to its parent node. */
console.log(body.parentNode)

/* returns a collection of a node's child nodes, as a NodeList object. It includes all child nodes, including text nodes andcomment nodes, of the specified node. */
console.log(body.childNodes)

/* used to access the first child node of a specified node in the DOM (Document Object Model). vice-versa for lastChild */
console.log(body.firstChild);
console.log(body.lastChild);

/* used to access the first child element node of a specified parent element in the DOM. It differs from `firstChild` in that it specifically targets element nodes, ignoring text nodes or
comment nodes that may be present as children. vice versa for lastElementChild */
console.log(body.firstElementChild);
console.log(body.lastElementChild);


const inerElement = body.firstElementChild.firstElementChild
console.log(inerElement);

/* `nextSibling` used to access the next sibling node of a specified node in the DOM. vice versa for previous sibling node */
console.log(inerElement.nextSibling);
console.log(inerElement.nextSibling.previousSibling);

/* `nextElementSibling` is used to access the next sibling element node of a specified element node in the DOM. It specifically targets element nodes, ignoring text nodes or comment nodes that may be
present as siblings. vice versa for previousElementSibling*/
console.log(inerElement.nextElementSibling);
console.log(inerElement.nextElementSibling.previousElementSibling);