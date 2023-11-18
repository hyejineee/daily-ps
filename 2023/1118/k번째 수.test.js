const solution = (arr, k) => {
  let count = 0;
  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let l = j + 1; l < arr.length; l++) {
        count++;
        if (count === k) return arr[i] + arr[j] + arr[l];
      }
    }
  }
};

describe("k번째 수", () => {
  test(`solution`, () => {
    expect(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3)).toEqual(143);
  });
});
