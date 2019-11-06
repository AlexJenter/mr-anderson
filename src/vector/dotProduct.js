import { curry } from "../helpers";
/**
 * # Calculates the dot product
 * @param {Array<Number>} vecA - the first vector
 * @param {Array<Number>} vecB - the second vector
 * @returns {Number} the dot product
 */
export default curry((vecA, vecB) => vecA.reduce((acc, x, i) => acc + x * vecB[i], 0));
