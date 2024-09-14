// import { API_URL } from "@/lib/config";
// import axios from "axios";

// export const API = axios.create({
//   baseURL: API_URL,
// });

import { API_URL } from "@/lib/config";
import axios from "axios";
// import cookies from "js-cookie";

export const API = axios.create({
  baseURL: API_URL,
});

// Inject Token
API.interceptors.request.use(
  (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicm9sZSI6NCwiaWF0IjoxNzI2MzE2NjIzfQ.1LPs7iBZmo2ot1PQiHDOaCAXorHbHwjMbK8OeSor2Vw";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
