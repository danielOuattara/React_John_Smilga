export {};

let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };
car.brand = "ford";

console.log(car);
// car.color = "blue"; // X incorrect

let car1: { brand: string; year: number } = { brand: "audi", year: 2021 };
// let car2: { brand: string; year: number } = { brand: 'audi' };
console.log(car1);

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 5 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
console.log(items);

// items[0].title = 'new book';  // X
// Error: Cannot assign to 'title' because it is a read-only property
