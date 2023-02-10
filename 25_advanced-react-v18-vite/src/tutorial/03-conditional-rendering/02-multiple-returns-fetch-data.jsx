import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await fetch(url);
        if (!data.ok) {
          setIsLoading(() => false);
          setError(() => true);
          setErrorMessage(() => data.status + " " + data.statusText);
          throw Error(errorMessage);
        }
        const fetchedUser = await data.json();
        setUser(() => fetchedUser);
        setIsLoading(() => false);
        setError(() => false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2 className="loading"> Loading ...</h2>;
  }
  if (isError) {
    return <h2 className="error"> Error: {errorMessage}</h2>;
  }

  const { avatar_url, name, company, bio } = user;

  return (
    <article className="article">
      <h2>Fetch Data </h2>
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </article>
  );
};
export default MultipleReturnsFetchData;
