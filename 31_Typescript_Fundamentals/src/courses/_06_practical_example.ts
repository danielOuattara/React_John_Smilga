const books = ["The wind of  Justice", "Free Africa", "End the devils"];

let foundBook;
console.log("foundBook = ", foundBook);

for (let book of books) {
  if (book === "Free Africa") {
    foundBook = book;
    break;
  }
}
console.log("foundBook = ", foundBook);

foundBook = 10;
console.log("foundBook = ", foundBook);

// 'any' type makes code back to Javascript dynamic/loosely type

console.log("----------------------------------------");

let foundBook_2: string | undefined;
console.log("foundBook_2 = ", foundBook_2);

for (let book of books) {
  if (book === "Free Africa") {
    foundBook_2 = book;
    break;
  }
}

// ? operator
console.log("foundBook_2.length = ", foundBook_2?.length);

// foundBook_2 = 10; // X incorrect
