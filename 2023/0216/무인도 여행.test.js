const solution = (maps) => {
  const visited = Array(maps.length)
    .fill(0)
    .map((_, i) =>
      Array(maps[0].length)
        .fill(0)
        .map((_, j) => maps[i][j])
    );

  const result = [];

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (visited[i][j] === 'X') continue;

      visited[i][j] = 'X';
      result.push(bfs(maps, i, j, visited));
    }
  }

  return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
};

const bfs = (maps, si, sj, visited) => {
  const needVisit = [[si, sj]];

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  let max = Number(maps[si][sj]);

  while (needVisit.length > 0) {
    const [i, j] = needVisit.pop();

    for (let k = 0; k < 4; k++) {
      const ni = i + dx[k];
      const nj = j + dy[k];

      if (ni < 0 || ni > maps.length - 1) continue;
      if (nj < 0 || nj > maps[0].length - 1) continue;
      if (visited[ni][nj] === 'X') continue;

      needVisit.push([ni, nj]);
      visited[ni][nj] = 'X';
      max += Number(maps[ni][nj]);
    }
  }

  console.log(visited);
  return max;
};

test(`무인도 여행`, () => {
  expect(solution(['X591X', 'X1X5X', 'X231X', '1XXX1'])).toEqual([1, 1, 27]);
  expect(solution(['XXX', 'XXX', 'XXX'])).toEqual([-1]);
});
