import axios from "axios";

export const REACT_URL = axios.create({
  baseURL: "http://localhost:5000/api",
});