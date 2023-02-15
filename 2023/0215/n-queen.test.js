let result = 0;

const solution = (n) => {
  nQueen(n, 0, []);
  return result;
};

const nQueen = (n, currentRow, currentCandidate) => {
  if (currentRow === n) {
    result++;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (isAvailable(currentCandidate, i)) {
      currentCandidate.push(i);
      nQueen(n, currentRow + 1, currentCandidate);
      currentCandidate.pop();
    }
  }
};

const isAvailable = (currentCandidate, col) => {
  const row = currentCandidate.length;

  for (let i = 0; i < row; i++) {
    if (
      currentCandidate[i] === col ||
      Math.abs(currentCandidate[i] - col) == row - i
    )
      return false;
  }

  return true;
};

test(`n-queen`, () => {
  expect(solution(4)).toEqual(2);
});
