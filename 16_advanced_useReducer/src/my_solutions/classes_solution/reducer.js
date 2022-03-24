const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      return {
        ...state,
        people: [...state.people, action.payload],
        isModalOpen: true,
        modalContent: "user added successfuly ",
      };
    } else if (action.type === "NO_VALUE") {
      return {
        ...state,
        isModalOpen: true,
        modalContent: "please enter valid name",
      };
    } else if (action.type === "CLOSING_MODAL") {
      return {
        ...state,
        isModalOpen: false,
      };
    } else if (action.type === "REMOVE_PERSON") {
      const newList = state.people.filter(person => person.id !== action.payload);
      return {
        ...state,
        people: [...newList],
        isModalOpen: true,
        modalContent: "person successfully removed"
      };
    } else {
      throw new Error("no matching action type");
    }
  };

export default reducer;