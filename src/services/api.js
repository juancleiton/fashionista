import axios from "axios";

const api = axios.create({
  baseURL: "https://ifpb.github.io/challenges/web/front-end/js/amaro/code-response/data/products.json",
});

export default api;
