import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0);
  
  const resetHandler = () => {
    setValue(0);
  };

  const asyncIncrease = () => {
    setTimeout( () => {
      // setValue( value + 1)  // Kills the Async; not good!
      setValue( (prevState) => { //Better than previous
        return prevState + 1;
      })
    }, 2000)
  };

  const asyncDecrease = () => {
    setTimeout( () => {
      setValue( (prevState) => {
        return prevState - 1;
      })
    }, 2000)
  };

  return ( 
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h2>{value}</h2>
        <button className="btn" onClick={() => setValue(value - 1)}>decrease</button>
        <button className="btn" onClick={resetHandler}>reset</button>
        <button className="btn" onClick={() => setValue(value + 1)}>increase</button>
      </section>

      <section style={{margin: '4rem 0'}}>
        <h2>complex counter</h2>
        <h2>{value}</h2>
        <button className="btn" onClick={asyncDecrease}>Decrease later</button>
        <button className="btn" onClick={asyncIncrease}>increase later</button>
      </section>
    </>
  );
};

export default UseStateCounter;
