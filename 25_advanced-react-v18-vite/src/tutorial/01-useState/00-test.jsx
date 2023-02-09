// import React from "react";

// export default function App() {
//   const [valid, setValid] = React.useState("Invalid");

//   const handleUserInput = (event) => {
//     const value = event.target.value.trim();
//     if (value.length < 3) {
//       return setValid(() => "Invalid");
//     } else {
//       return setValid(() => "Valid");
//     }
//   };

//   return (
//     <form>
//       <label>Your message</label>
//       <input type="text" onChange={handleUserInput} />
//       <p>{valid} message</p>
//     </form>
//   );
// }

//----------------------------------------------

import React from "react";

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const handleIncrease = () => {
    setTimeout(() => {
      setCounter((counter) => counter + 1);
      console.log("Clicked");
    }, 3000);
  };

  return (
    <div>
      <p id="counter">{counter}</p>
      <button onClick={handleIncrease}>Increment</button>
    </div>
  );
}
