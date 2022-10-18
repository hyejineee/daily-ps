const solution = (maps) => {
  const n = maps.length;
  const m = maps[0].length;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const visited = Array(n)
    .fill(0)
    .map((e) => new Array(m).fill(null));

  const q = [];
  visited[0][0] = 1;

  q.push([0, 0]);

  while (q.length > 0) {
    if (visited[n - 1][m - 1] !== null) break;

    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i],
        ny = y + dy[i];

      if (nx < 0 || nx > n - 1 || ny < 0 || ny > m - 1) continue;
      if (maps[nx][ny] === 0) continue;
      if (visited[nx][ny] !== null) continue;

      visited[nx][ny] = visited[x][y] + 1;
      q.push([nx, ny]);
    }
  }

  return visited[n - 1][m - 1] || -1;
};

test(`게임 맵 최단거리`, () => {
  expect(
    solution([
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ])
  ).toEqual(11);

  expect(
    solution([
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ])
  ).toEqual(-1);
});
