// https://www.acmicpc.net/problem/9095
// 난이도: Bronze 3
// 태그: 다이나믹 프로그래밍
// 문제: 1, 2, 3 더하기

const solution = (testCases) => {
	const n = Math.max(...testCases);
	const dp = [{ length: n + 1 }, () => 0];

	dp[0] = 0;
	dp[1] = 1;
	dp[2] = 2;
	dp[3] = 4;
	dp[4] = 7;

	for (let i = 5; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
	}

	const results = [];
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
