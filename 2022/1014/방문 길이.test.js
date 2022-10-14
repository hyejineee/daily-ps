const solution = (dirs) => {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const routes = [{ cur: [0, 0], prev: null }];
  let prev = [0, 0];

  for (let e of dirs) {
    const [px, py] = prev;
    const di = e === "U" ? 0 : e === "D" ? 1 : e === "R" ? 2 : 3;
    const [cx, cy] = [px + dx[di], py + dy[di]];

    if (Math.abs(cx) > 5 || Math.abs(cy) > 5) continue;

    prev = [cx, cy];

    if (
      routes.filter(
        (e) =>
          (JSON.stringify(e.cur) === JSON.stringify([cx, cy]) &&
            JSON.stringify(e.prev) === JSON.stringify([px, py])) ||
          (JSON.stringify(e.cur) === JSON.stringify([px, py]) &&
            JSON.stringify(e.prev) === JSON.stringify([cx, cy]))
      ).length !== 0
    )
      continue;

    routes.push({ cur: [cx, cy], prev: [px, py] });
  }

  return routes.length - 1;
};

test(`방문 길이`, () => {
  expect(solution("ULURRDLLU")).toEqual(7);
  expect(solution("LULLLLLLU")).toEqual(7);
});
