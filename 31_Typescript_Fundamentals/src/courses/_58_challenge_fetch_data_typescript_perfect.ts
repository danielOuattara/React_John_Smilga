export {};
/*------ challenge fetch data: type specified correctly ------

setup type and provide correct return type 

*/

interface ITour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  //...etc
}

const url = "https://www.course-api.com/react-tours-project";

async function fetchData(url: string): Promise<ITour[]> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
    }

    const data: ITour[] = await res.json();
    return data;
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
