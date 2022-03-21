import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const inputRefContainer = useRef(null);
  const btnRefContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputRefContainer)
    // console.log(inputRefContainer.current)
    // console.log(inputRefContainer.current.value)
    // console.log(btnRefContainer.current.value)
    // console.log(divContainer.current)
  }

  useEffect(() => {
    console.log(inputRefContainer)
    inputRefContainer.current.focus();

  })

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={inputRefContainer} />
          <button type="submit" ref={btnRefContainer} >submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
