import { useEffect, useRef, useState } from "react";

/* 
useRef: 
- preserves value between renders
- DOES NOT trigger re-render
- target DOM nodes/elements */

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);

  const isMounted = useRef(false);

  // useEffect(() => {
  //   // to see "refContainer" updated
  //   console.log(refContainer);
  // }, [refContainer]);

  //--------------------------------------

  // change value
  useEffect(() => {
    // console.log(isMounted);

    if (!isMounted.current) {
      isMounted.current = true;
    }

    console.log(isMounted.current);
  }, [value]);

  //--------------------------------------

  // input focus on initial render
  useEffect(() => {
    refContainer.current.focus();
  });

  //--------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log("name = ", name);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
