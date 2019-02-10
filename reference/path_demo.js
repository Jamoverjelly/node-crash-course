const path = require(`path`);

// Retrieve the base file name with basename
console.log(path.basename(__filename));

// Retrieve the directory name with dirname
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object with parse
console.log(path.parse(__filename));

// Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, `test`, `hello.html`));