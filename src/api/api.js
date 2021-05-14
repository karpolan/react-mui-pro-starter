import axiosInstance from './axios';
// import firebaseInstance from './firebase';
import { loadToken } from './auth/utils';
import * as auth from './auth';
import * as info from './info';

const api = {
  // Pre-configured HTTP request instances
  axios: axiosInstance,
  // firebase: firebaseInstance, // use FireBase if needed
  // fetch: fetch, // use custom fetch is needed

  // Properties
  token: () => loadToken(),
  get url() {
    return axiosInstance?.defaults?.baseURL;
  },

  // API "modules"
  auth,
  info,
};

export default api;
