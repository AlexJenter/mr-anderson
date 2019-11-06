const rotate = angle => {
  const {sin , cos}  =  Math;
  // prettier-ignore
  return [
    [cos(angle), sin(angle), 0],
    [-sin(angle), cos(angle), 0],
    [0, 0, 1]
  ];
};
export default rotate;