import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "./../../data";
import reducer from "./reducer";

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: "Hello World",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handlesubmit = (event) => {
    event.preventDefault();
    if (!name) {
      dispatch({
        type: "NO_VALUE",
        payload: {},
      });
      setName("");
    } else {
      dispatch({
        type: "ADD_ITEM",
        payload: { id: new Date().getTime().toString(), name },
      });
      setName("");
    }
  };

  const closingModal = () => {
    dispatch({ type: "CLOSING_MODAL" });
  };

  const removePerson = (id) => {
    dispatch({
      type: "REMOVE_PERSON",
      payload: id,
    });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closingModal={closingModal} />
      )}
      <form onSubmit={handlesubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button onClick={() => removePerson(person.id)}> remove </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
