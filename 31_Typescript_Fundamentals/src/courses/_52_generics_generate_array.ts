export {};
/*------ generics generate array------*/

function createStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}
console.log(createStringArray(3, `Hello`));

//--------

function createArray<T>(length: number, value: T): Array<T> {
  let result: Array<T>;
  result = Array(length).fill(value);
  return result;
}

console.log(createArray<string>(3, `Nice day !`));
console.log(createArray<number>(3, 40));
console.log(createArray<boolean>(3, true));
