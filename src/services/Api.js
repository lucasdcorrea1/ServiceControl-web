import axios from "axios";
import { getToken } from "./Auth";
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

const api = axios.create({
  // baseURL: "https://datatongji-backend.herokuapp.com"
  baseURL: env.REACT_APP_API
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default api;