// import SingleItem from "./SingleItem";

// export default function Items({ items }) {
//   return (
//     <div className="items">
//       {items.map((item) => {
//         return <SingleItem key={item.id} item={item} />;
//       })}
//     </div>
//   );
// }

//---------------------------------------------------------------

/* using react-query 
----------------------*/

// import SingleItem from "./SingleItem";
// import { useQuery } from "@tanstack/react-query";
// import customFetch from "./axios/util";

// export default function Items() {
//   const queryResponse = useQuery({
//     queryKey: ["tasks"],
//     queryFn: () => customFetch.get("/"),
//   });

//   if (queryResponse.isLoading) {
//     return <h1>Loading...</h1>;
//   }
//   return (
//     <div className="items">
//       {queryResponse.data.data.taskList.map((item) => {
//         return <SingleItem key={item.id} item={item} />;
//       })}
//     </div>
//   );
// }

/* using react-query 
----------------------*/

// import SingleItem from "./SingleItem";
// import { useQuery } from "@tanstack/react-query";
// import customFetch from "./axios/util";

// export default function Items() {
//   const queryResponse = useQuery({
//     queryKey: ["tasks"],
//     queryFn: async () => {
//       const { data } = await customFetch.get("/");
//       return data;
//     },
//   });

//   if (queryResponse.isLoading) {
//     return <h1>Loading...</h1>;
//   }
//   return (
//     <div className="items">
//       {queryResponse.data.taskList.map((item) => {
//         return <SingleItem key={item.id} item={item} />;
//       })}
//     </div>
//   );
// }

/* using react-query: destructuring query response 
---------------------------------------------------*/

// import SingleItem from "./SingleItem";
// import { isError, useQuery } from "@tanstack/react-query";
// import customFetch from "./axios/util";

// export default function Items() {
//   const { data, isLoading } = useQuery({
//     queryKey: ["tasks"],
//     queryFn: async () => {
//       const { data } = await customFetch.get("/");
//       return data;
//     },
//   });

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }
//   return (
//     <div className="items">
//       {data.taskList.map((item) => {
//         return <SingleItem key={item.id} item={item} />;
//       })}
//     </div>
//   );
// }

/* using react-query: error handling 
-------------------------------------*/

// import SingleItem from "./SingleItem";
// import { useQuery } from "@tanstack/react-query";
// import customFetch from "./axios/util";

// export default function Items() {
//   const { data, isLoading, error, isError } = useQuery({
//     queryKey: ["tasks"],
//     queryFn: async () => {
//       const { data } = await customFetch.get("/");
//       return data;
//     },
//   });

//   if (isLoading) {
//     return <p style={{ marginTop: "2rem" }}>Loading...</p>;
//   }

//   if (isError) {
//     return (
//       <>
//         <p style={{ marginTop: "2rem" }}>{error.message}</p>
//         <p style={{ marginTop: "1rem" }}>{error.response.data}</p>
//       </>
//     );
//   }

//   return (
//     <div className="items">
//       {data.taskList.map((item) => {
//         return <SingleItem key={item.id} item={item} />;
//       })}
//     </div>
//   );
// }

/* using react-query: refactoring
-------------------------------------*/

import SingleItem from "./SingleItem";
import { useGetTasks } from "./ReactQueyHooks";

export default function Items() {
  const { data, isLoading, error, isError } = useGetTasks();

  if (isLoading) {
    return <p style={{ marginTop: "2rem" }}>Loading...</p>;
  }

  if (isError) {
    return (
      <>
        <p style={{ marginTop: "2rem" }}>{error.message}</p>
        <p style={{ marginTop: "1rem" }}>{error.response.data}</p>
      </>
    );
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
}
