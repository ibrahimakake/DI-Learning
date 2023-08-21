/*let server= require('express')
let app = server()

app.get('/user',(req,res)=>{
    const user = {firstname: 'John',
    lastname: 'Doe'};
    console.log(user);
    res.end(JSON.stringify(user))
})

app.listen(3000)*/

/*Exercise 2 : Express & Parameters

Instructions

In the server.js file, create your server using express.
Create a route /, and use a GET request method.
The path of the route should contain the route parameter id.
The handler function of the route should respond with the value of the route parameter. Check out req.params.
Run on port http://localhost:3000/ and add an id, for example http://localhost:3000/1234
The response should be the JSON Object. Console.log this object and display it on the DOM.
 */

let server= require('express')
let app = server()

app.get('/:id',(req,res)=>{
   console.log("req.params: ",req.params)
    res.end(JSON.stringify(req.params))
})

app.listen(3000)


