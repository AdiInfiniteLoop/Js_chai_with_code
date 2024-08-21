console.log("002" > 1); //true

console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/*  '==' means 'loose equality.
In javascript, == doesn't converts 'null' into 'zero'. as null == undefined
but in case of '>=' the null is coerced to zero
*/
