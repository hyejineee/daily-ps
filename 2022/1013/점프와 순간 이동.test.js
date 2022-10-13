const solution = (n) => {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
      continue;
    }

    n -= 1;
    count++;
  }
  return count;
};

// 이진수의 1의 개수로 풀이
function solution(n) {
  return n.toString(2).replace(/0/g, "").length;
}


test(`점프와 순간 이동`, () => {
  expect(solution(5)).toEqual(2);
  expect(solution(6)).toEqual(2);
  expect(solution(5000)).toEqual(5);
});
