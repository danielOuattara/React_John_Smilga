import  { useState } from 'react';

const UseStateBasics = () => {
  const [ title, setTitle] = useState('random title');

  const handleClick = () => {
    title === 'random title' ? setTitle('Hello People !') : setTitle('random title');
  }

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>switch title </button>
    </>
  ) 
};

export default UseStateBasics;
 