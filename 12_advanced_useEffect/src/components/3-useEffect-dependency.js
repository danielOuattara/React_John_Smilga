import React, { useState, useEffect } from "react";

const UseEffectDependency = () => {
  const [value, setValue] = useState(0);
  const [personNumber, setPersonNumber] = useState(0);

  // const handleClick = () => {
  //   // setValue(value + 1);
  //   setPersonNumber(personNumber + 1);
  // };

  //--------------------------------------------------------------

  // useEffect(() => {
  //   console.log("useEffect");
  //   console.log("value = ", value);
  //   console.log(" personNumbers = ", personNumber);
  //   document.title = value === 0 ? "No Message" : `New Messages (${value})`;
  // });

  //--------------------------------------------------------------

  // useEffect(() => {
  //   console.log("useEffect");
  //   console.log("value = ", value);
  //   console.log(" personNumbers = ", personNumber);
  //   document.title = value === 0 ? "No Message" : `New Message (${value})`;
  // }, []);

  //--------------------------------------------------------------

  useEffect(() => {
    console.log("useEffect");
    console.log("value = ", value);
    // console.log(" personNumbers = ",personNumber);
    document.title = value === 0 ? "No Message" : `New Message (${value})`;
  }, [value]);

  //--------------------------------------------------------------

  console.log("useEffect component");

  return (
    <>
      <h2>useEffect Basics</h2>
      <h3>{value}</h3>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increment Value
      </button>
      <br />
      <br />
      <h3>personNumber value : {personNumber}</h3>
      <button className="btn" onClick={() => setPersonNumber(value + 1)}>
        Increment personNumber
      </button>
    </>
  );
};

export default UseEffectDependency;
