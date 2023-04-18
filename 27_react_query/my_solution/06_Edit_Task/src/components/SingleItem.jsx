import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customFetch } from "./../axios";
import { toast } from "react-toastify";

export default function SingleItem({ item }) {
  //
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, updatedTaskStatus }) =>
      customFetch.patch(`/${taskId}`, {
        isDone: updatedTaskStatus,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task successfully edited");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

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
        onClick={() => console.log("delete task")}
      >
        delete
      </button>
    </div>
  );
}
