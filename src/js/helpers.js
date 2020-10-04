/**
 * Idiomatic sleep function, from here:
 * https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
 * 
 * @param {number} ms - milliseconds
 * @returns {Promise}
 * 
 * @example
 * 
 * const tenSecondPause = async () => await sleep(10000);
 * 
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { sleep };