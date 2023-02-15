const solution = (storey) => {
  let remain = storey;
  let count = 0;
  while (remain !== 0) {
    const n = remain % 10;

    if (n >= 6 || (n == 5 && (remain / 10) % 10 >= 5)) {
      remain += 10 - n;
      count += 10 - n;
    } else {
      count += n;
    }

    remain = parseInt(remain / 10);
  }
  return count;
};

// function solution(storey) {
//   if (storey < 5) return storey;
//   const r = storey % 10;
//   const m = (storey - r) / 10;
//   return Math.min(r + solution(m), 10 - r + solution(m + 1));
// }

test(`마법의 엘레베이터`, () => {
  expect(solution(16)).toEqual(6);
  expect(solution(2554)).toEqual(16);
});
