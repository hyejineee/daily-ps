const solution = (queue1, queue2) => {
  const total = sum(queue1) + sum(queue2);

  if (total % 2 !== 0) return -1;

  const half = Number(total / 2);

  if (queue1.some((e) => e > half) || queue2.some((e) => e > half)) return -1;

  let count = 0;
  let sum1 = sum(queue1);
  let sum2 = sum(queue2);

  const merge = [...queue1, ...queue2, ...queue1, queue2];
  let s1 = 0,
    s2 = queue1.length;

  while (sum1 !== half) {
    if (s2 > merge.length) return -1;

    if (sum1 > sum2) {
      const p1 = merge[s1];

      sum1 -= p1;
      sum2 += p1;

      s1++;
    } else {
      const p2 = merge[s2];

      sum1 += p2;
      sum2 -= p2;

      s2++;
    }

    count++;
  }

  return count;
};

const sum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

test(`두 큐 합 같게 만들기`, () => {
  expect(solution([3, 2, 7, 2], [4, 6, 5, 1])).toEqual(2);
  expect(solution([1, 2, 1, 2], [1, 10, 1, 2])).toEqual(7);
  expect(solution([1, 1], [1, 5])).toEqual(-1);
  expect(solution([1, 1, 1], [5, 1, 1])).toEqual(4);
});
