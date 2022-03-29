import React, { useState, useContext } from "react";
import { data } from "../data";
// more components
// fix - context api, redux (for more complex cases)

// 2 components: Provider & Consumer before
const PerSonContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PerSonContext.Provider value={{ removePerson, msg: "hello", people }}>
      <h3>prop drilling</h3>
      <List />
    </PerSonContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PerSonContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson, msg } = useContext(PerSonContext);
  return (
    <div className="item">
      <h4>
        {id}- {name} - {msg}
      </h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
