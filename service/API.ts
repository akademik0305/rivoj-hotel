import axios, { type AxiosInstance } from "axios";


const createAxiosInstance = (): AxiosInstance => {
  // const config = useRuntimeConfig();
  // const baseUrl = config.public.apiBaseUrl;

  return axios.create({
    baseURL: 'http://localhost:8080/api'
  });
};

export default createAxiosInstance;
