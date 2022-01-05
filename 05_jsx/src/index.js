import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function BoookList() {
  return(
    <section className="booklist">
      <Book/>
    </section>
  );
}

const Book = () => {
  const title = "I Love You to the Moon and Back";
  const author = "Amelia Hepworth";
  return (
    <article className="book"> 
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" 
        alt="book description"
      /> 

      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4> 

    </article>
  );
}

ReactDOM.render(<BoookList/>, document.getElementById('root')) 