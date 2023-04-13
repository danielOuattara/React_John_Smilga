// import { useState } from "react";
// import { useMutation } from "@tanstack/react-query";
// import customFetch from "./axios/util";

// export default function Form() {
//   const [newItemName, setNewItemName] = useState("");

//   const { mutate: createTask, isLoading } = useMutation({
//     mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createTask(newItemName);
//     setNewItemName("");
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h4>task bud</h4>
//       <div className="form-control">
//         <input
//           type="text "
//           className="form-input"
//           value={newItemName}
//           onChange={(event) => setNewItemName(event.target.value)}
//         />
//         <button type="submit" className="btn" disabled={isLoading}>
//           add task
//         </button>
//       </div>
//     </form>
//   );
// }

/*  useMutation helpers + query data after post
------------------------------------------------- */

// import { useState } from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import customFetch from "./axios/util";
// import { toast } from "react-toastify";

// export default function Form() {
//   const [newItemName, setNewItemName] = useState("");

//   const queryClient = useQueryClient();

//   const { mutate: createTask, isLoading } = useMutation({
//     mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["tasks"] });
//       toast.success("Task successfully added");
//       setNewItemName("");
//     },
//     onError: (error) => {
//       toast.error(error.response.data.msg);
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createTask(newItemName);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h4>task bud</h4>
//       <div className="form-control">
//         <input
//           type="text "
//           className="form-input"
//           value={newItemName}
//           onChange={(event) => setNewItemName(event.target.value)}
//         />
//         <button type="submit" className="btn" disabled={isLoading}>
//           add task
//         </button>
//       </div>
//     </form>
//   );
// }

/*  useMutation helpers : refactoring
------------------------------------------------- */

import { useState } from "react";
import { useCreateTask } from "./ReactQueyHooks";

export default function Form() {
  const [newItemName, setNewItemName] = useState("");
  const { createTask, isLoading } = useCreateTask(newItemName);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName, {
      onSuccess: () => setNewItemName(""),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
}
