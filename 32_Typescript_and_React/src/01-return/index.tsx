export default function Component(): string | JSX.Element | null {
  return null;
  return "Hello";
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Return Type</h2>
    </div>
  );
}

//---------------- uses typescript inference
export function Component_2() {
  return null;
  return "Hello";
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Return Type</h2>
    </div>
  );
}
