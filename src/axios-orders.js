import axios from "axios";

const instance = axios.create({
  baseURL: "https://viapool.com",
});

export default instance;
