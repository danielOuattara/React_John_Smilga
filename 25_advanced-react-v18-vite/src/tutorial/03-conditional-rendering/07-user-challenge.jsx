import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    return setUser((prevState) => ({ ...prevState, userName: "Daniel" }));
  };
  const logout = () => {
    return setUser(() => null);
  };

  return (
    <>
      <h2>user challenge</h2>

      {user ? <h4>hello there {user.userName}</h4> : <h4>please login</h4>}
      <button className="btn" onClick={user ? logout : login}>
        {user ? "logout" : "login"}
      </button>
    </>
  );
};

export default UserChallenge;
