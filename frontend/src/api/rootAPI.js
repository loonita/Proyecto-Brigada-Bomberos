import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3010/api", // Reemplaza esto con la URL base de tu servidor
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers["token"] = token;
  return config;
});

export default api;
