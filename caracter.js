const fs = require ('fs');

const os = require ('os');

const Compu = `host : ${os.hostname()}

plataForma : ${os.platform()}
procesador : ${os.cpus()[0].model}
arquitectura : ${os.arch()}
MemoriaEnBits : ${os.totalmem()} bytes`;

fs.writeFileSync('./data/terce.txt', Compu);
