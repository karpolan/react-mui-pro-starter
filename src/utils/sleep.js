/**
 * Classic sleep(milliSeconds) for JavaScript
 * @param {number} delay - amount of milliseconds to wait
 */
export function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default sleep;
