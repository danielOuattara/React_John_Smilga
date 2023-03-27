import { useState, useEffect, useCallback } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const data = await fetch(url);
      const users = await data.json();
      setUsers(() => users);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //------------------------------------
  useEffect(() => {
    fetchUsers();
  }, []);

  //------------------------------------
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await fetch(url);
        const users = await data.json();
        setUsers(() => users);
        // ??? ---v
        // setUsers(async () => await (await fetch(url)).json());
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h2>fetch data example</h2>
      <ul className="users">
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <h4>{user.login}</h4>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                {" "}
                Link to {user.login}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchData;
