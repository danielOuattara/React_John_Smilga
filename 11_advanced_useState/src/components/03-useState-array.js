import { useState } from "react";
import { data } from "./../data";

const UseStateArray = () => {
  const [users, setUsers] = useState(data);

  // const handleRemoveUser = (id) => {
  //   let newUsers = users.filter(user => user.id !== id);
  //   setUsers(newUsers);
  // };

  // const handleRemoveUser = (id) => {
  //   setUsers(() => {
  //     let newUsers = users.filter((user) => user.id !== id);
  //     return newUsers;
  //   });
  // };

  // const handleRemoveUser = (id) => {
  //   setUsers(() => {
  //     return users.filter((user) => user.id !== id);
  //   });
  // };

  const handleRemoveUser = (id) => {
    setTimeout(() => {
      let newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
    }, 500);
  };

  // const handleRemoveUser = (id) => {
  //   setTimeout(() => {
  //     setUsers(() => {
  //       let newUsers = users.filter((user) => user.id !== id);
  //       return newUsers;
  //     });
  //   }, 500);
  // };

  // const handleRemoveUser = (id) => {
  //   setTimeout(() => {
  //     setUsers(() => {
  //       return users.filter((user) => user.id !== id);
  //     });
  //   }, 500);
  // };

  return (
    <>
      <h2>useState array example</h2>

      {users.map((user) => {
        return (
          <div className="item" key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => handleRemoveUser(user.id)}>
              Remove{" "}
              {user.name.replace(user.name[0], user.name[0].toUpperCase())}
            </button>
          </div>
        );
      })}

      {/* {users.map( (user) => (<h3 key={user.id}>{user.name}</h3>))}; */}

      {users.length > 0 && (
        <button type="button" className="btn" onClick={() => setUsers([])}>
          Remove All Users
        </button>
      )}

      {users.length === 0 && (
        <button type="button" className="btn" onClick={() => setUsers(data)}>
          Reload
        </button>
      )}
    </>
  );
};

export default UseStateArray;
