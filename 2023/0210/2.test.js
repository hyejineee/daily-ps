const solution = (v) => {
  const n = v.length;
  const m = v[0].length;

  const visited = Array(n)
    .fill(0)
    .map((_) => Array(m).fill(false));

  let count = 0;
  let w = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j]) continue;
      if (v[i][j] === 0) continue;

      w = Math.max(w, bfs(i, j, visited, v, n, m) + 1);
      count++;
    }
  }

  return [count, w];
};

const bfs = (i, j, visited, v, n, m) => {
  const needVisited = [[i, j]];
  visited[i][j] = true;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  let count = 0;
  while (needVisited.length > 0) {
    const [y, x] = needVisited.shift();

    if (v[y][x] === 0) continue;

    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx < 0 || nx >= m) continue;
      if (ny < 0 || ny >= n) continue;

      if (visited[ny][nx] <= 0 && v[ny][nx] !== 0) {
        visited[ny][nx] = true;
        count++;
        needVisited.push([ny, nx]);
      }
    }
  }

  return count;
};

test(`단비교육 문제 1`, () => {
  expect(
    solution([
      [1, 1, 0, 1, 1],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [1, 0, 1, 1, 1],
      [1, 0, 1, 1, 1],
    ])
  ).toEqual([4, 8]);
});
