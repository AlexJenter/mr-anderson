import { curry } from '../helpers';

/**
 * @memberof V
 * @function add
 * @description
 * # Vector addition
 * @param {Array<Number>} vecA - the first summand
 * @param {Array<Number>} vecB - the second summand
 * @returns {Array<Number>}  the sum of both vectors
 */
const _add = (vecA, vecB) => vecA.map((compA, indexA) => compA + vecB[indexA]);
export const add = curry(_add);
