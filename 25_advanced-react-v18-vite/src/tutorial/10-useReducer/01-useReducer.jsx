import { useState, useReducer } from "react";
import { data } from "../../data";
//---------------------------------------------

const initialState = {
  people: data,
  isLoading: false,
};

const REMOVE_SINGLE_USER = "REMOVE_SINGLE_USER";
const RESET_PEOPLE = "RESET_PEOPLE";
const CLEAR_ALL_PEOPLE = "CLEAR_ALL_PEOPLE";

const reducer = (state, action) => {
  switch (action.type) {
    case REMOVE_SINGLE_USER:
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.payload),
      };

    case RESET_PEOPLE:
      return initialState;

    case CLEAR_ALL_PEOPLE:
      return {
        ...state,
        people: [],
      };
    default:
      return state;
  }
};

export default function ReducerBasics() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) =>
    dispatch({ type: REMOVE_SINGLE_USER, payload: id });

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length > 0 && (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => dispatch({ type: CLEAR_ALL_PEOPLE })}
        >
          clear items
        </button>
      )}
      <br />
      {state.people.length < data.length && (
        <button
          onClick={() => dispatch({ type: RESET_PEOPLE })}
          className="btn"
        >
          Reset People
        </button>
      )}
    </div>
  );
}
