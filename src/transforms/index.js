// const createTransform2d = {
//   matrix: identity(3, 3),
//   apply(mat) {
//     this.matrix = multiply(this.matrix, mat);
//     return this;
//   },
//   translate(x, y) {
//     // prettier-ignore
//     return this.apply([
//       [1, 0, x],
//       [0, 1, y],
//       [0, 0, 1]
//     ]);
//   },
//   rotate(angle) {
//     const { sin, cos } = Math;
//     // prettier-ignore
//     return this.apply([
//       [cos(angle), sin(angle), 0],
//       [-sin(angle), cos(angle), 0],
//       [0, 0, 1]
//     ]);
//   },
//   shear(x, y) {
//     const { tan } = Math;
//     return this.apply([[1, tan(x), 0], [tan(y), 1, 0], [0, 0, 1]]);
//   },
//   scale(w, h) {
//     // prettier-ignore
//     return this.apply([
//       [w, 0, 0],
//       [0, h, 0],
//       [0, 0, 1]
//     ]);
//   },
//   get() {
//     return this.matrix;
//   }
// };
