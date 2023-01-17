import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);

  const fetchUsersThenCatch = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error.message));
  };

  const fetchUsersAsync = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUsers2(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => fetchUsersThenCatch(), []);
  useEffect(() => fetchUsersAsync(), []);

  return (
    <>
      <UserList users={users} mode="Promises Then/Catch" />
      <UserList users={users2} mode="Async/Await Try/Catch" />
    </>
  );
};

export default UseEffectFetchData;

function UserList(props) {
  return (
    <>
      <h2>fetch data {props.mode}</h2>
      <ul className="users">
        {props.users.map((user) => (
          <UserListItem {...user} />
        ))}
      </ul>
    </>
  );
}

function UserListItem(props) {
  return (
    <li key={props.id}>
      <img src={props.avatar_url} alt={props.id} />
      <div>
        <h4>{props.login}</h4>
        <a href={props.html_url} target="_blank" rel="noreferrer">
          {" "}
          Link to {props.login}
        </a>
      </div>
    </li>
  );
}
