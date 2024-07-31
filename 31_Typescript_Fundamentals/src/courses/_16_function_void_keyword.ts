export {};

/*--- void keyword ---*/

// Typescript auto infers 'void' as return
function logMessage_1(message: string) {
  console.log(message);
}

logMessage_1("Hello, TypeScript!"); // Output: Hello, TypeScript!

// Developer defines 'void' as return
function logMessage_2(message: string): void {
  console.log(message);
  // return "Hello";  // X incorrect
}

logMessage_2("Hello, TypeScript!"); // Output: Hello, TypeScript!
