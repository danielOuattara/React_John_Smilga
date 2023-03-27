import { useEffect } from "react";

export default function Person({ name }) {
  console.log("render");
  // useEffect(() => {
  //   console.log('unfortunately does not fix the issue');
  // }, []);
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
}
