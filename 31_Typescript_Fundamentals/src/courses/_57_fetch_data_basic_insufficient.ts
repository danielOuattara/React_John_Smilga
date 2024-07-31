export {};
/*------ fetch data basics: insufficient type ------

- typically axios OR React Query OR both
- we won't set any state values

*/

const url = "https://www.course-api.com/react-tours-project";

async function fetchData(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: 
      ${res.status} 
      ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : "there was an error...";
    console.error(errMsg);
    // throw error;
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour: any) => {
  console.log(tour.name);
});
