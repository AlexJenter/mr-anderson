import { assert, expect } from 'chai';
import * as lib from '../src/index';
import * as helper from '../src/helpers';

describe('helpers', () => {
  it('it curried', () => {
    const curriedAdder = helper.curry((x, y) => x + y);
    const add3 = curriedAdder(3);
    assert.equal(add3(2), 5);
  });
  it('it flipped', () => {
    const flipped = helper.flip((str, num) => str.repeat(num));
    assert.equal(flipped(2, 'hello'), 'hellohello');
  });
  it('it composed (rtl)', () => {
    const repeat = str => str.repeat(2);
    const exclaim = str => str + '!';
    const fn = helper.compose(
      repeat,
      exclaim
    );
    assert.equal(fn('OHAI'), 'OHAI!OHAI!');
  });
  it('it piped (ltr)', () => {
    const repeat = str => str.repeat(2);
    const exclaim = str => str + '!';
    const fn = helper.pipe(
      exclaim,
      repeat
    );
    assert.equal(fn('OHAI'), 'OHAI!OHAI!');
  });
  it('it traced 42', () => {
    const fn = helper.trace('      trace');
    assert.equal(fn(42), 42);
  });
});

describe.only('Lib', () => {
  describe('Vector algebra', () => {
    it('scaling', () => {
      expect(lib.vecScale(10, [1, 2, 3])).to.eql([10, 20, 30]);
      expect(lib.vecScale(-1, [1, 2, 3])).to.eql([-1, -2, -3]);
    });
    it('addition', () => {
      expect(lib.vecAdd([1, 0, 0], [0, 1, 0])).to.eql([1, 1, 0]);
      expect(lib.vecAdd([1, 0, 0], [0, 0, 1])).to.eql([1, 0, 1]);
      expect(lib.vecAdd([-20, 0, 0], [10, 0, 1])).to.eql([-10, 0, 1]);
    });
    it('subtraction', () => {
      expect(lib.vecSubtract([1, 2, 3], [1, 2, 3])).to.eql([0, 0, 0]);
      expect(lib.vecSubtract([10, 20, 30], [-1, -2, -3])).to.eql([11, 22, 33]);
    });
    it('dot product', () => {
      expect(lib.vecDotProduct([1, 2, 3], [1, 5, 7])).to.eql(32);
      expect(lib.vecDotProduct([-1, -2, 3], [4, 0, -8])).to.eql(-28);
      expect(lib.vecDotProduct([1, 2, -4], [2, 3, 5])).to.eql(-12);
    });
    it('cross', () => {
      expect(lib.cross([1, 0, 0], [0, 2, 0])).to.eql([0, 0, 2]);
    });
    it('magnitude', () => {
      expect(lib.magnitude([1, 0, 0])).to.eql(1);
    });
    it('unit', () => {
      expect(lib.unit([5, 0, 0])).to.eql([1, 0, 0]);
      expect(lib.unit([0, 6, 0])).to.eql([0, 1, 0]);
      expect(lib.unit([0, 0, 7])).to.eql([0, 0, 1]);
    });
  });
  describe('Matrix algebra', () => {
    it('null matrix', () => {
      // prettier-ignore
      expect(lib.matNull(2, 2)).to.eql([
        [0, 0],
        [0, 0]
      ]);
    });
    it('matMap', () => {
      const m = lib.matIdentity(2, 3);
      expect(lib.matMap(m, x => x + 1)).to.eql([[2, 1, 1], [1, 2, 1]]);
    });
    it('identity matrix', () => {
      // prettier-ignore
      expect(lib.matIdentity(2, 2)).to.eql([
        [1, 0],
        [0, 1]
      ]);
    });
    it('transpose', () => {
      // prettier-ignore
      expect(lib.matTranspose([
        [10, 11],
        [20, 21]
      ])).to.eql([
        [10, 20],
        [11, 21]
      ]);
    });
    it('multiply', () => {
      // prettier-ignore
      expect(lib.matMultiply([
        [0, -3, -2],
        [4,  5, -1],
        [6,  1, 7]
      ], [
        [0,   2, -4],
        [-2, -3,  3],
        [4,   5, -1]
      ])).to.eql([
        [-2, -1, -7],
        [-14, -12, 0],
        [26, 44, -28]
      ]);
    });
  });
  describe('Transforms', () => {
    it('translate', () => {
      // prettier-ignore
      const x = 1;
      const y = 2;
      expect(lib.createTransform2d.translate(x, y).get()).to.eql([
        [1, 0, x],
        [0, 1, y],
        [0, 0, 1]
      ]);
    });
  });
});
