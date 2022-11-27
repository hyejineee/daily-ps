const solution = (k, tangerine) => {
  const groupBy = {};
  tangerine.forEach((e) => {
    groupBy[e] !== undefined ? groupBy[e]++ : (groupBy[e] = 1);
  });

  const sorted = Object.entries(groupBy).sort(([, v1], [, v2]) => {
    return v2 - v1;
  });

  let count = 0;
  for (let [, v] of sorted) {
    k -= v;
    count++;
    if (k <= 0) break;
  }

  return count;
};

test(`귤 고르기`, () => {
  expect(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])).toEqual(3);
  expect(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])).toEqual(2);
  expect(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])).toEqual(1);
});
