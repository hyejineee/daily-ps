const solution = (numbers) => {
  return [...Array(10).keys()].reduce(
    (acc, cur) => (!numbers.includes(cur) ? acc + cur : acc),
    0
  );
};

test(`없는 숫자 더하기`, () => {
  expect(solution([1, 2, 3, 4, 6, 7, 8, 0], [true, false, true])).toEqual(14);
  expect(solution([5, 8, 4, 0, 6, 7, 9])).toEqual(6);
});


// 전체 합을 이용한 풀이
// function solution(numbers) {
//   return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }
