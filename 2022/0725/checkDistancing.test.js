const solution = (places) => {
  const result = places.map((p) => check(p.map((e) => e.split(""))));
  // console.log(result);
  return result;
};

const check = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === "X" || arr[i][j] === "O") continue;
      if (!bfs(arr, [i, j])) return 0;
    }
  }
  return 1;
};

const bfs = (arr, start) => {
  const distance = arr.map((e) => e.map((_) => 0));
  const checkArr = arr.map((e) => e.map((_) => false));
  const needVisit = [];

  needVisit.push(start);

  const dx = [0, 0, -1, +1];
  const dy = [-1, +1, 0, 0];

  while (needVisit.length !== 0) {
    console.log("start : " + start);
    console.log(distance);
    // console.log(needVisit);

    const [px, py] = needVisit.pop();
    checkArr[px][py] = true;

    if (arr[px][py] === "P" && distance[px][py] !== 0 && distance[px][py] <= 2)
      return false;

    for (let i = 0; i < 4; i++) {
      const nx = px + dx[i];
      const ny = py + dy[i];

      if (nx < 0 || nx > 4) continue;
      if (ny < 0 || ny > 4) continue;

      console.log(`nx : ${nx}, ny : ${ny}`);
      if (arr[nx][ny] === "X") continue;
      if (checkArr[nx][ny]) continue;

      needVisit.push([nx, ny]);
      if (distance[nx][ny] > 0) continue;
      distance[nx][ny] = distance[px][py] + 1;
    }
  }

  return true;
};

test(`거리두기 확인하기 `, () => {
  expect(
    check(["PXPOO", "OPOOO", "POOOO", "OOOOO", "OOOOO"].map((e) => e.split("")))
  ).toEqual(0);

  expect(
    check(["OOOOO", "OOOOO", "OOOOO", "OOOOO", "OOOOO"].map((e) => e.split("")))
  ).toEqual(1);

  expect(
    check(["XXXXX", "XXXXX", "XXXXX", "XXXXX", "XXXXX"].map((e) => e.split("")))
  ).toEqual(1);

  expect(
    check(["PPPPP", "OXXOX", "PPPPP", "OOXOX", "POXXP"].map((e) => e.split("")))
  ).toEqual(0);

  expect(
    check(["PXOXP", "XOOOX", "OOOOO", "XOOOX", "PXOXP"].map((e) => e.split("")))
  ).toEqual(1);

  // // ["POOOP", "OXXOX", "OXXPX", "OPXOX", "PXXXP"] 0
  expect(
    check(["POOOP", "OXXOX", "OXXPX", "OPXOX", "PXXXP"].map((e) => e.split("")))
  ).toEqual(0);

  expect(
    check(["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"].map((e) => e.split("")))
  ).toEqual(0);

  expect(
    check(["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"].map((e) => e.split("")))
  ).toEqual(1);

  expect(
    check(["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"].map((e) => e.split("")))
  ).toEqual(1);

  expect(
    solution([
      ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
      ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
      ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
      ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
      ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
    ])
  ).toEqual([1, 0, 1, 1, 1]);
});
