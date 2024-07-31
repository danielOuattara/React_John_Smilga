import { useCallback } from "react";
import { z } from "zod";
import axios from "axios";

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

export default function useFetchZod(url: string) {
  const fetchToursZod = useCallback(async (): Promise<TypeTour[]> => {
    const response = await axios.get<TypeTour[]>(url);
    const result = tourSchema.array().safeParse(response.data);

    if (!result.success) {
      throw new Error("Parsing failed");
    }
    return result.data;
  }, [url]);

  return fetchToursZod;
}
