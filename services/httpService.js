import Axios from "axios";
import Config from "react-native-config";

Axios.defaults.baseURL = Config.REACT_APP_API_URL;
console.log(Config.REACT_APP_API_URL);

Axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
  }

  return Promise.reject(error);
});

const setJwt = (jwt) => {
  Axios.defaults.headers.common["Authorization"] = jwt;
};

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
  setJwt,
};
