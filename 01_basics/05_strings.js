const name = "Aditya "; //Behind we are invokoing objects

const name2 = new String("aditya");

/* We use backticks for string interpolation */

console.log(`The name of the user is ${name}`);
console.log(`The name of the user is ${name2}`);

/* Using the new keyword we invoke an object too but what happens is we are returned with a string */

/* String methods:-
    str.__proto__
*/

console.log(name2.__proto__);
console.log(name2.length);
console.log(name2.toUpperCase); //doesn't change the original string as it is used by stack memory and we create a copy
console.log(name2.charAt(3));
console.log(name2.indexOf("a"));
console.log(name2.lastIndexOf("a"));

const s = new String("adityapradhan");
console.log(s.substring(0, 5)); //This doesn't consider negative values e.g., -8 willbe taken as 0 itself.

const anotherString = s.slice(-1, 2);
console.log(anotherString);

const abc = "   aditya     "; //trim it
console.log(abc.trim());

const def = "naamhainsiddhu";
console.log(abc.replace("ity", "prad"));
