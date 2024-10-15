import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

export default axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  // withCredentials: true,
});
