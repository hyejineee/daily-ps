const { solution } = require("./n과m_1");

test("N=3, M=1: 1부터 3까지 중 1개를 고르는 순열", () => {
	expect(solution(3, 1)).toEqual([
		[1],
		[2],
		[3]
	]);
});

test("N=4, M=2: 1부터 4까지 중 2개를 고르는 순열", () => {
	expect(solution(4, 2)).toEqual([
		[1, 2],
		[1, 3],
		[1, 4],
		[2, 1],
		[2, 3],
		[2, 4],
		[3, 1],
		[3, 2],
		[3, 4],
		[4, 1],
		[4, 2],
		[4, 3]
	]);
});

test("N=4, M=4: 1부터 4까지 모두 고르는 순열 (4!=24개)", () => {
	const result = solution(4, 4);
	expect(result.length).toBe(24);
	expect(result[0]).toEqual([1, 2, 3, 4]);
	expect(result[result.length - 1]).toEqual([4, 3, 2, 1]);
});
