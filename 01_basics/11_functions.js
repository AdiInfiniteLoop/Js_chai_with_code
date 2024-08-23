function addtwo(a, b) {
  return a + b;
}

console.log(addtwo(1, 2));
function xys(...ar) {
  console.log(ar);
}
xys(1, 2, 3, 4, 5);

function c(v1, v23, ...ar) {
  console.log(ar);
}
xys(1, 2, 3, 4, 5);

function xys(...ar) {
  console.log(ar);
}
xys(1, 2, 3, 4, 5);

const a = {
  name: "Aditya ",
};

function solve(a) {
  console.log(`${a.name}`);
}

const b = [1, 2, 3, 4];

//Another way to make a function

/* Also called an expression 
This will cause an error as func cannot be accessed before initialization unlike usual functions

func(2);
const func = function (x) {
  return x + 2;
};
*/
