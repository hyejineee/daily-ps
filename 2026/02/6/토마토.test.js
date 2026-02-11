const { solution } = require("./토마토");

test("6 4 그리드에서 (3,3)에 토마토 1개일 때 결과는 8", () => {
	const M = 6;
	const N = 4;
	const grid = [
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1],
	];

	expect(solution(M, N, grid)).toBe(8);
});

test("6 4 그리드에서 -1로 막혀 모든 토마토가 익을 수 없을 때 결과는 -1", () => {
	const M = 6;
	const N = 4;
	const grid = [
		[0, -1, 0, 0, 0, 0],
		[-1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1],
	];

	expect(solution(M, N, grid)).toBe(-1);
});
