export {};

/*--- function type guard ---*/

function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

processInput(10); // Output: 20
processInput("Hello"); // Output: HELLO
