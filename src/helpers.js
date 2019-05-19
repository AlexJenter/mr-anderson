export const curry = fn =>
  function curried (...args) {
    return args.length >= fn.length
      ? fn(...args)
      : (...newArgs) => curried(...[...args, ...newArgs]);
  };

export const flip = curry((fn, a, b) => fn(b, a));

export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
export const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

export const trace = curry((label, value) => {
  console.log(`${label}: ${value}`);
  return value;
});

export const splitEvery = (size, arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};
