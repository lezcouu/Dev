// .js => por defecto utiliza CommonJS
// .mjs => para utilizar ES Modules (versión nueva)
// .cjs => para utilizar CommonJS

import { sum, mult } from './sum.mjs';

console.log(sum(1, 2));
console.log(mult(1, 2));
