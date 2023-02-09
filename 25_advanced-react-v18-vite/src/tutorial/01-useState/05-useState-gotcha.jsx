import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleChangeValue = () => setValue((value) => value + 1);
  console.log(value);

  return (
    <>
      <h2>useState "gotcha"</h2>
      <h3>{value}</h3>
      <button type="button" className="btn" onClick={handleChangeValue}>
        {" "}
        Increase value
      </button>
    </>
  );
};

export default UseStateGotcha;
