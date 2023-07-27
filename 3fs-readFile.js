const fs = require('node:fs/promises');
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile); solo para los modulos que no tengan promesa

console.log('Leyendo el primer archivo');
fs.readFile('./archivo.txt', 'utf-8').then((text) => {
  console.log('primer texto', text);
});

console.log('Leyendo el segundo archivo');
fs.readFile('./archivo2.txt', 'utf-8').then((text) => {
  console.log('segundo texto', text);
});

console.log('Leyendo el segundo archivo');
//Forma sincrona
fs.readFileSync('./archivo2.txt', 'utf-8').then((text) => {
  console.log('segundo texto', text);
});
