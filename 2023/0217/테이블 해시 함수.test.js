const solution = (data, col, row_begin, row_end) => {
  let result = 0;
  const sorted = sort(data, col);

  for (let i = row_begin - 1; i <= row_end - 1; i++) {
    const si = sorted[i].reduce((acc, cur) => acc + (cur % (i + 1)), 0);
    result ^= si;
  }

  return result;
};

const sort = (data, col) => {
  return data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });
};

// function sort(a, b, col) {
//   return a[col - 1] - b[col - 1] || b[0] - a[0];
// }

// function solution(data, col, row_begin, row_end) {
//   data.sort((a, b) => sort(a, b, col));
//   return data
//     .map((row, i) => row.reduce((acc, col) => acc + (col % (i + 1)), 0))
//     .slice(row_begin - 1, row_end)
//     .reduce((acc, val) => acc ^ val, 0);
// }

test(`테이블 해시 함수`, () => {
  expect(
    solution(
      [
        [2, 2, 6],
        [1, 5, 10],
        [4, 2, 9],
        [3, 8, 3],
      ],
      2,
      2,
      3
    )
  ).toEqual(4);
});
