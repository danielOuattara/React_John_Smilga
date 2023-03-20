import { useReducer } from "react";
import { data } from "./../../../data";
import reducer from "./reducer";
import {
  CLEAR_ALL_PEOPLE,
  REMOVE_SINGLE_USER,
  RESET_PEOPLE,
} from "./action.js";
//---------------------------------------------

export const initialState = {
  people: data,
  isLoading: false,
};

export default function AppUseReducer() {
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
