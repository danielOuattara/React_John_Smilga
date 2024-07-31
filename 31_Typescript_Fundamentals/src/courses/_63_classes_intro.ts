export {};
/*------ Classes Intro ------*/

class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const book1 = new Book("Butterfly", "John Doe");
console.log(book1); // { title: "Butterfly", author: "John Doe" }
