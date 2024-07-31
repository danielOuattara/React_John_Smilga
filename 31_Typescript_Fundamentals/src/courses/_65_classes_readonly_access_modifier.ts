export {};
/*------ classes readonly access modifier ------*/

class Book {
  readonly title: string; // new
  author: string;
  checkedOut = true;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const butterfly = new Book("Butterfly", "John Doe");
console.log(butterfly); // { title: "Butterfly", author: "John Doe" }

console.log(butterfly.title); // Butterfly

// butterfly.title = "New title"; // X Incorrect
// Cannot assign to 'title' because it is a read-only property.ts(2540)
