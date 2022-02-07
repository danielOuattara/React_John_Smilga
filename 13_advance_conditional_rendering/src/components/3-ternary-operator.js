import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const TernaryOperator = () => {

  const [text, setText] = useState(null);
  const [isError, setIsError] = useState(false);

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  const handleToggleError = () => {
     text === null ?  setText("hello") : setText(null);
     return text 
  }

  return (
    <>
      {/* {if(true){ console.log("Hello")}}: // if not allowed in JSX */}
{/* 
      <h2> first value = {firstValue}</h2>
      <h2> second value = {secondValue}</h2> */}

      <h1> {text || "John Doe"}</h1>
      <button className='btn' onClick={handleToggleError}>Toogle Error</button>
      <h1> {text && "Hello World"}</h1>

      <hr /><br /><br />
      {/* <h1> {!isError && "Hello Me"}</h1>
      <h1> {isError || "Hello You"}</h1> */}

      {
        isError ? ( <h3> there is an error </h3>) : (<h3>there is no error</h3 > )
      }
      <button className='btn' onClick={() => setIsError(!isError)}>Toogle Error</button>

    </>
  );
};

export default TernaryOperator;
