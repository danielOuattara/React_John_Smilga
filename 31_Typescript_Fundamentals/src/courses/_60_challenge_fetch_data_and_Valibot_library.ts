export {};

/*------ challenge: fetching data and use Valibot library------

Helps on types, also on `runtime`

*/

import { array, object, Output, parse, string } from "valibot"; // 1.54 kB

const url = "https://www.course-api.com/react-tours-project";

const tourSchema = object({
  id: string(),
  name: string(),
  info: string(),
  image: string(),
  price: string(),
  //...etc
  country: string(), // for testing !
});

// extract the inferred type
type TypeTour = Output<typeof tourSchema>;

async function fetchData(url: string): Promise<TypeTour[]> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: 
      ${res.status} 
      ${res.statusText}`);
    }

    const rawData: unknown = await res.json();
    const result = parse(array(tourSchema), rawData);
    return result;
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
