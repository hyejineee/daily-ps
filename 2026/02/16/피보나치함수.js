// https://www.acmicpc.net/problem/1003
// 난이도: Bronze 3
// 태그: 다이나믹 프로그래밍
// 문제: 피보나치 함수

const solution = (testCases) => {
	const max = Math.max(...testCases);
	const dp = Array.from({ length: max + 1 }, () => []);

	dp[0] = [1, 0];
	dp[1] = [0, 1];
	dp[2] = [1, 1];

	for (let i = 3; i <= max; i++) {
		dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
	}

	const results = [];
	for (const n of testCases) {
		results.push(`${dp[n][0]} ${dp[n][1]}`);
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
