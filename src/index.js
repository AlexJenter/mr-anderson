import { curry } from './helpers';

const square = x => Math.pow(x, 2);
const add = (a, b) => a + b;
const sum = arr => arr.reduce(add, 0);

/**
 * # Vector multiplication
 * function for multiplying a vector by a factor.
 * @param {number} factor - the factor to be scaled by
 * @param {Array<Number>} vector - the vector  to be scaled
 * @returns {Array<Number>} the scaled vector
 */

export const vecScale = curry((factor, vector) => vector.map(x => factor * x));

/**
 * # Vector addition
 * @param {Array<Number>} vecA - the first summand
 * @param {Array<Number>} vecB - the second summand
 * @returns {Array<Number>}  the sum of both vectors
 */

export const vecAdd = curry((vecA, vecB) =>
  vecA.map((compA, indexA) => compA + vecB[indexA])
);

/**
 * # Vector subtraction
 * @param {Array<Number>} vecA - the first summand
 * @param {Array<Number>} vecB - the second summand
 * @returns {Array<Number>}  the difference of both vectors
 */

export const vecSubtract = curry((vecA, vecB) =>
  vecA.map((compA, indexA) => compA - vecB[indexA])
);

/**
 * # Calculates the dot product
 * @param {Array<Number>} vecA - the first vector
 * @param {Array<Number>} vecB - the second vector
 * @returns {Number} the dot product
 */

export const vecDotProduct = curry((vecA, vecB) =>
  vecA.reduce((acc, x, i) => acc + x * vecB[i], 0)
);

/**
 * # Calculates the cross product of two 3d vectors
 * @param {Array<Number>} vecA - the first vector
 * @param {Array<Number>} vecB - the second vector
 * @returns {Array<Number>} the vector representing the cross product
 */

const cross3 = curry(([a1, a2, a3], [b1, b2, b3]) => [
  a2 * b3 - a3 * b2,
  a3 * b1 - a1 * b3,
  a1 * b2 - a2 * b1
]);

/**
 * # Calculates the cross product of two 2d vectors
 * @param {Array<Number>} vecA - the first vector
 * @param {Array<Number>} vecB - the second vector
 * @returns {Number} area of the parallelogram
 */

const cross2 = ([ax, ay], [bx, by]) => ax * by + ay * bx;

export const cross = (vecA, vecB) => {
  if (vecA.length !== vecB.length) {
    throw new Error('Input Vectors must be of same length');
  };

  if (vecA.length === 2) return cross2(vecA,  vecB);
  if (vecA.length === 3) return cross3(vecA,  vecB);
  throw new Error('Cross product can only be calculated for 2d or 3d vectors');
};

/**
 * # Calculates the length of a give Vector
 * @param {Array<Number>} vec - input vector
 * @returns {Number} the length of a give Vector
 */

export const magnitude = vec => Math.sqrt(sum(vec.map(square)));

/**
 * # Calculates the unit vector of a given vector
 * @param {Array<Number>} vec - input vector
 * @returns {Array<Number>} a vector of unit length and the same direction as the input vector
 */

export const unit = curry(vec => vecScale(1 / magnitude(vec), vec));
