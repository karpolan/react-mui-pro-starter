import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

/**
 * Renders a list of MenuItem components from properties of given Object
 * @param {object} objectToRender - data object to render
 * @param {boolean} [sortByAbc] - optional flag to sort object properties alphabetically
 */
export const renderObjectAsMenuItems = (objectToRender, sortByAbc = false) => {
  if (!objectToRender || typeof objectToRender !== 'object') return null;

  const result = Object.entries(objectToRender)
    .sort(([keyA], [keyB]) => (sortByAbc ? keyA.localeCompare(keyB) : 0))
    .map(([key, value]) => (
      <MenuItem key={key} value={key}>
        {value}
      </MenuItem>
    ));
  return result;
};

/**
 * Renders a list of MenuItem components from given Array of simple values
 * @param {array} arrayToRender - list of simple values to render
 * @param {boolean} [sortByAbc] - optional flag to sort object properties alphabetically
 */
export const renderArrayAsMenuItems = (arrayToRender, sortByAbc = false) => {
  if (!Array.isArray(arrayToRender)) return null;
  if (arrayToRender.length < 1) return null;

  const result = arrayToRender
    .sort((a, b) => (sortByAbc ? a.localeCompare(b) : 0))
    .map((value, index) => (
      <MenuItem key={`${value}-${index}`} value={value}>
        {value}
      </MenuItem>
    ));
  return result;
};
