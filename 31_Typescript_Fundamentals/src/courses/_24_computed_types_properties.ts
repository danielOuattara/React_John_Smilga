export {};

/* ------- computed types properties --------- */
/**
 * Computed properties in JavaScript are a feature that
 * allows you to dynamically create property keys on objects.
 *
 * This is done by wrapping an expression in square brackets []
 * that computes the property name when creating an object. */

const propName = "age";

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };
console.log(tiger);

//------------------------

type Address = {
  [key: string]: string;
};

let starStation: Address = {
  country: "Russia",
  city: "Leeksva",
  sector: "Est",
  //quantity: 3, // X incorrect
};

console.log(starStation);
