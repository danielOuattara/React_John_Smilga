import React, { useState } from 'react';


const UseStateObject = () => {
  const [ user, setUser ] = useState({
      name: "Daniel",
      age: "37",
      message:"Hello World"
  });
  
  // const [name,setName] = useState('peter');
  // const [age,setAge] = useState(24);
  // const [message,setMessage] = useState('random message');

  const changeMessage = () => {
    setUser({ ...user, message: "Hello React!" });
  }

  return (
    <>  
        <h2>useState object example</h2>
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
        <h4>{user.message}</h4>
        <button className='btn' onClick={changeMessage}>
          change message
        </button>
    </>
  );
};  

export default UseStateObject;
