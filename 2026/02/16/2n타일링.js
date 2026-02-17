// https://www.acmicpc.net/problem/11726
// 난이도: Bronze 3
// 태그: 다이나믹 프로그래밍
// 문제: 2×n 타일링

const solution = (n) => {
	// 2×n 직사각형을 1×2, 2×1 타일로 채우는 방법의 수
	// 결과를 10007로 나눈 나머지를 반환

	const dp = [{ length: n + 1 }, () => 0];
	dp[0] = 0;
	dp[1] = 1;
	dp[2] = 2;
	dp[3] = 3;

	for (let i = 4; i <= n; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 1;
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
