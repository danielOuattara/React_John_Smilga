import React from 'react';
// import ReactDOM from 'react-dom';
import {render} from 'react-dom';

/*
JSX Rules: 
- Return a single element
- div/ section / article / Fragment
- camelCase for html element
- className instead of class
- close every element
- formatting

//---------------------------------

- Nested Component
- React tools
*/ 

function Greeting() {
  return(
    <div>
      <Name />
      <Message />
    </div>
  )
}

const GreetingAgain = () => {
  return <h1>Hello </h1>
}

const Name = () => {
  return (<p>John Doe</p>);
}

const Message = () => {
  return (<p>Hello John</p>);
}


// ReactDOM.render(<div>
//       <Greeting/>
//       <GreetingAgain/>
//   </div>, document.getElementById('root')) ;

render(<div>
      <Greeting/>
      <GreetingAgain/>
  </div>, document.getElementById('root')) ;
