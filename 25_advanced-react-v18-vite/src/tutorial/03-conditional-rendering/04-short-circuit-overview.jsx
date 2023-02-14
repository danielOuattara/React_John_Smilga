import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Daniel");

  return (
    <>
      <h2>short circuit overview</h2>
      <h3> test :1 OR {text || "John Doe 1"}</h3>
      <hr />
      <h3>test :2 && {!text || "Jana Doe 2"}</h3>
      <hr />
      <h3> test :3 && {text && "Samual Doe 3"}</h3>
      <hr />
      <h3>test :4 || {!text && "Lina Doe 4"}</h3>
    </>
  );
};
export default ShortCircuitOverview;
