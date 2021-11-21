import { api } from '..';
import { localStorageSet, localStorageGet, localStorageDelete } from '../../utils/localStorage';

const ACCESS_TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'tokenRefresh';
const EXPIRED_AT_KEY = 'tokenExpiresAt';

/**
 * Removes token from "api" and all auth data from the local storage
 */
export function clearAuthData() {
  api.token = undefined;
  localStorageDelete(ACCESS_TOKEN_KEY);
  localStorageDelete(REFRESH_TOKEN_KEY);
  localStorageDelete(EXPIRED_AT_KEY);
  clearRefreshTimeout();
}

/**
 * Apples new "access token" into "api" and saves it in the local storage
 * @param {string} [newToken] - optional new token value
 */
export function saveToken(newToken = api.token) {
  if (api.token !== newToken) {
    api.token = newToken;
  }
  localStorageSet(ACCESS_TOKEN_KEY, api.token);
}

/**
 * Loads "access token" from the local storage and sets it into "api"
 */
export function loadToken() {
  const token = process.env.REACT_APP_MULTIPASS ? 'Leeloo Dallas Multipass' : localStorageGet(ACCESS_TOKEN_KEY);
  return token;
}

/**
 * Saves given "refresh token" in the local storage
 * @param {string} newRefreshToken - new refresh token value
 */
export function saveRefreshToken(newRefreshToken) {
  localStorageSet(REFRESH_TOKEN_KEY, newRefreshToken);
}

/**
 * Loads "refresh token" from the local storage
 */
export function loadRefreshToken() {
  return localStorageGet(REFRESH_TOKEN_KEY);
}

/**
 * Loads "token expiration date" from the local storage, as ISO string or ''
 */
export function tokenExpireAt() {
  return localStorageGet(EXPIRED_AT_KEY);
}

/**
 * The "token refresh timer" to refresh token before it expires
 */
let _timeout_refresh_token = 0;
const REFRESH_TIMEOUT = 15 * 60 * 1000; // 15 minutes

export function clearRefreshTimeout() {
  if (_timeout_refresh_token) {
    clearTimeout(_timeout_refresh_token);
    _timeout_refresh_token = 0;
  }
}

export function setRefreshTimeout(interval = REFRESH_TIMEOUT) {
  clearRefreshTimeout();
  const timeExpiresAt = Date.now() + interval;
  const dateExpiresAt = new Date(+timeExpiresAt).toISOString();
  localStorageSet(EXPIRED_AT_KEY, dateExpiresAt); // Add 'tokenExpiresAt' as normal data string
  interval = interval - 10 * 1000; // 10 second before the end
  log.info(
    `Token refresh timer set for ${Math.trunc(interval / 1000 / 60)}.${Math.trunc(interval / 1000) % 60} minutes`
  );
  _timeout_refresh_token = setTimeout(() => {
    log.warn('Refreshing access token by timeout...');
    api?.auth?.refresh();
  }, interval);
}

/**
 * Verifies is the current user still logged in, updates the "token refresh timer" if needed
 */
export function isUserStillLoggedIn() {
  if (process.env.REACT_APP_MULTIPASS) return true; // Bypass for "MultiPass" login emulation mode

  if (_timeout_refresh_token) return true; // Timeout already exists, we are logged in

  const dateExpireAt = tokenExpireAt();
  if (!dateExpireAt) return false; // No data about token expiration in the local store, we are NOT logged in

  const timeExpireAt = new Date(dateExpireAt).getTime();
  if (timeExpireAt <= Date.now()) return false; // Token already expired, we are NOT logged in anymore

  setRefreshTimeout(timeExpireAt - Date.now()); // Create new timeout with interval taken form the local storage
  return true; // We are logged in
}

/**
 * Generates API response alike object to emulate login when env.REACT_APP_MULTIPASS is set
 * @returns {object} response alike object with tokens
 */
export function fakeApiResponse() {
  if (!process.env.REACT_APP_MULTIPASS) return { data: {} }; // The "MultiPass" mode not found

  const expires = REFRESH_TIMEOUT; // 15 * 60 * 1000; // 15 minutes
  return {
    data: { access_token: 'Leeloo Dallas Multipass', refresh_token: 'Korben Dallas Driver License', expires },
  };
}
