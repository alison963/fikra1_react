/*
using api.get or api.post token will be send automatically in the header, Example -> bookmarkApi.ts
*/

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8082",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;