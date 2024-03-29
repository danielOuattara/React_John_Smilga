// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// function BoookList() {
//   return (
//     <section className="booklist">
//       <Book title={title} />
//       <Book author={author} />
//     </section>
//   );
// }

// const title = "I Love You to the Moon and Back";
// const author = "Amelia Hepworth";
// const imgLink =
//   "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg";

// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={imgLink} alt="book description" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

// ReactDOM.render(<BoookList />, document.getElementById("root"));

// ------------------------------------------------------------------------------

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// const firstBook = {
//   imgLink:
//     "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//   title: "I Love You to the Moon and Back",
//   author: "Amelia Hepworth",
// };
// const secondBook = {
//   imgLink: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
//   title: "Our Class is a family",
//   author: "Shannon Olsen",
// };

// function BoookList() {
//   return (
//     <section className="booklist">
//       <Book
//         title={firstBook.title}
//         imgLink={firstBook.imgLink}
//         author={firstBook.author}
//       />
//       <Book
//         title={secondBook.title}
//         imgLink={secondBook.imgLink}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.imgLink} alt="book description" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

// ReactDOM.render(<BoookList />, document.getElementById("root"));

// ------------------------------------------------------------------------------
// destructure props

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// const firstBook = {
//   imgLink:
//     "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//   title: "I Love You to the Moon and Back",
//   author: "Amelia Hepworth",
// };
// const secondBook = {
//   imgLink: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
//   title: "Our Class is a family",
//   author: "Shannon Olsen",
// };

// function BoookList() {
//   return (
//     <section className="booklist">
//       <Book
//         title={firstBook.title}
//         imgLink={firstBook.imgLink}
//         author={firstBook.author}
//       />
//       <Book
//         title={secondBook.title}
//         imgLink={secondBook.imgLink}
//         author={secondBook.author}
//       />
//     </section>
//   );
// }

// const Book = (props) => {
//   const { imgLink, title, author } = props;
//   return (
//     <article className="book">
//       <img src={imgLink} alt="book description" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// ReactDOM.render(<BoookList />, document.getElementById("root"));

// ------------------------------------------------------------------------------
// destructure props + child props

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstBook = {
  imgLink:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};
const secondBook = {
  imgLink: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
  title: "Our Class is a family",
  author: "Shannon Olsen",
};

function BoookList() {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        imgLink={firstBook.imgLink}
        author={firstBook.author}
      >
        <h3>Description of the book (children 1)</h3>
        <p>
          (children2) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Saepe, consectetur distinctio? Odio consequuntur iste asperiores
          tempore atque voluptatum ipsam possimus. Libero iusto doloribus non
          eligendi ipsum enim eum veritatis ullam!
        </p>
      </Book>
      <Book
        title={secondBook.title}
        imgLink={secondBook.imgLink}
        author={secondBook.author}
      >
        <button>click here</button>
      </Book>
    </section>
  );
}

const Book = ({ imgLink, title, author, children }) => {
  return (
    <article className="book">
      <img src={imgLink} alt="book description" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BoookList />, document.getElementById("root"));
//--------------------------------------------------------------------
