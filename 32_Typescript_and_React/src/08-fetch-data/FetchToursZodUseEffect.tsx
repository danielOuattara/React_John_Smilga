import { useState, useEffect, useCallback } from "react";
import { z } from "zod";

type TypeProps = {
  url: string;
};

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  //...etc
});

// extract the inferred type
type TypeTour = z.infer<typeof tourSchema>;

export default function FetchZod({ url }: TypeProps) {
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

      const rawData: TypeTour[] = await response.json();
      const result = tourSchema.array().safeParse(rawData);
      if (!result.success) {
        throw new Error(`Invalid data: ${result.error}`);
      }
      setTours(() => result.data);
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
    <>
      <h2 className="mb-2">Tours Zod</h2>
      {tours.map((tour) => (
        <p key={tour.id} className="mb-1">
          {tour.name}
        </p>
      ))}
    </>
  );
}
