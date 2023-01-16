import "./App.css";

function App() {
  return <h1>My first component</h1>;
}

function Greeting() {
  return (
    <div>
      <Name />
      <Message />
    </div>
  );
}

const Name = () => <p>John Doe</p>;

const Message = () => {
  return <p>Hello John</p>;
};

const GreetingAgain = () => {
  return <h1>Hello </h1>;
};

// ReactDOM.render(<div>
//       <Greeting/>
//       <GreetingAgain/>
//   </div>, document.getElementById('root')) ;

export default App;
