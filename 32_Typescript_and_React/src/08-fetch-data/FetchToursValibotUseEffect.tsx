import { useState, useEffect, useCallback } from "react";
import { array, object, Output, parse, string } from "valibot";

type TypeProps = {
  url: string;
};
const tourSchema = object({
  id: string(),
  name: string(),
  info: string(),
  image: string(),
  price: string(),
  //...etc
});

// extract the inferred type
type TypeTour = Output<typeof tourSchema>;

export default function FetchValibot({ url }: TypeProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [tours, setTours] = useState<TypeTour[]>([]);

  const fetchTours = useCallback(async (): Promise<void | undefined> => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch tours...`);
      }

      const rawData: unknown = await response.json();
      const result = parse(array(tourSchema), rawData);

      setTours(() => result);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "there was an error...";
      setIsError(message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error: {isError}</h3>;
  }

  return (
    <div>
      <h2 className="mb-2">Tours Valibot</h2>
      {tours.map((tour) => (
        <p key={tour.id} className="mb-1">
          {tour.name}
        </p>
      ))}
    </div>
  );
}
