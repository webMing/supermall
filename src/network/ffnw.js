/**
 * ffnw: Feng Fan NetWork
 */

import axios from "axios";
/**GET  */
function get(
  para,
  handRequestConfig,
  handRequestError,
  handResponseContent,
  handResponseError
) {
  const ax = axios.create({
    baseURL: "http://123.207.32.32:8000",
    method: "GET",
    timeout: 3000
  });
  ax.interceptors.request.use(
    config => {
      if (handRequestConfig) handRequestConfig(config);
      return config;
    },
    error => {
      if (handRequestError) handRequestError(error);
      return Promise.reject(error);
    }
  );
  ax.interceptors.response.use(
    response => {
      if (handResponseContent) handResponseContent(response);
      return response;
    },
    error => {
      if (handResponseError) handResponseError(error);
      return Promise.reject(error);
    }
  );
  return ax(para);
}
/**POST */
export function post(para) {
  const ax = axios.create({
    baseURL: "http://123.207.32.32:8000",
    method: "POST",
    timeout: 3000
  });
  return ax({ data: para });
}

const ffnw = {
  get,
  post
};
export default ffnw;
