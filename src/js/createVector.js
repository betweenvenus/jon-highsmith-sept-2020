import Vector2 from './Vector2.js';
/**
 * Factory function that produces two-dimensional vector objects.
 *
 * @param {number} x - An x value
 * @param {number} y - A y value
 * @return {Vector2} Returns a Vector2 object
 *
 * @example
 *
 *     createVector(1337, -999.2);
 */

 function createVector(x, y) {
     return new Vector2(x, y);
 }

 export default createVector;