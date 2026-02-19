const { solution } = require("./부분합");

test("예제 1", () => {
	expect(solution(10, 15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8])).toBe(2);
});

test("예제 2", () => {
	expect(solution(12, 25, [1, 3, 1, 1, 4, 4, 4, 4, 2, 2, 2, 2])).toBe(9);
});

test("예제 3", () => {
	expect(solution(10, 10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 10])).toBe(1);
});

test("예제 4", () => {
	expect(solution(10, 20, [5, 5, 5, 5, 1, 4, 4, 4, 4, 4])).toBe(4);
});

test("예제 5", () => {
	expect(solution(10, 8, [4, 1, 1, 1, 1, 1, 2, 2, 2, 2])).toBe(4);
});

test("예제 6 - 불가능한 경우", () => {
	expect(solution(10, 11, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
});

test("sum === s 정확히 일치", () => {
	expect(solution(2, 5, [5, 5])).toBe(1);
});

test("단일 원소가 답인 경우", () => {
	expect(solution(3, 10, [10, 2, 3])).toBe(1);
});
