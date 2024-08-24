(function dbconnected() {
  console.log("dbconnected");
})();

((name) => {
  console.log("dbconnected again");
  console.log(`${name}`);
})("adi");
