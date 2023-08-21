/*Exercise 3: Express & Static Files

Instructions

Create a public folder, that contains an HTML file. This HTML file can contain some CSS and some JavaScript (for example a head tag with some classes for styling, and in the body a button with an onClick attribute calling a Javascript function with an alert).
In a server.js file create your server using express.
Your server on http://localhost:3000/ should serve the HTML file. Check out the lesson named Express Routes & Queries in the Course Notes, more specifically the part “How To Serve Static Files In Express”
 */


let server = require('express');
//let bd = require('body-parser');
let app = server();

//app.use(bd.urlencoded({extended:false}));
//app.use(bd.json());
app.use(server.static(__dirname+'/public'));

app.get('http://localhost:3006/',(req,res)=>{
   
    const data = {
        message : 'Hello From Javascript'
    };
        res.end(JSON.stringify(data))
        
})
app.listen(3006)

