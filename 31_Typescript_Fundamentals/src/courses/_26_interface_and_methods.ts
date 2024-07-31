export {};

/* ------- interface and methods --------- 

allow to setup shape for objects (so, only objects)

*/

interface IBook {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: IBook = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

console.log(deepWork);
deepWork.printAuthor();
const result = deepWork.printTitle("is an awesome book");
console.log(result);
