const solution = (elements) => {
  const arr = elements.map((e, i) => ({ head: i === 0, e: e }));
  const result = new Set();

  for (let i = 1; i <= elements.length; i++) {
    while (true) {
      let sum = 0;

      for (let j = 0; j < i; j++) {
        sum += arr[j].e;
      }

      result.add(sum);
      arr.push(arr.shift());

      if (arr[0].head) break;
    }
  }

  return result.size;
};

test(`연속 부분 수열 합의 개수`, () => {
  expect(solution([7, 9, 1, 1, 4])).toEqual(18);
});
