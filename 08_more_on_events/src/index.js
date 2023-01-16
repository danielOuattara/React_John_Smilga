/*

In this part I add a create a getBook() function int the BookList component.
Then I pass this new funciton as prop to Book component, so that on click event
this function  send back the id of the book that triggered it to the BookList 
component. Finally the correspondind Book with id is console logged.

*/

import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    imgLink: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
    title: "Our Class is a family",
    author: "Shannon Olsen",
  },
  {
    id: 3,
    imgLink: "https://m.media-amazon.com/images/I/61VudanhEXL._AC_UL320_.jpg",
    title: "The Vanishing Half",
    author: "Brit Bennett",
  },
];

function BoookList() {
  const getBook = (id) => {
    const book = books.find((item) => (item.id = id));
    console.log(book);
    // return book;
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} getBook={getBook} key={book.id} />;
      })}
    </section>
  );
}

const Book = ({ imgLink, title, author, id, getBook }) => {
  const returnBookId = () => {
    // solution 1
    return getBook(id);
  };
  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      <img src={imgLink} alt="book description" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>
        <button type="button" onClick={returnBookId}>
          Find Book: solution 1
        </button>
      </p>
      <p>
        <button type="button" onClick={() => getBook(id)}>
          Find Book: solution 2{/* solution 2 */}
        </button>
      </p>
    </article>
  );
};

ReactDOM.render(<BoookList />, document.getElementById("root"));
