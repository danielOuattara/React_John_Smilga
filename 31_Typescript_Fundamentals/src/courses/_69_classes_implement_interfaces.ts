export {};
/*------ classes implement interfaces ------*/

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(
    public name: string,
    public age: number,
    public country: string,
  ) {}

  greet(): void {
    console.log(`Hello, my name is ${this.name} I am ${this.age} y.o `);
  }
}

const john = new Person("John Doe", 40, "Russia");
john.greet();
