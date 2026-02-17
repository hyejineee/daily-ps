const { solution } = require("./rgb거리");

test("예제 1", () => {
	const n = 3;
	const costs = [
		[26, 40, 83],
		[49, 60, 57],
		[13, 89, 99],
	];
	expect(solution(n, costs)).toBe(96);
});

test("예제 2", () => {
	const n = 3;
	const costs = [
		[1, 100, 100],
		[100, 100, 100],
		[1, 100, 100],
	];
	expect(solution(n, costs)).toBe(102);
});
