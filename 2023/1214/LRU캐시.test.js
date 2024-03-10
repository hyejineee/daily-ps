const solution = (arr, size) => {
  const cache = [];

  arr.forEach((e) => {
    const hit = cache.indexOf(e);

    if (hit === -1) {
      cache.push(e);
      if (cache.length > size) cache.shift();
      return;
    }

    cache.splice(hit, 1);
    cache.push(e);
  });

  return cache.reverse();
};

describe("LRU캐시", () => {
  test(`solution`, () => {
    expect(solution([1, 2, 3, 2, 6, 2, 3, 5, 7], 5)).toEqual([7, 5, 3, 2, 6]);
  });
});
