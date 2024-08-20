"use strict";
//Maintain code readablility //

//https://tc39.es/  //

//null is a datatype as well as a stand alone value. It's datatype is an object
//undefined is not declared/initialized
//symbol for unique items

let x = "33abc";
let y = null;
x = Number(x);
y = Number(y);
console.log(x); //=> NaN
console.log(y); //=>  Will be converted into 0
console.log(typeof x); //=> but the type is Number

/* Despite being "Not-a-Number," the typeof operator will still return "number" when used on NaN.
This is because NaN is a special case within the Number type in JavaScript. 
It’s a way to signal that the result of a numeric operation isn't a valid number, 
but it still technically belongs to the Number type. */

console.log(typeof y); //=> but the type is Number

let Z = 0;
Z = Boolean(Z);
console.log(Z);

/* "" => equivalents to false */
