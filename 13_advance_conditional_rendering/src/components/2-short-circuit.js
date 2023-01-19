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

      <h3> test :1 {text || "John Doe 1"}</h3>
      <hr />
      <h3>test :2 {!text || "Jana Doe 2"}</h3>
      <hr />
      <h3> test :3 {text && "Samual Doe 3"}</h3>
      <hr />
      <h3>test :4 {!text && "Lina Doe 4"}</h3>
    </>
  );
};

export default ShortCircuit;
