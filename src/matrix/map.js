const map = (mat, fn) =>
  mat.map((row, rowIndex) =>
    row.map((val, columnIndex) => fn(val, rowIndex, columnIndex))
  );

export default map;
