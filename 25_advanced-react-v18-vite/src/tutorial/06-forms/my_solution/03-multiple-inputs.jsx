import { useState } from "react";

function MultipleInputs() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    id: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (event) => {
    setUser(() => ({
      ...user,
      [event.target.name]: event.target.value,
      id: Date.now().toString(16),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.email || !user.email) return 0;

    setPeople(() => [...people, user]);
    setUser(() => ({ name: "", email: "", password: "" }));

    console.log(person);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>

        <div>
          <h2>People</h2>
          {people.map((person) => (
            <div key={person.id}>
              <h4>
                {person.name} &nbsp;&nbsp; {person.email}
                <button
                  onClick={() => removeOneUser(person.id)}
                  className="btn"
                >
                  remove
                </button>{" "}
              </h4>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
export default MultipleInputs;
