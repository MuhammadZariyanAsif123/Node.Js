// Node.js program to demonstrate the
// fs.readFileSync() method

// Include fs module
const fs = require('fs');

// Calling the readFileSync() method
// to read 'input.txt' file
let data = fs.readFileSync('./ReadSample.txt', { encoding: 'utf8', flag: 'r' });

data = data.replace('Hi', 'Hello');
// Display the file data
console.log(data);

fs.writeFileSync('./WriteSample.txt', data);
