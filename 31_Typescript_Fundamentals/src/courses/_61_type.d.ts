export {};
/*------ typescript declaration files ------

In TypeScript, .d.ts files, also known as declaration files,
consist of type and interface definitions, and are used to 
provide types for JavaScript code. They allow TypeScript to 
understand the shape and types of objects, functions, classes, 
etc., in JavaScript libraries, enabling type checking and 
autocompletion in TypeScript code that uses these libraries. */

interface ITour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  //...etc
}

type TPerson = {
  name: string;
  age: number;
};

interface IBook {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}
