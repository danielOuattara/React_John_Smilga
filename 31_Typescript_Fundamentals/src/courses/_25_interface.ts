export {};

/* ------- interface --------- 

allow to setup shape for objects (so, only objects)

*/

interface IBook {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
}

const deepWork: IBook = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
};

console.log(deepWork);
// deepWork.isbn = 654321; // not allowed
deepWork.title = "New Title"; // allowed
//-----------------------------------------
