const solution = (n, k, arr) => {
  const dp = Array(k + 1).fill(0);

  for (let [w, v] of arr) {
    for (let j = k; j > 0; j--) {
      if (w <= j) {
        dp[j] = Math.max(dp[j], dp[j - w] + v);
      }
    }
  }

  return dp[k];
};

const main = () => {
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().split('\n');

  const [n, k] = input[0].split(' ');

  const arr = [];
  for (let i = 1; i < input.length; i++) {
    arr.push(input[i].split(' ').map((e) => Number(e)));
  }

  const result = solution(n, Number(k), arr);

  console.log(result);
};

test(`평범한 배낭`, () => {
  expect(
    solution(4, 7, [
      [6, 13],
      [4, 8],
      [3, 6],
      [5, 12],
    ])
  ).toEqual(14);
});
