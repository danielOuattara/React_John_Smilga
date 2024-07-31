import newStudent, {
  sayHello,
  person,
  type TStudent,
} from "./_40_modules_actions";

import { countryName } from "./_40_modules_action_02.js";

/*------ module ------*/
let name = "shakeAdnBake";
console.log(name);
const susan = "Susan Boyle";

console.log(susan);

export let something = "something";

//--------------------
sayHello("TypeScript");
console.log(person);
console.log(newStudent);

const anotherStudent: TStudent = {
  name: "bob",
  age: 23,
};

console.log(anotherStudent);

//------------- Javascript module import

console.log(countryName);
