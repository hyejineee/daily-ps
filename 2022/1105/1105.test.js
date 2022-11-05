const solution1 = (str) => {
  for (let i = 97; i < 123; i++) {
    const a = String.fromCharCode(i);
    const reg = new RegExp(`${a}{2,}`, "g");
    str = str.replace(reg, `${a}*`);
  }
  return str;
};

const solution2 = (n, student, point) => {
  const half = parseInt(n / 2);
  let dominant = Array.from({ length: half }, (_, i) => i + 1);

  const record = {};
  for (let i = 1; i <= n; i++) {
    record[i] = 0;
  }

  let count = 0;
  student.forEach((s, i) => {
    record[s] += point[i];

    const arr = Object.entries(record).sort((a, b) => b[1] - a[1]);
    const d = arr.slice(0, half).map((e) => Number(e[0]));

    if (!d.every((e) => dominant.includes(e))) {
      dominant = d;
      count++;
    }
  });

  return count;
};

const solution3 = (worldmap) => {
  const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
  const dy = [0, 0, -1, 1, -1, 1, -1, 1];
  const m = worldmap.length;
  const n = worldmap[0].length;

  const record = Array(m)
    .fill(0)
    .map((_) => Array(n).fill(0));

  const needVisit = [[0, 0, "r", 90]];
  record[0][0] = 1;

  while (needVisit.length > 0) {
    const [x, y, dir, deg] = needVisit.shift();

    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 맵을 벗어나는 경우
      if (nx < 0 || nx > m - 1 || ny < 0 || ny > n - 1) continue;

      // 가려는 곳이 위험 지역인 경우
      if (worldmap[nx][ny] === "X") continue;
      if (isDanger(dir, deg, worldmap, [x, y])) continue;

      const nDir = [5, 3, 7].includes(i)
        ? "r"
        : [4, 2, 6].includes(i)
        ? "l"
        : i === 0
        ? "u"
        : "d";

      const nDeg = [6, 7].includes(i) ? 135 : [4, 5].includes(i) ? 45 : 90;

      if (record[nx][ny] === 0) {
        needVisit.push([nx, ny, nDir, nDeg]);
        record[nx][ny] = record[x][y] + 1;
      }
    }
  }

  return record[n - 1][m - 1] - 1;
};

const isDanger = (dir, deg, map, current) => {
  if (deg === 90) return false;

  const m = map.length;
  const n = map[0].length;

  const dx = deg === 45 ? [-1, 0] : [1, 0];
  const dy = dir === "r" ? [0, 1] : [0, -1];

  for (let i = 0; i < 2; i++) {
    const nx = current[0] + dx[i];
    const ny = current[1] + dy[i];

    if (nx < 0 || nx > m - 1 || ny < 0 || ny > n - 1) continue;

    if (map[nx][ny] === "X") return true;
  }

  return false;
};

test(`두 큐 합 같게 만들기`, () => {
  expect(solution1("aabbbc")).toEqual("a*b*c");
  expect(
    solution2(
      6,
      [6, 1, 4, 2, 5, 1, 3, 3, 1, 6, 5],
      [3, 2, 5, 3, 4, 2, 4, 2, 3, 2, 2]
    )
  ).toEqual(7);

  expect(solution3(["..XXX", "..XXX", "...XX", "X....", "XXX.."])).toEqual(5);
});
