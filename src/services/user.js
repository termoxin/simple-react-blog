import axios from "axios";
import { API_URL } from "../contants";

export const getUser = username => {
  return axios.get(API_URL + username);
};
