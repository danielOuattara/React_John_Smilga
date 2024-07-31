export {};

/* ------- interface merging  ------- */

interface IPerson {
  name: string;
  getDetails(): string;
}

interface IDogOwner {
  dogName: string;
  getDogDetails(): string;
}

// Usage

//-------
const person: IPerson = {
  name: "John",
  getDetails() {
    return `Name: ${this.name}`;
  },
  age: 30, // added after merging
};

console.log(person);

//-------
const pirate: IDogOwner = {
  dogName: "Pirate",
  getDogDetails() {
    return `${this.dogName} is a nice dog from Lebanon`;
  },
};

console.log(pirate);

/** 
Merging (reopening) an interface in TypeScript 
is a process where you declare an interface with 
the same name more than once, and TypeScript will 
merge their content. */

// Merging the interface
interface IPerson {
  age: number;
}

const person2: IPerson = {
  name: "John",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};
console.log(person2);

/* ------- interface extending ------- */

interface IEmployee extends IPerson {
  employeeId: number;
}

const employee: IEmployee = {
  name: "Jane",
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

console.log(employee);
console.log(employee.getDetails());

/* ------- extending multiple interface ------- */

interface Manager extends IPerson, IDogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: "Bob",
  age: 35,
  dogName: "Rex",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    console.log("Managing 20 employees");
  },
};
console.log(manager);
console.log(manager.name);
console.log(manager.managePeople());
