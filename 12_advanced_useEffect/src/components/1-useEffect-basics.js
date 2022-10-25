import { useState, useEffect } from "react";

// by default useEffect() runs after every re-render
// cleanup function
// second parameter

/*-------------------------------------- SYNTAX
    useEffect( () => {
      effect
      return () => {
        cleanup
      }
    }, [input])
-----------------------------------------*/

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //-------------------------------------------------

  // useEffect(() => {
  //   console.log("useEffect");
  //   console.log(value);
  // });

  //-------------------------------------------------

  useEffect(() => {
    console.log("useEffect");
    console.log(value);
    document.title = ` artilces : ${value}`;
  });

  //-------------------------------------------------

  return (
    <>
      <h2>useEffect Basics</h2>
      <h3>{value}</h3>
      <button className="btn" onClick={() => setValue(value + 1)}>
        {" "}
        Increment
      </button>
    </>
  );
};

export default UseEffectBasics;
