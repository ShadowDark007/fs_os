const fs = require("fs");
   

const data = fs.readFileSync('../data/data.txt');
console.log(data);



const n = "sad";
fs.writeFileSync('../data/terceros.js', n);


const hola = "1 \n";
fs.writeFileSync('../data/terceros.js', hola, {
    flag : 'a', // flag significa añadir
});








