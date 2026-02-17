const { solution } = require("./배열합치기");

test("예제 1", () => {
	expect(solution(2, 2, [3, 5], [2, 9])).toBe("2 3 5 9");
});

test("예제 2", () => {
	expect(solution(2, 1, [4, 7], [1])).toBe("1 4 7");
});

test("예제 3", () => {
	expect(solution(4, 3, [2, 3, 5, 9], [1, 4, 7])).toBe("1 2 3 4 5 7 9");
});

// 추가 테스트 케이스를 작성하세요
