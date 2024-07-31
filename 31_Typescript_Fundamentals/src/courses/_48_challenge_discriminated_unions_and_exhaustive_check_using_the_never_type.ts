export {};
/*------ challenge discriminated unions and exhaustive 
check using the never type ------*/

type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return (state += action.amount);

    case "decrement":
      return (state -= action.amount);

    default: {
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action: ${unexpectedAction}`);
    }
  }
}

let initialState = 15;

let state = reducer(initialState, {
  type: "increment",
  amount: 5,
  timestamp: 123456,
  user: "john",
});

console.log("state = ", state);

state = reducer(state, {
  type: "decrement",
  amount: 5,
  timestamp: 213456,
  user: "jana",
});

console.log("state = ", state);

// state = reducer(state, {
//   type: "crazy",
//   amount: 5,
//   timestamp: 213456,
//   user: "jana",
// });

// console.log("state = ", state);
