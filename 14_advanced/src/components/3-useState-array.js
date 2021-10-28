import React, { useState } from 'react';
import { data } from './../data';

const UseStateArray = () => {
  const [ users, setUsers] = useState(data);
  const handleRemoveUser = (id) => {
    let newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers)
  };

  return (
    <>
      <h2>useState array example</h2>
      {users.map( (user) => {
        const{ id, name} = user;
        return (
          <div className='item' key={id}>
              <h4>{name}</h4> 
              <button onClick={() => handleRemoveUser(id)}>Remove {name }</button>
          </div>
        );
      })}

      {/* {users.map( (user) => (<h3 key={user.id}>{user.name}</h3>))}; */}

     { users.length  
        && 
        <button 
          type="button"
          className="btn"
          onClick={() => setUsers([])}>Remove All Users
        </button> 
      }


    </>
  ) 
};

export default UseStateArray;