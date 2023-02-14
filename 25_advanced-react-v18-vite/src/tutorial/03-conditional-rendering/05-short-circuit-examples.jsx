import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "default value 1"}</h2>
      <h2>{!text || "default value 2"}</h2>
      <h2>{text && "default value 3"}</h2>
      <h2>{!text && "default value 4"}</h2>

      {user && <SomeComponent name={user.name} />}

      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>

      {user ? <h4> hello {user.name}</h4> : <h4>no user found</h4>}
    </div>
  );
};

export default ShortCircuitExamples;

const SomeComponent = (props) => {
  return (
    <>
      <h2>what ever return</h2>
      <h4>{props.name}</h4>
    </>
  );
};
