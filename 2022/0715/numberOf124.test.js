const solution = (n) => {
  return get124(n, "").split("").reverse().join("");
};

const get124 = (q, result) => {
  if (q === 0) return result;

  return get124(
    q % 3 === 0 ? Math.floor(q / 3) - 1 : Math.floor(q / 3),
    result + [4, 1, 2][q % 3]
  );
};

test(`124 나라의 숫자`, () => {
  expect(solution(13)).toEqual("111");
  expect(solution(12)).toEqual("44");
  expect(solution(11)).toEqual("42");
  expect(solution(10)).toEqual("41");
});

// function change124(n) {
//   return n === 0
//     ? ""
//     : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
// }
