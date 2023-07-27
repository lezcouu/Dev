const { readFile } = require('node:fs/promises');

(async () => {
  console.log('Leyendo primer');
  const text = await readFile('./archivo.txt', 'utf-8');
  console.log(text, 'primer text');
})();

console.log('haciendo algo');
(async () => {
  console.log('Leyendo el segundo archivo');
  const text2 = await readFile('./archivo2.txt', 'utf-8');
  console.log(text2, 'segundo text');
})();
