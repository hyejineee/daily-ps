const solution = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const e = arr[i];
    for (let j = i - 1; i >= 0 && arr[j] > e; j--) {
      arr[j + 1] = arr[j];
      arr[j] = e;
    }
  }

  return arr;
};

describe("삽입정렬", () => {
  test(`solution`, () => {
    expect(solution([11, 7, 5, 6, 10, 9])).toEqual([5, 6, 7, 9, 10, 11]);
  });
});
