export {};
/*------ generic promise example ------

A Promise in JavaScript (and thus TypeScript) is an object 
representing the eventual completion or failure of an 
asynchronous operation.
*/

async function someFunc_1(): Promise<string> {
  return "Hello Promise";
}

someFunc_1();

//------------------------------------------------------------

async function someFunc_2(): Promise<string> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });
}

someFunc_2()
  .then(() => console.log("Promise resolved"))
  .catch((err) => console.log(err));
