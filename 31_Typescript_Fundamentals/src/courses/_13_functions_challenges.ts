export {};

const namesList: string[] = ["John", "Jane", "Jim", "Jill"];

function isNameInList(name: string): boolean {
  return namesList.includes(name);
}

//-----------------------------------

let nameToCheck: string = "Jane";

//---

function listChecker(name: string): string {
  return `${name} is in [${namesList}]: ${isNameInList(name)}`;
}

const check1 = listChecker(nameToCheck);
console.log(check1);

//---

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`);
} else {
  console.log(`${nameToCheck} is not in the list.`);
}
