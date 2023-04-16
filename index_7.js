console.log(document.body.firstChild)
console.dir(document.body.firstChild)

console.log(document.body.firstElementChild)
console.dir(document.body.firstElementChild)

console.log(document.getElementById("first").tagName)
console.log(document.getElementById("first").nodeName)
console.log(document.firstChild.tagName)
console.log(document.firstChild.nodeName)

console.log(document.getElementById("first").innerHTML)

console.log(document.getElementById("night").innerHTML)

console.log(document.getElementById("first").outerHTML)

document.getElementById("first").innerHTML = "Good morning"