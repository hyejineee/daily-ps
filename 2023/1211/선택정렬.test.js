const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIdx = i;

    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIdx = j;
      }
    }
    const temp = arr[i];
    arr[i] = min;
    arr[minIdx] = temp;
  }
  return arr;
};

describe("선택정렬", () => {
  test(`solution`, () => {
    expect(solution([13, 5, 11, 7, 23, 15])).toEqual([5, 7, 11, 13, 15, 23]);
  });
});
