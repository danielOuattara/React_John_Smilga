import { useCallback } from "react";
import { array, object, Output, parse, string } from "valibot";
import axios from "axios";

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

export default function useFetchValibot(url: string) {
  const fetchToursValibot = useCallback(async (): Promise<TypeTour[]> => {
    const response = await axios.get<TypeTour[]>(url);
    const result = parse(array(tourSchema), response.data);
    return result;
  }, [url]);

  return fetchToursValibot;
}
