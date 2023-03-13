import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];

function OtherInputs() {
  const [shipping, setShipping] = useState(false);
  const [singleFramework, setSingleFramework] = useState("react");

  console.log(singleFramework);

  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            id="shipping"
            name="shipping"
            checked={shipping}
            onChange={(event) => setShipping(() => event.target.checked)}
          />
        </div>

        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Select Framework
          </label>
          <select
            name="framework"
            id="framework"
            onChange={(event) => {
              setSingleFramework(() => event.target.value);
            }}
          >
            <option value="">Select One Framework</option>
            {frameworks.map((item) => (
              <option key={item} value={item}>
                {item.toLocaleUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
}
export default OtherInputs;
