import nullMatrix from "./null";
import map from "./map";

const identity = (numRows, numCols) =>
  map(nullMatrix(numRows, numCols), (_, rowIndex, columnIndex) =>
    Number(rowIndex === columnIndex)
  );
export default identity;
