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

describe.only('lib', () => {
  describe('vec', () => {
    it('scaling', () => {
      const partiallyApplied = lib.vecScale(10);
      const vec = partiallyApplied([1, 2, 3]);
      expect(vec).to.eql([10, 20, 30]);
    });
    it('addition', () => {
      const partiallyApplied = lib.vecAdd([1, 2, 3, 4]);
      const vec = partiallyApplied([2, 2, 2, 2]);
      expect(vec).to.eql([3, 4, 5, 6]);
    });
    it('subtraction', () => {
      const partiallyApplied = lib.vecSubtract([1, 2, 3, 4]);
      const vec = partiallyApplied([1, 2, 3, 4]);
      expect(vec).to.eql([0, 0, 0, 0]);
    });
    it('dot product', () => {
      expect(
        lib.vecDotProduct([1, 2, 3], [1, 5, 7])
      ).to.eql(32);
      expect(
        lib.vecDotProduct([-1, -2, 3], [4, 0, -8])
      ).to.eql(-28);
      expect(
        lib.vecDotProduct([1, 2, -4], [2, 3, 5])
      ).to.eql(-12);
    });
  });
});
