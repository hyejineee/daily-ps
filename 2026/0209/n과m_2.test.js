const { solution } = require("./n과m_2");

test("예제 1: N=3, M=1 - 1부터 3까지 중 1개를 고르는 조합", () => {
  expect(solution(3, 1)).toEqual([
    [1],
    [2],
    [3]
  ]);
});

test("예제 2: N=4, M=2 - 1부터 4까지 중 2개를 고르는 조합", () => {
  expect(solution(4, 2)).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4]
  ]);
});

// 추가 테스트 케이스를 작성하세요
