import { useEditTask, useDeleteTask } from "./../customHooks";

export default function SingleItem({ item }) {
  const { editTask } = useEditTask();
  const { deleteTask } = useDeleteTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() =>
          editTask({ taskId: item.id, updatedTaskStatus: !item.isDone })
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
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
}
