const solution = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

describe("버블정렬", () => {
  test(`solution`, () => {
    expect(solution([13, 5, 11, 7, 23, 15])).toEqual([5, 7, 11, 13, 15, 23]);
  });
});
