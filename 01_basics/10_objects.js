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
// const abc = {
//   x: {
//     c: 45,
//   },
// };

// console.log(abc?.x?.c); //Optional Chaining

// console.log(abc);
// Object.freeze(abc);
// const def = {
//   m: 2,
// };

// const obj2 = { ...abc, ...def };
// // Or
// const obj3 = Object.assign({}, abc, def);
// console.log(obj2);
// console.log(obj3);

// //data from db

// const arr = [
//   {
//     id: 1,
//     email: "a@gmail.com",
//   },
//   {
//     id: 2,
//     email: "b@gmail.com",
//   },
// ];

// console.log(arr[0]["email"]);

// console.log(Object.keys(obj3)); //This returns an array and can be used to loop, etc
// console.log(Object.values(obj3)); //This returns an array and can be used to loop, etc
// console.log(Object.entries(obj3)); //This returns an array and can be used to loop, etc

// console.log(obj3.hasOwnProperty("m")); //Checks keys as a string

const obj = {
  name: "Aditya Pradhan",
  age: 21,
};

//Object destructuring
const { name, age } = obj;

//JSON creation

// {
//   "name": "Adi",
// }
