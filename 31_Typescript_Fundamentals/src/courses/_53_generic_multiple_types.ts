export {};
/*------ generic multiple types------*/

function pair_1<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

console.log(pair_1<string, number>(`One`, 1));

//

let result_1 = pair_1<number, string>(123, "Hello");
console.log(result_1); // Output: [123, "Hello"]

//-----------------------------------------------------

function pair_2<T, U>(param1: T, param2: U): (T | U)[] {
  let result: (T | U)[] = [];

  for (var i = 0; i < arguments.length; i++) {
    if (i === 0) {
      result.push(param1);
    } else {
      result.push(param2);
    }
  }

  return result;
}

console.log(pair_2<string, number>(`One`, 1));

console.log(pair_2<number, string>(123, "Hello"));
