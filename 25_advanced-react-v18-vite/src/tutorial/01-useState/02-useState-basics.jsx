import { useState } from "react";

const UseStateBasics = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Daniel");
  const handleClick = () => {
    setCounter(() => counter + 1);
    console.log(counter);
  };
  return (
    <>
      <h2>useState basics</h2>
      <button className="btn" onClick={handleClick}>
        {" "}
        click
      </button>
      <h2>{counter}</h2>
      <h2>{name}</h2>
    </>
  );
};

export default UseStateBasics;
