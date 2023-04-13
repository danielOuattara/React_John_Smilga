import { useQuery } from "@tanstack/react-query";
import customFetch from "./../axios/util";

export default function useGetTasks() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
  return { data, isLoading, error, isError };
}
