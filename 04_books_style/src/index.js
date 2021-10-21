import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function BoookList() {
  return(
    <section className="booklist">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>

    </section>
  );
}

const Book = () => {
  return (
    <article className="book"> 
      <Image/>  
      <Title/>
      <Author/>
    </article>
  );
}


const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" 
    alt="book description"/> 
);
  
const Title = () => <h1>I Love You to the Moon and Back</h1>

const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', margin:'0.25rem'}}>Amelia Hepworth</h4> 

ReactDOM.render(<BoookList/>, document.getElementById('root')) 