type TypeListProps = {
  toggleTask: (id: number) => void;
  tasks: TypeTask[];
};

export default function List({ toggleTask, tasks }: TypeListProps) {
  return (
    <ul className="list">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p className="task-text">{task.description}</p>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTask(task.id)}
            />
          </li>
        );
      })}
    </ul>
  );
}
