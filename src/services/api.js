import axios from "axios";

const api = axios.create({
  baseURL: "https://5f184aca7c06c900160dcd19.mockapi.io/api/v1/catalog",
});

export default api;
