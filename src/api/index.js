let API = {};

/**
 * Sets global API instance
 * Used in Main, Login views
 */
export function setGlobalApi(apiInstance) {
  API = apiInstance;
}

export * from './me';
// export * from './settings';
// export * from './other';
export { API, API as default };
