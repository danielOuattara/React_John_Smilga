import {
  CLEAR_ALL_PEOPLE,
  REMOVE_SINGLE_USER,
  RESET_PEOPLE,
} from "./action.js";

import { initialState } from "./AppUseReducer";

export default function reducer(state, action) {
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
}
