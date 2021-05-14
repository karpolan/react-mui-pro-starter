import { api } from '..';

const ENDPOINT = 'auth/recovery';
const METHOD = 'recovery()';

export async function recoverByAxios({ email }) {
  // if (process.env.REACT_APP_MULTIPASS) return true; // Login bypath, development only

  const payload = {
    email,
  };
  try {
    const res = await api.axios.post(ENDPOINT, payload);
    const { data } = res;
    log.warn(`${METHOD} -`, data);
    return true;
  } catch (error) {
    log.error(`${METHOD} -`, error);
  }
  return undefined;
}

export default recoverByAxios;
