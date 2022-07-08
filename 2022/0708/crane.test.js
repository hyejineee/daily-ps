const solution = (board, moves) => {
  // 보드 만들기
  const newBoard = Array.from(Array(board.length), () =>
    Array(board.length).fill(0)
  );

  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board.length; j++) {
      newBoard[j][board.length - 1 - i] = board[i][j];
    }
  }

  let count = 0;
  const stack = [];
  for (let e of moves) {
    if (newBoard[e - 1].length <= 0) continue;

    let pop = 0;
    while (newBoard[e - 1].length > 0) {
      pop = newBoard[e - 1].pop();
      if (pop > 0) break;
    }

    if (stack.length > 0 && stack[stack.length - 1] == pop) {
      stack.pop();
      count += 2;
    } else {
      stack.push(pop);
    }
  }

  return count;
};

test(`크레인 인형 뽑기`, () => {
  expect(
    solution(
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
      ],
      [1, 5, 3, 5, 1, 2, 1, 4]
    )
  ).toEqual(4);
});
