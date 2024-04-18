import { useEffect } from "react";
import axios from "axios";

// limit, if 429 wait for 15 min and try again
const url = "https://www.course-api.com/react-store-products";

export default function FirstRequest() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log("response = ", response);
        console.log("response.data = ", response.data);
      } catch (error) {
        console.log("error = ", error);
        console.log("error.response = ", error.response);
        console.log(error.message);
      }
    };
    console.log("first axios request");

    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
}
