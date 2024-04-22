import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./../axios/util";
import { toast } from "react-toastify";

export default function useDeleteTask() {
  const queryClient = useQueryClient();

  //---------------------------------------------------
  const { mutate: deleteTask, isPending: isDeleting } = useMutation({
    mutationFn: (taskId) => {
      return customFetch.delete(`/${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task successfully deleted");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  return { deleteTask, isDeleting };
}
