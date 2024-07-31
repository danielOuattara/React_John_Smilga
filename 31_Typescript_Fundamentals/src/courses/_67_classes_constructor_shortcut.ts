export {};
/*------ classes constructor shortcut ------*/

class Book {
  constructor(
    public readonly title: string,
    public author: string,
    private isCheckedOut = true,
  ) {}

  get getAuthor() {
    return this.author;
  }

  public showIsCheckedOut() {
    return this.isCheckedOut;
  }

  private innerToggleIsCheckedOut() {
    return !this.isCheckedOut;
  }

  public outerToggleIsCheckedOut() {
    this.isCheckedOut = this.innerToggleIsCheckedOut();
    console.log(this.isCheckedOut);
  }
}

const butterfly = new Book("Butterfly", "John Doe");
console.log(butterfly);

butterfly.getAuthor;
