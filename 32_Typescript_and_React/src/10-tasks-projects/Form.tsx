import { useState } from "react";

type TypeFormProps = {
  addTask: (task: TypeTask) => void;
};

export default function Form({ addTask }: TypeFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter a task description");
    }
    addTask({
      id: new Date().getTime(),
      description: name,
      isCompleted: false,
    });

    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="form task-form">
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="btn">
        Add Task
      </button>
    </form>
  );
}
