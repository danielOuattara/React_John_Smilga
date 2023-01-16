//------------------------------------------------------------------------
// import ReactDOM from "react-dom";
// import "./index.css";

// const books = [
//   {
//     imgLink:
//       "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//     title: "I Love You to the Moon and Back",
//     author: "Amelia Hepworth",
//   },
//   {
//     imgLink: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
//     title: "Our Class is a family",
//     author: "Shannon Olsen",
//   },
// ];

// /*  - 1 - */
// function BoookList1() {
//   return (
//     <section className="booklist">
//       {books.map((book) => (
//         <Book
//           imgLink={book.imgLink}
//           title={book.title}
//           author={book.author}
//           key={book.title}
//         />
//       ))}
//     </section>
//   );
// }

// // -------------------
// function BoookList2() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         const { imgLink, title, author } = book;
//         return (
//           <Book imgLink={imgLink} title={title} author={author} key={title} />
//         );
//       })}
//     </section>
//   );
// }

// // ---------------------
// function BoookList3() {
//   return (
//     <section className="booklist">
//       {books.map(({ imgLink, title, author }) => {
//         return (
//           <Book imgLink={imgLink} title={title} author={author} key={title} />
//         );
//       })}
//     </section>
//   );
// }

// // ---------------------

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

// ReactDOM.render(
//   <>
//     <BoookList1 />
//     <hr />
//     <BoookList2 />
//     <hr />
//     <BoookList3 />
//   </>,
//   document.getElementById("root"),
// );

// ------------------------------------------------------------------------

// import ReactDOM from "react-dom";
// import "./index.css";

// const books = [
//   {
//     imgLink:
//       "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//     title: "I Love You to the Moon and Back",
//     author: "Amelia Hepworth",
//   },
//   {
//     imgLink: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
//     title: "Our Class is a family",
//     author: "Shannon Olsen",
//   },
// ];

// // ------------------
// function BoookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book book={book} key={book.title} />;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const { imgLink, title, author } = props.book; // destructutring props.book
//   return (
//     <article className="book">
//       <img src={imgLink} alt="book description" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// ReactDOM.render(<BoookList />, document.getElementById("root"));

// ------------------------------------------------------------------------

// import ReactDOM from "react-dom";
// import "./index.css";

// const books = [
//   {
//     id: 1,
//     imgLink:
//       "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//     title: "I Love You to the Moon and Back",
//     author: "Amelia Hepworth",
//   },
//   {
//     id: 2,
//     imgLink: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
//     title: "Our Class is a family",
//     author: "Shannon Olsen",
//   },
//   {
//     id: 3,
//     imgLink: "https://m.media-amazon.com/images/I/61VudanhEXL._AC_UL320_.jpg",
//     title: "The Vanishing Half",
//     author: "Brit Bennett",
//   },
// ];

// //-------------------
// function BoookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => (
//         <Book book={book} key={book.title} />
//       ))}
//     </section>
//   );
// }

// //-------------------
// function BoookList2() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book2 book={book} key={book.id} />;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const {
//     book: { imgLink, title, author },
//   } = props; // changed
//   return (
//     <article className="book">
//       <img src={imgLink} alt="book description" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// const Book2 = ({ book: { imgLink, title, author } }) => {
//   // changed
//   return (
//     <article className="book">
//       <img src={imgLink} alt="book description" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// ReactDOM.render(
//   <>
//     <BoookList /> <BoookList2 />{" "}
//   </>,
//   document.getElementById("root"),
// );

// USING SPREAD OPERATOR ON OBJECT

// ------------------------------------------------------------------------

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

// -1 -
function BoookList1() {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book1 {...book} key={book.title} />
      ))}
    </section>
  );
}

const Book1 = ({ imgLink, title, author }) => {
  // changed
  return (
    <article className="book">
      <img src={imgLink} alt="book description" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// - 2 -
// -------------------
function BoookList2() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book2 {...book} key={book.title} />;
      })}
    </section>
  );
}

const Book2 = (props) => {
  // changed
  const { imgLink, title, author } = props;
  return (
    <article className="book">
      <img src={imgLink} alt="book description" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(
  [<BoookList1 />, <BoookList2 />],
  document.getElementById("root"),
);
