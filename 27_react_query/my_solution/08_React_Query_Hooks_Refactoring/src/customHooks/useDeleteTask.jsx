import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customFetch } from "./../axios";
import { toast } from "react-toastify";

export default function useDeleteTask() {
  const queryClient = useQueryClient();
  const { mutate: deleteTask } = useMutation({
    mutationFn: (taskId) => customFetch.delete(`/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task successfully deleted");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { deleteTask };
}
