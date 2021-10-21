
//------------------------------------------------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const books= [
//   {
//     imgLink: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//     title:"I Love You to the Moon and Back",
//     author: "Amelia Hepworth",
//   },
//   {
//     imgLink: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
//     title:"Our Class is a family",
//     author: "Shannon Olsen",
//   }
// ];

// - 1 -
// function BoookList() {  // ??? ligne 24 ???
//   return(
//     <section className="booklist">
//         {books.map(book => (
//              const {img, title, author} = book;
//             <Book imgLink={imgLink} title={title} author={author} key={title}/>))}
//     </section>
//   );
// }

// - 2 -
//-------------------
// function BoookList() {
//   return(
//     <section className="booklist">
//      {books.map(book => {
//         const {imgLink, title, author} = book;
//         return <Book imgLink={imgLink} title={title} author={author} key={title}/>
//      })}
//     </section>
//   );
// }

//---------------------

// const Book = (props) => {
//   const {imgLink, title, author} =props
//   return (
//     <article className="book"> 
//       <img
//         src= {imgLink}
//         alt="book description"
//       /> 
//       <h1>{title}</h1>
//       <h4>{author}</h4> 
//     </article>
//   );
// }

// ReactDOM.render(<BoookList/>, document.getElementById('root')) 


// ------------------------------------------------------------------------

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const books= [
//   {
//     imgLink: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//     title:"I Love You to the Moon and Back",
//     author: "Amelia Hepworth",
//   },
//   {
//     imgLink: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
//     title:"Our Class is a family",
//     author: "Shannon Olsen",
//   }
// ];

// // - 1 -
// // function BoookList() {
// //   return(
// //     <section className="booklist">
// //         {books.map(book => (
// //             const {img, title, author} = book ;
// //             <Book book={book} key={book.title}/>))}
// //     </section>
// //   );
// // }

// // - 2 -
// //-------------------
// function BoookList() {
//   return(
//     <section className="booklist">
//      {books.map(book => {
//         return <Book book={book} key={book.title}/>
//      })}
//     </section>
//   );
// }

// const Book = (props) => {  
//   const {imgLink, title, author} = props.book  // destructutring props.book
//   return (
//     <article className="book"> 
//       <img
//         src= {imgLink}
//         alt="book description"
//       /> 
//       <h1>{title}</h1>
//       <h4>{author}</h4> 
//     </article>
//   );
// }

// ReactDOM.render(<BoookList/>, document.getElementById('root'));

// ------------------------------------------------------------------------

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const books= [
//   {
//     id: 1,
//     imgLink: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
//     title:"I Love You to the Moon and Back",
//     author: "Amelia Hepworth",
//   },
//   {
//     id: 2,
//     imgLink: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
//     title:"Our Class is a family",
//     author: "Shannon Olsen",
//   },
//   {
//     id: 3,
//     imgLink: "https://m.media-amazon.com/images/I/61VudanhEXL._AC_UL320_.jpg",
//     title:"The Vanishing Half",
//     author: "Brit Bennett",
//   }
// ];

// - 1 -
// function BoookList() {
//   return(
//     <section className="booklist">
//         {books.map(book => (
//             <Book book={book} key={book.title}/>))}
//     </section>
//   );
// }

// - 2 -
//-------------------
// function BoookList() {
//   return(
//     <section className="booklist">
//      {books.map(book => {
//         return <Book book={book} key={book.id}/>
//      })}
//     </section>
//   );
// }

// const Book = (props) => { 
//   const {book: {imgLink, title, author}} = props // changed
//   return (
//     <article className="book"> 
//       <img
//         src= {imgLink}
//         alt="book description"
//       /> 
//       <h1>{title}</h1>
//       <h4>{author}</h4> 
//     </article>
//   );
// }

// const Book = ({book: {imgLink, title, author}}) => { // changed
//   return (
//     <article className="book"> 
//       <img
//         src= {imgLink}
//         alt="book description"
//       /> 
//       <h1>{title}</h1>
//       <h4>{author}</h4> 
//     </article>
//   );
// }

// ReactDOM.render(<BoookList/>, document.getElementById('root'));


// USING SPREAD OPERATOR ON OBJECT

// ------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books= [
  {
    id: 1,
    imgLink: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title:"I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    imgLink: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UL320_.jpg",
    title:"Our Class is a family",
    author: "Shannon Olsen",
  },
  {
    id: 3,
    imgLink: "https://m.media-amazon.com/images/I/61VudanhEXL._AC_UL320_.jpg",
    title:"The Vanishing Half",
    author: "Brit Bennett",
  }
];

// - 1 -
function BoookList() {
  return(
    <section className="booklist">
        {books.map(book => (
            <Book {...book} key={book.title}/>))}
    </section>
  );
}

// - 2 -
//-------------------
// function BoookList() {
//   return(
//     <section className="booklist">
//      {books.map(book => {
//         return <Book {...book} key={book.id}/>
//      })}
//     </section>
//   );
// }

const Book = ({imgLink, title, author}) => { // changed
  return (
    <article className="book"> 
      <img
        src= {imgLink}
        alt="book description"
      /> 
      <h1>{title}</h1>
      <h4>{author}</h4> 
    </article>
  );
}

// const Book = (props) => { // changed
// const {imgLink, title, author} = props
//   return (
//     <article className="book"> 
//       <img
//         src= {imgLink}
//         alt="book description"
//       /> 
//       <h1>{title}</h1>
//       <h4>{author}</h4> 
//     </article>
//   );
// }

ReactDOM.render(<BoookList/>, document.getElementById('root'));