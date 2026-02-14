const { solution } = require("./1-2-3더하기");

test("예제 1: n=4", () => {
	expect(solution(4)).toBe(7);
});

test("예제 2: n=7", () => {
	expect(solution(7)).toBe(44);
});

test("예제 3: n=10", () => {
	expect(solution(10)).toBe(274);
});

test("기본 케이스: n=1", () => {
	expect(solution(1)).toBe(1);
});

test("기본 케이스: n=2", () => {
	expect(solution(2)).toBe(2);
});

test("기본 케이스: n=3", () => {
	expect(solution(3)).toBe(4);
});
