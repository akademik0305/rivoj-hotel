import axios, { type AxiosInstance } from "axios";


const createAxiosInstance = (): AxiosInstance => {
  // const config = useRuntimeConfig();
  const baseUrl = "https://api.rivoj98shop.uz/api";

  return axios.create({
    baseURL: baseUrl
  });
};

export default createAxiosInstance;
