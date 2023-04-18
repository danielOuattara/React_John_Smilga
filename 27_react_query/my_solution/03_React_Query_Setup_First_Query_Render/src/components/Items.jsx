// import { useQuery } from "@tanstack/react-query";
// import { SingleItem } from "./../components";
// import { customFetch } from "./../axios";

// export default function Items({ items }) {
//   const queryResponse = useQuery({
//     queryKey: ["tasks"],
//     queryFn: () => customFetch.get("/"),
//   });

//   if (queryResponse.isLoading) {
//     return <p style={{ marginTop: "2rem" }}>Loading...</p>;
//   }
//   return (
//     <div className="items">
//       {queryResponse.data.data.taskList.map((item) => {
//         return <SingleItem key={item.id} item={item} />;
//       })}
//     </div>
//   );
// }

//--------------------------------------------------------
/* destructuring 
----------------- */

// import { useQuery } from "@tanstack/react-query";
// import { SingleItem } from "./../components";
// import { customFetch } from "./../axios";

// export default function Items() {
//   const queryResponse = useQuery({
//     queryKey: ["tasks"],
//     queryFn: async () => {
//       const { data } = await customFetch.get("/");
//       return data;
//     },
//   });

//   if (queryResponse.isLoading) {
//     return <p style={{ marginTop: "2rem" }}>Loading...</p>;
//   }
//   return (
//     <div className="items">
//       {queryResponse.data.taskList.map((item) => {
//         return <SingleItem key={item.id} item={item} />;
//       })}
//     </div>
//   );
// }

//---------------------------------------------------------

import { useQuery } from "@tanstack/react-query";
import { SingleItem } from "./../components";
import { customFetch } from "./../axios";

export default function Items() {
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });

  if (isLoading) {
    return <p style={{ marginTop: "2rem" }}>Loading...</p>;
  }
  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
}
