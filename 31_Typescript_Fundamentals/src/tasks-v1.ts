//----- select existing DOM elements
const taskForm = document.querySelector<HTMLFormElement>(".form")!;
const formInput = document.querySelector<HTMLInputElement>(".form-input")!;
const taskUlElement = document.querySelector<HTMLUListElement>(".list")!;
const clearTasksBtn =
  document.querySelector<HTMLButtonElement>(".clear-tasks")!;

//----- Load tasks from localStorage
function loadTasks(): TypeTask[] {
  try {
    const storedTasks = localStorage.getItem("tasks-v1");
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.error("Error loading tasks from local storage: ", error);
    return [];
  }
}

//-----
let tasks: TypeTask[] = loadTasks();

//----- add a new task
function addToTasks(task: TypeTask): void {
  tasks.push(task);
}

//-----
function updateLocalStorage(): void {
  try {
    localStorage.setItem("tasks-v1", JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks to local storage: ", error);
  }
}

function clearLocalStorage(): void {
  try {
    localStorage.removeItem("tasks-v1");
  } catch (error) {
    console.error("Error clearing tasks in local storage: ", error);
  }
}

//-----
function renderTask(task: TypeTask): void {
  const taskLiElement = document.createElement("li");

  // task label
  const taskLabelElement = document.createElement("p");
  taskLabelElement.classList.add("task-label");
  taskLabelElement.textContent = task.label;

  // initial render
  if (task.isCompleted) {
    taskLabelElement.classList.add("task-completed");
  }

  // task checkbox
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;

  // on toggle check
  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateLocalStorage();
    taskLabelElement.classList.toggle("task-completed", task.isCompleted);
  });

  // delete task button
  const taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.type = "button";
  taskDeleteBtn.classList.add("delete-task-btn");
  taskDeleteBtn.textContent = "X";

  // on delete task
  taskDeleteBtn.addEventListener("click", () => {
    taskUlElement.removeChild(taskLiElement);
    // remove task from tasks array and update local storage
    tasks = tasks.filter((t) => t !== task);
    updateLocalStorage();
  });

  taskLiElement.appendChild(taskLabelElement);
  taskLiElement.appendChild(taskCheckbox);
  taskLiElement.appendChild(taskDeleteBtn);
  taskUlElement.appendChild(taskLiElement);
}

//-----
tasks.forEach(renderTask);

//-----
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskLabel = formInput.value.trim();
  if (taskLabel) {
    const task = { label: taskLabel, isCompleted: false };
    // add task to list
    addToTasks(task);

    // render tasks
    renderTask(task);

    // update local storage
    updateLocalStorage();

    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});

// clear all tasks
clearTasksBtn.addEventListener("click", () => {
  clearLocalStorage();
  tasks = [];
  taskUlElement.innerHTML = "";
});
