import { useState } from "react";
import { data } from "./../../../data";

function UserChallenge() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) return 0;

    // setUsers(() => users.concat({ id: users.length + 1, name })); // OK !
    setUsers(() => [...users, { id: Date.now().toString(16), name }]);

    setName("");
    return 0;
  };

  const removeOneUser = (id) => {
    return setUsers(() => users.filter((person) => person.id !== id));
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(() => event.target.value)}
          />
        </div>

        <button type="submit" className="btn">
          SUBMIT
        </button>
      </form>
      <h2>Users List</h2>
      {/* render users below */}
      {users.map((person) => (
        <div key={person.id}>
          <h4>
            {person.name} &nbsp;&nbsp;
            <button onClick={() => removeOneUser(person.id)} className="btn">
              remove
            </button>{" "}
          </h4>
        </div>
      ))}
    </div>
  );
}
export default UserChallenge;
