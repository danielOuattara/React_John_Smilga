export {};

const temperatures = [12, 34, 23];
console.log(temperatures);

// temperatures.push("cooling"); // X incorrect
console.log(temperatures);

//---

const colors = ["red", "green", "blue"];
console.log(colors);
// colors.push(true); // This will result in a TypeScript error

//---

let mixedArray: (number | string)[] = [1, "two", 3];
// mixedArray.push(true); // This will result in a TypeScript error
