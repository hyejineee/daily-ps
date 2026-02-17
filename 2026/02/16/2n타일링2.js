// https://www.acmicpc.net/problem/11727
// 난이도: Silver 3
// 태그: 다이나믹 프로그래밍

const solution = (n) => {
	// n을 직접 사용
	// 솔루션 코드 작성
	const dp = Array.from({ length: n + 1 }, () => 0);

	dp[1] = 1;
	dp[2] = 3;
	dp[3] = 5;

	for (let i = 4; i <= n; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
	}

	return dp[n];
};

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const n = Number(input);
const result = solution(n);
console.log(result);

module.exports = { solution };
