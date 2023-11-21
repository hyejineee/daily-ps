const solution = (arr, moves) => {
  let count = 0;
  const stack = [];

  for (const i of moves) {
    for (let j = 0; j < arr.length; j++) {
      const doll = arr[j][i - 1];

      if (doll === 0) continue;

      arr[j][i - 1] = 0;

      if (stack[stack.length - 1] === doll) {
        count += 2;
        stack.pop();
      } else {
        stack.push(doll);
      }
      break;
    }
  }

  return count;
};

describe("크레인인형뽑기", () => {
  test(`solution`, () => {
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
});
