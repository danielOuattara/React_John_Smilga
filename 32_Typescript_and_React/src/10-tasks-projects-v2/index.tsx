import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import { produce } from "immer";

useState;

function Component() {
  //
  //----- Load tasks from localStorage
  function loadTasks(): TypeTask[] {
    const storedTasks = localStorage.getItem("tasks-v2");
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  function updateLocalStorage(): void {
    try {
      localStorage.setItem("tasks-v2", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to local storage: ", error);
    }
  }

  const [tasks, setTasks] = useState<TypeTask[]>(() => loadTasks());

  const addTask = (task: TypeTask) => {
    setTasks(() => [...tasks, task]);
    updateLocalStorage();
  };

  function clearLocalStorage(): void {
    try {
      localStorage.removeItem("tasks-v1");
    } catch (error) {
      console.error("Error clearing tasks in local storage: ", error);
    }
  }

  // function deleteTask(id: number) {
  //   const taskIdToRemove = tasks.findIndex((task) => task.id === id);
  //   const updatedTasks = [...tasks];
  //   updatedTasks.splice(taskIdToRemove, 1);
  //   setTasks(() => updatedTasks);
  //   updateLocalStorage();
  // }

  function deleteTask(id: number) {
    setTasks(
      produce(tasks, (draft: TypeTask[]) => {
        const taskIdToRemove = draft.findIndex((task) => task.id === id);
        if (taskIdToRemove !== -1) {
          draft.splice(taskIdToRemove, 1);
        }
      }),
    );
    updateLocalStorage();
  }

  function deleteAllTasks() {
    setTasks(() => []);
    clearLocalStorage();
  }

  const toggleTask = (id: number, element: HTMLParagraphElement) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
        if (task.isCompleted) {
          element.classList.add("task-completed");
        }
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
      <List toggleTask={toggleTask} tasks={tasks} deleteTask={deleteTask} />
      <button type="button" onClick={deleteAllTasks}>
        Clear all tasks
      </button>
    </section>
  );
}
export default Component;
