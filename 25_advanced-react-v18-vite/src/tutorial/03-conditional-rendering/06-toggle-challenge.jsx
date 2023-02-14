import { useState } from "react";

const ToggleChallenge = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
      {isLoggedIn ? <h2>Welcome </h2> : <h2>Please Log In</h2>}
    </>
  );
};

export default ToggleChallenge;
