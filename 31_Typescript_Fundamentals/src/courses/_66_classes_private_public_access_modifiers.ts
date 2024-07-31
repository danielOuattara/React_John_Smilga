export {};
/*------ classes private public access modifiers ------*/

// public = default `access modifier`

class Book {
  readonly title: string; // public
  public author: string; // public
  private isCheckedOut = true;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public showIsCheckedOut() {
    return this.isCheckedOut;
  }

  // private method
  private innerToggleIsCheckedOut() {
    return !this.isCheckedOut;
  }

  // public (default) method
  public outerToggleIsCheckedOut() {
    this.isCheckedOut = this.innerToggleIsCheckedOut();
    console.log(this.isCheckedOut); // private field can still be accessed within the class or
  }
}

const butterfly = new Book("Butterfly", "John Doe");
console.log(butterfly); // { title: "Butterfly", author: "John Doe" }

// console.log(butterfly.isCheckedOut); // Property 'isCheckedOut' is private and only accessible within class 'Book'.ts(2341)

butterfly.outerToggleIsCheckedOut(); // true

butterfly.outerToggleIsCheckedOut();
butterfly.outerToggleIsCheckedOut();
