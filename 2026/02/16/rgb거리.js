// https://www.acmicpc.net/problem/1149
// 난이도: Silver 1
// 태그: 다이나믹 프로그래밍

const solution = (n, costs) => {
	// 여기에 솔루션 코드를 작성하세요
	// costs[i][0] = R, costs[i][1] = G, costs[i][2] = B
	// 인접한 집은 같은 색이 아니어야 함
	// 모든 집을 칠하는 최소 비용을 반환

	const dp = Array.from({ length: n }, () => []);

	dp[0] = [costs[0][0], costs[0][1], costs[0][2]];

	for (let i = 1; i < n; i++) {
		dp[i] = [
			Math.min(dp[i - 1][1] + costs[i][0], dp[i - 1][2] + costs[i][0]),
			Math.min(dp[i - 1][0] + costs[i][1], dp[i - 1][2] + costs[i][1]),
			Math.min(dp[i - 1][0] + costs[i][2], dp[i - 1][1] + costs[i][2]),
		];
	}

	return Math.min(...dp[n - 1]);
};

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const lines = input.split("\n");
const n = Number(lines[0]);
const costs = lines.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const result = solution(n, costs);
console.log(result);

module.exports = { solution };
