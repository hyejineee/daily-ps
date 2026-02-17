// https://www.acmicpc.net/problem/9461
// 난이도: Silver 3
// 태그: 수학, 다이나믹 프로그래밍

const solution = (testCases) => {
	const results = [];

	const n = Math.max(...testCases);
	const dp = Array.from({ length: n + 1 }, () => 0);

	dp[1] = 1;
	dp[2] = 1;
	dp[3] = 1;
	dp[4] = 2;
	dp[5] = 2;
	dp[6] = 3;
	dp[7] = 4;
	dp[8] = 5;
	dp[9] = 7;
	dp[10] = 9;

	for (let i = 11; i <= n; i++) {
		dp[i] = dp[i - 2] + dp[i - 3];
	}

	for (const n of testCases) {
		results.push(dp[n]);
	}

	return results.join("\n");
};

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const lines = input.split("\n");
const t = Number(lines[0]);
const testCases = lines.slice(1, t + 1).map(Number);
const result = solution(testCases);
console.log(result);

module.exports = { solution };
