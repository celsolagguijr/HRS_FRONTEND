import API from "./API_URL";
import axios from "axios";

export default {
  Authenticate: async (form, config) =>
    await axios.post(`${API}user/signin`, form, config),
  SignUp: async form => await axios.post(`${API}user/signup`, form),
  Show: async () => await axios.get(`${API}user`)
};
