import { api } from '..';
import { clearAuthData, fakeApiResponse, saveRefreshToken, saveToken, setRefreshTimeout } from './utils';

const ENDPOINT = 'auth/login';
const METHOD = 'login()';

export async function loginByAxios({ email, password }) {
  const payload = {
    email,
    password,
  };
  try {
    clearAuthData();
    const res = process.env.REACT_APP_MULTIPASS ? fakeApiResponse() : await api?.axios?.post(ENDPOINT, payload);
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

export default loginByAxios;
