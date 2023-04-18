import { useQuery } from "@tanstack/react-query";
import { customFetch } from "./../axios";

export default function useFetchTasks() {
  const { data, failureReason, isLoading, error, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });

  return { data, failureReason, isLoading, error, isError };
}
