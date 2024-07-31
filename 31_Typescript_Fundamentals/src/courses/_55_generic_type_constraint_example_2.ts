export {};
/*------ generic type constraint example_2 ------*/

type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: "Ford",
  model: "Mustang",
};

//---------------------

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "shoes",
  price: 41.99,
};

//---------------------

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "Peter",
  age: 20,
};

//---------------------------------------------------------------------------

/**
 * Property 'name' does not surely exist on type 'T' ,
 * all depends on `T` itself
 * */

function printName1<T>(input: T): void {
  console.log(`No constraint on generic "T" `, input);
  // console.log(input.name);
}

printName1(student);
printName1(product);
printName1(car);

//-----------------------------------------------------------------------------

/**
 * `T extends Student` is a type constraint on the generic type `T`.
 * It means that the type `T` cannot be any type: it must be a
 * subtype of `Student` or `Student` itself.
 *
 * In other words, `T` must have at least the same properties
 * and methods that `Student` has.*/

function printName2<T extends Student>(input: T): void {
  console.log(input.name);
}

printName2(student);

// student_2 extends type Student, anonymously
const student_2 = {
  name: "Mike",
  age: 20,
  state: "California",
};

printName2(student_2); // OK

// `product` and `car` do not extends `Student` type

// printName2(product); // Incorrect
// printName2(car); // Incorrect

//-------------------------------------------------------------------------

function printName3<T extends Student | Product>(input: T): void {
  console.log(input.name);
}

printName3(student);
printName3(product);
// printName3(car); // Incorrect

//--------------------------------------------------------------------------

/**
 * printName4() BETTER SOLUTION THAN printName3(): more specific !
 *
 * The `T extends { name: string }` part is a type constraint on T.
 * It means that `T` can be any type, but it must be an object that
 * has at least a `name` property of type string.
 */

function printName4<T extends { name: string }>(input: T): void {
  console.log(input.name);
}
printName4(student);
printName4(product);
// printName4(car); // Incorrect
