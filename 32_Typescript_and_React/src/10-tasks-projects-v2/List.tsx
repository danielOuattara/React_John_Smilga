type TypeListProps = {
  tasks: TypeTask[];
  toggleTask: (id: number, element: HTMLParagraphElement) => void;
  deleteTask: (id: number) => void;
};

export default function List({ tasks, toggleTask, deleteTask }: TypeListProps) {
  return (
    <ul className="list">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={(e) => {
                const taskLabel = e.target.parentNode!
                  .children[1] as HTMLParagraphElement;
                toggleTask(task.id, taskLabel);
              }}
            />
            <p
              className={`task-text ${
                task.isCompleted ? "task-completed" : ""
              } `}
            >
              {task.description}
            </p>
            <button type="button" onClick={() => deleteTask(task.id)}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}
