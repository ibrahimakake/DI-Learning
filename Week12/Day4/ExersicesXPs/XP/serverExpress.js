/*Exercise 3 : Express

Instructions

Create a server file, name it - serverExpress.js
Use express to create a server. Return an HTML line of code (Use only HTML tags, no HTML files), for requests to the root URL (/).
Remember to use the GET method for the server route.
Your server should run on http://localhost:3000/


Expected Output:

image
 */

let express = require('express')
let app = express()

app.get('/',(req,res)=>{
    res.end(`<html><body><h1>This is my first HTML line from Express</h1></body></html>`)
});

app.listen(3000)
console.log("hello")