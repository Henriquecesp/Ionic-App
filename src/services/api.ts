import axios from "axios";

const api = axios.create({
  baseURL: "https://minha-api-rest.herokuapp.com/api"
});

export default api;
