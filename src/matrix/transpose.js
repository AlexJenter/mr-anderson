import map from "./map";

const transpose = mat =>
  map(mat, (_, rowIndex, columnIndex) => mat[columnIndex][rowIndex]);
export default transpose;
