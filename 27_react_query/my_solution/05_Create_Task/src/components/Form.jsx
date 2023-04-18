import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customFetch } from "./../axios";
import { toast } from "react-toastify";

export default function Form() {
  const [newItemName, setNewItemName] = useState("");

  const queryClient = useQueryClient();

  const { isLoading, mutate: createTask } = useMutation({
    mutationFn: (newTaskTitle) =>
      customFetch.post("/", { title: newTaskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task added successfully !");
      setNewItemName("");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
}
