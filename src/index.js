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

export const matNull = (numRows, numCols) =>
  new Array(numRows).fill(new Array(numCols).fill(0));

export const matMap = (mat, fn) =>
  mat.map((row, rowIndex) =>
    row.map((val, columnIndex) => fn(val, rowIndex, columnIndex))
  );

export const matIdentity = (numRows, numCols) =>
  matMap(matNull(numRows, numCols), (_, rowIndex, columnIndex) =>
    Number(rowIndex === columnIndex)
  );

export const matTranspose = mat =>
  matMap(mat, (_, rowIndex, columnIndex) => mat[columnIndex][rowIndex]);

export const matDimension = mat => [mat.length, mat[0].length];

export const matMultiply = curry((matA, matB) => {
  const [aNumCols, aNumRows] = matDimension(matA);
  const [bNumCols, bNumRows] = matDimension(matB);

  if (aNumCols !== bNumRows) {
    throw new Error('Columns of A must match Rows of B');
  }
  const result = matNull(aNumRows, bNumCols);
  const _matB = matTranspose(matB);
  return matMap(result, (_, rowIndex, columnIndex) => {
    return vecDotProduct(matA[rowIndex], _matB[columnIndex]);
  });
});

export const createTransform2d = {
  matrix: matIdentity(3, 3),
  apply (mat) {
    this.matrix = matMultiply(this.matrix, mat);
    return this;
  },
  translate (x, y) {
    // prettier-ignore
    return this.apply([
      [1, 0, x],
      [0, 1, y],
      [0, 0, 1]
    ]);
  },
  rotate (angle) {
    const { sin, cos } = Math;
    // prettier-ignore
    return this.apply([
      [cos(angle), sin(angle), 0],
      [-sin(angle), cos(angle), 0],
      [0, 0, 1]
    ]);
  },
  shear (x, y) {
    const { tan } = Math;
    return this.apply([
      [1, tan(x), 0],
      [tan(y), 1, 0],
      [0, 0, 1]
    ]);
  },
  scale (w, h) {
    // prettier-ignore
    return this.apply([
      [w, 0, 0],
      [0, h, 0],
      [0, 0, 1]
    ]);
  },
  get () {
    return this.matrix;
  }
};
