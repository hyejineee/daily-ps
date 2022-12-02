const solution = (topping) => {
  let count = 0;

  const m1 = new Map();
  const m2 = new Map();

  for (let t of topping) {
    m1.has(t) ? m1.set(t, m1.get(t) + 1) : m1.set(t, 1);
  }

  for (let i = topping.length - 1; i >= 0; i--) {
    const k = topping[i];
    m1.set(k, m1.get(k) - 1);

    if (m1.get(k) === 0) {
      m1.delete(k);
    }

    m2.has(k) ? m2.set(k, m2.get(k) + 1) : m2.set(k, 1);
    if (m1.size === m2.size) count++;
  }

  return count;
};

test(`롤 케이크 자르기`, () => {
  expect(solution([1, 2, 1, 3, 1, 4, 1, 2])).toEqual(2);
  expect(solution([1, 2, 3, 1, 4])).toEqual(0);
});
