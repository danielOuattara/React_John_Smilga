export {};

/* ------- intersection types --------- */

type Book = { id: number; name: string; price: number };

const book1: Book = {
  id: 2,
  name: "How to Cook a Dragon",
  price: 15,
};

console.log(book1);

const book2: Book = {
  id: 3,
  name: "The Secret Life of Unicorns",
  price: 18,
};
console.log(book2);

type DiscountedBook = Book & { discount: number };

const book3: DiscountedBook = {
  id: 4,
  name: "Gnomes vs. Goblins: The Ultimate Guide",
  price: 25,
  discount: 0.15,
};

console.log(book3);
