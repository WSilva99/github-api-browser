import axios from "axios";

// Create axios api with BaseURL = "https://api.github.com/"
const api = axios.create({
  baseURL: "https://api.github.com/",
});

export default api;