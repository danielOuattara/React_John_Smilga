import React from 'react';

const Book = ({imgLink, title, author, id}) => { 
  // attribute, eventHandler
  const clickHandler = (event) => {
    console.log(event)
    console.log(event.target)
    alert('Clikcked On Book Id: ' + id )
  }

  return (
    <article 
      className="book" 
      onMouseOver={() =>{
        console.log(title);
      }}> 
      
      <img
        src= {imgLink}
        alt="book description"
      /> 
      <h1>{title}</h1>
      <h4>{author}</h4> 
      <button type="button" onClick={clickHandler}> Click Example 1</button>
      <button type="button" onClick={() => alert(author)}> Click Example 2</button>
    </article>
  );
}

export default Book;
