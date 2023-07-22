/* `sessionStorage` is a web storage object in JavaScript that allows you to store key-value pairs in
the browser's session. It provides a way to store data temporarily during a user's session on a
website. The data stored in `sessionStorage` is available only for the duration of the page session
and is cleared when the user closes the browser tab or window. */


/* The code is using JavaScript to prompt the user to enter a key and a value. It then stores the
key-value pair in the sessionStorage using the `setItem()` method. */
let key = prompt("Enter Key: ");
let value = prompt("Enter Value: ");
sessionStorage.setItem(key, value);

console.log(`Successfully entered data with key: ${key}`);

setTimeout(() =>{ 
        let remo = prompt("Enter key to remove: ");
        sessionStorage.removeItem(remo);
        console.log(`Successfully removed data with key: ${remo}`);
},3000)