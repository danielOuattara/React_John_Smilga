import useToggle from "./useToggle";

export default function ToggleExample() {
  const { show, toggleState } = useToggle(false);

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={toggleState}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
}
