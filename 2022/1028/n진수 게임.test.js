const solution = (n, t, m, p) => {
  const arr = [];
  const result = [];

  let e = 0;
  while (result.length < t) {
    arr.push(...e.toString(n).split("").flat());
    e++;

    if (arr.length >= m) {
      for (let i = 0; i < m; i++) {
        const pop = arr.shift();
        if (i % m === p - 1) {
          result.push(pop);
        }
      }
    }
  }

  return result.join("").toUpperCase();
};

// function solution(n, t, m, p) {
//   let res = "";
//   let num = 0;
//   let seq = "";
//   while (res.length < t) {
//     if (seq.length >= m) {
//       res += seq[p - 1];
//       seq = seq.slice(m);
//     } else {
//       seq += num.toString(n).toUpperCase();
//       num++;
//     }
//   }
//   return res;
// }

test(`n진수 게임`, () => {
  expect(solution(10, 2, 10, 1)).toEqual("01");
  expect(solution(2, 4, 2, 1)).toEqual("0111");
  expect(solution(16, 16, 2, 1)).toEqual("02468ACE11111111");
});
