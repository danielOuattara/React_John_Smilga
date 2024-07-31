import useFetchZod from "./useFetchZod";
import { useQuery } from "@tanstack/react-query";

export default function FetchToursZodReactQuery({ url }: { url: string }) {
  const fetchToursZod = useFetchZod(url);

  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchToursZod,
  });

  if (isPending) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error {error.message}</h2>;
  }

  return (
    <div>
      <h2 className="mb-2">Tours FetchToursZodReactQuery</h2>
      {tours.map((tour) => {
        return (
          <p key={tour.id} className="mb-1">
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}
