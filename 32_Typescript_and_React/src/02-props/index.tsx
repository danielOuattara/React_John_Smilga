// type TypeComponentProps = {
//   name: string;
//   id?: number;
//   children?: React.ReactNode;
// };

// function Component({ name, id, children }: TypeComponentProps) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <h2>{id}</h2>
//       {children}
//     </div>
//   );
// }
// export default Component;

//---------------------------------------- OR

import { PropsWithChildren } from "react";

type TypeComponentProps = PropsWithChildren<{
  name: string;
  id?: number;
}>;

function Component({ name, id, children }: TypeComponentProps) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{id}</h2>
      {children}
    </div>
  );
}
export default Component;

//------------------------

/* Below: how to use in App.tsx */

/* 

import Component from "./02-props";

export default function App() {
  return (
    <main>
      <Component name="John Doe" id={123}>
        Hello World ! I am a text children
        <p>I'm a paragraph children</p>
      </Component>
      <Component name="Jana Doe" />
    </main>
  );
}

*/
