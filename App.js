// Node.js program to demonstrate the
// fs.readFileSync() method

// Include Http Module

const fs = require('fs');

const http = require('http');

const hostname = '127.0.0.1';

const port = '3000';

let home = fs.readFileSync('./Home.html', { encoding: 'utf8', flag: 'r' });

let about = fs.readFileSync('./About.html', { encoding: 'utf8', flag: 'r' });

let server = http.createServer((req, res) => {
  let url = req.url;

  res.writeHead(200, { 'Content-Type': 'text/html' });
    
  res.end(home);

});

server.listen(port, hostname, () => {
  console.log('Heloo');
});

/*

// Include fs module
const fs = require('fs');

// Calling the readFileSync() method
// to read 'input.txt' file

data = data.replace('Hi', 'Hello');
// Display the file data
console.log(data);

fs.writeFileSync('./WriteSample.txt', data);
*/
