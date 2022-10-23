import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./data";
import Book from "./Book";

function BoookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

ReactDOM.render(<BoookList />, document.getElementById("root"));
