export {};

/* ------- interface and methods : more options --------- 

It's generally a good practice to match the structure
interface of the implementing object or class as closely 
as possible. This makes the code easier to understand 
and maintain. 

So, if printAuthor is defined as a method in the Book 
interface, it would be more consistent to implement it 
as a method in the deepWork object.

*/

interface IBook {
  // property
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printAuthor2(): void;
  printTitle(message: string): string;
  // property
  printSomething1: (someValue: number) => number;
  printSomething2: (someValue: number) => number;
  printSomething3: (someValue: number) => number;
}

const deepWork: IBook = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
  /* alternative */
  printAuthor2: () => {
    console.log(deepWork.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },

  /* --- option 1 --- */
  printSomething1: function (someValue) {
    return someValue;
  },

  /* --- option 2 ---*/
  printSomething2: (someValue) => {
    // "this" gotcha
    console.log(deepWork.author);
    return someValue;
  },

  /* --- option 3 ---*/
  printSomething3(someValue) {
    return someValue;
  },
};

console.log(deepWork);
deepWork.printAuthor();
const result = deepWork.printTitle("is an awesome book");
console.log(result);

console.log(deepWork.printSomething1(34));
console.log(deepWork.printSomething2(34));
console.log(deepWork.printSomething3(34));
