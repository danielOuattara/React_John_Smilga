import { useState } from "react";

type TypePerson = {
  name: string;
};

export default function Component() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Component");
    // const formData = new FormData(e.target as HTMLFormElement )
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const name = formData.get("name") as string;
    const person: TypePerson = { name: name };
    console.log(person);

    const person_2: TypePerson = { name: data.name as string };
    console.log(person_2);
  };

  return (
    <section>
      <h2>events example</h2>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          className="form-input mb-1"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          value={email}
          className="form-input mb-1"
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className="btn btn-block"
          // onSubmit={(e) => console.log(e)}
        >
          submit
        </button>
      </form>
    </section>
  );
}

export function Component_2() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Component_2");

    const formData = new FormData(e.currentTarget);
    const data: { [key: string]: unknown } = {};
    formData.forEach((value, key) => {
      data[key] = value as string;
    });

    const name = formData.get("name") as string;
    const person: TypePerson = { name };
    console.log(person);

    const person_2: TypePerson = { name: data.name as string };
    console.log(person_2);

    e.currentTarget.reset();
  };

  return (
    <section>
      <h2>events example</h2>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input type="text" name="name" className="form-input mb-1" />
        <input type="email" name="email" className="form-input mb-1" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  );
}

/* Below: how to use in App.tsx */

/* 
import Component, { Component_2 } from "./04-events";

export default function App() {
  return (
    <main>
      <Component />
      <Component_2 />
    </main>
  );
}

 */
