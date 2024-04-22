// export default function SingleItem({ item }) {
//   return (
//     <div className="single-item">
//       <input
//         type="checkbox"
//         checked={item.isDone}
//         onChange={() => console.log("edit task")}
//       />
//       <p
//         style={{
//           textTransform: "capitalize",
//           textDecoration: item.isDone && "line-through",
//         }}
//       >
//         {item.title}
//       </p>
//       <button
//         className="btn remove-btn"
//         type="button"
//         onClick={() => console.log("delete task")}
//       >
//         delete
//       </button>
//     </div>
//   );
// }

//------------------------- patch single task

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import customFetch from "./axios/util";

// export default function SingleItem({ item }) {
//   const queryClient = useQueryClient();

//   const { mutate: editTask, isPending } = useMutation({
//     mutationFn: ({ taskId, isDone }) => {
//       return customFetch.patch(`/${taskId}`, { isDone });
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["tasks"] });
//       toast.success("Task successfully edited");
//     },
//     onError: (error) => {
//       toast.error(error.response.data.msg);
//     },
//   });

//   return (
//     <div className="single-item">
//       <input
//         type="checkbox"
//         checked={item.isDone}
//         onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
//       />
//       <p
//         style={{
//           textTransform: "capitalize",
//           textDecoration: item.isDone && "line-through",
//         }}
//       >
//         {item.title}
//       </p>
//       <button
//         className="btn remove-btn"
//         type="button"
//         onClick={() => console.log("delete task")}
//       >
//         delete
//       </button>
//     </div>
//   );
// }

//------------------------- delete single task

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import customFetch from "./axios/util";

// export default function SingleItem({ item }) {
//   const queryClient = useQueryClient();

//   const { mutate: editTask, isPending: isEditing } = useMutation({
//     mutationFn: ({ taskId, isDone }) => {
//       return customFetch.patch(`/${taskId}`, { isDone });
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["tasks"] });
//       toast.success("Task successfully edited");
//     },
//     onError: (error) => {
//       toast.error(error.response.data.msg);
//     },
//   });

//   const { mutate: deleteTask, isPending: isDeleting } = useMutation({
//     mutationFn: (taskId) => {
//       return customFetch.delete(`/${taskId}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["tasks"] });
//       toast.success("Task successfully deleted");
//     },
//     onError: (error) => {
//       toast.error(error.response.data.msg);
//     },
//   });

//   return (
//     <div className="single-item">
//       <input
//         type="checkbox"
//         checked={item.isDone}
//         onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
//       />
//       <p
//         style={{
//           textTransform: "capitalize",
//           textDecoration: item.isDone && "line-through",
//         }}
//       >
//         {item.title}
//       </p>
//       <button
//         className="btn remove-btn"
//         type="button"
//         onClick={() => deleteTask(item.id)}
//         disabled={isDeleting || isEditing}
//       >
//         delete
//       </button>
//     </div>
//   );
// }

//---------------------------------------------------------------

/* Edit task:  refactoring 
-----------------------------*/

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import customFetch from "./axios/util";

// export default function SingleItem({ item }) {
//   const queryClient = useQueryClient();

//   const { mutate: editTask, isPending: isEditing } = useMutation({
//     mutationFn: ({ taskId, isDone }) => {
//       return customFetch.patch(`/${taskId}`, { isDone });
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["tasks"] });
//       toast.success("Task successfully edited");
//     },
//     onError: (error) => {
//       toast.error(error.response.data.msg);
//     },
//   });

//   const { mutate: deleteTask, isPending: isDeleting } = useMutation({
//     mutationFn: (taskId) => {
//       return customFetch.delete(`/${taskId}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["tasks"] });
//       toast.success("Task successfully deleted");
//     },
//     onError: (error) => {
//       toast.error(error.response.data.msg);
//     },
//   });

//   return (
//     <div className="single-item">
//       <input
//         type="checkbox"
//         checked={item.isDone}
//         onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
//       />
//       <p
//         style={{
//           textTransform: "capitalize",
//           textDecoration: item.isDone && "line-through",
//         }}
//       >
//         {item.title}
//       </p>
//       <button
//         className="btn remove-btn"
//         type="button"
//         onClick={() => deleteTask(item.id)}
//         disabled={isDeleting || isEditing}
//       >
//         delete
//       </button>
//     </div>
//   );
// }

//--------------------------------- refactoring

import { useEditTask, useDeleteTask } from "./ReactQueyHooks";

export default function SingleItem({ item }) {
  const { editTask, isEditing } = useEditTask();
  const { deleteTask, isDeleting } = useDeleteTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() =>
          editTask({
            taskId: item.id,
            updatedDoneStatus: !item.isDone,
          })
        }
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={isEditing || isDeleting}
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
}
