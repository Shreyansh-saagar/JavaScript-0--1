var l = document.getElementById("sum");
var m = document.getElementById("sub");
var n = document.getElementById("mul");
var o = document.getElementById("divi");
var z = document.getElementById("btn");

function sub(){
    l.style.left ="-400px";
    m.style.left ="0px";
    n.style.left ="450px";
    o.style.left ="450px";
    z.style.left= "100px"

}

function mul(){
    l.style.left = "-400px"
    m.style.left ="-400px";
    n.style.left ="0px";
    o.style.left ="450px";
    z.style.left= "200px"
}
function divi(){
    l.style.left = "-400px"
    m.style.left = "-400px"
    n.style.left ="-400px";
    o.style.left ="0px";
    z.style.left= "300px"
}
function sum(){
    l.style.left ="0px";
    m.style.left ="450px";
    n.style.left ="450px";
    o.style.left ="450px";
    z.style.left= "0px"
}

function add1() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    var sum = a + b;
    document.getElementById("res1").innerHTML =sum;
    return false
}
function sub1() {
    var c = parseInt(document.getElementById("c").value);
    var d = parseInt(document.getElementById("d").value);
    var sub = c - d
    document.getElementById("res2").innerHTML =sub;
    return false
}
function mul1() {
    var e = parseInt(document.getElementById("e").value);
    var f = parseInt(document.getElementById("f").value);
    var mul = e * f
    document.getElementById("res3").innerHTML =mul;
    return false
}  
function divi1() {
    var g = parseInt(document.getElementById("g").value);
    var h = parseInt(document.getElementById("h").value);
    var divi = g / h;
    document.getElementById("res4").innerHTML =divi;
    return false
}