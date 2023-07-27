import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log(platform(), 'NOMBRE OS');
console.log(release(), 'VERSION OS');
console.log(arch(), 'ARQUITECTURA OS');
console.log(cpus(), 'CPUS OS');
console.log(freemem() / 1024 / 1024, 'MEMORIA libre OS');
console.log(totalmem() / 1024 / 1024, 'MEMORIA total OS');
console.log(uptime() / 60 / 60, 'Horas encendido OS');
