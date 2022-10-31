import { useState } from "react";

const MultipleInputs = () => {
  const [newPerson, setNewPerson] = useState({
    firstName: "",
    email: "",
    age: "",
  });
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    console.log(event.target);
    const name = event.target.name;
    const value = event.target.value;
    setNewPerson({ ...newPerson, [name]: value }); // gathering newPerson data from inputs
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPerson.firstName && newPerson.email && newPerson.age) {
      const newPersonData = { ...newPerson, id: new Date().getTime() };
      setPeople((people) => [...people, newPersonData]);
      setNewPerson({ firstName: "", email: "", age: "" });
      setError(null);
    } else {
      console.log("empty values");
      setError("Error: all input are required");
    }
  };
  return (
    <>
      <article>
        <form className="form-multiple">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={newPerson.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={newPerson.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={newPerson.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add newPerson
          </button>
          {error && <h4 className="error-msg">{error}</h4>}
        </form>

        {/* listing people */}
        {people.map((person) => {
          return (
            <div className="item" key={person.id}>
              <h4>{person.firstName}</h4>
              <p>{person.email}</p>
              <p>{person.age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs;
