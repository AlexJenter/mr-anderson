const shear = (x, y) => {
  const { tan } = Math;
  // prettier-ignore
  return [
    [1,      tan(x), 0],
    [tan(y), 1,      0],
    [0,      0,      1],
  ];
};
export default shear;
