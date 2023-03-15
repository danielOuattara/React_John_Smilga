import { useEffect, useState } from "react";

export default function useFetchV2(url) {
  const [state, setState] = useState({
    isLoading: true,
    isError: false,
    user: null,
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          return setState((prevState) => ({
            ...prevState,
            isError: true,
            isLoading: false,
          }));
        }

        const user = await resp.json();
        setState((prevState) => ({ ...prevState, user }));
      } catch (error) {
        setState((prevState) => ({ ...prevState, isError: true }));
      }
      // hide loading
      setState((prevState) => ({ ...prevState, isLoading: false }));
    };

    fetchUser();
  }, []);

  return { ...state };
}
