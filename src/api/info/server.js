import { api } from '..';

const ENDPOINT = 'server';
const METHOD = 'server()';

export async function getServer() {
  try {
    const res = await api?.axios?.get(ENDPOINT);
    if (res?.status === 200) {
      const { data } = res;
      log.warn(`${METHOD} -`, data);
      return data;
    }
  } catch (error) {
    log.error(`${METHOD} -`, error);
  }
  return undefined;
}

export default getServer;
