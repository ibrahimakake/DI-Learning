const http = require('http');
/*const imports = require('./main.js');

const b = 5;

console.log(`${b + imports.largeNumber}`);

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
     <p>My Module is : ${b + imports.largeNumber}</p>
        <h1>Hi there at the frontend</h1>
        `);
});

server.listen(4900);
console.log('I\'m listening...')*/

const imports2 = require('./main.js');
const server2 = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p> ${imports2.currentDate()}</p>`);
  });
  console.log(new Date())
  server2.listen(8080);