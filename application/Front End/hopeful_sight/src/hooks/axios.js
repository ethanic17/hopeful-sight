import axios from "axios";

const baseUrl = "http://54.183.85.198";

export default axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  // withCredentials: true,
});
