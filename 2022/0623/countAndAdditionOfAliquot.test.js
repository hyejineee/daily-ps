const solution = (left, right) => {
  return [...Array(right - left + 1).keys()]
    .map((v) => v + left)
    .reduce((acc, cur) => {
      return aliquotCount(cur) % 2 === 0 ? (acc += cur) : (acc -= cur);
    }, 0);
};

const aliquotCount = (n) => {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (parseInt(n / i) !== i) count++;
    }
  }
  return count;
};

test(`약수의 개수와 덧셈`, () => {
  expect(solution(13, 17)).toEqual(43);
  expect(solution(24, 27)).toEqual(52);
});

test(`약수 구하기`, () => {
  expect(aliquotCount(14)).toEqual(4);
  expect(aliquotCount(15)).toEqual(4);
  expect(aliquotCount(16)).toEqual(5);
  expect(aliquotCount(25)).toEqual(3);
  expect(aliquotCount(24)).toEqual(8);
  expect(aliquotCount(26)).toEqual(4);
  expect(aliquotCount(27)).toEqual(4);
});

// 제곱근이 정수면, 약수의 갯수가 홀수
// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//       answer -= i;
//     } else {
//       answer += i;
//     }
//   }
//   return answer;
// }
