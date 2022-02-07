import { useState } from 'react';
import { data } from './../data';

const UseStateArray = () => {
  const [ users, setUsers] = useState(data);

  // const handleRemoveUser = (id) => {
  //   let newUsers = users.filter(user => user.id !== id);
  //   setUsers(newUsers);
  // };


  // const handleRemoveUser = (id) => {
  //   setUsers( (users) => {
  //     let newUsers = users.filter(user => user.id !== id);
  //     return newUsers
  //   })
  // };

  const handleRemoveUser = (id) => {
    setTimeout( () => {
      setUsers( (users) => {
        let newUsers = users.filter(user => user.id !== id);
        return newUsers
      })}, 1000)
  };

  return (
    <>
      <h2>useState array example</h2>
      {users.map( user => {
        const { id, name } = user;
        return (
          <div className='item' key={id}>
              <h4>{name}</h4> 
              <button 
                onClick={() => handleRemoveUser(id)}>
                  Remove {name.replace(name[0], name[0].toUpperCase())}
              </button>
          </div>
        );
      })}

      {/* {users.map( (user) => (<h3 key={user.id}>{user.name}</h3>))}; */}

     { users.length > 0 && 
        <button 
          type="button"
          className="btn"
          style={{color: "red" }}
          onClick={() => setUsers([])}> Remove All Users
        </button> 
      }
    </>
  );
};

export default UseStateArray;