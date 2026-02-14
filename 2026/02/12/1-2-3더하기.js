// https://www.acmicpc.net/problem/9095
// 난이도: Silver 3
// 태그: 다이나믹 프로그래밍
// 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 문제

const solution = (n) => {
	const dp = Array.from({ length: n }, () => 0);

	dp[0] = 1; // n=1
	dp[1] = 2; // n=2
	dp[2] = 4; // n=3

	for (let i = 3; i < n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
	}

	return dp[n - 1];
};

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
	const n = Number(input[i]);
	console.log(solution(n));
}

module.exports = { solution };
