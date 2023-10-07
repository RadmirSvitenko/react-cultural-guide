import axios from "axios";

export const API_CULTURAL_GUIDE = axios.create({
  baseURL: "http://64.227.134.242:5001/",
});
