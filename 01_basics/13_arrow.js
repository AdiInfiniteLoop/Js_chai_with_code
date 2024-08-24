// const user = {
//   name: "Aditya",
//   age: 21,
//   welcomeMessage: function () {
//     console.log(`The user: ${this.name}`);
//     return;
//   },
// };

// user.welcomeMessage();
// user.name = "Vignesh Bantai"; //context changes
// user.welcomeMessage();

/* In browser, the context is the Window Object unlike here in node environment */
console.log(this); //{}

function chai() {
  console.log(this);
}

chai();

const arrow = () => {
  console.log(this);
};

arrow();

//Implicit return
const solve = (x, y) => x + y; // No need for the return as we assume it

console.log(solve(2, 3));

//Implicit return of an  object

const f1 = () => ({ name: "Adi" });
console.log(f1());
