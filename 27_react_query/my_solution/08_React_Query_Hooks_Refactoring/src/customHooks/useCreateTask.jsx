import { useQueryClient, useMutation } from "@tanstack/react-query";
import { customFetch } from "./../axios";
import { toast } from "react-toastify";

export default function useCreateTask() {
  const queryCLient = useQueryClient();

  const { isLoading, mutate: createTask } = useMutation({
    mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task added successfully !");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  return { isLoading, createTask };
}
