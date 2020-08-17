const ary = (fn, n) => {
  return (...args) => fn(...args.slice(0, n))
};

const firstTwoMax = ary(Math.max, 2);
// [[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x));