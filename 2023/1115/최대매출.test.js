const solution = (arr, k) => {
  let acc = 0;
  let p1 = 0;
  let p2 = k - 1;
  let result = acc;

  for (let i = 0; i < k; i++) {
    acc += arr[i];
  }

  while (p2 < arr.length) {
    acc = acc - arr[p1] + arr[p2++];
    p1++;

    result = Math.max(result, acc);
  }

  return result;
};

test(`최대매출`, () => {
  expect(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)).toEqual(56);
});
