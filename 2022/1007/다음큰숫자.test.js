const solution = (n) => {
  const numberOf1 = n
    .toString(2)
    .split("")
    .filter((e) => e === "1").length;

  for (let i = n + 1; i <= 1000000; i++) {
    const count = i
      .toString(2)
      .split("")
      .filter((e) => e === "1").length;

    if (numberOf1 === count) {
      return i;
    }
  }
};

// 정규식, 재귀를 사용한 풀이
// function solution(n, a = n + 1) {
//   return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
//     ? a
//     : solution(n, a + 1);
// }

test(`다음 큰 숫자`, () => {
  expect(solution(78)).toEqual(83);
  expect(solution(15)).toEqual(23);
});
