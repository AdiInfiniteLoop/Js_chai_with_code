const arr = [1, 2, 3, 4, "adi", true];
console.log(arr);
/* Arrays in js undergo shallow copy i.e., same reference point instead of deep copy */

const ar = new Array(1, 2, 3, 4, 45, "hi");

console.log(ar.length);
console.log(ar.at(1)); //2  else -1

console.log(ar);

ar.push(11);
console.log(ar);
ar.pop();
console.log(ar);

ar.unshift(0); //adds 0 in the start of ar
console.log(ar);

console.log(ar.length);

// **Not possible** ar = arr.join(ar);
const newar = ar.join(arr);
console.log(newar);

/* Splice-manipulates the original array */

console.log(newar.slice(0, 4)); //doesn't include 4th index

console.log(ar.splice(0, 4)); //works on only new Array() #objects. Includes 4th index too
