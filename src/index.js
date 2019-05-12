import { curry } from './helpers';

/**
 * # Vector Multiplication
 * function for multiplying a vector by a factor.
 * @param {number} factor - the factor to be scaled by
 * @param {Array<Number>} vector - the vector  to be scaled
 * @returns {Array<Number>} the scaled vector
 */
export const vecScale = curry((factor, vector) => vector.map(x => factor * x));

export const vecAdd = curry((vecA, vecB) =>
  vecA.map((compA, indexA) => compA + vecB[indexA])
);

export const vecSubtract = curry((vecA, vecB) =>
  vecAdd(vecA, vecScale(-1, vecB))
);

export const vecDotProduct = curry((vecA, vecB) =>
  vecA.reduce((acc, x, i) => acc + x * vecB[i], 0)
);
