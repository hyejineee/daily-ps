const solution = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;

  const result = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    const v1 = arr1[p1];
    const v2 = arr2[p2];

    if (v1 > v2) {
      result.push(v2);
      p2++;
      continue;
    }

    result.push(v1);
    p1++;
  }

  while (p1 < arr1.length) {
    result.push(arr1[p1]);
    p1++;
  }

  while (p2 < arr2.length) {
    result.push(arr2[p2]);
    p2++;
  }

  return result;
};

test(`두 배열 합치기`, () => {
  expect(solution([1, 3, 5], [2, 3, 6, 7, 9])).toEqual([
    1, 2, 3, 3, 5, 6, 7, 9,
  ]);

  expect(solution([2, 3, 6, 7, 9], [1, 3, 5])).toEqual([
    1, 2, 3, 3, 5, 6, 7, 9,
  ]);
});
