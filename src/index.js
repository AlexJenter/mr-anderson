import vecAdd from "./vector/add";
import vecCross from "./vector/cross";
import vecDotproduct from "./vector/dotProduct";
import vecMagnitude from "./vector/magnitude";
import vecNormalize from "./vector/normalize";
import vecScale from "./vector/scale";
import vecSubtract from "./vector/subtract";

import matIdentity from "./matrix/identity";
import matMap from "./matrix/map";
import matMultiply from "./matrix/multiply";
import matNull from "./matrix/null";
import matTranspose from "./matrix/transpose";

export const vector = {
  add: vecAdd,
  cross: vecCross,
  dotproduct: vecDotproduct,
  magnitude: vecMagnitude,
  normalize: vecNormalize,
  scale: vecScale,
  subtract: vecSubtract
};

export const matrix = {
  identity: matIdentity,
  map: matMap,
  multiply: matMultiply,
  null: matNull,
  transpose: matTranspose
};
