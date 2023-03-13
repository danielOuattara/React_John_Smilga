import React, { useEffect, useRef } from "react";

// preserves value between renders
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const inputRefContainer = useRef(null);
  const btnRefContainer = useRef(null);
  const divRefContainer = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("--------------------");
    console.log(inputRefContainer); // Obj { current: input }
    console.log(inputRefContainer.current); // <input type="text">
    console.log(inputRefContainer.current.value); // some text
    //
    console.log("--------------------");

    console.log(btnRefContainer); // Obj { current: button }
    console.log(btnRefContainer.current); // <button type="submit">
    console.log(btnRefContainer.current.textContent); // submit data
    //
    console.log("--------------------");

    console.log(divRefContainer.current);
  };

  useEffect(() => {
    console.log(inputRefContainer.current);
    inputRefContainer.current.focus();
  });

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={inputRefContainer} />
          <button type="submit" ref={btnRefContainer}>
            submit data
          </button>
        </div>
      </form>
      <div ref={divRefContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
