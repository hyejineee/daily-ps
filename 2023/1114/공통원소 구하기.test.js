const solution = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  const result = [];

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
      p2++;
      continue;
    }

    arr1[p1] > arr2[p2] ? p2++ : p1++;
  }

  return result;
};

test(`공통원소 구하기`, () => {
  expect(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8])).toEqual([2, 3, 5]);
});
