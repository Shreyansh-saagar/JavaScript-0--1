let hidd2 = document.getElementById("ele1");
let hidd1 = document.getElementsByClassName("container")[0];

hidd2.style. visibility = 'hidden';

const  hid1 = () => {
    hidd1.style. visibility = 'hidden';
    hidd2.style. visibility = 'visible';
}
const  hid2 = () => {
    hidd2.style. visibility = 'hidden';
    hidd1.style. visibility = 'visible';
}