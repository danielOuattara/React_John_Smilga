// import { useState } from "react";
// import { data } from "./../../../data";
// import List from "./List";

// export default function LowerStateChallenge() {
//   const [people, setPeople] = useState(data);
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name) {
//       alert("Please Provide Name Value");
//       return;
//     }
//     addPerson();
//     setName("");
//   };

//   const addPerson = () => {
//     const newPerson = { id: Date.now(), name };
//     setPeople((prevState) => [...prevState, newPerson]);
//   };

//   return (
//     <section>
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="form-row">
//           <label htmlFor="name" className="form-label">
//             name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             className="form-input"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button className="btn btn-block" type="submit">
//           submit
//         </button>
//       </form>
//       <List people={people} />
//     </section>
//   );
// }

//------------------------------------------------- version 2

import { useState } from "react";
import { data } from "./../../../data";
import List from "./List";
import AddPersonForm from "./AddPersonForm";

export default function LowerStateChallenge() {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <AddPersonForm setPeople={setPeople} />

      <List people={people} />
    </section>
  );
}

//------------------------------------------------- version 3

// import { useState } from "react";
// import { data } from "./../../../data";
// import List from "./List";
// import AddPersonForm from "./AddPersonForm";

// export default function LowerStateChallenge() {
//   const [people, setPeople] = useState(data);

//   const addPerson = (nameArg) => {
//     const newPerson = { id: Date.now(), name: nameArg };
//     setPeople((prevState) => [...prevState, newPerson]);
//   };

//   return (
//     <section>
//       <AddPersonForm addPerson={addPerson} />
//       <List people={people} />
//     </section>
//   );
// }
