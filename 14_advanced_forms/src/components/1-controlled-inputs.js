import React, { useState } from "react";
/* JS
const input = document.getElementById('myText');
const inputValue = input.value
React
value, onChange
*/

function ControlledInputs() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && email) {
      const newPerson = { id: new Date().getTime(), firstName, email };
      setPeople((oldPeople) => {
        return [...oldPeople, newPerson];
      });
      setFirstName("");
      setEmail("");
      setError(null);
    } else {
      console.log("empty values");
      setError("Error: empty values");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName"> FirstName : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email"> Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button type="submit">add person</button>
          {error && <h4 className="error-msg">{error}</h4>}
        </form>

        {/* listing people */}
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
}

export default ControlledInputs;
