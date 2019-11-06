import { curry } from "../helpers";
/**
 * # Vector subtraction
 * @param {Array<Number>} vecA - the first summand
 * @param {Array<Number>} vecB - the second summand
 * @returns {Array<Number>}  the difference of both vectors
 */
const subtract = (vecA, vecB) =>
  vecA.map((compA, indexA) => compA - vecB[indexA]);

export default curry(subtract);
