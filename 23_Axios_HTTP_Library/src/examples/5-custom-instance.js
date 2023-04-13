import axios from "axios";
import { useEffect } from "react";
import authFetch from "../axios/custom";

const randomUserUrl = "https://randomuser.me/api";

export default function CustomInstance() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await authFetch("/react-store-products");
        console.log("response1 = ", response1);

        const response2 = await axios(randomUserUrl);
        console.log("response2 = ", response2);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
}
