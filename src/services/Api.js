import axios from "axios";
import { getToken } from "./Auth";

const api = axios.create({
  baseURL: process.env.REACT_APP_API
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default api;