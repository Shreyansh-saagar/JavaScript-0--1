let one = document.getElementById("one")
console.log(one.getAttribute("class"))
console.log(one.hasAttribute("style"))
one.setAttribute("class","Na-hee-doo, park-jim-in, Rm")
console.log(one.getAttribute("class"))

one.removeAttribute("class")
console.log(one.hasAttribute("class"))

one.setAttribute("class","Na-hee-doo, park-jim-in, Rm")
console.log(one.attributes)

one.setAttribute("hidden","true")
one.removeAttribute("hidden")


//accessing custom attribute
console.log(one.dataset.hello)