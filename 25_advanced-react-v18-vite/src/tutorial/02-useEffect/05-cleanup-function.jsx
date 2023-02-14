import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => setLoggedIn(!loggedIn)}>
        toggle
      </button>

      {loggedIn && <Component />}
    </>
  );
};

export default CleanupFunction;

const Component = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const handleSizeCheck = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Hello from Component");
    const timer = setInterval(() => console.log("tic-tac"), 1000);
    window.addEventListener("resize", handleSizeCheck);
    return () => {
      // clean up function
      console.log("cleanup");
      clearInterval(timer);
      window.removeEventListener("resize", handleSizeCheck);
      console.log("---------------");
    };
  }, []);

  return (
    <>
      <h2>Hello there</h2>
      <h2>useEffect Clean up function</h2>
      <h3>window size: {size} px</h3>
    </>
  );
};
