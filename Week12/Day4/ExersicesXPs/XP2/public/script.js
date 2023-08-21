/*Exercise 1 : Express & JSON

Instructions

Create a public folder containing two files : index.html and script.js
Outside of the public folder, create a file named server.js.
In the server.js file, create an express server. Create a GET request to the route /users.
The handler function of the /users route should send a stringified version of this javascript object const user = {firstname: 'John',lastname: 'Doe'}.
In the script.js file, fetch the server at the route /users and get the response. 
The response should be the JSON Object. Console.log this object and display it on the DOM.
 */
fetch('http//localhost:3000/user'
).then(
    (res)=>{
        res.json()
}).then((data)=>{
    let div = document.createElement('div')
    div.innerHTML= data
    body.appendChild(div)
}).catch((e)=>{
    console.log(e)
})

