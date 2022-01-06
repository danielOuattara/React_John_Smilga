import React, { useState, useEffect } from 'react';

const UseEffectDependency = () => {

  const [value, setValue] = useState(0);

  // useEffect(()=> {
  //   console.log("useEffect");
  //   console.log(value);
  //   document.title = value === 0 ? "No Message" : `New Message (${value})`;
  // }, []);

  useEffect(()=> {
    console.log("useEffect");
    console.log(value);
    document.title = value === 0 ? "No Message" : `New Message (${value})`;
  }, [value]);

  useEffect(() => {
    console.log("Hello World Again !");
  }, []);


  console.log("useEffect component");  

  return (
    <>
      <h2>useEffect Basics</h2>
      <h3>{value}</h3>
      <button  className="btn" onClick={()=> setValue(value + 1)}> Increment</button>
    </>
  );
};

export default UseEffectDependency;
