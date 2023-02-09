import { useState } from "react";
import { data } from "./../../data";

const UseStateArray = () => {
  const [persons, setPersons] = useState(data);

  const handleRemovePerson = (id) =>
    setPersons(() => persons.filter((person) => person.id !== id));

  return (
    <>
      <h2>useState array example</h2>
      {persons.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <button className="btn" onClick={() => handleRemovePerson(person.id)}>
            {" "}
            remove
          </button>
        </div>
      ))}

      <p>
        <button
          className="btn"
          style={{ margin: "2rem 2rem" }}
          onClick={() => setPersons(() => [])}
        >
          {" "}
          clear all{" "}
        </button>
        <button className="btn" onClick={() => setPersons(() => data)}>
          {" "}
          reset all{" "}
        </button>
      </p>
    </>
  );
};

export default UseStateArray;
