const solution = (N, relation, dirname) => {
  const map = new Map();

  relation.forEach(([parent, child]) => {
    map.get(parent) !== undefined
      ? map.get(parent).push(child)
      : map.set(parent, [child]);
  });

  const result = [];
  for (let i = 1; i <= N; i++) {
    dfs(map, dirname, i, new Set([i]), result);
  }

  return Math.max(...result);
};

const dfs = (map, dirnames, index, path, result) => {
  if (map.get(index) === undefined) {
    const name = Array.from(path).reduce((acc, cur) => {
      return acc + '/' + dirnames[cur - 1];
    }, '');

    result.push(name.length - 1);
    return;
  }

  for (let i of map.get(index)) {
    if (path.has(i)) continue;

    path.add(i);
    dfs(map, dirnames, i, path, result);
    path.delete(i);
  }
};

test(`문제3`, () => {
  expect(
    solution(
      7,
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [1, 6],
        [6, 7],
      ],
      ['root', 'a', 'b', 'c', 'd', 'efghij', 'k']
    )
  ).toEqual(13);

  expect(
    solution(
      7,
      [
        [1, 2],
        [2, 5],
        [2, 6],
        [1, 3],
        [1, 4],
        [3, 7],
      ],
      ['root', 'abcd', 'cs', 'hello', 'etc', 'hello', 'solution']
    )
  ).toEqual(16);
});
