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

import rotate2d from "./transforms/2d/rotate";
import scale2d from "./transforms/2d/scale";
import shear2d from "./transforms/2d/shear";
import translate2d from "./transforms/2d/translate";

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

export const transform2d = {
  rotate: rotate2d,
  scale: scale2d,
  shear: shear2d,
  translate: translate2d
};
