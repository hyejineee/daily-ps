const { solution } = require("./치킨배달");

test("예제 1: 5x5 도시, M=3, 치킨 거리 5", () => {
	const n = 5;
	const m = 3;
	const map = [
		[0, 0, 1, 0, 0],
		[0, 0, 2, 0, 1],
		[0, 1, 2, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 2],
	];
	expect(solution(n, m, map)).toBe(5);
});

test("예제 2: 5x5 도시, M=2, 치킨 거리 10", () => {
	const n = 5;
	const m = 2;
	const map = [
		[0, 2, 0, 1, 0],
		[1, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[2, 0, 0, 1, 1],
		[2, 2, 0, 1, 2],
	];
	expect(solution(n, m, map)).toBe(10);
});

test("예제 3: 5x5 도시, M=1, 치킨 거리 11", () => {
	const n = 5;
	const m = 1;
	const map = [
		[1, 2, 0, 0, 0],
		[1, 2, 0, 0, 0],
		[1, 2, 0, 0, 0],
		[1, 2, 0, 0, 0],
		[1, 2, 0, 0, 0],
	];
	expect(solution(n, m, map)).toBe(11);
});

test("예제 4: 5x5 도시, M=1, 치킨 거리 32", () => {
	const n = 5;
	const m = 1;
	const map = [
		[1, 2, 0, 2, 1],
		[1, 2, 0, 2, 1],
		[1, 2, 0, 2, 1],
		[1, 2, 0, 2, 1],
		[1, 2, 0, 2, 1],
	];
	expect(solution(n, m, map)).toBe(32);
});
