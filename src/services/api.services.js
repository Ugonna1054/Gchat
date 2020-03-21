import axios from "axios";

//https://matrixx-server.herokuapp.com/api
//http://localhost:4000/api

const baseUrl = "http://localhost:5000/api";
axios.defaults.baseURL = baseUrl;

const ApiService = {
  getBaseUrl() {
    return baseUrl;
  },
  setHeader(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  removeHeader() {
    axios.defaults.headers.common = {};
  },
  get(resource) {
    return axios.get(resource);
  },
  post(resource, data) {
    return axios.post(resource, data);
  },
  put(resource, data) {
    return axios.put(resource, data);
  },
  delete(resource) {
    return axios.delete(resource);
  },

  customRequest(data) {
    return axios(data);
  }
};

export { ApiService };
