import { curry } from "../helpers";
/**
 * # Calculates the cross product of two 3d vectors
 * @param {Array<Number>} vecA - the first vector
 * @param {Array<Number>} vecB - the second vector
 * @returns {Array<Number>} the vector representing the cross product
 */

const cross3 = curry(([ax, ay, az], [bx, by, bz]) => [
  ay * bz - az * by,
  az * bx - ax * bz,
  ax * by - ay * bx
]);

/**
 * # Calculates the cross product of two 2d vectors
 * @param {Array<Number>} vecA - the first vector
 * @param {Array<Number>} vecB - the second vector
 * @returns {Number} area of the parallelogram
 */

const cross2 = ([ax, ay], [bx, by]) => ax * by + ay * bx;

const cross = (vecA, vecB) => {
  if (vecA.length !== vecB.length) {
    throw new Error("Input Vectors must be of same length");
  }

  if (vecA.length === 2) return cross2(vecA, vecB);
  if (vecA.length === 3) return cross3(vecA, vecB);
  throw new Error("Cross product can only be calculated for 2d or 3d vectors");
};

export default cross;
