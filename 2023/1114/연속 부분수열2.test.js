const solution = (arr, m) => {
  let count = arr.filter((e) => e <= m).length;
  let p1 = 0;
  let p2 = 0;
  let acc = 0;

  while (p2 < arr.length) {
    acc += arr[p2];

    if (acc <= m) count++;

    while (acc > m) {
      acc -= arr[p1];
      p1++;
      if (acc <= m) count++;
    }

    p2++;
  }

  return count;
};

test(`연속 부분수열2`, () => {
  expect(solution([1, 3, 1, 2, 3], 5)).toEqual(10);
});
