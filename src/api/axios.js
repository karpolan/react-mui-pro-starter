import axios from 'axios';
import api from '.';
import { localStorageGet } from '../utils/localStorage';

/**
 * Pre-configured instance of Axios
 */
const axiosInstance = axios.create({
  // Use Local storage to override API base path
  baseURL: `${localStorageGet('REACT_APP_API_URL') || process.env.REACT_APP_API_URL}/`,
});

/**
 * Interceptor to automatically logout current user if any API call returns 401
 */
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (Number(err?.response?.status) === 401) {
      // Token expired, or hacked
      api?.auth?.logout(); // Logout user and reload Application
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
