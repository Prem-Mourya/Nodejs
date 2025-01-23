const fs = require("fs");

// Write files 

// syncronos
// fs.writeFileSync('./text.txt', 'Hey i create one file by nodejs file system')

// Async
// fs.writeFile("./text.txt", "Hey there", (err) => {});

// Read files

// Sync
// const r = fs.readFileSync('./contact.txt', 'utf-8');
// console.log(r);

// Async

// fs.readFile('./contact.txt', 'utf-8', (err, r) => {
//     if (err) console.log("Error", err)
//     else console.log(r)
// })

// fs.appendFileSync('./text.txt', `Hey i am prem mourya\n`);

// creating a directory/folder
fs.mkdirSync('my-docs/a', {recursive: true})