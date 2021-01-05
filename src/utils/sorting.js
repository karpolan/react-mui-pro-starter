/**
 * Returns true if given value is valid number or string that represents a number
 * See: https://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
 * @param {number|string} value - value to check
 */
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * Comparing function for values as numbers
 * @param {number} a - first object to compare
 * @param {number} b - second object to compare
 * @param {boolean} [orderDescending] - optional parameter to sort descending
 */
function compareNumbers(a, b, orderDescending = false) {
  const A = Number(a);
  const B = Number(b);
  if (A > B) return orderDescending ? -1 : 1;
  if (B > A) return orderDescending ? 1 : -1;
  return 0;
}

/**
 * Comparing function for Text values using String.localeCompare()
 * @param {string} a - first string to compare
 * @param {string} b - second string to compare
 * @param {boolean} [orderDescending] - optional parameter to sort descending
 */
function compareTexts(a, b, orderDescending = false) {
  return a.localeCompare(b) * (orderDescending ? -1 : 1);
}

/**
 * Comparing function for objects with specific property
 * @param {object} a - first object to compare
 * @param {object} b - second object to compare
 * @param {string} propertyToCompare - name of the object's property to use as comparing values
 * @param {boolean} [orderDescending] - optional parameter to sort descending
 */
function compareObjects(a, b, propertyToCompare, orderDescending = false) {
  if (!propertyToCompare) return 0;
  const A = typeof a === 'object' ? a[propertyToCompare] : a;
  const B = typeof b === 'object' ? b[propertyToCompare] : b;
  if (isNumeric(A) && isNumeric(B)) return compareNumbers(A, B, orderDescending);
  if (typeof A === 'string' && typeof B === 'string') return compareTexts(A, B, orderDescending);
  return 0;
}

/**
 * Stable sort for the array of simply values (number, string, etc.)
 * @param {array} arrayOfSimpleValues - array of simply values to sort
 * @param {function} compareFunction - comparing function for simply values
 * @param {...object} [paramsForCompareFunction] - optional parameter to pass into compareFunction(a, b, ...paramsForCompareFunction)
 */
function stableSort(arrayOfSimpleValues, compareFunction, ...paramsForCompareFunction) {
  const stabileArray = arrayOfSimpleValues.map((item, index) => [item, index]);

  stabileArray.sort((a, b) => {
    const order = compareFunction(a[0], b[0], ...paramsForCompareFunction);
    if (order !== 0) {
      return order; // Sort by comparing Values
    } else {
      return a[1] - b[1]; // Sort by comparing Indexes
    }
  });

  return stabileArray.map((item) => item[0]); // Return Values
}

/**
 * Stable sorts for the array of objects by comparing their specific properties.
 * If the array item is not an object the direct value of the item is used for comparing.
 * @param {object[]} arrayOfObjects - list of objects to sort
 * @param {function} compareFunction - function to compare object's values as (a, b, propertyToCompare, ...)
 * @param {string} [propertyToCompare] - name of property of the object to use a value, 'value' by default
 * @param {...object} [paramsForCompareFunction] - optional parameter to pass into compareFunction(a, b, propertyToCompare, ...paramsForCompareFunction)
 */
function stableSortForObjectsByProperty(
  arrayOfObjects,
  compareFunction,
  propertyToCompare = 'value',
  ...paramsForCompareFunction
) {
  const stabileArray = arrayOfObjects.map((item, index) => [
    typeof item === 'object' && item.hasOwnProperty(propertyToCompare) ? item[propertyToCompare] : item, // The item's property or the item itself
    index, // Store previous Index of the Item
    item, // Save Item as is, we will return this reference
  ]);

  stabileArray.sort((a, b) => {
    const order = compareFunction(a[0], b[0], ...paramsForCompareFunction);
    if (order !== 0) {
      return order; // Sort by comparing Values
    } else {
      return a[1] - b[1]; // Sort by comparing Indexes
    }
  });

  return stabileArray.map((item) => item[2]); // Return Item as it was
}

export { compareNumbers, compareTexts, compareObjects, stableSort, stableSortForObjectsByProperty, isNumeric };
