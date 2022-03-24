import React, { Component } from "react";
import Modal from "./Modal";
import { data } from "./../../data";
import reducer from "./reducer";

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: "Hello World",
};

export default class IndexClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: ''
    }
  }
  render() {
    return <div>index</div>;
  }
}

// TODO: find equivalent of useReducer for class component


// const Index = () => {
//   const [state, dispatch] = useReducer(reducer, defaultState);

//   const handlesubmit = (event) => {
//     event.preventDefault();
//     if (!name) {
//       dispatch({
//         type: "NO_VALUE",
//         payload: {},
//       });
//       setName("");
//     } else {
//       dispatch({
//         type: "ADD_ITEM",
//         payload: { id: new Date().getTime().toString(), name },
//       });
//       setName("");
//     }
//   };

//   const closingModal = () => {
//     dispatch({ type: "CLOSING_MODAL" });
//   };

//   const removePerson = (id) => {
//     dispatch({
//       type: "REMOVE_PERSON",
//       payload: id,
//     });
//   };

//   return (
//     <>
//       {state.isModalOpen && (
//         <Modal
//           modalContent={state.modalContent}
//           closingModal={closingModal}
//           isModalOpen={state.i}
//         />
//       )}
//       <form onSubmit={handlesubmit} className="form">
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//           />
//         </div>
//         <button type="submit">submit</button>
//       </form>
//       {state.people.map((person) => {
//         const { id, name } = person;
//         return (
//           <div key={id} className="item">
//             <h4>{name}</h4>
//             <button onClick={() => removePerson(id)}> remove </button>
//           </div>
//         );
//       })}
//     </>
//   );
// };
