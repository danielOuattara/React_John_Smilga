import { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(null);

  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* {if(true){ console.log("Hello")}}: // if not allowed in JSX */}
      {/* 
      <h2> first value = {firstValue}</h2>
      <h2> second value = {secondValue}</h2> */}

      <h1> || --&gt; {text || "John Doe"}</h1>
      <hr />
      <h1> || --&gt; {!text || "John Doe"}</h1>
      <hr />
      <h1> &amp;&amp; --&gt; {text && "John Doe"}</h1>
      <hr />
      <h1> &amp;&amp; --&gt; {!text && "John Doe"}</h1>
    </>
  );
};

export default ShortCircuit;
