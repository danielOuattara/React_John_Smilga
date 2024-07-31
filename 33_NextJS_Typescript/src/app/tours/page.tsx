import Link from "next/link";

const url = "https://www.course-api.com/react-tours-project";

// export default async function ToursPage() {
//   const response = await fetch(url);
//   const data: Tour[] = await response.json();
//   console.log(data);
//   return (
//     <section>
//       <h1 className="text-3xl mb-4">Tours</h1>
//       {data.map((tour) => {
//         return <h2 key={tour.id}>{tour.name}</h2>;
//       })}
//     </section>
//   );
// }

//------------------------------------------------------------

// const fetchTours = async (url: string): Promise<Tour[] | null> => {
//   await new Promise((resolve) => setTimeout(resolve, 1000)); // dev goal !
//   const response = await fetch(url);
//   const tours: Tour[] = await response.json();
//   return tours;
// };

// export default async function ToursPage() {
//   const tours = await fetchTours(url);
//   return (
//     <section>
//       <h1 className="text-3xl mb-4">Tours</h1>
//       {tours ? (
//         tours.map((tour) => {
//           return <h2 key={tour.id}>{tour.name}</h2>;
//         })
//       ) : (
//         <h2>No Tours Found</h2>
//       )}
//     </section>
//   );
// }

//-------------------------------------------------------------

const fetchTours = async (url: string): Promise<Tour[] | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // dev goal !
  const response = await fetch(url);
  const tours: Tour[] = await response.json();
  return tours;
};

export default async function ToursPage() {
  const tours = await fetchTours(url);
  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      {tours ? (
        tours.map((tour) => {
          return (
            <Link
              key={tour.tourId}
              href={`/tours/${tour.tourId}`}
              className="hover:text-blue-500"
            >
              <h2 className="m-2">{tour.name}</h2>
            </Link>
          );
        })
      ) : (
        <h2>No Tours Found</h2>
      )}
    </section>
  );
}
