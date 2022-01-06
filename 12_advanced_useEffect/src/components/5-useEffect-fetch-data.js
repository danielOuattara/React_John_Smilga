import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
    
  const [users, setUsers] = useState([]);

  // const fetchUsersThenCatch = () => {
  //     fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("data = ", data)
  //       setUsers(data);
  //     })
  // }


  // const fetchUsersAsync = async () => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
  //   setUsers(data);
  // }


  const fetchUsersAsync2 = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (err) {
      console.log(err.message)
    }
  }

  // useEffect(() => { fetchUsersThenCatch()}, []);
  // useEffect(() => fetchUsersAsync(), []);
  useEffect(() => fetchUsersAsync2(), []);

    return (
      <>
        <h2>fetch data</h2>
        <ul className="users">
          { users.map( (user) => {
            const { id, login, avatar_url: image, html_url } = user;
            return (
              <li key={id}>
                <img src={image} alt={'avatar of ' + id} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url} target="_blank" rel="noreferrer"> Link to {login}</a>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
};

export default UseEffectFetchData;
