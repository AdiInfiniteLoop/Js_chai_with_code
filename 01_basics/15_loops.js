const arr = [1, 2, 23, 34];

for (const itr of arr) {
  console.log(itr);
}
const str = "Aditya World";
for (const char of str) {
  if (char === " ") continue;
  console.log(char);
}

for (const itr in arr) {
  console.log(itr);
}

//Maps

//Only unique values => set in c++
//It is in the form of array in JS v/s pair<..,..> in c++
const map = new Map();
map.set(1, "Shinu");
map.set(2, "Shinua");
map.set(3, "Shina");

for (const mpitr of map) {
  console.log(mpitr[1]);
}

const obj = {
  js: "javascript",
  cpp: "C Plus Plus",
};

//Not iterable using forOf loop, therefore we use for in loop

for (const values in obj) {
  //Alwaya iterates in key even though values is used.
  console.log(values);
}

// for (const values in obj) {
//   console.log(obj.values);   UNDEFINED
// }

//--To extract values from keys
for (const key in obj) {
  console.log(obj[key]);
}

for (const ele in arr) {
  console.log(arr[ele]); //ForIn loop iterates through the index
}

const nums = [1, 2, 3, 5, 6, 7];

nums.forEach(function (item) {
  item += 1;
  console.log(item);
});

nums.forEach((item) => {
  item += 1;
  console.log(item);
});

nums.forEach((item, index, arr) => {
  //can have 3 parameters
  item += 1;
  console.log(item);
});

const array = [
  {
    name: "adiii",
    age: 21,
  },
  {
    name: "adiafii",
    age: 212,
  },
  {
    name: "adeiii",
    age: 2134,
  },
];

array.forEach((item, index, array) => {
  console.log(item.name);
});
