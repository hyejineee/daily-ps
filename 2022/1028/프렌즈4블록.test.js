const solution = (m, n, board) => {
  const b = board.map((e) => e.split(""));
  b.forEach((e) => {
    e.unshift("#");
    e.push("#");
  });

  b.unshift(Array(n + 2).fill("#"));
  b.push(Array(n + 2).fill("#"));

  let count = 0;

  while (!isFinish(b, m, n)) {
    const deleted = [];

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (checkBlock(i, j, b)) {
          deleted.push([i, j]);
          count++;
        }
      }
    }

    deleted.forEach(([i, j]) => {
      b[i][j] = "#";
    });

    moveDown();
  }

  return count;
};

const moveDown = (b, m, n) => {
  for (let j = 1; j <= n; j++) {
    for (let i = m; i >= 1; i--) {
      if (b[i][j] !== "#") continue;

      for (let k = i - 1; k >= 1; k--) {
        if (b[k][j] !== "#") {
          b[i][j] = b[k][j];
          b[k][j] = "#";
          break;
        }
      }
    }
  }
};

const isFinish = (board, m, n) => {
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (board[i][j] === "#") continue;
      if (checkBlock(i, j, board)) return false;
    }
  }

  return true;
};

const checkBlock = (i, j, board) => {
  if (board[i][j] === "#") return false;
  //1번 방향
  if (
    [board[i][j], board[i][j - 1], board[i - 1][j - 1], board[i - 1][j]].every(
      (e) => e === board[i][j]
    )
  )
    return true;

  //2번 방향
  if (
    [board[i][j], board[i][j + 1], board[i - 1][j + 1], board[i - 1][j]].every(
      (e) => e === board[i][j]
    )
  )
    return true;

  //3번 방향
  if (
    [board[i][j], board[i][j - 1], board[i + 1][j - 1], board[i + 1][j]].every(
      (e) => e === board[i][j]
    )
  )
    return true;

  //4번 방향
  if (
    [board[i][j], board[i][j + 1], board[i + 1][j + 1], board[i + 1][j]].every(
      (e) => e === board[i][j]
    )
  )
    return true;

  return false;
};

test(`프렌즈4블록`, () => {
  expect(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])).toEqual(14);
  expect(
    solution(6, 7, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
  ).toEqual(15);
});
