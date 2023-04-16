//changing card title to red

let ctitle = document.getElementsByClassName("card-title")[0]
// console.log(ctitle)
ctitle.style.color = "red"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color="red"
ctitles[1].style.color="blue"
ctitles[2].style.color="green"
console.log(ctitles)

document.querySelector(".btom").style.color = "white"
document.querySelector(".btom").style.background = "red"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card-body").getElementsByTagName("a"))