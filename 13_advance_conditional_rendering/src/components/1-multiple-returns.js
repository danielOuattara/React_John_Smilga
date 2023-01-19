import { useState, useEffect } from "react";

const MultipleReturns = () => {
  const url = "https://api.github.com/users/DanielOuattara";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({});

  //------
  // const person = {
  //   name: "Daniel",
  //   email: "daniel@email.com",
  // };
  // console.log(person);
  // console.log(Object.entries(person));
  //------

  const fetchUserThenCatch = () => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setIsError(true);
          setIsLoading(false);
          setErrorMessage(res.statusText);
          throw Error(res.statusText);
        }
      })
      .then((user) => {
        setUser(user);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //--------
  const fetchUserAsyncAwait = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      setIsError(true);
      setIsLoading(false);
      setErrorMessage(res.statusText);
      return 0;
    } else {
      const data = await res.json();
      setUser(data);
      setIsLoading(false);
      setIsError(false);
    }
  };

  //-------------------------------------------------------
  const fetchUserAsyncAwaitTryCatch = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setIsError(true);
        setIsLoading(false);
        setErrorMessage(res.statusText);
        throw Error(res.statusText);
      }
      const data = await res.json();
      setUser(data);
      setIsError(false);
      setIsLoading(false);
      setErrorMessage("");
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      return error;
    }
  };

  // useEffect( () => { fetchUserThenCatch() }, [] );
  // useEffect( () => {fetchUserAsyncAwait()}, []);
  // useEffect(() => {
  //   fetchUserAsyncAwaitTryCatch();
  // }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setIsError(true);
          setIsLoading(false);
          setErrorMessage(`${res.statusText} ${res.status}`);
          throw Error(res.statusText);
        }
      })
      .then((user) => {
        setUser(user);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <h2>Error: {errorMessage}</h2>;
  }

  return (
    <>
      <h2>User infos :</h2>
      <ul>
        {console.log(Object.entries(user))}
        {Object.entries(user).map((subArray) => {
          const [key, value] = subArray;
          return (
            <li
              style={{ textAlign: "left", margin: "10px 0 10px 10px" }}
              key={key}
            >
              {" "}
              <b>{key}</b> : {value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MultipleReturns;
