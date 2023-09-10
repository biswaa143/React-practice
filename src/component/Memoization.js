//Memoization is an optimise technique that can be used to reduce time consuming calculations by saving previous input to something called cache and returning the result from it.

let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      return cache[n];
    } else {
      console.log("Calculating first time");
      let res = fun(n);
      cache[n] = res;
      return res;
    }
  };
};
console.time();
const efficient = memoize(calc);
console.log(efficient(5));
console.timeEnd();

console.time();

console.log(efficient(5));
console.timeEnd();
