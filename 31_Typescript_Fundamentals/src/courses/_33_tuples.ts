export {};

/*------- tuple ------- */

let person: [string, number] = ["John", 25];
console.log(person);

let couple: [string, string] = ["John", "Marie"];
console.log(couple);

let date: [number, number, number] = [15, 12, 2085];
console.log(date);

function getPerson(): [string, number] {
  return ["John", 25];
}

let somePerson = getPerson();
console.log(somePerson);
console.log(somePerson[0]);
console.log(somePerson[1]);

/*------ gotcha ---------*/

let employee: [string, number] = ["John", 25];
console.log(employee);

employee.unshift("Travolta");
console.log(employee);

employee.push(2674474467474);
console.log(employee);

/*--------- solution  -------*/

let manager: readonly [string, number] = ["Anna", 25];
console.log(manager);
// manager.push("Nelson"); // X :  Property 'push' does not exist on type 'readonly [string, number]'.ts(2339)

/*------ optional parameter in tuple -------*/

let susan: [string, number?] = ["Susan"];
console.log(susan);
