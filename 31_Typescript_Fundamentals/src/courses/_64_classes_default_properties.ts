export {};
/*------ Classes default properties ------*/

class Book1 {
  title: string;
  author: string;
  checkedOut: boolean;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.checkedOut = true;
  }
}

const book1 = new Book1("Butterfly", "John Doe");
console.log(book1); // { title: "Butterfly", author: "John Doe" }

// OR

class Book2 {
  title: string;
  author: string;
  checkedOut = true; // new

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const book2 = new Book2("Butterfly", "John Doe");
console.log(book2); // { title: "Butterfly", author: "John Doe" }
