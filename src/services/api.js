import axios from "axios";

export function setToken(token) {
  token
    ? (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`)
    : delete axios.defaults.headers.common["Authorization"];
}

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response.data.error));
  });
}
