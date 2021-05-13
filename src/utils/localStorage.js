/**
 * Smartly reads value from localStorage
 */
 export function localStorageGet(name, defaultValue = '') {
  const valueFromStore = localStorage.getItem(name);
  if (valueFromStore === null) return defaultValue; // No value in store, return default one

  try {
    const jsonParseValue = JSON.parse(valueFromStore);
    if ({ boolean: 1, number: 1, bigint: 1, string: 1, object: 1 }[typeof jsonParseValue]) {
      return jsonParseValue; // We have a simple value or JS object/array in the store
    }
  } catch (error) {}

  return valueFromStore; // Return string value as it is
}

/**
 * Smartly writes value into localStorage
 */
export function localStorageSet(name, value) {
  let valueAsString = value;
  if (typeof value === 'object') {
    valueAsString = JSON.stringify(value);
  }
  localStorage.setItem(name, valueAsString);
}

/**
 * Deletes value by name from localStorage, if specified name is empty the localStorage is cleared.
 */
export function localStorageDelete(name) {
  if (name) {
    localStorage.removeItem(name);
  } else {
    localStorage.clear();
  }
}