import React, { useState, useEffect } from 'react';


//----------------------------------------------------------------
const ShowHide = () => {
  const[ show, setShow ] = useState(false)
  return (
    <>
      <h2>show/hide</h2>
      <button className='btn' onClick={() => setShow(!show)}>show/hide</button>
      {show && <Item />}
    </>
  );
};


//----------------------------------------------------------------
const Item = () => {

  const [size, setSize] = useState(window.innerWidth);

  const checkWindowSize = () => {
      setSize(window.innerWidth);
      console.log('resized !')
  }

  useEffect( () => {
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    }
  }, [])

  return (
    <div>
      <h1>window</h1>
      <h2>size :{size}</h2>
    </div>
  );
}

export default ShowHide;
