//to explicitly mention a datatype , we use the new keyword(obvio)

// const num = new Int32Array(4324); //fills an array of size 4324 with zeroes
// console.log(num);

const n = new Number(120);
console.log(n); //[Number: 120]

const n2 = 120;
console.log(n2); //120

console.log(n.toString().length);
console.log(n.toFixed(2)); //120.00//usually for e-commerce websites
console.log(n.toPrecision(2)); //carefully use. usually take the number of digits before decimal
console.log(n.toLocaleString("en-IN")); //gets commas like 100,000,000. en-IN change to Indian format 10,00,00,000

//=========================Maths=============================//

/* There is :
abs, floor, ceil, round */

/* Learn about Math more like sin,cos, etc in future for learning 3.js */
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 100;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
