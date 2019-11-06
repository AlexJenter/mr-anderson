import { curry } from "../helpers";
import dot from "../vector/dotProduct";
import map from "./map";
import nullMatrix from "./null";
import transpose from "./transpose";

const dimension = mat => [mat.length, mat[0].length];

const multiply = curry((matA, matB) => {
  const [aNumCols, aNumRows] = dimension(matA);
  const [bNumCols, bNumRows] = dimension(matB);

  if (aNumCols !== bNumRows) {
    throw new Error("Columns of A must match Rows of B");
  }

  const result = nullMatrix(aNumRows, bNumCols);
  const _matB = transpose(matB);

  return map(result, (_, rowIndex, columnIndex) => {
    return dot(matA[rowIndex], _matB[columnIndex]);
  });
});

export default multiply;
