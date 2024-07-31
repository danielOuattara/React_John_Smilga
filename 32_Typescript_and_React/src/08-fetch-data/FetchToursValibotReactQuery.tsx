import useFetchZod from "./useFetchZod";
import { useQuery } from "@tanstack/react-query";

export default function FetchToursValibotReactQuerry({ url }: { url: string }) {
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
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error {error.message}</h3>;
  }

  return (
    <div>
      <h2 className="mb-2">Tours FetchToursValibotReactQuerry</h2>
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
