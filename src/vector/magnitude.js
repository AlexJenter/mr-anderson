import { square, sum } from "../helpers";
/**
 * # Calculates the length of a give Vector
 * @param {Array<Number>} vec - input vector
 * @returns {Number} the length of a give Vector
 */

const magnitude = vec => Math.sqrt(sum(vec.map(square)));

export default magnitude;
