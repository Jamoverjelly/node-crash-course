const fs = require(`fs`);
const path = require(`path`);

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Folder created...');
//   }
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello, world!", err => {
//   if (err) {
//     console.error(err);
//   } else {
//     // File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " I love Node.js!", err => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log('File written...');
//       }
//     });
//   }
// });

// Rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloNew.txt'),
  err => {
    if (err) throw err;
    console.log('File renamed');
});