var c = 12;

if (true) {
  //BLOCK SCOPE
  //   let a = 10;
  const b = 12;
  var c = 21; //it goes beyond the scope
}
// console.log(a);
// console.log(b);
console.log(c);

function one() {
  const username = "Aditya ";
  function two() {
    console.log(username);
  }

  console.log("youo ");
  two();
}

one();
