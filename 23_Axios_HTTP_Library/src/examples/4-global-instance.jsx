import { useEffect } from "react";
import axios from "axios";
const productsUrl = "https://www.course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

export default function GlobalInstance() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios(productsUrl);
        console.log("response1 = ", response1);
        const response2 = await axios(randomUserUrl);
        console.log("response2 = ", response2);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
}

/* IMPORTANT: global defaults have been set in src/axios/global file
              then imported in App.js */
