export type TypeCounterState = {
  count: number;
  status: string;
};

type TypeCounterAction = {
  type: "increment" | "decrement" | "reset";
};

type TypeStatusAction = {
  type: "setStatus";
  payload: "active" | "inactive";
};

export type TypeReducerAction = TypeCounterAction | TypeStatusAction;

export const initialState: TypeCounterState = {
  count: 0,
  status: "Pending...",
};

export const counterReducer = (
  state: TypeCounterState,
  action: TypeReducerAction,
): TypeCounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0 };

    case "setStatus":
      return { ...state, status: action.payload };

    default: {
      const unhandledAction: never = action;
      throw new Error(`Unexpected action type ${unhandledAction}`);
    }
  }
};
