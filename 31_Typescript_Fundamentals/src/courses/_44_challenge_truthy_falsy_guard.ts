export {};
/*------ challenge truthy falsy guard.ts ------*/

function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log(`No string provided`);
  }
}

printLength("Hello");
printLength("");
printLength(null);
printLength(undefined);
