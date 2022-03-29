import React from "react";
import ContextAPI from "./components/1-context-api";
import ContextAPIClass from "./components/2-context-api_class";

function App() {
  return (
    <div className="container">
      <p>Function</p>
      <ContextAPI />
      <hr /> <br />
      <p>Class</p>
      <ContextAPIClass/>
    </div>
  );
}

export default App;
