export {};

/* ------- interface challenge  ------- */

interface IPerson {
  name: string;
}

interface IDogOwner extends IPerson {
  dogName: string;
}

interface IManager extends IPerson {
  managePeople(): void;
  delegateTask(): void;
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
      delegateTask() {
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
