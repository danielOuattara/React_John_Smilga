import React, { useState } from "react";

const UseStateObject = () => {
  /* single state objects 
  -----------------------*/
  const [user, setUser] = useState({
    name: "Daniel",
    age: "39",
    message: "Hello World",
  });

  /* Multiple state values 
  -------------------------*/
  // const [name,setName] = useState('Daniel');
  // const [age,setAge] = useState(38);
  // const [message,setMessage] = useState('Hello World');

  const changeMessage = () => {
    user.message === "Hello World"
      ? setUser({ ...user, message: "Hello React!" })
      : setUser({ ...user, message: "Hello World" });
  };

  return (
    <>
      <h2>useState object example</h2>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
      <h4>{user.message}</h4>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
