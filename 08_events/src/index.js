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
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = ({ imgLink, title, author, id }) => {
  // attribute, eventHandler
  const clickHandler = (event) => {
    console.log(event);
    console.log(event.target);
    alert("Clicked On Book Id: " + id);
  };

  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      <img src={imgLink} alt="book description" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click Example 1
      </button>
      <button type="button" onClick={() => alert(author)}>
        Click Example 2
      </button>
    </article>
  );
};

ReactDOM.render(<BoookList />, document.getElementById("root"));
