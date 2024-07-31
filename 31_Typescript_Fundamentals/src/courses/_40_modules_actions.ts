export {};
/*------ title ------*/

const susan = "susan";

export const something = "something";

//---------------------------------------------

export function sayHello(name: string): void {
  console.log(`Hello ${name}!`);
}

export let person = "susan";

export type TStudent = {
  name: string;
  age: number;
};

const newStudent: TStudent = {
  name: "peter",
  age: 24,
};

export default newStudent;
