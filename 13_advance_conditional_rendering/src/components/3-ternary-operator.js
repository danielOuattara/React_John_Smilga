import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const TernaryOperator = () => {
  const [text, setText] = useState(null);
  const [isError, setIsError] = useState("Hello");

  const handleToggleError = () => {
    text === null ? setText("hello") : setText(null);
    return text;
  };

  console.log(isError);

  return (
    <>
      {/* {if(true){ console.log("Hello")}}: // if not allowed in JSX */}

      <h3> test 1 : {text || "John Doe"}</h3>
      <button className="btn" onClick={handleToggleError}>
        Toogle Error
      </button>
      <h3> test 2 : {text && "Hello World"}</h3>

      <hr />

      <br />
      {/* ------------------------------------------------------------ */}
      <br />

      {isError ? <h3> there is an error </h3> : <h3>there is no error</h3>}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toogle Error
      </button>

      <h3>isError = {isError}</h3>
    </>
  );
};

export default TernaryOperator;
