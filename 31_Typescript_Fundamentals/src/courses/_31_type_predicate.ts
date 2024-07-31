export {};

/* ------- type predicate ------- 

A type predicate in TypeScript is a special kind of 
return type for a function that not only returns a 
boolean, but also asserts that the argument is of a 
specific type if the function returns true. 

It's typically used in user-defined type guard functions 
to narrow down the type of a variable within a certain 
scope. The syntax is arg is Type, where arg is the 
function argument and Type is the type you're checking for.
*/

interface IPerson {
  name: string;
}

interface IDogOwner extends IPerson {
  dogName: string;
}

interface IManager extends IPerson {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): IPerson | IDogOwner | IManager {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    const john: IPerson = {
      name: "John Doe",
    };
    return john;
  } else if (randomNumber < 0.66) {
    const dogOwner: IDogOwner = {
      name: "Bob Dwelt",
      dogName: "Rambo",
    };
    return dogOwner;
  } else {
    const manager: IManager = {
      name: "Terry Pratchett",
      delegateTasks() {
        console.log(`${this.name} is a manager who knows how to delegate work`);
      },
      managePeople() {
        console.log(`${this.name} is a manager who knows how to manage people`);
      },
    };
    return manager;
  }
}

const person: IPerson | IDogOwner | IManager = getEmployee();
console.log(person);

// function isManager(obj: IPerson | IDogOwner | IManager): boolean {
//   return "managePeople" in obj;
// }

// type predicate obj is IManager as the return type for "isManager()"
function isManager(obj: IPerson | IDogOwner | IManager): obj is IManager {
  return "managePeople" in obj;
}

console.log(isManager(person));

if (isManager(person)) {
  person.delegateTasks();
}
