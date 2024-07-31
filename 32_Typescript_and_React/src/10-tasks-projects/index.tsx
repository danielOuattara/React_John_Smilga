import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

useState;

function Component() {
  //----- Load tasks from localStorage
  function loadTasks(): TypeTask[] {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  const [tasks, setTasks] = useState<TypeTask[]>(() => loadTasks());

  function updateLocalStorage(): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  const addTask = (task: TypeTask) => {
    setTasks(() => [...tasks, task]);
    updateLocalStorage();
  };

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
        return task;
      }
      return task;
    });

    setTasks(() => updatedTasks);
    updateLocalStorage();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    updateLocalStorage();
  }, [tasks]);

  return (
    <section>
      <h2>Task List Project</h2>
      <Form addTask={addTask} />
      <List toggleTask={toggleTask} tasks={tasks} />
    </section>
  );
}
export default Component;
