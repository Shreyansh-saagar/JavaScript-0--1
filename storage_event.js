let key = prompt("Enter Key: ");
let value = prompt("Enter Value: ");
sessionStorage.setItem(key, value);

console.log(`Successfully entered data with key: ${key}`);

window.onstorage= (e) => {
        console.log("Data changed")
        console.log(e)
}