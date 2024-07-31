export {};
/*------ challenge: fetching data and use Zod library------

Helps on types, also on `runtime`

*/

import { z } from "zod";

const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  //...etc
  // country: z.string(), // for testing !
});

// extract the inferred type
type TypeTour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<TypeTour[]> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: 
      ${res.status} 
      ${res.statusText}`);
    }
    const rawData: TypeTour[] = await res.json();
    const result = tourSchema.array().safeParse(rawData);

    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }

    return result.data;
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : "there was an error...";
    console.error(errMsg);
    // throw error;
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
});
