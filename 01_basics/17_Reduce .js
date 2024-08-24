const mynums = [1, 34, 5, 6, 7, 7, 34, 3, 6];
//Reduce useful in say, adding bills in shops
const a = mynums.reduce(function (acc, currval) {
  return acc + currval;
}, 0);

const ba = mynums.reduce((acc, currval) => acc + currval, 0);

console.log(a);
console.log(ba);
