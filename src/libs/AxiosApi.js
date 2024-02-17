import axios from "axios";
import CONFIG from "../config/config.json";

export const AxiosApi = axios.create({
  baseURL: `${CONFIG.proxy}`,
  headers: {
    "Content-Type": "application/json",
  },
});
