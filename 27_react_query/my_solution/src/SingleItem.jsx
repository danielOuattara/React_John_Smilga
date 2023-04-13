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

//---------------------------------------------------------------

/* Edit task:  refactoring 
-----------------------------*/

import { useEditTask, useDeleteTask } from "./ReactQueyHooks";

export default function SingleItem({ item }) {
  const { editTask } = useEditTask();
  const { deleteTask, isLoading } = useDeleteTask();

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
        disabled={isLoading}
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
}
