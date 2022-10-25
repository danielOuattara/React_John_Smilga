import React, { useState, useEffect } from "react";

/* 
useEffect(() => {
  effect()
  return () => {
    cleanup
  }
}, [input])

*/

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const handleSizeCheck = () => {
    setSize(window.innerWidth);
  };

  // useEffect(() => {
  //   window.addEventListener('resize', handleSizeCheck);
  //   console.log("Window resized !")
  // });

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", handleSizeCheck);
    return () => {
      // clean up function
      console.log("cleanup");
      window.removeEventListener("resize", handleSizeCheck);
      console.log("---------------");
    };
  });

  return (
    <>
      <h2>useEffect Clean up function</h2>
      <h3>window size: {size} px</h3>
    </>
  );
};

export default UseEffectCleanup;
