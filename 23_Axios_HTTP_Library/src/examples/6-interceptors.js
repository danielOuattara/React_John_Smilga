import { useEffect } from "react";
import authFetch from "../axios/interceptor";

// const url = 'https://course-api.com/react-store-products';

export default function Interceptors() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authFetch("/react-store-productsAA");
        console.log(response);
      } catch (error) {
        // console.log("error = ", error);
      }
    };
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
}
