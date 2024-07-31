import { useState } from "react";

type TypeNavLinks = {
  id: number;
  url: string;
  label: string;
};

const navLinks = [
  { id: 1, url: "url_1", label: "label_1" },
  { id: 1, url: "url_2", label: "label_2" },
  { id: 1, url: "url_3" /* label: "label_3" */ },
];

function Component() {
  const [text, setText] = useState("Drinks & Smile");
  const [number, setNumber] = useState(1);
  const [list, setList] = useState<string[]>([]);
  const [nav, setNav] = useState(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText(1);
          setNumber(22);
          // setList(["one", "two"]);
          setList([1, 3]);
        }}
      >
        {text}
      </button>
    </div>
  );
}
export default Component;

/* Below: how to use in App.tsx */

/* 
import Component from "./03-state";

export default function App() {
  return (
    <main>
      <Component />
    </main>
  );
}

*/
