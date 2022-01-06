import React, { useState, useEffect } from 'react';

const MultipleReturns = () => {
  const url = 'https://api.github.com/users/QuincyLarson';

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default');


const fetchUserThenCatch = () => {
    fetch(url)
    .then(res =>  {
      if(res.ok) {
        return res.json();
      } 
      else {
        setIsError(true);
        setIsLoading(false);
        throw Error(res.statusText)
      }
    })
    .then(user => {
       setUser(user.login);
       setIsLoading(false);
       setIsError(false);
    })
    .catch(err =>  {
      console.log(err.message);
      setIsError(true)
    })
}

const fetchUserAsyncAwait = async () => {
  const res = await fetch(url);
  console.log(res)
  const data = await res.json();
  setUser(data.login);
  setIsLoading(false);
  setIsError(false);
}


const fetchUserAsyncAwaitTryCatch = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    setUser(data.login);
    setIsError(false);
    setIsLoading(false);

  } catch (err) {
    console.log(err.message);
    setIsError(true);
  }
}

  useEffect( () => {fetchUserThenCatch()}, [] );

  // useEffect( () => {fetchUserAsyncAwait()}, []);

  // useEffect( () => {fetchUserAsyncAwaitTryCatch()}, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  };

  if (isError) {
    return <div>Error...</div>;
  };
  
  return <div>{user}</div>;
  }

export default MultipleReturns;
