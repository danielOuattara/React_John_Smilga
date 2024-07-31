import { useAppDispatch, useAppSelector } from "./hooks";
import { counterSliceActions } from "./features/counterSlice";

export default function Component() {
  const dispatch = useAppDispatch();
  const { count, status } = useAppSelector((state) => state.counter);

  return (
    <div>
      <h2>Redux Toolkit</h2>
      <h2>Count: {count}</h2>
      <h2>Status: {status}</h2>

      <div className="btn-container">
        <button
          onClick={() => dispatch(counterSliceActions.increment())}
          className="btn"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(counterSliceActions.increment())}
          className="btn"
        >
          Reset
        </button>

        <button
          onClick={() => dispatch(counterSliceActions.decrement())}
          className="btn"
        >
          Decrement
        </button>
      </div>
      <div className="btn-container">
        <button
          onClick={() => dispatch(counterSliceActions.setStatus("active"))}
          className="btn"
        >
          Set Status to Active
        </button>
        <button
          className="btn"
          onClick={() => dispatch(counterSliceActions.setStatus("inactive"))}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
