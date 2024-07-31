export {};
/*------ create generic function and interface ------*/

function createString(arg: string): string {
  return arg;
}
function createNumber(arg: number): number {
  return arg;
}

function createBoolena(arg: boolean): boolean {
  return arg;
}

//---------------------------------------------------------

// Define one generic function instead of 3 distinct functions as above

function genericCreated<T>(arg: T): T {
  return arg;
}

const stringValue = genericCreated<string>("Hello World");
console.log(`stringValue = ${stringValue}`);

const numberValue = genericCreated<number>(2);
console.log(`numberValue = ${numberValue}`);

//---------------------------------------------------------

// Define a generic interface

interface IGeneric<T> {
  value: T;
  getValue(): T;
}

const genericString: IGeneric<string> = {
  value: `Hello Generics`,
  getValue() {
    return this.value.toUpperCase();
  },
};

console.log(`genericString.value = ${genericString.value}`);
console.log(`genericString.getValue() = ${genericString.getValue()}`);
