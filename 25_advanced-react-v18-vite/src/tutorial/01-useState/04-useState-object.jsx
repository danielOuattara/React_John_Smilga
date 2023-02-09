import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Daniel Ouattara",
    hobby: "reading",
    age: 39,
  });

  const handleChangeUser = () =>
    setPerson((previousState) => ({
      ...previousState,
      name: "Julie Ouattara",
      // hobby: "flowering",
      // age: 38,
    }));
  return (
    <>
      <h2>useState object example</h2>
      <h3>
        {person.name} - {person.hobby} - {person.age}
      </h3>
      <button type="button" className="btn" onClick={handleChangeUser}>
        change user{" "}
      </button>
    </>
  );
};

export default UseStateObject;
