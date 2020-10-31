import API from './';

/**
 * Loads informaton about currently logged user
 * @returns {object} logged user data as {name, email, avatar...} object
 */
export async function getMe() {
  try {
    const res = await API.get('/me');
    const result = res.data;
    // log.warn('getMe() - ', result);
    return result;
  } catch (error) {
    log.error('getMe() - ', error);
    return {};
  }
}
