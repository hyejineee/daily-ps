const solution = (n, lost, reserve) => {
  const map = new Map();

  [...Array(n).keys()].map((v) => {
    map.set(v + 1, 1);
  });

  reserve.forEach((e) => {
    map.set(e, map.get(e) + 1);
  });

  lost.forEach((e) => {
    map.set(e, map.get(e) - 1);
  });

  Array.from(map)
    .filter(([k, v]) => v === 0)
    .forEach(([k, v]) => {
      if (map.get(k - 1) === 2) {
        map.set(k - 1, 1);
        map.set(k, 1);
      } else if (map.get(k + 1) === 2) {
        map.set(k + 1, 1);
        map.set(k, 1);
      }
    });

  return Array.from(map).filter(([k, v]) => v > 0).length;
};

test(`체육복`, () => {
  expect(solution(5, [2, 4], [1, 3, 5])).toEqual(5);
  expect(solution(5, [2, 4], [3])).toEqual(4);
  expect(solution(3, [3], [1])).toEqual(2);
});
