export {};
/*------ challenge instanceof type guard ------

The `instanceof` type guard is a way in TypeScript to 
check the specific class or constructor function of 
an object at runtime. It returns `true` if the object 
is an instance of the class or created by the 
constructor function, and `false` otherwise. */

try {
  throw new Error(`This is an error`);
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught an Error object: ${error.message}`);
  } else {
    console.log(`Caught an Unknown Error }`);
  }
}

//----------------------------------

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  } else {
    return input;
  }
}

const year = checkInput(new Date());
const random = checkInput("2020-05-05");
console.log(year);
console.log(random);
