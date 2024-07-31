export {};

/* ----- type assertion --------- */

/**
 * Type assertion in TypeScript is a way to tell the compiler
 * what the type of an existing variable is.
 *
 * This is especially useful when you know more about the
 * type of a variable than TypeScript does.
 */

let someValue: any = "This is a string made `any` type by assertion";

// Not Good!
let stringLength1: number = someValue.length;
console.log(stringLength1); // 45

// Better: Using type assertion to treat 'someValue' as a string
let stringLength2: number = (someValue as string).length;
console.log(stringLength2); // 45

//--------------------

type TBird = {
  name: string;
};

// Assume we have a JSON string from an API or local file
let birdJson = '{"name": "Eagle"}';
let dogJson = '{"breed": "Poodle"}';

/**
 * Parse the JSON string into an object
 * We're sure that the jsonObject is actually a TBird
 * */

let bird = JSON.parse(birdJson) as TBird;
let dog = JSON.parse(dogJson) as TBird; // CAUTION

console.log(bird.name); // Eagle
console.log(dog.name); // undefined,

//---------------------

enum EnumStatus {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: EnumStatus;
};

// save EnumStatus.Pending in the DB as a string

const user_0: User = { name: "john", status: EnumStatus.Pending }; // ERROR
console.log("user_0 = ", user_0);
// retrieve string from the DB, as `string`
const statusValue = "pending";

// const user: User = { name: "john", status: statusValue }; // ERROR

/**
 * Type `pending` is not assignable to type 'EnumStatus'.ts(2322)
 * _37_types_assertion.ts(51, 3): The expected type comes from property
 * 'status' which is declared here on type 'User'
 */

// solution 1

const user2: User = { name: "john", status: statusValue as EnumStatus.Pending }; // OK now by assertion
console.log("user2 = ", user2);

// solution 2

const statusValue_2 = "pending" as EnumStatus.Pending;
const user_2: User = { name: "john", status: statusValue_2 }; // OK
console.log("user_2 = ", user_2);
