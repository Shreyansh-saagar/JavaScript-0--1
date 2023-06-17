// Basic node insertion ways

let a = document.body.getElementsByClassName("hello")[0];
// a.innerHTML = a.innerHTML + "<h1> Hello Shreyansh </h1>";

let div = document.createElement('div');
div.innerHTML = '<h2> Good Afternoon </h2>';
// a.appendChild(div);

// a.append(div);
// a.prepend(div);
// a.after(div);
// a.before(div);
a.replaceWith(div)


// Inserting nodes adjacently

let adj = document.getElementById("adj");
// adj.insertAdjacentHTML('beforeend','<div class="test1"><br> <b> HELLO FROM TEST1 before end</b> </div> ')
// adj.insertAdjacentHTML('afterend','<div class="test1"><br> <b> HELLO FROM TEST1 after end </b> </div> ')
// adj.insertAdjacentHTML('afterbegin','<div class="test1"><br> <b> HELLO FROM TEST1 after begin</b> </div> ')
// adj.insertAdjacentHTML('beforebegin','<div class="test1"><br> <b> HELLO FROM TEST1 before begin </b> </div> ')

// Removing nodes
adj.remove();