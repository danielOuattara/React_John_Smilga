export {};

let bike: { brand: string; year: number } = { brand: "Yamaha", year: 2010 };
// bike.year = 'old'; // This will result in a TypeScript error
console.log(bike);

let laptop: { brand: string; year: number } = { brand: "Dell", year: 2020 };
// let laptop2: { brand: string, year: number } = { brand: 'HP' }; // This will result in a TypeScript error
console.log(laptop);

let product1 = { title: "Shirt", price: 20 };
let product2 = { title: "Pants" };
let products: { title: string; price?: number }[] = [product1, product2];

// products.push({ title: 'Shoes', price: 'expensive' }); // This will result in a TypeScript error

console.log(products);
