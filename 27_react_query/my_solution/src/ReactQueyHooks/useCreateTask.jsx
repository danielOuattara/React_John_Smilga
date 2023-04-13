import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./../axios/util";
import { toast } from "react-toastify";

export default function useCreateTask(taskTitle) {
  const queryClient = useQueryClient();

  const {
    mutate: createTask,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: () => customFetch.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task successfully added");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  return { createTask, isLoading, isError };
}
