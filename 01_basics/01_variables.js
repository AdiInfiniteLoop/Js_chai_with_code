const id = 12334;
let em = "adi@yahoo.com";
var pass = "asdads";

// id = 4554;  //cannot do it: const keyword
em = "adi@hotmail.com";
pass = "fsas";

/* Focus on using "const" and "let"
Don't use "var" due to block scoping and function scoping
*/
abc = 133;
/* The above line becomes "global-scoped" */
abc = 32; // Yes! It can be reassigned

console.table([id, em, pass, abc]);
