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
// import CleanupFunction from "./tutorial/02-useEffect/05-cleanup-function";

//

/* Conditional Rendering 
-------------------------*/
// import MultipleReturnsBasics from "./tutorial/03-conditional-rendering/01-multiple-returns-basics";
// import MultipleReturnsFetchData from "./tutorial/03-conditional-rendering/02-multiple-returns-fetch-data";
// import HooksRule from "./tutorial/03-conditional-rendering/03-hooks-rule";
// import ShortCircuitOverView from "./tutorial/03-conditional-rendering/04-short-circuit-overview";
// import ShortCircuitExamples from "./tutorial/03-conditional-rendering/05-short-circuit-examples";
// import ToggleChallenge from "./tutorial/03-conditional-rendering/06-toggle-challenge";
// import UserChallenge from "./tutorial/03-conditional-rendering/07-user-challenge";

//

/* Project Setup Best Practices
--------------------------------- */
// import NavBar from "./tutorial/04-project-structure-best-practices/my_solution/components/navbar/NavBar";
// import {
//   Home,
//   About,
// } from "./tutorial/04-project-structure-best-practices/my_solution/components/pages/";

// import Example from "./tutorial/04-project-structure-best-practices/my_solution/components/examples/";

/* leverage javascript 
----------------------- */
// import List from "./tutorial/05-leverage-javascript/my_solution/List";

//

/* forms 
---------  */
// import ControlledInputs from "./tutorial/06-forms/my_solution/01-controlled-inputs";
// import UserChallenge from "./tutorial/06-forms/my_solution/02-user-challenge";
// import MultipleInputs from "./tutorial/06-forms/my_solution/03-multiple-inputs";
// import OtherInputs from "./tutorial/06-forms/my_solution/04-other-inputs";
// import UncontrolledInputs from "./tutorial/06-forms/my_solution/05-form-data";

/* useRef
---------- */
// import UseRefBasics from "./tutorial/07-useRef/01-useRef-basics";

/* custom Hook
--------------- */
// import ToggleExample from "./tutorial/08-custom-hooks/01-toggle";
// import FetchData from "./tutorial/08-custom-hooks/02-fetch-data";

/* context 
-------------- */
// import Navbar from "./tutorial/09-context-api/context/Navbar";

/* useReducer 
---------------*/
// import ReducerBasics from "./tutorial/10-useReducer/01-useReducer";
import AppUseReducer from "./tutorial/10-useReducer/useReducer_split_import_export/AppUseReducer";

//============================================
function App() {
  return (
    <div className="container">
      {/* --------------------------------- useState  */}
      {/* <Test /> */}
      {/* <Error /> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateGotcha /> */}

      {/* ---------------------------------- useEffect */}
      {/* <CodeExample /> */}
      {/* <UseEffectBasics /> */}
      {/* <MultipleEffects /> */}
      {/* <FetchData /> */}
      {/* <CleanupFunction /> */}

      {/* ---------------------------------- conditional rendering */}
      {/* <MultipleReturnsBasics /> */}
      {/* <MultipleReturnsFetchData /> */}
      {/* <HooksRule /> */}
      {/* <ShortCircuitOverView /> */}
      {/* <ShortCircuitExamples /> */}
      {/* <ToggleChallenge /> */}
      {/* <UserChallenge /> */}

      {/* ----------------------------------  project structure best practice */}
      {/* <NavBar />
      <br />
      <Home />
      <About />
      <br />
      <Example /> */}

      {/* ----------------------------------- leverage javaScript  */}
      {/* <List /> */}

      {/* ----------------------------------- forms */}
      {/* <ControlledInputs /> */}
      {/* <UserChallenge /> */}
      {/* <MultipleInputs /> */}
      {/* <OtherInputs /> */}
      {/* <UncontrolledInputs /> */}

      {/* ----------------------------------- useRef */}
      {/* <UseRefBasics /> */}

      {/* ----------------------------- custom Hooks */}

      {/* <ToggleExample /> */}
      {/* <FetchData /> */}

      {/* ---------------------------------- context API */}
      {/* <Navbar /> */}

      {/* ---------------------------------- useReducer */}
      {/* <ReducerBasics /> */}
      <AppUseReducer />
    </div>
  );
}

export default App;
