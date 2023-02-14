/* UseState 
--------------*/
// import Test from "./tutorial/01-useState/00-test";
// import Error from "./tutorial/01-useState/01-error-example";
// import UseStateBasics from "./tutorial/01-useState/02-useState-basics";
// import UseStateArray from "./tutorial/01-useState/03-useState-array";
// import UseStateObject from "./tutorial/01-useState/04-useState-object";
// import UseStateGotcha from "./tutorial/01-useState/05-useState-gotcha";

/* UseEffect 
--------------*/
// import CodeExample from "./tutorial/02-useEffect/01-code-example";
// import UseEffectBasics from "./tutorial/02-useEffect/02-useEffect-basics";
// import MultipleEffects from "./tutorial/02-useEffect/03-multiple-effects";
// import FetchData from "./tutorial/02-useEffect/04-fetch-data";
import CleanupFunction from "./tutorial/02-useEffect/05-cleanup-function";

/* Conditional Rendering 
-------------------------*/
// import MultipleReturnsBasics from "./tutorial/03-conditional-rendering/01-multiple-returns-basics";
// import MultipleReturnsFetchData from "./tutorial/03-conditional-rendering/02-multiple-returns-fetch-data";
// import HooksRule from "./tutorial/03-conditional-rendering/03-hooks-rule";
// import ShortCircuitOverView from "./tutorial/03-conditional-rendering/04-short-circuit-overview";
// import ShortCircuitExamples from "./tutorial/03-conditional-rendering/05-short-circuit-examples";
// import ToggleChallenge from "./tutorial/03-conditional-rendering/06-toggle-challenge";
import UserChallenge from "./tutorial/03-conditional-rendering/07-user-challenge";

function App() {
  return (
    <div className="container">
      {/* <Test /> */}
      {/* <Error /> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateGotcha /> */}

      {/* ---------------------------------- */}

      {/* <CodeExample /> */}
      {/* <UseEffectBasics /> */}
      {/* <MultipleEffects /> */}
      {/* <FetchData /> */}
      <CleanupFunction />

      {/* ------------------------------------- */}
      {/* <MultipleReturnsBasics /> */}
      {/* <MultipleReturnsFetchData /> */}
      {/* <HooksRule /> */}
      {/* <ShortCircuitOverView /> */}
      {/* <ShortCircuitExamples /> */}
      {/* <ToggleChallenge /> */}
      {/* <UserChallenge /> */}
    </div>
  );
}

export default App;
