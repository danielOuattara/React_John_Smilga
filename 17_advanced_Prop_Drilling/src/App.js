import React from "react";
import PropDrillingClass from "./components/1-prop-drilling-function";
import PropDrilling from "./components/1-prop-drilling-function";

function App() {
  return (
    <div className="container">
      <p>function</p>
      <PropDrilling />
      <br /><hr /><br />
      <p>class</p>
      <PropDrillingClass />
    </div>
  );
}

export default App;
