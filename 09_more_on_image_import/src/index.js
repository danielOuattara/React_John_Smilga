import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./data";
import Book from "./Book";

function BoookList() {
  return (
    <>
      <h1>Shopping Books List</h1>

      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} index={index + 1} />;
        })}
      </section>
    </>
  );
}

ReactDOM.render(<BoookList />, document.getElementById("root"));
