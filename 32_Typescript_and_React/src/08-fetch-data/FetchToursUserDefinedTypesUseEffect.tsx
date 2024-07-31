import { useState, useEffect, useCallback } from "react";

interface ITour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  //...etc
}

type TypeProps = {
  url: string;
};

export default function FetchUserDefinedTypes({ url }: TypeProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [tours, setTours] = useState<ITour[]>([]);

  const fetchTours = useCallback(async (): Promise<void | undefined> => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch tours...`);
      }

      const rawData: ITour[] = await response.json();
      setTours(() => rawData);
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
      <h2 className="mb-2">Tours User Defined Types</h2>
      {tours.map((tour) => (
        <p key={tour.id} className="mb-1">
          {tour.name}
        </p>
      ))}
    </div>
  );
}
