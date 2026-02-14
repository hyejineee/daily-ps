// https://www.acmicpc.net/problem/1463
// 난이도: Silver 3
// 태그: 다이나믹 프로그래밍
// 정수 X에 사용할 수 있는 연산은 3가지. 1. X가 3으로 나누어 떨어지면, 3으로 나눈다. 2. X가 2로 나누어 떨어지면, 2로 나눈다. 3. 1을 뺀다. 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 구하는 문제
const solution = (input) => {
	const n = Number(input);

	const dp = Array.from({ length: n }, () => 0);
	dp[0] = 0;
	dp[1] = 0;
	dp[2] = 1;
	dp[3] = 1;

	for (let i = 4; i <= n; i++) {
		dp[i] =
			1 +
			Math.min(
				i % 3 === 0 ? dp[i / 3] : Infinity,
				i % 2 === 0 ? dp[i / 2] : Infinity,
				dp[i - 1],
			);
	}

	return dp[n];
};

// 백준 제출용 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const result = solution(input);
console.log(result);

module.exports = { solution };
