import { api } from '..';
import { clearAuthData, saveRefreshToken, saveToken, setRefreshTimeout } from './utils';

const ENDPOINT = 'auth/signup';
const METHOD = 'signup()';

/**
 * Sign ups new user using email and password
 */
export async function signupByAxios({ nameFirst, nameLast, phone, email, password }) {
  if (process.env.REACT_APP_MULTIPASS) return true; // Login bypath, development only

  const data = { nameFirst, nameLast, phone, email, password };
  try {
    clearAuthData();
    const res = await api?.axios?.post(ENDPOINT, data);
    const { data } = res;
    log.warn(`${METHOD} -`, data);

    saveToken(data?.access_token);
    saveRefreshToken(data?.refresh_token);
    setRefreshTimeout(data?.expires);
    log.warn(METHOD, '- token expires in', +data?.expires / 1000 / 60, 'minutes');

    return data;
  } catch (error) {
    log.error(`${METHOD} -`, error);
  }
  return undefined;
}

export default signupByAxios;
