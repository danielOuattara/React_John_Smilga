import React from "react";

const ErrorExample = () => {
  let title = "random title";
  console.log(title);
  const handleClick = () => {
    title = "Hello people";
    console.log(title);
    return title;
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={() => handleClick()}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

/* Conclusion: without state managment system you still can change 
  ------------ variable BUT no re-render will be made by react */
