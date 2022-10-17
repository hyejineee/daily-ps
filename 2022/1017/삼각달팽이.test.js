const solution = (n) => {
  const sum = (n * (n + 1)) / 2;
  const arr = new Array(n + 1).fill(0).map((e) => new Array(n + 1).fill(0));

  let count = 1;
  let flag = true;
  let length = n;

  while (flag) {
    const [sx, sy, sz] = [
      count + count - 1,
      count,
      n - (count + count - 1) + 1,
    ];

    //왼쪽면 채우기
    for (let i = 0; i < length; i++) {
      arr[sx + i][count] = arr[sx + i - 1][count] + 1;
      if (arr[sx + i][count] === sum) {
        flag = false;
        break;
      }
    }

    //아래면 채우기
    for (let i = 0; i < length; i++) {
      if (i === 0) continue;
      arr[n - (count - 1)][sy + i] = arr[n - (count - 1)][sy + i - 1] + 1;
      if (arr[n - (count - 1)][sy + i] === sum) {
        flag = false;
        break;
      }
    }

    //오른쪽면 채우기
    for (let i = 0; i < length - 1; i++) {
      if (i === 0) continue;

      arr[n - (count - 1) - i][sz - i] =
        arr[n - (count - 1) - i + 1][sz - i + 1] + 1;

      if (arr[n - (count - 1) - i][sz - i] === sum) {
        flag = false;
        break;
      }
    }

    length -= 3;
    count++;
  }

  return arr.flat().filter((e) => e);
};

test(`삼각달팽이`, () => {
  expect(solution(4)).toEqual([1, 2, 9, 3, 10, 8, 4, 5, 6, 7]);
  expect(solution(1)).toEqual([1]);
  expect(solution(2)).toEqual([1, 2, 3]);
  expect(solution(3)).toEqual([1, 2, 6, 3, 4, 5]);
  expect(solution(5)).toEqual([
    1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9,
  ]);
  expect(solution(6)).toEqual([
    1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11,
  ]);
  expect(solution(7)).toEqual([
    1, 2, 18, 3, 19, 17, 4, 20, 27, 16, 5, 21, 28, 26, 15, 6, 22, 23, 24, 25,
    14, 7, 8, 9, 10, 11, 12, 13,
  ]);

  expect(solution(1000)).toContain(500500);
});
