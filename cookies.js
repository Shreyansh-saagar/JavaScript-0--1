
/* The code `document.cookie = "data1 = hello";` is setting a cookie named "data1" with the value
"hello". */
/* 
document.cookie = "data1 = hello";
console.log(document.cookie);
*/

/* The code is prompting the user to enter a key and a value. It then sets a cookie with the
entered key and value using the `document.cookie` property. The `encodeURIComponent()` function is
used to encode the key and value to ensure they are properly formatted for the cookie. Finally, it
logs the current value of the `document.cookie` property to the console. */
/* 
let k = prompt("Enter key: ");
let v = prompt("Enter value: ");

document.cookie = `${encodeURIComponent(k)} = ${encodeURIComponent(v)}`;
console.log(document.cookie); 
*/

/* The code is prompting the user to enter a number of minutes. It then creates a new Date object to
represent the current date and time. The expirationDate is set to the current date and time plus the
number of minutes entered by the user, converted to milliseconds. */

let minutes = prompt("Minutes: ");
const expirationDate = new Date();
expirationDate.setTime(expirationDate.getTime() + (minutes * 60 * 1000)); // Convert minutes to milliseconds
const expires = "expires=" + expirationDate.toUTCString();
document.cookie = `key1  = high on weeds; ${expires}`;
