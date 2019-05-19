import { curry } from './helpers';

const square = x => Math.pow(x, 2);
const add = (a, b) => a + b;
const sum = arr => arr.reduce(add, 0);
const mul = x => y => x * y;

/**
 * # Vector multiplication
 * function for multiplying a vector by a factor.
 * @param {number} factor - the factor to be scaled by
 * @param {Array<Number>} vector - the vector  to be scaled
 * @returns {Array<Number>} the scaled vector
 */

export const vecScale = curry((factor, vector) => vector.map(mul(factor)));

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

export const cross = (vecA, vecB) => {
  if (vecA.length !== vecB.length) {
    throw new Error('Input Vectors must be of same length');
  }

  if (vecA.length === 2) return cross2(vecA, vecB);
  if (vecA.length === 3) return cross3(vecA, vecB);
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

export const matNull3 = () => new Array(9).fill(0);
export const matIdentity3 = () =>
  matNull3().map((x, i) => (i % 4 === 0 ? 1 : 0));

// prettier-ignore
export const matTranspose3 = ([
  x0, y0, z0,
  x1, y1, z1,
  x2, y2, z2
]) => ([
  x0, x1, x2,
  y0, y1, y2,
  z0, z1, z2
]);

export const matNull4 = () => new Array(16).fill(0);
export const matIdentity4 = () =>
  matNull4().map((x, i) => (i % 5 === 0 ? 1 : 0));

// prettier-ignore
export const matTranspose4 = ([
  x0, y0, z0, w0,
  x1, y1, z1, w1,
  x2, y2, z2, w2,
  x3, y3, z3, w3
]) => ([
  x0, x1, x2, x3,
  y0, y1, y2, y3,
  z0, z1, z2, z3,
  w0, w1, w2, w3
]);
