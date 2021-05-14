// import { api } from '..';
import { clearAuthData } from './utils';

// const ENDPOINT = 'auth/logout';
const METHOD = 'logout()';

export async function logoutByAxios() {
  // const data = {
  //   refresh_token: loadRefreshToken(),
  // };
  try {
    // const res = process.env.REACT_APP_MULTIPASS ? fakeApiResponse() : await api?.axios?.post(ENDPOINT, data);
    // const { data } = res;
    // log.warn(`${METHOD} -`, data);
  } catch (error) {
    log.error(`${METHOD} -`, error);
  } finally {
    clearAuthData();
    window.location.href = '/'; // Reload Application
  }
  return undefined;
}

export default logoutByAxios;
