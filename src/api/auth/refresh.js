import { api } from '..';
import { loadRefreshToken, saveRefreshToken, saveToken, setRefreshTimeout } from './utils';

const ENDPOINT = 'auth/refresh';
const METHOD = 'refresh()';

export async function refreshByAxios() {
  if (process.env.REACT_APP_MULTIPASS) return true; // Login bypath, development only

  const data = {
    refresh_token: loadRefreshToken(),
  };
  try {
    const res = await api.axios.post(ENDPOINT, data);
    const { data } = res;
    log.warn(`${METHOD} -`, data);

    saveToken(data?.access_token);
    saveRefreshToken(data?.refresh_token);
    setRefreshTimeout(data?.expires);
    log.warn(METHOD, '- token expires in', +data?.expires / 1000 / 60, 'minutes');

    return data;
  } catch (error) {
    log.error(`${METHOD} -`, error);
    api.auth.logout(); // Logout user and reload Application
  }
  return undefined;
}

export default refreshByAxios;
