import React from 'react';

const ErrorExample = () => {
  
  const handleClick= () => {
    console.log(title);
    title = 'Hello people';

  }

  let title = 'random title';
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button 
        type="button"
        className="btn"
        onClick={handleClick}>change title
      </button>
    </React.Fragment>
  ) 
};

export default ErrorExample;
