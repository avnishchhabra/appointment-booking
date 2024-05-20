import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://app.appointo.me/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
