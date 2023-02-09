const ErrorExample = () => {
  let counter = 0;

  function handleClick() {
    counter += 1;
    console.log(counter);
  }

  return (
    <>
      <h2>useState error example</h2>
      <button className="btn" onClick={handleClick}>
        {" "}
        click
      </button>
      <h2>{counter}</h2>
    </>
  );
};

export default ErrorExample;
