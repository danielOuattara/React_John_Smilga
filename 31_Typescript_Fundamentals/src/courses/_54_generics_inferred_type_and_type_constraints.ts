export {};
/*------ generics inferred type ------*/

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// explicit specify generic

let result_1 = pair<number, string>(123, "Hello");
console.log(`result_1 = ${result_1}`);

// typescript auto infers generics type

let result_2 = pair(123, "Hello");
console.log(`result_2 = ${result_2}`);

/*---- useState accepts generic type: ---- */

// const [name,setName] = useState('')
// const [products,setProducts] = useState<Product[]>([])

/*------  generics type with constraints -------

Here: type constraint on the generic type T,
generic type must be either a number or a string. */

function processValue<T extends string | number>(value: T): T {
  console.log(value);
  return value;
}

processValue("hello");
processValue(12);
// processValue(true); X: incorrect
