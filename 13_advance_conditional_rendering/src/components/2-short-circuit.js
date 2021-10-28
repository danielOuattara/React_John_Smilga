import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text, setText] = useState('');

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      {/* {if(true){ console.log("Hello")}}: if not allowed in JSX */}

      {/* <h1> value = {firstValue}</h1>
      <h1> value = {secondValue}</h1> */}

      <h1> || : {text || "John Doe"}</h1>
 
      <h1> &amp;&amp; : {text && "John Doe"}</h1>
    </>
  );
};

export default ShortCircuit;
