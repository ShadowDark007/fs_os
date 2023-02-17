const fs = require ('fs');

const os = require ('os');

const Compu = `host : ${os.hostname()}

const totalMemBytes = os.totalmem();
const totalMemGB = (totalMemBytes / Math.pow(1024, 3)).toFixed(2);
const totalMemMB = (totalMemBytes / Math.pow(1024, 2)).toFixed(2);

plataForma : ${os.platform()}
procesador : ${os.cpus()[0].model}
arquitectura : ${os.arch()}
MemoriaEnBits : ${os.totalmem()} bytes`;
memoria ram total: ${totalMemGB} GB (${totalMemMB} MB);

fs.writeFileSync('./data/terce.txt', Compu);
