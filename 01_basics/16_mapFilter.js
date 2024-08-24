const myarr = [1, 2, 45, 6, 7, 78, 8];

const n1 = myarr.filter((item) => item > 10);
console.log(n1); //45, 78
const n2 = myarr.filter((item) => {
  item > 10; //[]
});

/* ***n2 is empty because we used {} but we have to write the 'return' keyword *** */
console.log(n2);

const n3 = myarr.map((item) => {
  return item + 1;
});
console.log(n3); //same with .map(). Even original array will return undefined

const n4 = myarr.map((item) => {
  return item + 1;
});
console.log(myarr);

//Chaining methods

const nums = [1, 2, 3, 4, 5, 6, 7];

const a = nums
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((item) => item > 23);

console.log(a);
