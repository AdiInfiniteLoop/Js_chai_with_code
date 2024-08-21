/* const arr1 = ["abc", "def", "ghi"];
const arr = ["pqrs", "tuvw", "xyz"];

const newarr = arr1.concat(arr); //concat returns a new array
console.log(newarr);

//But we usually use spread operator

const nr = [...arr, arr1];

const a = [1, 2, 3, [4, 5, [6, 7, 8]]];

const newa = a.flat(Infinity);
console.log(newa); */
/* [
  1, 2, 3, 4,
  5, 6, 7, 8
] */

console.log(Array.isArray("Aditya")); //to check an array
console.log(Array.from("Aditya")); //to make an array
console.log(Array.from({ name: "Aditya" }));
//*Cannot create array as we need to specify if we want to make array of key or valuee *//

console.log(Array.of(111, 1234214, 434, "asdasd"));
