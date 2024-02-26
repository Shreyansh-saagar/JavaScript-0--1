window.alert('Hello world')
const res = window.confirm('Are you sure you want to continue? ')
console.log(res);

const prompt_res = window.prompt('Your age?', 1)
console.log(prompt_res);


// To open any link
// window.open('https://devtask77.vercel.app/')

// To close window
// window.close()

// To get location
console.log(window.location);

/* Represents the browsing history of the window. 
It allows you to access the browser's history stack, navigate back and forward, and manipulate the browser's history. You can use methods like `back()`, `forward()`, and `go()` to navigate through the history stack. */
console.log(window.history);

/* provides information about the browser's navigator. It contains details about the browser such as the user agent, browser version, platform, and more. Developers can use `window.navigator` to access information about the browser environment in which the script is running. */
console.log(window.navigator);

/* `window.scrollX` returns the number of pixels that the document has already been
scrolled horizontally. vice-versa */
console.log(window.scrollX + " " + window.scrollY);


/* `window.innerWidth` returns the inner width of the
browser window's content area. It represents the width of the viewport including the
vertical scrollbar (if present) but excluding the browser's user interface elements like
toolbars and scrollbars. Vice-versa for innerHeight*/
console.log(window.innerWidth + " "+ window.innerHeight);