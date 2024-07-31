export {};

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}!!!`);
}

sayHi("John Doe");
// sayHi(3) // X
// sayHi('peter', 'random'); // X

//---------------------------

function calculateDiscount(price: number): number {
  // price.toUpperCase(); // Incorrect
  const hasDiscount = true;
  if (!hasDiscount) return price; // return ' No Discount Applied';
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

//---------------------------

// "any" example
function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}
const result = addThree(2);
const someValue = result;

// run time error
someValue.myMethod();
