import axios from "axios";
import { API_URL } from "./consts";

export const fetchWeather = async() => {
  const result = await axios.get(API_URL);
  return result.data;
};
