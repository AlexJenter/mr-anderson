import { curry, mul } from "../helpers";

/**
 * @memberof V
 * @function scale
 * @description
 * # Vector multiplication
 * - one
 * - two
 * function for multiplying a vector by a factor.
 * @param {number} factor - the factor to be scaled by
 * @param {Array<Number>} vector - the vector  to be scaled
 * @returns {Array<Number>} the scaled vector
 */

const scale = (factor, vector) => vector.map(mul(factor));

export default curry(scale);
