import React, { useState, useEffect } from 'react';
// by default useEffect() runs after every re-render
// cleanup function
// second parameter

/*
    useEffect( () => {
      effect
      return () => {
        cleanup
      }
    }, [input])
*/
const UseEffectConditional = () => {

  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   console.log("useEffect");
  //   console.log(value);
  // });

  useEffect(()=> {
    console.log("useEffect");
    console.log(value);
    document.title = value === 0 ? "No Message" : `New Message (${value})`;
  });


  console.log("useEffect component");  

  return (
    <>
      <h2>useEffect Basics</h2>
      <h3>{value}</h3>
      <button  className="btn" onClick={()=> setValue(value + 1)}> Increment</button>
    </>
  );
};

export default UseEffectConditional;
