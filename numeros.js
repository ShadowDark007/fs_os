const fs = require('fs');

//const hola = "1 \n";
//fs.writeFileSync('./data/estoylol.txt', hola , {
//    flag : 'a',
    
//});

for (var i = 1;i<=100;i++){
    fs.writeFileSync('./data/estoylol.txt', `${i}\n` , { flag : 'a'});

}