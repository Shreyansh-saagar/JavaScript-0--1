/* let options = {
    method: 'POST',
    headers: {
        "Content-type" : "application/json"
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((response) => response.json())
  .then((json) => console.log(json));
 */

const createTodo = async (todo)=>{
    let options = {
        method: 'POST',
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(todo),
    }
    
    let promise = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await promise.json()
    return response;
}

const gettodo = async (id) =>{
    let p1 = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r1 = p1.json()
    return r1
}

const mainf = async () =>{
    let todo = {
        title: 'Shreyansh Saagar',
        body: 'Hello',
        userId: 100,
    }
    let result = await createTodo(todo)
    console.log(result)
    console.log(await gettodo(5))
}

mainf()