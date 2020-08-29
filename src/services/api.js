import axios from "axios";

const api = axios.create({
  baseURL: "https://raw.githubusercontent.com/amarofashion/front-end-challenge/master/products.json",
});

export default api;
