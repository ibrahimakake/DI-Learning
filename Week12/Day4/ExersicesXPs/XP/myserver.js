/*Exercise 1 : HTTP

Instructions

Create a new folder, name it - node-server
Create a server file, name it - myserver.js
In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
Your server should run on http://localhost:3000/


Expected Output:

image */

let http = require('http')

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/html'})

    res.end(`<h1>This is my first response</h1>
            <h3>This is my second response</h3>
            <p>This is my third response</p>`)
})

server.listen(3000)
console.log('hello')

