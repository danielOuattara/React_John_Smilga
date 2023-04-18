import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customFetch } from "./../axios";
import { toast } from "react-toastify";

export default function useEditTask() {
  const queryClient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, updatedTaskStatus }) =>
      customFetch.patch(`/${taskId}`, {
        id: taskId,
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
  return { editTask };
}
