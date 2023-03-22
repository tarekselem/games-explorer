import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f9e162d1b7a448a3b4116386a2add570",
  },
  headers: {
    "Content-Type": "application/json",
  },
});
