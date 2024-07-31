export {};

/* --------------- type annotations  --------------- */

let awesome: string = "shakeAndBake";

awesome = "Super ShakeAndBake";
awesome = awesome.toUpperCase();
console.log(awesome);
// awesome = 20 // X Incorrect

/*  */

let amount: number = 20;
amount = 12 - 1;
//amount = "pants"; // X Incorrect;

/*  */

let isAwesome = true;
isAwesome = false;
// isAwesome = "shakeAndBake" // X Incorrect
