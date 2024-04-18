import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
});

authFetch.interceptors.request.use(
  (request) => {
    console.log("request = ", request);
    request.headers["Accept"] = "application/json";
    console.log("request = ", request);
    console.log(" Request Sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

authFetch.interceptors.response.use(
  (response) => {
    console.log("Got response");
    return response;
  },
  (error) => {
    // console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log("Not Found");
    }
    return Promise.reject(error);
  },
);

export default authFetch;
