import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {

  const [value, setValue] = useState(0);
  // useEffect(()=> {
  //   console.log("useEffect");
  //   console.log(value);
  // });


  // useEffect(()=> {
  //   console.log("useEffect");
  //   console.log(value);
  // }, []);


  useEffect(()=> {
    console.log("useEffect");
    console.log(value);
  }, [value])

  console.log("useEffect component");  

  return (
    <>
      <h2>useEffect Basics</h2>
      <h3>{value}</h3>
      <button  className="btn" onClick={()=> setValue(value + 1)}> Increment</button>
    
    </>
  );
};

export default UseEffectBasics;
