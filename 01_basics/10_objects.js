/* // Objects can be declared using 2 ways: literals and constructors
//Singleton means formed from constructor

//Object literals
const mysymbol = Symbol("k1");
const user = {
  name: "Aditya",
  age: 21,
  "full name": "Aditya Pradhan",
  [mysymbol]: "k2 port", //to use a symbol as  a key
};
/* The  key in object literals are taken as strings */
/*
console.log(user.name);
//OR
console.log(user["name"]);

//Adding function in an object

user.greet = function () {
  console.log(`Hello JS User ${this["full name"]}`);
};
console.log(user.greet());
//To freeze an object
Object.freeze(user);
console.log(user);

 */
//++++++++++++++++++++++Part 2+++++++++++++++++++++++++++//

// const abc = new Object();

// abc.id = 1231;
// abc["full name"] = "Aditya Pradhan";     Singleton
const abc = {
  x: {
    c: 45,
  },
};

console.log(abc?.x?.c); //Optional Chaining

console.log(abc);
Object.freeze(abc);
const def = {
  m: n,
};

const obj2 = { ...abc, ...def };
