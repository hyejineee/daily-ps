const { solution } = require("./평범한배낭");

test("4개 물건, 최대 무게 7일 때 최대 가치 14", () => {
	// 입력
	// 4 7
	// 6 13
	// 4 8
	// 3 6
	// 5 12
	const N = 4;
	const K = 7;
	const items = [
		[6, 13], // W, V
		[4, 8],
		[3, 6],
		[5, 12],
	];

	expect(solution(N, K, items)).toBe(14);
});
