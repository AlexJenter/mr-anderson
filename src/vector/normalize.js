import { curry } from "../helpers";
import scale from "./scale";
import magnitude from "./magnitude";

/**
 * # Calculates the unit vector of a given vector
 * @param {Array<Number>} vec - input vector
 * @returns {Array<Number>} a vector of unit length and the same direction as the input vector
 */

const normalize = vec => scale(1 / magnitude(vec), vec);
export default curry(normalize);
