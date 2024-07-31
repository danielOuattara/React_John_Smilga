class TaskManager {
  private tasks: TypeTask[] = [];
  private taskUlElement: HTMLUListElement;
  private formInput: HTMLInputElement;
  private taskForm: HTMLFormElement;
  private clearTasksBtn: HTMLButtonElement;

  constructor() {
    this.taskUlElement = document.querySelector<HTMLUListElement>(".list")!;
    this.formInput = document.querySelector<HTMLInputElement>(".form-input")!;
    this.taskForm = document.querySelector<HTMLFormElement>(".form")!;
    this.clearTasksBtn =
      document.querySelector<HTMLButtonElement>(".clear-tasks")!;

    this.loadTasks();
    this.tasks.forEach((task) => this.renderTask(task));
    this.addEventListeners();
  }

  private loadTasks(): void {
    try {
      const storedTasks = localStorage.getItem("tasks-v2");
      this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error("Error loading tasks from local storage: ", error);
      this.tasks = [];
    }
  }

  private updateLocalStorage(): void {
    try {
      localStorage.setItem("tasks-v2", JSON.stringify(this.tasks));
    } catch (error) {
      console.error("Error saving tasks to local storage: ", error);
    }
  }

  private clearLocalStorage(): void {
    try {
      localStorage.removeItem("tasks-v2");
    } catch (error) {
      console.error("Error clearing tasks in local storage: ", error);
    }
  }

  private addTask(task: TypeTask): void {
    this.tasks.push(task);
    this.updateLocalStorage();
    this.renderTask(task);
  }

  private renderTask(task: TypeTask): void {
    const taskLiElement = document.createElement("li");

    // Task label
    const taskLabelElement = document.createElement("p");
    taskLabelElement.classList.add("task-label");
    taskLabelElement.textContent = task.label;
    if (task.isCompleted) {
      taskLabelElement.classList.add("task-completed");
    }

    // Task checkbox
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.checked = task.isCompleted;

    // On toggle check
    taskCheckbox.addEventListener("change", () => {
      task.isCompleted = !task.isCompleted;
      this.updateLocalStorage();
      taskLabelElement.classList.toggle("task-completed", task.isCompleted);
    });

    // Delete task button
    const taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.type = "button";
    taskDeleteBtn.classList.add("delete-task-btn");
    taskDeleteBtn.textContent = "X";

    // On delete task
    taskDeleteBtn.addEventListener("click", () => {
      this.taskUlElement.removeChild(taskLiElement);
      this.tasks = this.tasks.filter((t) => t !== task);
      this.updateLocalStorage();
    });

    taskLiElement.appendChild(taskCheckbox);
    taskLiElement.appendChild(taskLabelElement);
    taskLiElement.appendChild(taskDeleteBtn);
    this.taskUlElement.appendChild(taskLiElement);
  }

  private addEventListeners(): void {
    this.taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const taskLabel = this.formInput.value.trim();
      if (taskLabel) {
        const task: TypeTask = { label: taskLabel, isCompleted: false };
        this.addTask(task);
        this.formInput.value = "";
      } else {
        alert("Please enter a task description");
      }
    });

    this.clearTasksBtn.addEventListener("click", () => {
      this.clearLocalStorage();
      this.tasks = [];
      this.taskUlElement.innerHTML = "";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new TaskManager();
});
