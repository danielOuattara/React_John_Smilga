// import { ToastContainer } from "react-toastify";
// import { nanoid } from "nanoid";
// import Form from "./Form";
// import Items from "./Items";
// import { useState } from "react";

// const defaultItems = [
//   { id: nanoid(), title: "walk the dog", isDone: false },
//   { id: nanoid(), title: "wash dishes", isDone: false },
//   { id: nanoid(), title: "drink coffee", isDone: true },
//   { id: nanoid(), title: "take a nap", isDone: false },
// ];

// export default function App() {
//   const [items, setItems] = useState(defaultItems);
//   return (
//     <section className="section-center">
//       <ToastContainer position="top-center" />
//       <Form />
//       <Items items={items} />
//     </section>
//   );
// }

//------------------------------------------------------------------------

/* using react-query 
----------------------*/
import { ToastContainer } from "react-toastify";
import Form from "./Form";
import Items from "./Items";

export default function App() {
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      <Items />
    </section>
  );
}
