import axios from "axios";
import queryString from "query-string";

const baseURL = "https://5f55a98f39221c00167fb11a.mockapi.io";
const request = axios.create({
  baseURL: baseURL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify(params, { skipEmptyString: true }),
});

request.interceptors.request.use(async (config) => {
  return config;
});

request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    if (response && response.data) {
      return response.data;
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // console.log("ERROR", error.response);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response);
  }
);

export default request;
