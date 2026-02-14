const { solution } = require("./1로 만들기");

test("예제 1", () => {
	expect(solution(2)).toBe(1);
});

test("예제 2", () => {
	expect(solution(10)).toBe(3);
});
